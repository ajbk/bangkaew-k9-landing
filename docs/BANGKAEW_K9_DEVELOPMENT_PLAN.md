# แผนพัฒนา Bangkaew K9 — จาก Idea สู่ Prototype พร้อม Pitching

**จัดทำ:** 2026-06-29
**เป้าหมาย:** เตรียม Bangkaew K9 ให้พร้อมนำเสนอต่อ รมว.อว. ศ.ดร.เชน ให้เข้ารอบการคัดเลือก

---

## สารบัญ

1. [ภาพรวมแผน](#1-ภาพรวมแผน)
2. [Phase 0: Idea Validation (TRL 1-2)](#phase-0)
3. [Phase 1: PoC (TRL 3-4)](#phase-1)
4. [Phase 2: MVP (TRL 5-6)](#phase-2)
5. [Phase 3: Pilot Prototype (TRL 7-8)](#phase-3)
6. [Phase 4: Scale & Commercialization (TRL 9)](#phase-4)
7. [Pitch Story สำหรับ รมว.อว.](#7-pitch-story)
8. [Gantt Chart สรุป](#8-gantt-chart)
9. [Risk & Mitigation](#9-risk--mitigation)
10. [Appendix](#10-appendix)

---

## 1. ภาพรวมแผน

### เป้าหมายเชิงกลยุทธ์

Bangkaew K9 ไม่ได้เริ่มจากศูนย์ — ต่อยอดจากความรู้ด้าน Network Monitoring, Security Workflow และ Edge Computing ที่มีอยู่แล้ว เพิ่ม AI Layer เพื่อให้ SME ไทยเข้าถึง Cybersecurity ได้ง่ายขึ้น คุ้มค่าขึ้น และตัดสินใจได้อย่างมั่นใจ

### Flow ที่เสนอ (ไม่ใช่แค่ TRL แต่คิดแบบ Startup + ราชการ)

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Phase 0    │──▶│  Phase 1    │──▶│  Phase 2    │──▶│  Phase 3    │──▶│  Phase 4    │
│  Idea       │   │  PoC        │   │  MVP        │   │  Prototype  │   │  Scale      │
│  Valid.     │   │  TRL 3-4    │   │  TRL 5-6    │   │  TRL 7-8    │   │  TRL 9      │
│  (1-2 ด.)  │   │  (2-3 ด.)   │   │  (3-4 ด.)   │   │  (3-4 ด.)   │   │  (6+ ด.)   │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
  Problem          Working           Real Users        Real Site          Commercial
  Validation       Prototype         Feedback          Deployment         Product
  + Stakeholder    + AI Demo         + Iteration       + Metrics          + Revenue
```

### สิ่งที่ รมว.อว. อยากเห็น (จาก Mentor Feedback)

| สิ่งที่ต้องมี | Phase ที่ได้ |
|---|---|
| ปัญหาจริง + ตัวเลขจริง | Phase 0 |
| Demo ที่ใช้งานได้จริง | Phase 1 |
| ผู้ใช้จริง + Feedback จริง | Phase 2 |
| Deploy จริง + ผลลัพธ์วัดได้ | Phase 3 |
| Revenue + Scale | Phase 4 |

---

<a name="phase-0"></a>
## 2. Phase 0: Idea Validation (TRL 1-2)

**ระยะเวลา:** 1-2 เดือน
**เป้าหมาย:** พิสูจน์ว่าปัญหาจริง คนมี pain จริง และ Bangkaew K9 ตอบโจทย์ได้

### 2.1 Problem Validation

| งาน | รายละเอียด | Deliverable |
|---|---|---|
| Research ตัวเลข cyber threat ไทย | สถิติ phishing, ransomware, data breach ของ SME ไทย จาก NBTC, DE, ข่าว, รายงาน | 1-pager: "Thai SME Cyber Threat Landscape" |
| สัมภาษณ์ SME เป้าหมาย | 5-10 ราย (ร้านค้า, โรงงาน, คลินิก, ออฟฟิศ) เรื่อง pain point ด้าน cyber | Customer Interview Summary |
| วิเคราะห์คู่แข่ง | เปรียบเทียบ antivirus, MSSP, MDR ที่มีในตลาดไทย vs Bangkaew K9 | Competitive Analysis Matrix |
| สำรวจราคาตลาด | ต้นทุน SOC-as-a-Service, MSSP, MDR ในไทยและ SEA | Pricing Benchmark |

### 2.2 Solution Validation

| งาน | รายละเอียด | Deliverable |
|---|---|---|
| ออกแบบ workflow หลัก | Monitor → Detect → Explain → Recommend → Approve → Respond | Workflow Diagram |
| วาด Wireframe ของ Platform | Dashboard, Alert View, Risk Assessment, Approval Flow | Figma Wireframe |
| ออกแบบ Edge Pro concept | สเปก, form factor, port, ฟังก์ชันที่ต้องมี | Edge Pro Spec Sheet (concept) |
| เขียน Architecture Diagram | Edge → Platform → AI → Human Approval → Action | System Architecture v1 |

### 2.3 Stakeholder Mapping

| กลุ่ม | ทำไมสำคัญ | แผนเข้าถึง |
|---|---|---|
| depa | ขึ้นทะเบียนบัญชีบริการดิจิทัล, funding | เข้าผ่าน depa SME support program |
| NBTC / DE | นโยบาย cybersecurity ของประเทศ | นำเสนอเป็น national cyber resilience tool |
| บัญชีนวัตกรรมไทย | ขายให้หน่วยงานรัฐได้ | เตรียมเอกสารขึ้นทะเบียน |
| มหาวิทยาลัย / วว. | วิจัยร่วม, ทดสอบ, credibility | MoU วิจัยร่วม |
| MSP / IT Partner | ช่องทางขาย | สำรวจ partner ที่สนใจ |

### 2.4 สิ่งที่ต้องมีก่อนจบ Phase 0

- [ ] Customer interview อย่างน้อย 5 ราย
- [ ] Problem statement ที่ validated ด้วยตัวเลขจริง
- [ ] Wireframe ของ Platform
- [ ] Architecture Diagram v1
- [ ] Edge Pro concept spec
- [ ] Competitive analysis ที่ชัดเจน
- [ ] Stakeholder map + รายชื่อที่ต้องติดต่อ

---

<a name="phase-1"></a>
## 3. Phase 1: PoC — Proof of Concept (TRL 3-4)

**ระยะเวลา:** 2-3 เดือน
**เป้าหมาย:** สร้าง Demo ที่เล่าได้จริง 60-90 วินาที แสดงให้เห็นว่า AI ช่วย SME ได้

### 3.1 Software PoC (Bangkaew K9 Platform)

| งาน | รายละเอียด | Tech Stack |
|---|---|---|
| Landing Page สมบูรณ์ | Production-grade, SEO, OG, responsive | Next.js + Tailwind + Vercel |
| Risk Assessment Tool | แบบประเมินฟรี → ผลลัพธ์ Low/Med/High/Critical → แนะนำ package | Next.js + API route + PDF gen |
| Mock Dashboard | แสดง alert, risk score, Thai explanation, approval button | React + mock data + chart lib |
| AI Demo Flow | ใส่ sample log → AI อธิบายเป็นภาษาไทย → แนะนำ action | LLM API (OpenAI/Claude) + prompt engineering |
| Thai Explanation Engine | Prompt template ที่สร้าง explanation + recommendation ภาษาไทย | LLM + few-shot + guardrails |
| Demo Script | เล่าได้ 60-90 วินาที ตาม mentor feedback | Markdown + video recording |

### 3.2 Hardware PoC (Bangkaew K9 Edge Pro)

| งาน | รายละเอียด | ทางเลือก |
|---|---|---|
| Edge prototype | อุปกรณ์ต้นแบบที่ดัก DNS/URL ได้ | Raspberry Pi 4/5 + custom software |
| DNS Guard PoC | Block/monitor suspicious domain | Pi-hole / AdGuard + custom rule |
| Network Monitor | เห็น traffic flow, anomaly | ntopng / Suricata + custom integration |
| Fail-safe design | ถ้าอุปกรณ์ล่ม ไม่ block traffic | Bridge mode / bypass switch |
| Form Factor | ออกแบบ case ที่ดู professional | 3D print case / off-the-shelf enclosure |

### 3.3 AI/LLM Engine PoC

| งาน | รายละเอียด | รายละเอียด |
|---|---|---|
| Alert summarization | แปล technical alert → Thai explanation | LLM + structured output |
| Risk scoring | จัดลำดับ alert ตาม severity + context | Rule-based + LLM assist |
| Recommendation engine | แนะนำ action ที่เหมาะสม | LLM + business context |
| Human approval workflow | แจ้งเตือน → รอ approve → execute | LINE Notify + Web UI |
| Audit log | บันทึกเหตุการณ์ + เหตุผล + การอนุมัติ | Database + timestamp |

### 3.4 Demo Narrative สำหรับ Pitching (60-90 วินาที)

```
1. "นี่คือ Edge Pro ที่ติดตั้งในเครือข่ายของ SME" (โชว์ hardware)
2. "เมื่อมีอุปกรณ์พยายามเชื่อมต่อ domain ที่น่าสงสัย..." (โชว์ alert)
3. "AI วิเคราะห์และอธิบายเป็นภาษาไทยว่าเกิดอะไรขึ้น" (โชว์ Thai explanation)
4. "ระบบแนะนำให้ block domain นี้ พร้อมเหตุผล" (โชว์ recommendation)
5. "เจ้าของธุรกิจกด Approve ผ่าน LINE หรือ Dashboard" (โชว์ approval)
6. "ทุกอย่างถูกบันทึกเป็น Audit Log" (โชว์ log)
```

### 3.5 สิ่งที่ต้องมีก่อนจบ Phase 1

- [ ] Landing page ขึ้น production
- [ ] Risk Assessment tool ใช้งานได้
- [ ] Demo ที่เล่าได้ 60-90 วินาที
- [ ] Edge Pro prototype 1 ตัว
- [ ] AI explanation engine ทำงานได้
- [ ] Video demo บันทึกไว้
- [ ] ได้ feedback จาก mentor / advisor แล้ว
- [ ] เตรียมเอกสารขึ้นทะเบียนบัญชีนวัตกรรมไทย

---

<a name="phase-2"></a>
## 4. Phase 2: MVP — Minimum Viable Product (TRL 5-6)

**ระยะเวลา:** 3-4 เดือน
**เป้าหมาย:** มีผู้ใช้จริง Feedback จริง Iteration จริง

### 4.1 Product MVP

| งาน | รายละเอียด | Priority |
|---|---|---|
| Platform สมบูรณ์ | Dashboard, alert, Thai explanation, approval, audit log | P0 |
| Edge Pro v1 | ซอฟต์แวร์สมบูรณ์ + case ที่ดูดี + quick install | P0 |
| Free Risk Assessment บน web | lead magnet → ผลลัพธ์ → CTA | P0 |
| LINE integration | แจ้งเตือน + approve ผ่าน LINE | P0 |
| Multi-site management | สำหรับ SME หลายสาขา | P1 |
| Remote management | ดูแล Edge Pro ได้จาก Platform | P1 |
| Email alert | แจ้งเตือนผ่าน email | P1 |
| Reporting | รายงาน PDF สรุปรายเดือน | P2 |

### 4.2 Pilot Program

| งาน | รายละเอียด | เป้าหมาย |
|---|---|---|
| หา pilot customers | SME 5-10 ราย ที่ volunteer | ได้ feedback loop |
| ติดตั้ง Edge Pro | ที่ไซต์จริงของ pilot customers | ได้ real traffic data |
| Weekly check-in | ทุกสัปดาห์กับ pilot customers | ได้ feedback ต่อเนื่อง |
| Iteration | ปรับปรุง product ตาม feedback | 2-week sprint |
| Case study | เขียน case study จาก pilot | 3-5 case studies |

### 4.3 AI Improvement

| งาน | รายละเอียด |
|---|---|
| Fine-tune Thai explanation | จาก feedback จริง ปรับให้เข้าใจง่ายขึ้น |
| False positive reduction | ลด alert ที่ไม่สำคัญ |
| Context-aware recommendation | แนะนำตามประเภทธุรกิจ |
| Threat intelligence feed | รวมข้อมูล threat จากแหล่งภายนอก |
| Behavior baseline | เรียนรู้ traffic ปกติของแต่ละไซต์ |

### 4.4 Quality & Compliance

| งาน | รายละเอียด |
|---|---|
| Security audit | ตรวจสอบความปลอดภัยของ Platform |
| PDPA readiness | ออกแบบ data handling ตาม PDPA |
| Privacy policy | เขียน privacy policy ที่ชัดเจน |
| Data retention policy | กำหนดระยะเวลาเก็บข้อมูล |
| Incident response plan | แผนรับมือถ้า Platform มีปัญหา |

### 4.5 สิ่งที่ต้องมีก่อนจบ Phase 2

- [ ] Platform ใช้งานจริงได้
- [ ] Edge Pro v1 ติดตั้งแล้ว 5+ sites
- [ ] Pilot customers 5-10 ราย
- [ ] Feedback summary report
- [ ] Case study อย่างน้อย 3 ราย
- [ ] AI Thai explanation คุณภาพดี
- [ ] LINE + email alert ทำงาน
- [ ] PDPA compliance checklist
- [ ] ได้ user testimonial หรือ video

---

<a name="phase-3"></a>
## 5. Phase 3: Pilot Prototype (TRL 7-8)

**ระยะเวลา:** 3-4 เดือน
**เป้าหมาย:** Deploy จริง วัดผลได้ เตรียมพร้อมขาย

### 5.1 Production Deployment

| งาน | รายละเอียด |
|---|---|
| Platform production infra | Cloud deployment, auto-scaling, monitoring |
| Edge Pro manufacturing | ผลิต Lot แรก 50-100 units |
| Onboarding flow | ติดตั้ง Edge Pro + Platform ภายใน 30 นาที |
| Support system | Help desk, FAQ, knowledge base |
| SLA | Service level agreement สำหรับลูกค้า |

### 5.2 Metrics & KPI

| Metric | เป้าหมาย | วิธีวัด |
|---|---|---|
| Mean Time to Detect (MTTD) | < 5 นาที | Platform logs |
| Mean Time to Explain (MTTE) | < 1 นาที | AI response time |
| Alert accuracy | > 80% true positive | Pilot feedback |
| User satisfaction | > 4/5 | Survey |
| Risk assessment completion rate | > 60% | Funnel analytics |
| Pilot → Paid conversion | > 30% | CRM |
| Thai explanation clarity | > 4/5 | User rating |

### 5.3 Go-to-Market Execution

| ตลาด | งาน | Timeline |
|---|---|---|
| **ภาครัฐ** | ขึ้นทะเบียนบัญชีนวัตกรรมไทย | Phase 3 เดือน 1 |
| **ภาครัฐ** | ขึ้นทะเบียนบัญชีบริการดิจิทัล depa | Phase 3 เดือน 1-2 |
| **ภาครัฐ** | Pilot กับหน่วยงานรัฐ 1-2 แห่ง | Phase 3 เดือน 2-4 |
| **เอกชน** | Online demo + Risk Assessment funnel | Phase 2 ต่อเนื่อง |
| **เอกชน** | Partner กับ MSP/IT provider | Phase 3 เดือน 1-3 |
| **เอกชน** | Content marketing (blog, case study) | Phase 3 ต่อเนื่อง |

### 5.4 Certification & Standards

| มาตรฐาน | สถานะ | Timeline |
|---|---|---|
| PDPA compliance | ออกแบบแล้ว | Phase 2-3 |
| ISO 27001 readiness | เริ่ม gap analysis | Phase 3 |
| บัญชีนวัตกรรมไทย | ยื่นขอขึ้นทะเบียน | Phase 3 |
| depa digital service | ยื่นขอขึ้นทะเบียน | Phase 3 |
| Cybersecurity standard | ระบุ target standard | Phase 3 |

### 5.5 สิ่งที่ต้องมีก่อนจบ Phase 3

- [ ] Platform production-ready
- [ ] Edge Pro ผลิต Lot แรก
- [ ] ติดตั้งจริง 20+ sites
- [ ] Metrics ที่วัดได้จริง
- [ ] Case study พร้อมตัวเลข
- [ ] ขึ้นทะเบียนบัญชีนวัตกรรมแล้ว
- [ ] Partner อย่างน้อย 2-3 ราย
- [ ] Revenue pipeline
- [ ] Pitch deck สมบูรณ์

---

<a name="phase-4"></a>
## 6. Phase 4: Scale & Commercialization (TRL 9)

**ระยะเวลา:** 6+ เดือน
**เป้าหมาย:** ขายจริง Scale จริง สร้างรายได้

### 6.1 Commercial Launch

| งาน | รายละเอียด |
|---|---|
| Package pricing สมบูรณ์ | Free / Standard / Professional / Enterprise |
| Self-service onboarding | ลูกค้าสมัคร + ติดตั้งเองได้ |
| Billing system | Subscription management, invoicing |
| Sales team / channel | ทีมขาย + partner network |
| Marketing automation | Funnel, email, retargeting |

### 6.2 Scale Strategy

| ตลาด | แผน |
|---|---|
| SME ทั่วไป | Online funnel + Risk Assessment → Demo → Paid |
| โรงงาน / Industrial | Partner กับ IT/OT integrator |
| คลินิก / Healthcare | Package เฉพาะ + compliance support |
| ร้านค้าปลีก / Retail | Package เฉพาะ + POS integration |
| โรงเรียน / Education | Package เฉพาะ + student data protection |
| ภาครัฐ | ผ่านบัญชีนวัตกรรม + e-GP |

### 6.3 Revenue Model

| Package | ราคาเป้าหมาย/เดือน | Value |
|---|---|---|
| Free | 0 บาท | Risk Assessment, basic report |
| Standard | 2,500-5,000 บาท | Edge visibility, alert, Thai explanation |
| Professional | 8,000-15,000 บาท | AI analysis, recommendation, audit log |
| Enterprise | 25,000-50,000 บาท | Custom policy, integration, SLA |

### 6.4 Long-term Vision

| ปี | เป้าหมาย |
|---|---|
| ปี 1 | 50-100 SME customers, revenue 3-5 ล้านบาท |
| ปี 2 | 200-500 SME customers, revenue 10-25 ล้านบาท |
| ปี 3 | 1,000+ SME customers, revenue 50+ ล้านบาท |

---

## 7. Pitch Story สำหรับ รมว.อว. ศ.ดร.เชน

### โครงเรื่อง (7-10 นาที)

```
┌─────────────────────────────────────────────────────────┐
│  SLIDE 1: Problem & Impact (1.5 นาที)                    │
│  ─────────────────────────────────────────               │
│  - ตัวเลข cyber threat ไทย + โลก                          │
│  - SME ไทย 3.1 ล้านราย ไม่มี cyber protection             │
│  - ความเสียหายเฉลี่ยต่อเหตุการณ์                          │
│  - ไม่ใช่แค่ IT problem แต่คือ business survival          │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 2: Current Pain (1 นาที)                          │
│  ─────────────────────────────────────────               │
│  - SME ไม่มีทีม IT 专职                                   │
│  - Alert เย่อ่านยาก                                      │
│  - Owner ไม่เข้าใจ technical report                      │
│  - ไม่มี process อนุมัติ                                  │
│  - แก้ปัญหาหลังเกิดเหตุเสมอ                              │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 3: Our Solution (1.5 นาที)                        │
│  ─────────────────────────────────────────               │
│  - Bangkaew K9 = Edge Hardware + AI Platform             │
│  - Monitor → Detect → Explain → Recommend → Approve      │
│  - Human-in-the-Loop                                      │
│  - ภาษาไทย สำหรับ SME ไทย                                 │
│  - "ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ"                      │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 4: Demo (2 นาที)                                  │
│  ─────────────────────────────────────────               │
│  - โชว์ Edge Pro (hardware)                               │
│  - โชว์ Platform Dashboard                                │
│  - โชว์ AI Thai Explanation                               │
│  - โชว์ Approval Flow                                     │
│  - โชว์ Audit Log                                         │
│  ⭐ LIVE DEMO ถ้าเป็นไปได้                                │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 5: What We've Done (1 นาที)                       │
│  ─────────────────────────────────────────               │
│  - Landing page พร้อม                                     │
│  - Risk Assessment tool ทำงานได้                          │
│  - Edge Pro prototype พร้อม                               │
│  - AI engine ทำงานได้                                      │
│  - Pilot customers [X] ราย                                │
│  - Built on existing security workflow                    │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 6: Business Model & Go-to-Market (1 นาที)        │
│  ─────────────────────────────────────────               │
│  - Free Risk Assessment → Lead → Demo → Paid             │
│  - 4 packages: Free / Std / Pro / Enterprise             │
│  - เอกชน: ROI, productivity, risk reduction              │
│  - รัฐ: บัญชีนวัตกรรม, depa, SME cluster                 │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│  SLIDE 7: Impact & Vision (1 นาที)                       │
│  ─────────────────────────────────────────               │
│  - SME ไทย 3.1 ล้านราย = market ใหญ่                     │
│  - Cyber resilience ของ SME = ความมั่นคงของ supply chain │
│  - Solution ไทย เพื่อ SME ไทย                             │
│                                                          │
│  "Make enterprise-grade cyber protection                  │
│   understandable, affordable, and controllable            │
│   for every Thai SME."                                    │
└─────────────────────────────────────────────────────────┘
```

### Key Messages สำหรับ รมว.อว.

| Message | ทำไมสำคัญ |
|---|---|
| "Solution ไทย เพื่อ SME ไทย" | align กับนโยบาย national digital sovereignty |
| "AI ที่เข้าใจง่าย ไม่ใช่ black box" | รมว.อว. สนใจ AI ที่คนไทยเข้าถึงได้ |
| "Human-in-the-Loop" | แสดงความ responsible ด้าน AI |
| "ไม่เริ่มจากศูนย์" | ต่อยอดจาก workflow ที่มีอยู่แล้ว |
| "Scale ได้ผ่านนโยบายภาครัฐ" | align กับบทบาทกระทรวง |
| "PDPA-ready" | แสดงความรับผิดชอบด้าน data |

---

## 8. Gantt Chart สรุป

```
เดือน:    1    2    3    4    5    6    7    8    9   10   11   12
         ┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
Phase 0  │████│████│    │    │    │    │    │    │    │    │    │    │
Phase 1  │    │    │████│████│████│    │    │    │    │    │    │    │
Phase 2  │    │    │    │    │    │████│████│████│████│    │    │    │
Phase 3  │    │    │    │    │    │    │    │    │    │████│████│████│
Phase 4  │    │    │    │    │    │    │    │    │    │    │    │████▶
         └────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘

Pitch    │         ▲              ▲                   ▲         ▲
Point    │    internal       first pitch         รมว.อว.      scale
         │    review         competition         pitch        launch
```

### Milestone สำคัญ

| Milestone | เดือน | หมายเหตุ |
|---|---|---|
| Problem validated | 2 | Customer interview + research |
| PoC demo ready | 5 | 60-90 วินาที demo |
| First pitch | 5-6 | ประกวด / นำเสนอคณะกรรมการ |
| MVP launch | 9 | Platform + Edge Pro v1 |
| Pilot results | 10 | Metrics จาก pilot |
| รมว.อว. pitch | 10-11 | นำเสนอ รมว.อว. |
| Commercial launch | 12+ | ขายจริง |

---

## 9. Risk & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| AI ให้คำแนะนำผิด | สูง | กลาง | Human-in-the-Loop, guardrails, audit log |
| Edge Pro ล่มใน production | สูง | ต่ำ | Fail-safe design, bypass mode |
| SME ไม่เห็น value | สูง | กลาง | Free Risk Assessment, case study, ROI calculator |
| ได้ pilot น้อย | กลาง | กลาง | Free package, ขอ feedback จาก network |
| คู่แข่งเปิดตัวก่อน | กลาง | ต่ำ | First-mover ใน Thai SME market, localize advantage |
| LLM cost สูง | กลาง | กลาง | Batch processing, local LLM option, cache |
| ขึ้นทะเบียนล่าช้า | กลาง | กลาง | เริ่มเอกสารตั้งแต่ Phase 0 |
| ทีมไม่พอ | สูง | สูง | Outsource บางส่วน, university collaboration |

---

## 10. Appendix

### A. Technology Stack ที่แนะนำ

| Component | Technology | เหตุผล |
|---|---|---|
| Platform frontend | Next.js + Tailwind | SEO, performance, dev speed |
| Platform backend | Node.js / Python FastAPI | AI integration, async processing |
| AI engine | OpenAI / Claude API + local LLM | Thai language capability |
| Edge Pro OS | Linux (Raspberry Pi OS / custom) | Stable, lightweight |
| DNS Guard | Pi-hole + custom rules | Battle-tested, customizable |
| Network monitor | Suricata / ntopng | Industry standard |
| Database | PostgreSQL + TimescaleDB | Time-series data, audit log |
| Message queue | Redis / RabbitMQ | Edge → Platform communication |
| Notification | LINE Notify + Email | ช่องทางที่ SME คุ้นเคย |
| Hosting | Cloud (AWS / GCP / Azure) | Scale, reliability |

### B. แหล่งข้อมูล Cyber Threat ไทย

- สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (NCSA)
- สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์ (ETDA)
- สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)
- ThaiCERT
- รายงานจาก Akamai, Cisco, Palo Alto (Thailand/SEA data)
- ข่าว cyber incident ในไทย

### C. งบประมาณโดยประมาณ

| รายการ | งบประมาณ | Phase |
|---|---|---|
| Cloud infrastructure | 5,000-20,000 บาท/เดือน | Phase 1-4 |
| LLM API cost | 10,000-50,000 บาท/เดือน | Phase 1-4 |
| Edge Pro hardware (per unit) | 5,000-15,000 บาท | Phase 2-4 |
| 3D printing / case design | 20,000-50,000 บาท | Phase 1-2 |
| Marketing / landing page | 30,000-100,000 บาท | Phase 0-1 |
| Legal / compliance | 50,000-100,000 บาท | Phase 2-3 |
| Team (ถ้าจ้าง) | 100,000-300,000 บาท/เดือน | Phase 2-4 |
| **Total Phase 0-1 (6 เดือน)** | **~500,000-1,000,000 บาท** | |
| **Total Phase 0-3 (12 เดือน)** | **~2,000,000-5,000,000 บาท** | |

### D. Team ที่ต้องการ

| Role | จำนวน | ช่วง Phase |
|---|---|---|
| Founder / Project Lead | 1 | ทุก Phase |
| Full-stack Developer | 1-2 | Phase 1-4 |
| AI / ML Engineer | 1 | Phase 1-4 |
| Hardware Engineer | 1 (part-time) | Phase 1-3 |
| Designer / UX | 1 (part-time) | Phase 0-2 |
| Sales / BD | 1 | Phase 2-4 |
| Marketing | 1 (part-time) | Phase 2-4 |

---

> **หมายเหตุ:** แผนนี้ปรับตาม feedback ของ mentor ที่เน้นว่า:
> 1. ต้องมีตัวเลขจริง ไม่ใช่แค่ idea
> 2. ต้องมี demo ที่เล่าได้จริง
> 3. ต้องแสดงสิ่งที่ "ทำสำเร็จแล้ว" ไม่ใช่แค่ "จะทำ"
> 4. ต้องมี lead generation flow (Free Risk Assessment)
> 5. ต้องมี package ที่ scale ได้
> 6. ต้องแยก GTM ระหว่างรัฐและเอกชน
> 7. ต้องมี credibility indicators (prototype, pilot, case study)
