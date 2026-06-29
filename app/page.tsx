import Image from 'next/image';
import RiskAssessment from './RiskAssessment';
import ThreatRadar from './ThreatRadar';

const navItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'Platform', href: '#platform' },
  { label: 'Edge Pro', href: '#edge-device' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Compare', href: '#compare' },
  { label: 'Ready Now', href: '#ready-now' },
  { label: 'Why K9', href: '#why-k9' },
];

const heroPills = [
  'Edge visibility',
  'Thai AI explanation',
  'Human approval',
];

const cyberStats = [
  { number: '฿1.1 แสนล้าน', label: 'ความเสียหายจาก cybercrime ในไทยปี 2024', source: 'DE 2024' },
  { number: '3.1 ล้าน', label: 'SME ไทยที่ยังไม่มี cyber protection', source: 'OSMEP' },
  { number: '71%', label: 'ของการโจมตีทั่วโลกพุ่งเป้า SMBs', source: 'Verizon DBIR' },
  { number: '277 วัน', label: 'เวลาเฉลี่ยกว่าจะตรวจพบ breach', source: 'IBM 2024' },
];

const impactCards = [
  {
    label: 'External threats',
    title: 'ภัยข้างนอกเร็วขึ้นและหลอกเก่งขึ้น',
    body: 'Phishing, ransomware, malicious domain และ AI-generated social engineering ทำให้ SME กลายเป็นเป้าหมายง่ายขึ้นทุกวัน',
  },
  {
    label: 'Internal limits',
    title: 'ทีมข้างในเล็กเกินกว่าจะเฝ้าระบบตลอดเวลา',
    body: 'เจ้าของและทีม IT ต้องดูแลยอดขาย ระบบบัญชี หน้าร้าน และ support พร้อมกัน จึงไม่มีเวลาคัดกรอง alert หรืออ่าน log ยาว ๆ',
  },
  {
    label: 'Business impact',
    title: 'ความเสี่ยงไซเบอร์กระทบรายได้โดยตรง',
    body: 'Downtime, data leakage และการตอบสนองผิดจังหวะทำให้เสียยอดขาย เสียความเชื่อมั่น และอาจลามไปถึงคู่ค้าหรือ supply chain',
  },
];

const platformCards = [
  {
    label: 'Detect early',
    title: 'เห็นภัยก่อนลุกลาม',
    body: 'รวมสัญญาณจาก Edge Pro, DNS, URL และพฤติกรรมเครือข่ายจริง แล้วจัดลำดับเหตุที่กระทบธุรกิจก่อน',
  },
  {
    label: 'Explain clearly',
    title: 'อธิบายเป็นภาษาไทยที่ตัดสินใจได้',
    body: 'AI สรุปว่าเกิดอะไร เสี่ยงแค่ไหน กระทบระบบไหน และควรสนใจเพราะอะไร เพื่อให้เจ้าของกับทีม IT เข้าใจตรงกัน',
  },
  {
    label: 'Recommend actions',
    title: 'แนะนำทางเลือกที่คำนึงถึง downtime',
    body: 'เสนอ next step แบบเป็นระดับ ตั้งแต่เฝ้าดู แจ้งเตือน จำกัดความเสี่ยง ไปจนถึง action ที่ต้องขออนุมัติ',
  },
  {
    label: 'Human approval',
    title: 'AI ช่วยคิด แต่คนยังคุมระบบสำคัญ',
    body: 'Critical response ต้องผ่านเจ้าของหรือทีม IT ก่อน ลดความเสี่ยงจาก automation ที่อาจกระทบงานขาย บัญชี หรือบริการหลัก',
  },
];

const edgeFeatures = [
  ['Network visibility', 'มองเห็นทราฟฟิกและเหตุการณ์หน้าไซต์จริง เหมาะกับร้านค้า โรงงาน ออฟฟิศ และหลายสาขา'],
  ['DNS & URL Guard', 'ช่วยลดโอกาสพนักงานหลุดไปยัง phishing link, malicious domain หรือปลายทางเสี่ยง'],
  ['AI signal pipeline', 'ส่งเฉพาะสัญญาณสำคัญขึ้น Platform เพื่อวิเคราะห์ สรุป และแนะนำเป็นภาษาไทย'],
  ['LINE / Email alert', 'แจ้งเตือนเหตุเร่งด่วนให้เจ้าของและทีม IT โดยไม่ต้องเฝ้า dashboard ทั้งวัน'],
  ['Remote management', 'ตรวจสุขภาพ อัปเดต policy และดูแลอุปกรณ์จากระยะไกล ลดรอบ onsite support'],
  ['Fail-safe rollout', 'เริ่มจาก monitor mode ก่อน แล้วค่อยเพิ่ม response ตามความพร้อมของแต่ละธุรกิจ'],
];

const workflow = [
  ['01', 'Monitor', 'Edge Pro เฝ้าระวังทราฟฟิก DNS URL และสัญญาณผิดปกติจากเครือข่ายจริง'],
  ['02', 'Detect', 'Platform แยก noise ออกจากเหตุที่เสี่ยงต่อรายได้ ข้อมูลลูกค้า หรือบริการหลัก'],
  ['03', 'Explain', 'AI สรุป incident เป็นภาษาไทย พร้อมบริบท ผลกระทบ และหลักฐานสำคัญ'],
  ['04', 'Recommend', 'ระบบเสนอ action ที่เหมาะกับระดับความเสี่ยงและผลกระทบต่อการทำงาน'],
  ['05', 'Approve', 'เจ้าของหรือทีม IT อนุมัติก่อนตอบสนองกับระบบสำคัญ'],
  ['06', 'Respond', 'ดำเนินการ แจ้งผล และเก็บ audit log เพื่อทบทวนย้อนหลัง'],
];

const smeCards = [
  {
    label: 'Owner',
    title: 'เจ้าของธุรกิจต้องเห็นความเสี่ยงแบบไม่ต้องแปลศัพท์เทคนิค',
    body: 'รู้ว่าเหตุไหนควรหยุด เหตุไหนควรเฝ้าดู และ action ไหนกระทบยอดขายหรือระบบหลังบ้าน',
  },
  {
    label: 'Small IT team',
    title: 'ทีม IT เล็กต้องลดงาน manual และโฟกัสเรื่องสำคัญ',
    body: 'ลดเวลาคัดกรอง alert ซ้ำ ๆ ด้วยการจัดลำดับเหตุการณ์และสรุป next step ที่ทำต่อได้ทันที',
  },
  {
    label: 'Operations',
    title: 'ธุรกิจต้องลดความเสี่ยงโดยไม่หยุดระบบเกินจำเป็น',
    body: 'ใช้แนวทางตอบสนองแบบเป็นขั้น เพื่อรับมือเร็วขึ้นโดยยังคุม downtime และความต่อเนื่องของงานหน้าร้าน',
  },
];

const packages = [
  ['Free', 'Cyber Risk Assessment', 'ประเมินความเสี่ยงเบื้องต้น รับ awareness report และคำแนะนำจุดเริ่มต้น'],
  ['Standard', 'Edge Visibility', 'เหมาะกับร้านค้าและออฟฟิศที่ต้องการเห็น DNS/URL risk และ alert สำคัญ'],
  ['Professional', 'AI Response Workflow', 'เหมาะกับ SME หลายระบบหรือหลายสาขาที่ต้องการ recommendation, approval และ audit log'],
  ['Enterprise', 'Custom Policy & SLA', 'เหมาะกับองค์กรที่ต้องการ integration, compliance support และ policy เฉพาะ'],
];

const whyItems = [
  {
    label: 'Productivity',
    title: 'ให้ทีมเล็กทำงานเหมือนมี SOC เบื้องต้น',
    body: 'รวมเหตุสำคัญ จัดลำดับความเสี่ยง และสรุปเป็นภาษาไทย ลดเวลาคุยข้ามทีมและลดงานไล่ log เอง',
  },
  {
    label: 'Lower risk',
    title: 'ลดโอกาสเหตุเล็กกลายเป็น downtime ใหญ่',
    body: 'ช่วยเห็น phishing, ransomware signal, DNS risk และ traffic anomaly ก่อนกระทบวงกว้าง',
  },
  {
    label: 'Thai-first',
    title: 'สื่อสารความเสี่ยงให้คนตัดสินใจเข้าใจจริง',
    body: 'ออกแบบจากบริบท SME ไทย ทั้งภาษา ช่องทางแจ้งเตือน งบประมาณ และทีมที่มีคนจำกัด',
  },
  {
    label: 'Pilot-ready',
    title: 'เริ่มจากไซต์จริง แล้วขยายเป็น package ได้',
    body: 'เริ่มด้วย assessment และ Edge visibility ก่อนค่อยเพิ่ม policy, response workflow และ SLA ตามระดับความเสี่ยง',
  },
];

const footerLinks = [
  ['Problem', '#problem'],
  ['Platform', '#platform'],
  ['Edge Pro', '#edge-device'],
  ['How it works', '#how-it-works'],
  ['Compare', '#compare'],
  ['Ready Now', '#ready-now'],
  ['Why K9', '#why-k9'],
  ['Demo', '#demo'],
];

const comparisonRows = [
  { feature: 'เฝ้าระวังต่อเนื่อง 24/7', antivirus: false, mssp: true, k9: true },
  { feature: 'อธิบายเหตุเป็นภาษาไทย', antivirus: false, mssp: false, k9: true },
  { feature: 'Human-in-the-Loop approval', antivirus: false, mssp: false, k9: true },
  { feature: 'Edge hardware หน้าไซต์', antivirus: false, mssp: false, k9: true },
  { feature: 'LINE / Email alert', antivirus: false, mssp: 'บางราย', k9: true },
  { feature: 'Audit log พร้อมเหตุผล', antivirus: false, mssp: 'บางราย', k9: true },
  { feature: 'ราคา SME เข้าถึงได้', antivirus: true, mssp: false, k9: true },
  { feature: 'ไม่ต้องมีทีม Security เอง', antivirus: true, mssp: false, k9: true },
  { feature: 'ติดตั้งภายใน 30 นาที', antivirus: true, mssp: false, k9: true },
];

const readyNowItems = [
  {
    icon: '🌐',
    title: 'Landing Page พร้อม Production',
    desc: 'เว็บไซต์สมบูรณ์ responsive, SEO, deploy บน Vercel',
  },
  {
    icon: '📊',
    title: 'Cyber Risk Assessment Tool',
    desc: 'แบบประเมินฟรี → ผลลัพธ์ Low/Med/High/Critical → แนะนำ package',
  },
  {
    icon: '🖥️',
    title: 'AI Demo Workflow',
    desc: 'Demo flow 60-90 วินาที: ตรวจจับ → อธิบายภาษาไทย → แนะนำ → อนุมัติ → Audit log',
  },
  {
    icon: '📡',
    title: 'K9 Edge Pro Prototype',
    desc: 'อุปกรณ์ต้นแบบพร้อม DNS Guard, Network Monitor, Fail-safe design',
  },
  {
    icon: '🤖',
    title: 'Thai AI Explanation Engine',
    desc: 'LLM + Prompt Engineering แปลง technical alert เป็นภาษาไทยที่เข้าใจได้',
  },
  {
    icon: '📋',
    title: 'Architecture & Spec Docs',
    desc: 'System architecture, Edge Pro spec, workflow design, competitive analysis',
  },
];

const gtmCards = [
  {
    market: 'ภาคเอกชน',
    icon: '🏢',
    points: [
      'ROI: ลดเวลาคัดกรอง alert, ลด downtime risk',
      'Free Risk Assessment → Lead → Demo → Paid',
      'Partner กับ MSP / IT provider',
      'Content: case study, webinar, demo video',
    ],
  },
  {
    market: 'ภาครัฐ & Ecosystem',
    icon: '🏛️',
    points: [
      'ขึ้นทะเบียนบัญชีนวัตกรรมไทย',
      'ขึ้นทะเบียนบัญชีบริการดิจิทัล depa',
      'Pilot กับ SME cluster / หน่วยงานรัฐ',
      'Align นโยบาย digital trust / PDPA / cyber resilience',
    ],
  },
];

function Logo() {
  return (
    <a className="logo-lockup" href="#top" aria-label="Bangkaew K9 home">
      <span className="logo-mark">K9</span>
      <span>
        <strong>BANGKAEW K9</strong>
        <small>AI Cyber Watchdog</small>
      </span>
    </a>
  );
}

function ProductConsole() {
  return (
    <div className="console-card" aria-label="Bangkaew K9 live risk console preview">
      <div className="console-topbar">
        <span>Live Risk Console</span>
        <b>Approval required</b>
      </div>
      <div className="console-grid">
        <div className="risk-score">
          <span>Risk level</span>
          <strong>High</strong>
          <p>Suspicious DNS activity at Branch 02</p>
        </div>
        <div className="signal-stack">
          {['Phishing domain blocked', 'AI summary ready', 'Owner approval pending'].map((item) => (
            <div key={item}>
              <i />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="site-bg" />
      <header className="site-header">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="btn btn-primary" href="#demo">
            Request demo
          </a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI Cybersecurity Platform + Commercial Edge Appliance</p>
          <h1>
            AI Cyber Watchdog
            <span>for Thai SMEs.</span>
          </h1>
          <p className="hero-lead">
            Bangkaew K9 ผสาน K9 Edge Pro, AI risk explanation และ human approval workflow เพื่อให้ SME ไทยตรวจจับเร็ว
            ทำงานไวขึ้น และลดความเสี่ยงไซเบอร์โดยไม่เสียการควบคุม
          </p>
          <div className="thai-motto">ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ</div>
          <div className="hero-actions">
            <a className="btn btn-primary btn-large" href="#risk-assessment">
              ประเมินความเสี่ยงฟรี
            </a>
            <a className="btn btn-secondary btn-large" href="#edge-device">
              ดู K9 Edge Pro
            </a>
          </div>
          <div className="hero-pills" aria-label="Bangkaew K9 core capabilities">
            {heroPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>

        <div className="hero-product">
          <ThreatRadar />
          <div className="device-stage">
            <div className="device-halo" />
            <Image
              src="/k9-edge-pro-hero.png"
              alt="Bangkaew K9 Edge Pro cybersecurity appliance"
              width={1792}
              height={1024}
              className="device-image"
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
            />
          </div>
          <ProductConsole />
        </div>
      </section>

      <section id="problem" className="section cyberstats-section" aria-labelledby="cyberstats-heading">
        <div className="section-heading section-heading-wide">
          <p>The numbers don&apos;t lie</p>
          <h2 id="cyberstats-heading">ตัวเลขจริงที่ SME ไทยต้องรู้</h2>
        </div>
        <div className="cyberstats-grid">
          {cyberStats.map((stat) => (
            <article className="cyberstat-card" key={stat.label}>
              <strong>{stat.number}</strong>
              <p>{stat.label}</p>
              <small>{stat.source}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section impact-section" aria-labelledby="problem-impact-heading">
        <div className="section-heading section-heading-wide">
          <p>Problem & Impact</p>
          <h2 id="problem-impact-heading">SME ไทยต้องรับมือภัยไซเบอร์ที่เร็วขึ้น ด้วยทีมที่เล็กกว่าที่ควรจะเป็น</h2>
        </div>
        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className="impact-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="section">
        <div className="section-heading">
          <p>Cyber Watchdog Platform</p>
          <h2>ตรวจจับ อธิบาย แนะนำ และรอการอนุมัติก่อน action สำคัญ</h2>
        </div>
        <div className="platform-grid">
          {platformCards.map((card) => (
            <article className="feature-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="edge-device" className="section edge-section">
        <div className="edge-visual">
          <div className="edge-label">
            <span>K9 Edge Pro</span>
            <b>Commercial edge appliance</b>
          </div>
          <Image
            src="/k9-edge-pro-hero.png"
            alt="K9 Edge Pro network security hardware"
            width={1792}
            height={1024}
            className="edge-image"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="edge-copy">
          <p className="eyebrow">K9 Edge Pro</p>
          <h2>ฮาร์ดแวร์หน้าไซต์ที่ทำให้ AI เห็นความเสี่ยงจากเครือข่ายจริง</h2>
          <p>
            ติดตั้งที่ไซต์ของลูกค้าเพื่อเริ่มจาก visibility ก่อน แล้วค่อยเพิ่ม policy และ response workflow ตามความพร้อม
            เหมาะกับธุรกิจที่ต้องการทดลองจากระบบจริงโดยไม่ต้องเปลี่ยน infrastructure ทั้งหมดในวันแรก
          </p>
          <div className="edge-feature-grid">
            {edgeFeatures.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="section-heading">
          <p>How it works</p>
          <h2>จากสัญญาณหน้าไซต์ สู่การตัดสินใจที่ตรวจสอบย้อนหลังได้</h2>
        </div>
        <div className="workflow-grid">
          {workflow.map(([num, title, body]) => (
            <article className="workflow-card" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="compare" className="section comparison-section" aria-labelledby="comparison-heading">
        <div className="section-heading section-heading-wide">
          <p>Compare options</p>
          <h2 id="comparison-heading">Antivirus vs MSSP vs Bangkaew K9</h2>
          <p className="section-sub">เปรียบเทียบทางเลือกสำหรับ SME ไทยที่ต้องการ cyber protection</p>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table" role="table">
            <thead>
              <tr>
                <th>ฟีเจอร์</th>
                <th>Antivirus</th>
                <th>MSSP / MDR</th>
                <th className="col-k9">Bangkaew K9</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{typeof row.antivirus === 'boolean' ? (row.antivirus ? '✓' : '✗') : row.antivirus}</td>
                  <td>{typeof row.mssp === 'boolean' ? (row.mssp ? '✓' : '✗') : row.mssp}</td>
                  <td className="col-k9">{typeof row.k9 === 'boolean' ? (row.k9 ? '✓' : '✗') : row.k9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="ready-now" className="section credibility-section" aria-labelledby="credibility-heading">
        <div className="section-heading section-heading-wide">
          <p>What&apos;s ready now</p>
          <h2 id="credibility-heading">ไม่ได้แค่คิด — สิ่งที่ทำสำเร็จแล้ว</h2>
          <p className="section-sub">Built on existing network monitoring and security workflow — not starting from zero</p>
        </div>
        <div className="credibility-grid">
          {readyNowItems.map((item) => (
            <article className="credibility-card" key={item.title}>
              <span className="credibility-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="thai-smes" className="section">
        <div className="section-heading">
          <p>Built for Thai SMEs</p>
          <h2>ออกแบบให้เจ้าของกิจการและทีม IT ขนาดเล็กทำงานเร็วขึ้น</h2>
        </div>
        <div className="sme-grid">
          {smeCards.map((card) => (
            <article className="sme-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <RiskAssessment />

      <section className="section package-section" aria-labelledby="package-path-heading">
        <div className="section-heading section-heading-wide">
          <p>Package Path</p>
          <h2 id="package-path-heading">เริ่มฟรีจาก assessment แล้วขยายตามขนาดองค์กรและระดับความเสี่ยง</h2>
        </div>
        <div className="package-list">
          {packages.map(([tier, title, body]) => (
            <article className="package-card" key={tier}>
              <span>{tier}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-k9" className="section">
        <div className="section-heading">
          <p>Why Bangkaew K9</p>
          <h2>เพิ่ม productivity ลด operational risk และทำให้ cybersecurity เป็นเรื่องที่ตัดสินใจได้</h2>
        </div>
        <div className="why-grid">
          {whyItems.map((item) => (
            <article className="why-card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gtm-section" aria-labelledby="gtm-heading">
        <div className="section-heading section-heading-wide">
          <p>Go-to-Market</p>
          <h2 id="gtm-heading">แผนตลาดที่ชัดเจนทั้งภาคเอกชนและภาครัฐ</h2>
        </div>
        <div className="gtm-grid">
          {gtmCards.map((card) => (
            <article className="gtm-card" key={card.market}>
              <span className="gtm-icon">{card.icon}</span>
              <h3>{card.market}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="cta-section">
        <div className="cta-panel">
          <p className="eyebrow">Live Demo Flow</p>
          <h2>ดู Bangkaew K9 ทำงานจริงใน 90 วินาที</h2>
          <div className="demo-steps">
            {[
              { num: '01', title: 'Edge Pro เห็นสัญญาณ', desc: 'อุปกรณ์ตรวจจับทราฟฟิกและ DNS ที่น่าสงสัยจากเครือข่ายจริง' },
              { num: '02', title: 'AI วิเคราะห์และอธิบาย', desc: 'ระบบสรุปเหตุการณ์เป็นภาษาไทย พร้อมระดับความเสี่ยงและผลกระทบ' },
              { num: '03', title: 'แนะนำ Action', desc: 'เสนอ next step แบบเป็นขั้น คำนึงถึง downtime และผลกระทบต่อธุรกิจ' },
              { num: '04', title: 'Human Approve', desc: 'เจ้าของหรือทีม IT อนุมัติก่อนดำเนินการกับระบบสำคัญ' },
              { num: '05', title: 'Audit Log', desc: 'บันทึกเหตุการณ์ เหตุผล และการอนุมัติ ตรวจสอบย้อนหลังได้' },
            ].map((step) => (
              <div className="demo-step" key={step.num}>
                <span className="demo-step-num">{step.num}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary btn-large" href="mailto:hello@bangkaew-k9.example">
              Request demo
            </a>
            <a className="btn btn-secondary btn-large" href="#risk-assessment">
              ประเมินความเสี่ยงฟรี
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Logo />
            <p>Make enterprise-grade cyber protection understandable, affordable, and controllable for every Thai SME.</p>
          </div>
          <div className="footer-links">
            {footerLinks.map(([label, href]) => (
              <a className="nav-link" href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
