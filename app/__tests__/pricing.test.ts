import { calculateEndpointQuote, calculateSubsidy, clampSubsidy, formatThaiBaht, k9Packages } from '../pricing';

describe('pricing data', () => {
  it('contains the seven product segments from the handoff', () => {
    expect(k9Packages.map((item) => item.name)).toEqual([
      'K9 Lite',
      'K9 Home',
      'K9 Mobile',
      'K9 Office',
      'K9 Pro',
      'K9 OT',
      'K9 Enterprise',
    ]);
  });

  it('formats Thai baht with thousands separators', () => {
    expect(formatThaiBaht(6900)).toBe('฿6,900');
  });
});

describe('calculateSubsidy', () => {
  it('applies subsidy without going below zero', () => {
    expect(calculateSubsidy(299, 500)).toMatchObject({
      appliedSubsidy: 299,
      monthlyAfterSubsidy: 0,
      annualCustomerCost: 0,
      annualSavings: 3588,
    });
  });

  it('caps requested subsidy at 1000 per month', () => {
    expect(calculateSubsidy(6900, 1600)).toMatchObject({
      appliedSubsidy: 1000,
      monthlyAfterSubsidy: 5900,
      annualCustomerCost: 70800,
      annualSavings: 12000,
    });
  });

  it('normalizes invalid and negative subsidy values', () => {
    expect(clampSubsidy(Number.NaN)).toBe(0);
    expect(clampSubsidy(-100)).toBe(0);
  });
});

describe('calculateEndpointQuote', () => {
  it('adds endpoint overage before applying subsidy', () => {
    const office = k9Packages.find((item) => item.id === 'office');
    expect(office).toBeDefined();

    const quote = calculateEndpointQuote(office!, 14, 1, 300);

    expect(quote).toMatchObject({
      endpointOverage: 4,
      endpointOverageCost: 196,
      siteOverage: 0,
      monthlyBeforeSubsidy: 695,
      appliedSubsidy: 300,
      monthlyAfterSubsidy: 395,
    });
  });

  it('adds site overage for multi-branch office customers', () => {
    const pro = k9Packages.find((item) => item.id === 'pro');
    expect(pro).toBeDefined();

    const quote = calculateEndpointQuote(pro!, 30, 5, 500);

    expect(quote).toMatchObject({
      endpointOverage: 0,
      siteOverage: 2,
      siteOverageCost: 780,
      monthlyBeforeSubsidy: 2270,
      monthlyAfterSubsidy: 1770,
    });
  });
});
