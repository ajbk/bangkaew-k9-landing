'use client';

import { useMemo, useState } from 'react';

const assessmentItems = [
  {
    id: 'monitoring',
    label: 'ยังไม่มีระบบ monitor เครือข่าย / DNS / URL อย่างต่อเนื่อง',
    weight: 1,
  },
  {
    id: 'alerts',
    label: 'ทีม IT มี alert หรือ log เยอะ แต่ไม่มีเวลาคัดกรองทุกวัน',
    weight: 1,
  },
  {
    id: 'approval',
    label: 'ยังไม่มีขั้นตอนอนุมัติก่อน action ที่กระทบระบบขาย บัญชี หรือหน้าร้าน',
    weight: 1,
  },
  {
    id: 'branches',
    label: 'มีหลายสาขา หลายวง LAN หรือมีการดูแลระบบจากระยะไกล',
    weight: 1,
  },
  {
    id: 'sensitiveData',
    label: 'มีข้อมูลลูกค้า ข้อมูลบัญชี หรือข้อมูลการเงินอยู่ในระบบดิจิทัล',
    weight: 1,
  },
  {
    id: 'incidents',
    label: 'เคยเจอ phishing link, malware, downtime หรือเหตุผิดปกติที่อธิบายยาก',
    weight: 1,
  },
];

export function getAssessmentResult(score: number) {
  if (score >= 5) {
    return {
      level: 'Critical',
      tone: 'critical',
      percent: 92,
      packageName: 'Enterprise / Professional Pilot',
      summary: 'ควรเริ่ม pilot จากไซต์จริง พร้อม human approval และ audit log สำหรับระบบสำคัญ',
      actions: ['ประเมิน network visibility', 'กำหนด critical system', 'เริ่ม Edge Pro pilot'],
    };
  }

  if (score >= 3) {
    return {
      level: 'High',
      tone: 'high',
      percent: 72,
      packageName: 'Professional',
      summary: 'มีความเสี่ยงเชิงปฏิบัติการชัดเจน ควรใช้ AI explanation, recommendation และ approval workflow',
      actions: ['จัดลำดับ alert สำคัญ', 'เปิด DNS/URL guard', 'ออกแบบ response workflow'],
    };
  }

  if (score >= 1) {
    return {
      level: 'Medium',
      tone: 'medium',
      percent: 46,
      packageName: 'Standard',
      summary: 'ควรเริ่มจาก visibility หน้าไซต์และการแจ้งเตือนภาษาไทย เพื่อเห็นความเสี่ยงก่อนลุกลาม',
      actions: ['ติดตั้ง monitor mode', 'เปิด LINE/Email alert', 'ดู report รายสัปดาห์'],
    };
  }

  return {
    level: 'Low',
    tone: 'low',
    percent: 18,
    packageName: 'Free Assessment',
    summary: 'เริ่มจาก awareness report เพื่อเช็กจุดอ่อนเบื้องต้นและวางแผน security baseline',
    actions: ['สำรวจ asset สำคัญ', 'ทบทวน policy เบื้องต้น', 'นัด demo เมื่อพร้อม'],
  };
}

export default function RiskAssessment() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['monitoring', 'sensitiveData']);

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const score = useMemo(
    () => assessmentItems.reduce((total, item) => total + (selectedSet.has(item.id) ? item.weight : 0), 0),
    [selectedSet],
  );
  const result = getAssessmentResult(score);

  function toggleItem(id: string) {
    setSelectedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <section id="risk-assessment" className="section assessment-section">
      <div className="assessment-copy">
        <p className="eyebrow">Free Cyber Risk Assessment</p>
        <h2>ประเมินความเสี่ยงฟรีในหน้าเดียว แล้วรู้ว่าควรเริ่มจาก package ไหน</h2>
        <p>
          เลือกสถานการณ์ที่ตรงกับธุรกิจของคุณ ระบบจะสรุประดับความเสี่ยงเบื้องต้น แนะนำทางเริ่มต้น
          และช่วยเปลี่ยนปัญหาไซเบอร์ให้กลายเป็นแผน action ที่คุยกับเจ้าของหรือทีม IT ได้ทันที
        </p>
        <div className="assessment-note">
          <span>Private preview</span>
          <strong>คำตอบนี้ใช้ประเมินเบื้องต้นบนหน้าเว็บเท่านั้น ยังไม่มีการส่งข้อมูลหรือบันทึกข้อมูลลูกค้า</strong>
        </div>
      </div>

      <div className="assessment-tool" aria-label="Free Cyber Risk Assessment tool">
        <div className="assessment-checklist">
          {assessmentItems.map((item) => {
            const checked = selectedSet.has(item.id);

            return (
              <button
                aria-pressed={checked}
                className={checked ? 'assessment-option is-selected' : 'assessment-option'}
                key={item.id}
                onClick={() => toggleItem(item.id)}
                type="button"
              >
                <span>{checked ? '✓' : '+'}</span>
                <strong>{item.label}</strong>
              </button>
            );
          })}
        </div>

        <aside className={`assessment-result assessment-${result.tone}`}>
          <div className="assessment-result-top">
            <span>Risk level</span>
            <strong>{result.level}</strong>
          </div>
          <div className="risk-meter" aria-label={`Estimated risk ${result.percent}%`}>
            <i style={{ width: `${result.percent}%` }} />
          </div>
          <p>{result.summary}</p>
          <div className="recommended-path">
            <span>Recommended path</span>
            <strong>{result.packageName}</strong>
          </div>
          <ul>
            {result.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
          <div className="assessment-actions">
            <a className="btn btn-primary" href="mailto:hello@bangkaew-k9.example">
              ขอ Demo ตามผลประเมิน
            </a>
            <button className="btn btn-secondary" onClick={() => setSelectedIds([])} type="button">
              ล้างคำตอบ
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
