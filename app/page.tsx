import Image from 'next/image';

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Edge Pro', href: '#edge-device' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Thai SMEs', href: '#thai-smes' },
  { label: 'Why K9', href: '#why-k9' },
];

const heroStats = [
  ['Human approval', 'before critical response'],
  ['Thai explanation', 'for owners and IT teams'],
  ['Edge + AI', 'visibility from the real network'],
];

const platformCards = [
  {
    title: 'Detect early',
    thai: 'เห็นภัยก่อนลุกลาม',
    body: 'รวมสัญญาณจาก Edge, DNS, URL และพฤติกรรมเครือข่าย แล้วจัดลำดับเหตุที่เสี่ยงต่อรายได้ ระบบขาย หรือข้อมูลลูกค้าก่อน',
  },
  {
    title: 'Explain clearly',
    thai: 'แปลความเสี่ยงเป็นภาษาเจ้าของธุรกิจ',
    body: 'AI สรุป incident เป็นภาษาไทย พร้อมบริบท ผลกระทบ และหลักฐานที่ทีม IT ใช้อธิบายกับผู้บริหารได้ทันที',
  },
  {
    title: 'Recommend actions',
    thai: 'แนะนำทางเลือกที่ไม่ทำให้ธุรกิจสะดุด',
    body: 'เสนอขั้นตอนรับมือแบบเป็นระดับ ตั้งแต่เฝ้าดู แจ้งเตือน จำกัดความเสี่ยง ไปจนถึง action ที่ต้องอนุมัติก่อน',
  },
  {
    title: 'Keep humans in control',
    thai: 'AI ช่วยคิด คนยังเป็นผู้ตัดสินใจ',
    body: 'Human-in-the-Loop สำหรับระบบสำคัญ ลดความเสี่ยงจาก automation ที่อาจกระทบงานหน้าร้าน บัญชี หรือบริการหลัก',
  },
];

const edgeFeatures = [
  ['Multi-LAN visibility', 'มองเห็นทราฟฟิกหลายจุดในไซต์เดียว เหมาะกับร้านค้า โรงงาน ออฟฟิศ และธุรกิจหลายสาขา'],
  ['DNS & URL Guard', 'ช่วยลดความเสี่ยงจาก phishing, malicious domain และเว็บที่พนักงานอาจเผลอคลิก'],
  ['AI signal pipeline', 'ส่งเหตุการณ์สำคัญขึ้น Platform เพื่อสรุป วิเคราะห์ และแนะนำการรับมือเป็นภาษาไทย'],
  ['LINE / Email alert', 'แจ้งเตือนเหตุเร่งด่วนให้เจ้าของและทีม IT โดยไม่ต้องเปิด dashboard ตลอดเวลา'],
  ['Remote management', 'ตรวจสุขภาพ อัปเดต policy และดูแล Edge Pro จากระยะไกล ลดรอบ onsite support'],
  ['Fail-safe deployment', 'ออกแบบให้เริ่มจาก monitor ก่อน แล้วค่อยเพิ่ม response ตามความพร้อมของธุรกิจ'],
];

const workflow = [
  ['01', 'Monitor', 'Edge Pro เฝ้าดูทราฟฟิก DNS URL และสัญญาณผิดปกติจากเครือข่ายจริง'],
  ['02', 'Detect', 'Platform จัดลำดับความเสี่ยงและแยก noise ออกจากเหตุที่กระทบธุรกิจ'],
  ['03', 'Explain', 'AI สรุปเป็นภาษาไทยว่าเกิดอะไร เสี่ยงแค่ไหน และควรสนใจเพราะอะไร'],
  ['04', 'Recommend', 'ระบบเสนอ next step ที่เหมาะกับระดับความเสี่ยงและผลกระทบต่อการทำงาน'],
  ['05', 'Approve', 'เจ้าของหรือทีม IT อนุมัติก่อน action ที่อาจแตะระบบสำคัญ'],
  ['06', 'Respond', 'ดำเนินการ แจ้งผล และบันทึก audit log เพื่อทบทวนย้อนหลัง'],
];

const smePain = [
  {
    title: 'ทีมเล็ก งานเยอะ',
    body: 'SME ส่วนใหญ่ไม่มี SOC หรือผู้เชี่ยวชาญเฝ้าระบบ 24/7 ทำให้ alert ที่มากเกินไปกลายเป็นภาระประจำวัน',
  },
  {
    title: 'ศัพท์เทคนิคทำให้ตัดสินใจช้า',
    body: 'เจ้าของธุรกิจต้องรู้ว่าควรหยุดระบบไหม กระทบยอดขายหรือไม่ และควรทำอะไรก่อน โดยไม่ต้องอ่าน log ยาว ๆ',
  },
  {
    title: 'ความเสี่ยงกระทบรายได้จริง',
    body: 'Phishing, ransomware, downtime และข้อมูลรั่วไหล กระทบความเชื่อมั่น ลูกค้า คู่ค้า และ supply chain โดยตรง',
  },
];

const packages = [
  ['Free', 'Cyber Risk Assessment', 'ประเมินความเสี่ยงเบื้องต้นและรับรายงาน awareness'],
  ['Standard', 'Edge Visibility', 'เหมาะกับร้านค้าและออฟฟิศที่ต้องการมองเห็นความเสี่ยงหน้าไซต์'],
  ['Professional', 'AI Response Workflow', 'เหมาะกับ SME หลายระบบหรือหลายสาขาที่ต้องการ audit log และ remote management'],
  ['Enterprise', 'Custom Policy & SLA', 'เหมาะกับองค์กรที่ต้องการ integration, compliance support และ policy เฉพาะ'],
];

const whyItems = [
  {
    label: 'Productivity',
    title: 'ลดเวลาคัดกรอง alert',
    body: 'รวมเหตุสำคัญไว้ในมุมมองเดียว ให้ทีม IT เริ่มจากเรื่องที่กระทบธุรกิจจริงก่อน ลดงาน manual และการ handoff ที่คลุมเครือ',
  },
  {
    label: 'Risk reduction',
    title: 'ลดความเสียหายก่อนลุกลาม',
    body: 'ช่วยเห็นสัญญาณเสี่ยงตั้งแต่ DNS, URL, traffic และ behavior anomaly พร้อมคำแนะนำที่คำนึงถึง downtime',
  },
  {
    label: 'Business control',
    title: 'ให้เจ้าของยังคุมการตัดสินใจ',
    body: 'Critical response ต้องผ่าน approval ช่วยให้ AI เป็นผู้ช่วยที่ไวและรอบคอบ ไม่ใช่ระบบอัตโนมัติที่เสี่ยงเกินไป',
  },
  {
    label: 'Scale path',
    title: 'เริ่มฟรี ขยายเป็น package ได้',
    body: 'Risk assessment สร้าง awareness และ lead จากนั้นแนะนำ demo, pilot หรือ package ตามระดับความเสี่ยงขององค์กร',
  },
];

const footerLinks = [
  ['Platform', '#platform'],
  ['K9 Edge Pro', '#edge-device'],
  ['How it works', '#how-it-works'],
  ['Thai SMEs', '#thai-smes'],
  ['Request Demo', '#demo'],
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
    <div className="console-card" aria-label="Bangkaew K9 platform console preview">
      <div className="console-topbar">
        <span>Live Risk Console</span>
        <b>Human approval required</b>
      </div>
      <div className="console-grid">
        <div className="risk-score">
          <span>Risk level</span>
          <strong>High</strong>
          <p>Suspicious DNS activity detected at Branch 02</p>
        </div>
        <div className="signal-stack">
          {['Phishing domain blocked', 'Unusual outbound traffic', 'Policy review suggested'].map((item) => (
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
            Bangkaew K9 combines Edge Pro hardware, AI risk explanation, and human approval workflow so small teams
            can detect early, work faster, and reduce operational cyber risk.
          </p>
          <div className="thai-motto">ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ</div>
          <div className="hero-actions">
            <a className="btn btn-primary btn-large" href="#demo">
              ขอ Demo
            </a>
            <a className="btn btn-secondary btn-large" href="#edge-device">
              ดู K9 Edge Pro
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map(([title, body]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-product">
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

      <section id="platform" className="section">
        <div className="section-heading">
          <p>The Cyber Watchdog Platform</p>
          <h2>เห็นภัยก่อน เข้าใจเร็ว และตัดสินใจโดยมีข้อมูลครบ</h2>
        </div>
        <div className="platform-grid">
          {platformCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <span>{card.title}</span>
              <h3>{card.thai}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="edge-device" className="section edge-section">
        <div className="edge-visual">
          <div className="edge-label">
            <span>K9 Edge Pro</span>
            <b>Pilot-ready appliance</b>
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
          <p className="eyebrow">Commercial Edge Appliance</p>
          <h2>ฮาร์ดแวร์หน้าไซต์ที่ทำให้ AI เห็นความเสี่ยงจากเครือข่ายจริง</h2>
          <p>
            Edge Pro ถูกออกแบบให้เริ่มจากการมองเห็นก่อน แล้วค่อยขยายไปสู่ policy และ response workflow ตามความพร้อม
            ช่วยให้ SME ทดลองใช้งานจริงได้โดยไม่ต้องเปลี่ยนระบบทั้งหมดในวันแรก
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

      <section id="thai-smes" className="section sme-section">
        <div className="section-heading">
          <p>Built for Thai SMEs</p>
          <h2>ออกแบบจาก pain point จริงของเจ้าของกิจการและทีม IT ขนาดเล็ก</h2>
        </div>
        <div className="sme-layout">
          <div className="pain-stack">
            {smePain.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="package-panel">
            <p className="eyebrow">Business model path</p>
            <h3>เริ่มจาก Risk Assessment ฟรี แล้วแนะนำ package ตามระดับความเสี่ยง</h3>
            <div className="package-list">
              {packages.map(([tier, title, body]) => (
                <div key={tier}>
                  <span>{tier}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-k9" className="section">
        <div className="section-heading">
          <p>Why Bangkaew K9</p>
          <h2>เพิ่ม productivity ลดความเสี่ยง และทำให้ cybersecurity เป็นเรื่องที่ตัดสินใจได้</h2>
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

      <section id="demo" className="cta-section">
        <div className="cta-panel">
          <p className="eyebrow">Demo / Pilot-ready flow</p>
          <h2>รู้ระดับความเสี่ยงก่อนลงทุน แล้วเริ่ม pilot จากไซต์จริงได้ทันที</h2>
          <p>
            Bangkaew K9 พร้อมเล่า demo flow ตั้งแต่ Edge Pro เห็นสัญญาณผิดปกติ, AI อธิบายเป็นภาษาไทย, ระบบแนะนำ action,
            คนอนุมัติ และบันทึก audit log เพื่อใช้ทบทวนภายหลัง
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary btn-large" href="mailto:hello@bangkaew-k9.example">
              Request demo
            </a>
            <a className="btn btn-secondary btn-large" href="#thai-smes">
              ดู package path
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
