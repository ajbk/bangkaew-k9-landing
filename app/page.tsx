import Image from 'next/image';

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Edge Pro', href: '#edge-device' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Thai SMEs', href: '#thai-smes' },
  { label: 'Why K9', href: '#why-k9' },
];

const platformCards = [
  {
    title: 'Detect early',
    thai: 'เห็นภัยก่อน',
    body: 'ตรวจจับสัญญาณผิดปกติจากเครือข่ายและอุปกรณ์ Edge ก่อนลุกลามเป็นเหตุใหญ่ ลดเวลาที่ทีมต้องไล่หาต้นตอเอง',
    icon: '◎',
  },
  {
    title: 'Explain clearly',
    thai: 'เข้าใจเร็ว',
    body: 'แปล Alert และ Incident เป็นภาษาไทย พร้อมบริบท ผลกระทบ และหลักฐาน ช่วยให้เจ้าของกับทีม IT ตัดสินใจตรงกันเร็วขึ้น',
    icon: '✦',
  },
  {
    title: 'Recommend actions',
    thai: 'มีทางเลือกชัดเจน',
    body: 'เสนอขั้นตอนรับมือที่ทำได้จริง พร้อมระดับความเสี่ยงและผลกระทบ ลดการลองผิดลองถูกในช่วงเวลาที่กดดัน',
    icon: '☼',
  },
  {
    title: 'Wait for approval',
    thai: 'เจ้าของคุมเกม',
    body: 'Human-in-the-Loop ก่อนตอบสนองกับระบบสำคัญ ลดความเสี่ยงจาก automation ที่อาจกระทบงานขาย บัญชี หรือระบบหน้าร้าน',
    icon: '✓',
  },
];

const edgeFeatures = [
  ['Multi-LAN ready', 'รองรับ Monitor Mode และ Inline Mode สำหรับหลายสาขา ช่วยให้เห็นภาพเครือข่ายโดยไม่ต้องเพิ่มคนเฝ้าไซต์'],
  ['DNS & URL Guard', 'ช่วยกรองโดเมน เว็บ และปลายทางที่เสี่ยงก่อนเข้าถึง ลดโอกาสพนักงานพลาดคลิกลิงก์อันตราย'],
  ['AI-assisted analysis', 'ส่งสัญญาณสำคัญให้ Platform วิเคราะห์และสรุปเป็นภาษาไทย ลดงานแปล log และจัดลำดับ alert ด้วยมือ'],
  ['LINE / Email alerts', 'แจ้งเตือนเหตุสำคัญให้เจ้าของและทีม IT ทันที เพื่อรับมือเร็วโดยไม่ต้องเปิด Dashboard ตลอดเวลา'],
  ['Fail-safe design', 'ออกแบบให้ธุรกิจเดินต่อได้ แม้เกิดเหตุขัดข้อง ลดความเสี่ยง downtime ที่กระทบยอดขายหรือบริการ'],
  ['Remote management', 'ตรวจสุขภาพ อัปเดต และดูแลอุปกรณ์จากระยะไกล ลดรอบการเดินทางและเวลาปิดหน้าร้านเพื่อแก้ปัญหา'],
];

const workflow = [
  ['1', 'Monitor', 'เฝ้าระวังทราฟฟิกและอุปกรณ์สำคัญแบบต่อเนื่อง'],
  ['2', 'Detect', 'พบสัญญาณผิดปกติและจัดลำดับความเสี่ยงอัตโนมัติ'],
  ['3', 'Explain', 'AI สรุปเหตุการณ์เป็นภาษาไทย ลดเวลาถามตอบในทีม'],
  ['4', 'Recommend', 'เสนอทางเลือกพร้อมผลกระทบต่อการทำงานจริง'],
  ['5', 'Approve', 'เจ้าของหรือทีม IT กดยืนยันก่อนขั้นตอนที่มีความเสี่ยง'],
  ['6', 'Respond', 'ดำเนินการ แจ้งผล และเก็บ Audit Log เพื่อทบทวนย้อนหลัง'],
];

const reasons = [
  {
    title: 'Built for Thai context',
    thai: 'เพื่อธุรกิจไทย',
    body: 'ออกแบบจากบริบท SME ไทย ทั้งภาษา ช่องทางแจ้งเตือน งบประมาณ และทีม IT ที่มักมีคนจำกัด จึงช่วยลดงานประจำวันโดยไม่เพิ่มความซับซ้อน',
  },
  {
    title: 'Practical deployment path',
    thai: 'เริ่มจากไซต์จริง ขยายได้เป็นระบบ',
    body: 'เริ่มจาก Edge Pro ที่ติดตั้งในเครือข่ายจริง แล้วเชื่อมกับ Platform เพื่อวิเคราะห์ แจ้งเตือน และเก็บประวัติการตัดสินใจ เหมาะกับการ pilot ก่อนขยายหลายสาขา',
  },
  {
    title: 'Meaningful SME impact',
    thai: 'ลดความเสียหายที่กระทบธุรกิจฐานราก',
    body: 'ช่วยลดความเสี่ยงจาก phishing, ransomware, downtime และข้อมูลรั่วไหล ซึ่งเป็นเหตุที่กระทบยอดขาย ความเชื่อมั่น และ supply chain ของธุรกิจไทย',
  },
];

const benefits = [
  ['Less alert chasing', 'ลดเวลาคัดกรอง alert ซ้ำ ๆ แล้วให้ทีมโฟกัสเหตุที่กระทบธุรกิจจริง'],
  ['Faster decision loops', 'สรุปเหตุการณ์เป็นภาษาไทย ช่วยให้เจ้าของและทีม IT ตัดสินใจในบริบทเดียวกัน'],
  ['Lower downtime risk', 'แนะนำทางเลือกที่คำนึงถึงผลกระทบต่อระบบขาย บัญชี และงานหน้าร้าน'],
  ['Audit-ready evidence', 'เก็บเหตุการณ์ การตัดสินใจ และผลลัพธ์ไว้ตรวจสอบย้อนหลังหรือตอบลูกค้าองค์กร'],
  ['Human approval gate', 'งานสำคัญต้องผ่านการอนุมัติ ลดโอกาสที่ระบบอัตโนมัติจะกระทบงานหลักโดยไม่ตั้งใจ'],
];

const outcomeDetails = [
  {
    label: 'Productivity',
    title: 'ให้ทีมเล็กทำงานเหมือนมี SOC เบื้องต้น',
    points: [
      'รวมสัญญาณจาก Edge, DNS, endpoint และเหตุการณ์เครือข่ายไว้ในมุมมองเดียว',
      'จัดลำดับ alert ตามผลกระทบ เพื่อให้เริ่มจากเรื่องที่เสี่ยงต่อรายได้หรือการให้บริการก่อน',
      'สรุปเหตุการณ์เป็นภาษาไทยพร้อม next step ลดเวลาประชุม อธิบาย และ handoff ระหว่างเจ้าของกับทีม IT',
    ],
  },
  {
    label: 'Risk reduction',
    title: 'ลดความเสี่ยงโดยไม่หยุดธุรกิจเกินจำเป็น',
    points: [
      'ช่วยเห็นสัญญาณ ransomware, phishing, DNS เสี่ยง และการเชื่อมต่อผิดปกติก่อนกระทบวงกว้าง',
      'แนะนำระดับการตอบสนองแบบเป็นขั้น ไม่เริ่มจากการปิดระบบทันทีถ้ายังมีทางเลือกที่ปลอดภัยกว่า',
      'เก็บ Audit Log ของเหตุการณ์ เหตุผล และการอนุมัติ เพื่อใช้ทบทวนหรือปรับ policy ในอนาคต',
    ],
  },
  {
    label: 'Pilot readiness',
    title: 'พร้อมเริ่มจาก use case ที่พิสูจน์ผลได้',
    points: [
      'เริ่มจากการมองเห็นทราฟฟิกและ DNS risk ในไซต์จริง แล้วค่อยเพิ่ม policy หรือ response step ตามความพร้อมของธุรกิจ',
      'มี flow การเล่า product ชัดเจนตั้งแต่เสียบ Edge Pro, ตรวจจับ, อธิบาย, แนะนำ และรออนุมัติก่อน action สำคัญ',
      'เหมาะกับการนำเสนอเป็น demo สำหรับร้านค้า โรงงาน ออฟฟิศ และธุรกิจหลายสาขาที่ต้องการลดความเสี่ยงโดยไม่เพิ่มทีมใหญ่',
    ],
  },
  {
    label: 'Wider impact',
    title: 'ยกระดับ cyber resilience ของ SME ไทย',
    points: [
      'ทำให้เครื่องมือ cybersecurity ที่ปกติซับซ้อนและแพง เข้าถึงได้สำหรับเจ้าของกิจการและทีม IT ขนาดเล็ก',
      'ลดโอกาสเหตุไซเบอร์ลุกลามจากธุรกิจหนึ่งไปยังคู่ค้า ลูกค้า หรือระบบ supply chain',
      'สร้างฐานข้อมูลเหตุการณ์และบทเรียนที่ช่วยให้ธุรกิจไทยปรับ policy และพฤติกรรมความปลอดภัยได้ต่อเนื่อง',
    ],
  },
];

const footerGroups = [
  {
    heading: 'Platform',
    links: [
      ['Overview', '#platform'],
      ['How it works', '#how-it-works'],
      ['Why K9', '#why-k9'],
    ],
  },
  {
    heading: 'Edge Device',
    links: [
      ['K9 Edge Pro', '#edge-device'],
      ['Thai SMEs', '#thai-smes'],
      ['Request Demo', '#demo'],
    ],
  },
  {
    heading: 'Company',
    links: [
      ['Contact', '#demo'],
      ['Privacy', '#demo'],
    ],
  },
];

function Logo() {
  return (
    <div className="logo-lockup flex items-center gap-3">
      <div className="logo-shield" aria-hidden="true">
        <span>K9</span>
      </div>
      <div className="logo-copy leading-tight">
        <div className="text-lg font-black text-white">
          BANGKAEW <span className="text-amber">K9</span>
        </div>
        <div className="text-[10px] uppercase text-slate-400">AI Cyber Watchdog for Thai SMEs</div>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="dashboard-mock" aria-label="Bangkaew K9 platform dashboard mockup">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="text-sm font-bold text-white">
          BANGKAEW K9 <span className="text-royal">PLATFORM</span>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-600" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="metric col-span-1">
          <span>สถานะ</span>
          <strong>ปกติ</strong>
        </div>
        <div className="metric">
          <span>แจ้งเตือน</span>
          <strong>12</strong>
        </div>
        <div className="metric">
          <span>อุปกรณ์</span>
          <strong>48</strong>
        </div>
        <div className="chart col-span-2">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="donut" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <div className="hero-bg" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-5 text-sm font-medium text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="btn-primary px-4 py-2 text-sm sm:px-5" href="#demo">
            Demo
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="eyebrow">AI Cybersecurity Platform + Edge Appliance</div>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] text-white md:text-7xl">
            Your AI Cyber
            <br />
            <span className="text-gradient">Watchdog.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Bangkaew K9 combines an AI security platform with a commercial edge appliance built to help Thai SMEs
            work faster, reduce alert fatigue, and lower operational cyber risk.
          </p>
          <div className="tagline mt-7">ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ</div>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            ตรวจจับเร็ว อธิบายชัด แนะนำการรับมือ และรอให้เจ้าของหรือทีม IT อนุมัติก่อนตอบสนองกับระบบสำคัญ
            เพื่อให้ทีมเล็กทำงานเร็วขึ้นโดยไม่เพิ่มความเสี่ยงให้ธุรกิจ
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary px-6 py-3" href="#demo">
              Request Demo
            </a>
            <a className="btn-secondary px-6 py-3" href="#edge-device">
              See the Device
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-400 md:grid-cols-4">
            {['Reduce manual triage', 'Lower downtime risk', 'Thai-first decisions', 'Approval before action'].map((item) => (
              <div className="trust-badge" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="product-frame">
            <Image
              src="/k9-edge-pro-hero.png"
              alt="Bangkaew K9 Edge Pro cybersecurity appliance"
              width={1792}
              height={1024}
              className="hero-product-image"
              sizes="(min-width: 1024px) 58vw, 100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
          <DashboardMock />
          <div className="hero-signal hero-signal-a">AI explained</div>
          <div className="hero-signal hero-signal-b">Approval required</div>
        </div>
      </section>

      <section id="platform" className="section">
        <div className="section-heading">
          <p>The Cyber Watchdog Platform</p>
          <h2>เห็นภัยก่อน เข้าใจเร็ว ตัดสินใจได้มั่นใจ</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div className="feature-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <strong>{card.thai}</strong>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="edge-device" className="section grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="edge-product-panel">
          <Image
            src="/k9-edge-pro-hero.png"
            alt="K9 Edge Pro network security hardware"
            width={1792}
            height={1024}
            className="edge-product-image"
            sizes="(min-width: 1024px) 52vw, 100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div>
          <p className="eyebrow">Commercial Edge Appliance</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white">Meet Bangkaew K9 Edge Pro</h2>
          <p className="mt-4 leading-8 text-slate-300">
            อุปกรณ์เฝ้าระวังหน้าไซต์สำหรับร้านค้า โรงงาน ออฟฟิศ และหลายสาขา ติดตั้งเพื่อมองเห็นเครือข่ายจริง
            แล้วส่งเหตุการณ์สำคัญให้ Bangkaew K9 Platform วิเคราะห์ต่อทันที
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {edgeFeatures.map(([title, body]) => (
              <div className="mini-card" key={title}>
                <div className="mini-dot" />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="section-heading">
          <p>How Bangkaew K9 Works</p>
          <h2>AI ช่วยคิด แต่เจ้าของยังเป็นผู้ตัดสินใจ</h2>
        </div>
        <div className="workflow">
          {workflow.map(([num, title, thai], index) => (
            <div className="workflow-item" key={title}>
              <span>{num}</span>
              <strong>{title}</strong>
              <p>{thai}</p>
              {index < workflow.length - 1 && <b aria-hidden="true">→</b>}
            </div>
          ))}
        </div>
      </section>

      <section id="thai-smes" className="section">
        <div className="section-heading">
          <p>Built for Thai SMEs</p>
          <h2>ออกแบบให้ทีมเล็กเริ่มใช้ได้จริง เห็นผลเร็ว และขยายต่อได้</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <div className="reason-mark">◆</div>
              <h3>{reason.title}</h3>
              <strong>{reason.thai}</strong>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-k9" className="section">
        <div className="section-heading">
          <p>Why Bangkaew K9</p>
          <h2>Trust-first cybersecurity ที่เพิ่ม productivity โดยไม่ปล่อยให้ความเสี่ยงหลุดมือ</h2>
        </div>
        <div className="benefit-row">
          {benefits.map(([title, body]) => (
            <div className="benefit" key={title}>
              <span>✓</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div className="outcome-grid mt-5">
          {outcomeDetails.map((detail) => (
            <article className="outcome-panel" key={detail.label}>
              <p>{detail.label}</p>
              <h3>{detail.title}</h3>
              <ul>
                {detail.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 lg:px-8">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Your AI Cyber Watchdog for Thai SMEs</p>
            <h2>เริ่มจากการมองเห็น ลดงานซ้ำ และลดความเสี่ยงก่อนภัยลุกลาม</h2>
            <p>
              เสียบ Edge Pro เข้ากับเครือข่าย เห็นเหตุสำคัญเร็วขึ้น ให้ AI ช่วยอธิบาย
              แนะนำลำดับการรับมือ และให้คนตัดสินใจก่อนลงมือกับระบบสำคัญ
            </p>
          </div>
          <a className="btn-primary px-7 py-4" href="mailto:hello@bangkaew-k9.example">
            Request Demo
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30 px-4 py-12 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Bangkaew K9 = Edge Hardware + AI Platform + Human-in-the-Loop สำหรับ SME ไทย
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="font-bold text-white">{group.heading}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a className="nav-link" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
