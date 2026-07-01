'use client';

import { useMemo, useState } from 'react';
import { calculateEndpointQuote, formatCoverage, formatThaiBaht, k9Packages, subsidyPresets } from './pricing';

export default function SubsidyCalculator() {
  const defaultPackage = k9Packages.find((item) => item.id === 'office') ?? k9Packages[0];
  const [selectedPackageId, setSelectedPackageId] = useState(defaultPackage.id);
  const [endpointCount, setEndpointCount] = useState(defaultPackage.includedEndpoints);
  const [siteCount, setSiteCount] = useState(defaultPackage.includedSites);
  const [requestedSubsidy, setRequestedSubsidy] = useState(300);

  const selectedPackage = useMemo(
    () => k9Packages.find((item) => item.id === selectedPackageId) ?? k9Packages[0],
    [selectedPackageId],
  );
  const result = calculateEndpointQuote(selectedPackage, endpointCount, siteCount, requestedSubsidy);

  function selectPackage(packageId: string) {
    const nextPackage = k9Packages.find((item) => item.id === packageId) ?? k9Packages[0];
    setSelectedPackageId(nextPackage.id);
    setEndpointCount(nextPackage.includedEndpoints);
    setSiteCount(nextPackage.includedSites);
  }

  return (
    <div className="subsidy-calculator" aria-label="Endpoint price strategy calculator">
      <div className="subsidy-copy">
        <p className="eyebrow">Endpoint strategy calculator</p>
        <h3>จำลองราคาแบบ base package + endpoint/site overage</h3>
        <p>
          เลือก segment ที่ใกล้เคียงลูกค้า ปรับจำนวน endpoint และจำนวนไซต์ แล้วดูราคาก่อน/หลัง subsidy
          เพื่อใช้คุยกับ home user, mobile team, office, SME หลายสาขา หรือโรงงานได้จากโมเดลเดียวกัน
        </p>
      </div>

      <div className="subsidy-tool">
        <div className="subsidy-picker" aria-label="Select Bangkaew K9 package">
          <span className="calculator-label">Endpoint segment</span>
          <div className="subsidy-package-grid">
            {k9Packages.map((item) => (
              <button
                aria-pressed={selectedPackage.id === item.id}
                className={selectedPackage.id === item.id ? 'subsidy-package is-selected' : 'subsidy-package'}
                key={item.id}
                onClick={() => selectPackage(item.id)}
                type="button"
              >
                <strong>{item.name}</strong>
                <span>
                  {item.endpointSegment} · {formatThaiBaht(item.monthlyPrice)}/{item.priceUnit}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="subsidy-controls">
          <label className="calculator-label" htmlFor="endpoint-range">
            Endpoints protected
          </label>
          <div className="range-row">
            <input
              id="endpoint-range"
              max={200}
              min={1}
              onChange={(event) => setEndpointCount(Number(event.target.value))}
              step={1}
              type="range"
              value={endpointCount}
            />
            <strong>{endpointCount}</strong>
          </div>
          <label className="calculator-label calculator-label-spaced" htmlFor="site-range">
            Sites / branches
          </label>
          <div className="range-row">
            <input
              id="site-range"
              max={10}
              min={selectedPackage.includedSites > 0 ? 1 : 0}
              onChange={(event) => setSiteCount(Number(event.target.value))}
              step={1}
              type="range"
              value={siteCount}
            />
            <strong>{siteCount}</strong>
          </div>
          <label className="calculator-label" htmlFor="subsidy-range">
            Gov subsidy / month
          </label>
          <div className="range-row">
            <input
              id="subsidy-range"
              max={1000}
              min={0}
              onChange={(event) => setRequestedSubsidy(Number(event.target.value))}
              step={50}
              type="range"
              value={requestedSubsidy}
            />
            <strong>{formatThaiBaht(requestedSubsidy)}</strong>
          </div>
          <div className="subsidy-presets" aria-label="Subsidy presets">
            {subsidyPresets.map((amount) => (
              <button
                aria-pressed={requestedSubsidy === amount}
                className={requestedSubsidy === amount ? 'subsidy-preset is-selected' : 'subsidy-preset'}
                key={amount}
                onClick={() => setRequestedSubsidy(amount)}
                type="button"
              >
                {formatThaiBaht(amount)}
              </button>
            ))}
          </div>
        </div>

        <aside className="subsidy-result" aria-live="polite">
          <span>Estimated customer price</span>
          <strong>{formatThaiBaht(result.monthlyAfterSubsidy)}/mo</strong>
          <p>
            {selectedPackage.name} ราคาเต็ม {formatThaiBaht(result.monthlyBeforeSubsidy)}/mo
            {' '}หลัง subsidy {formatThaiBaht(result.appliedSubsidy)}/mo
          </p>
          <dl>
            <div>
              <dt>Base coverage</dt>
              <dd>{formatCoverage(selectedPackage)}</dd>
            </div>
            <div>
              <dt>Endpoint overage</dt>
              <dd>
                {result.endpointOverage} × {formatThaiBaht(selectedPackage.additionalEndpointPrice)}
              </dd>
            </div>
            <div>
              <dt>Site overage</dt>
              <dd>
                {result.siteOverage} × {formatThaiBaht(selectedPackage.additionalSitePrice)}
              </dd>
            </div>
            <div>
              <dt>Annual customer cost</dt>
              <dd>{formatThaiBaht(result.annualCustomerCost)}</dd>
            </div>
            <div>
              <dt>Annual subsidy value</dt>
              <dd>{formatThaiBaht(result.annualSavings)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
