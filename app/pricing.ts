export type K9Package = {
  id: string;
  segment: string;
  endpointSegment: string;
  name: string;
  monthlyPrice: number;
  priceUnit: string;
  includedEndpoints: number;
  includedSites: number;
  additionalEndpointPrice: number;
  additionalSitePrice: number;
  target: string;
  buyer: string;
  role: string;
  description: string;
  positioning: string;
};

export const k9Packages: K9Package[] = [
  {
    id: 'lite',
    segment: 'Lead Magnet',
    endpointSegment: 'Free Assessment',
    name: 'K9 Lite',
    monthlyPrice: 0,
    priceUnit: 'free',
    includedEndpoints: 1,
    includedSites: 0,
    additionalEndpointPrice: 0,
    additionalSitePrice: 0,
    target: 'Home users / micro SMEs',
    buyer: 'คนที่ยังไม่แน่ใจว่าตัวเองเสี่ยงแค่ไหน',
    role: 'Lead capture',
    description: 'เริ่มจาก assessment และ awareness report สำหรับคนที่อยากเห็น baseline ก่อน',
    positioning: 'ไม่ขายของก่อน ให้ลูกค้าเห็นความเสี่ยงของตัวเองแล้วค่อยแนะนำ package',
  },
  {
    id: 'home',
    segment: 'Home User',
    endpointSegment: 'Home / Smart Home',
    name: 'K9 Home',
    monthlyPrice: 199,
    priceUnit: 'home/mo',
    includedEndpoints: 5,
    includedSites: 1,
    additionalEndpointPrice: 39,
    additionalSitePrice: 0,
    target: 'Families / home office',
    buyer: 'ครอบครัว บ้านอัจฉริยะ และเจ้าของกิจการที่ทำงานจากบ้าน',
    role: 'Consumer entry',
    description: 'ปกป้องบ้านหรือโฮมออฟฟิศขนาดเล็กจาก phishing, malicious DNS และอุปกรณ์เสี่ยง',
    positioning: 'ราคาต่ำพอให้ตัดสินใจเองได้ แต่เปิดทาง upsell ไป office เมื่อธุรกิจโต',
  },
  {
    id: 'mobile',
    segment: 'Mobile Workforce',
    endpointSegment: 'Mobile / Laptop / BYOD',
    name: 'K9 Mobile',
    monthlyPrice: 149,
    priceUnit: 'user/mo',
    includedEndpoints: 3,
    includedSites: 0,
    additionalEndpointPrice: 49,
    additionalSitePrice: 0,
    target: 'Freelancers / sales teams',
    buyer: 'ทีมขาย ช่าง onsite ฟรีแลนซ์ และพนักงานที่ใช้เครื่องส่วนตัว',
    role: 'User-based add-on',
    description: 'ดูแลมือถือ แท็บเล็ต และ laptop ที่ออกนอกออฟฟิศ ด้วย phishing guard และคำเตือนภาษาไทย',
    positioning: 'คิดตามผู้ใช้ เหมาะเป็น add-on ให้ office/pro เมื่อทีมทำงานนอกสถานที่',
  },
  {
    id: 'office',
    segment: 'Micro Office',
    endpointSegment: 'Shop / Clinic / Small Office',
    name: 'K9 Office',
    monthlyPrice: 499,
    priceUnit: 'site/mo',
    includedEndpoints: 10,
    includedSites: 1,
    additionalEndpointPrice: 49,
    additionalSitePrice: 290,
    target: 'Small shops / clinics / offices',
    buyer: 'ร้านค้า คลินิก สำนักงานบัญชี โรงเรียนกวดวิชา และธุรกิจบริการขนาดเล็ก',
    role: 'Land package',
    description: 'แพ็กเกจหลักสำหรับเริ่มขาย SME: DNS/URL guard, alert ภาษาไทย และ weekly risk report',
    positioning: 'เป็นราคา anchor ที่ subsidy ช่วยแล้วเหลือหลักร้อย ทำให้เริ่ม pilot ได้ง่าย',
  },
  {
    id: 'pro',
    segment: 'Multi-Site Office',
    endpointSegment: 'SME / Branch Office',
    name: 'K9 Pro',
    monthlyPrice: 1490,
    priceUnit: 'org/mo',
    includedEndpoints: 30,
    includedSites: 3,
    additionalEndpointPrice: 39,
    additionalSitePrice: 390,
    target: 'SMEs with branches',
    buyer: 'SME ที่มีหลายแผนก หลายสาขา หรือมีระบบบัญชี/ขายที่หยุดไม่ได้',
    role: 'Expansion tier',
    description: 'เพิ่ม AI explanation, recommendation, approval workflow และ audit log สำหรับทีม IT เล็ก',
    positioning: 'ขาย productivity และ control ไม่ใช่ antivirus ทำให้ต่างจาก endpoint security ทั่วไป',
  },
  {
    id: 'ot',
    segment: 'Manufacturer',
    endpointSegment: 'Factory / OT / IoT',
    name: 'K9 OT',
    monthlyPrice: 2900,
    priceUnit: 'site/mo',
    includedEndpoints: 50,
    includedSites: 1,
    additionalEndpointPrice: 59,
    additionalSitePrice: 990,
    target: 'Small factories / OT lines',
    buyer: 'โรงงานขนาดเล็ก ไลน์ผลิต คลังสินค้า และระบบ IoT/OT ที่ต้องระวัง downtime',
    role: 'Premium vertical',
    description: 'สำหรับโรงงานขนาดเล็กที่ต้องการ monitor mode, network visibility และ response แบบระวัง downtime',
    positioning: 'ตั้งราคาสูงกว่า office เพราะ value คือ uptime, visibility และ change-control ไม่ใช่จำนวนเครื่องอย่างเดียว',
  },
  {
    id: 'enterprise',
    segment: 'Enterprise Fortress',
    endpointSegment: 'Enterprise / Franchise / Regulated',
    name: 'K9 Enterprise',
    monthlyPrice: 6900,
    priceUnit: 'org/mo',
    includedEndpoints: 100,
    includedSites: 5,
    additionalEndpointPrice: 45,
    additionalSitePrice: 690,
    target: 'Large orgs / franchises',
    buyer: 'องค์กรหลายไซต์ แฟรนไชส์ โรงพยาบาลเอกชน โรงเรียน และธุรกิจที่ต้องการ compliance',
    role: 'SLA + integration',
    description: 'รองรับ policy เฉพาะ, integration, compliance support และ SLA สำหรับองค์กรหลายไซต์',
    positioning: 'ราคาแบบ platform + managed workflow สำหรับลูกค้าที่ต้องการ SLA, integration และ compliance evidence',
  },
];

export const priceStrategyPillars = [
  {
    label: 'Endpoint-led',
    title: 'ราคาเริ่มจากบริบท endpoint ไม่ใช่แค่จำนวนเครื่อง',
    body: 'Home, mobile, office และ OT มี willingness-to-pay คนละแบบ จึงใช้ base package ต่างกัน แล้วค่อยคิด overage ตาม endpoint/site',
  },
  {
    label: 'Land & expand',
    title: 'Office เป็น package หลักสำหรับปิดดีล SME',
    body: 'K9 Office ตั้งให้รัฐช่วยแล้วเหลือหลักร้อย เพื่อเริ่ม pilot ง่าย จากนั้นขยายเป็น Pro เมื่อมีหลายสาขาหรือ workflow อนุมัติ',
  },
  {
    label: 'Premium vertical',
    title: 'Manufacturer/OT คิดจาก downtime risk',
    body: 'OT ไม่ควรแข่งราคากับ antivirus เพราะลูกค้าซื้อ visibility, safe rollout และ human approval เพื่อไม่กระทบไลน์ผลิต',
  },
  {
    label: 'Partner-ready',
    title: 'มี margin ให้ MSP และหน่วยงานสนับสนุน',
    body: 'ราคาแยก base, endpoint overage, site overage และ subsidy value ทำให้ทำ proposal กับ partner หรือโครงการรัฐได้ง่าย',
  },
];

export const subsidyPresets = [0, 100, 300, 500, 1000];

export function formatThaiBaht(amount: number) {
  return `฿${amount.toLocaleString('th-TH')}`;
}

export function clampSubsidy(amount: number) {
  if (!Number.isFinite(amount)) {
    return 0;
  }

  return Math.min(Math.max(Math.round(amount), 0), 1000);
}

export function clampCount(amount: number, min: number, max: number) {
  if (!Number.isFinite(amount)) {
    return min;
  }

  return Math.min(Math.max(Math.round(amount), min), max);
}

export function calculateSubsidy(monthlyPrice: number, requestedSubsidy: number) {
  const subsidy = clampSubsidy(requestedSubsidy);
  const appliedSubsidy = Math.min(Math.max(monthlyPrice, 0), subsidy);
  const monthlyAfterSubsidy = Math.max(monthlyPrice - appliedSubsidy, 0);

  return {
    appliedSubsidy,
    monthlyAfterSubsidy,
    annualCustomerCost: monthlyAfterSubsidy * 12,
    annualSavings: appliedSubsidy * 12,
  };
}

export function calculateEndpointQuote(
  packageItem: K9Package,
  requestedEndpoints: number,
  requestedSites: number,
  requestedSubsidy: number,
) {
  const endpoints = clampCount(requestedEndpoints, 1, 500);
  const sites = clampCount(requestedSites, packageItem.includedSites > 0 ? 1 : 0, 50);
  const endpointOverage = Math.max(endpoints - packageItem.includedEndpoints, 0);
  const siteOverage = Math.max(sites - packageItem.includedSites, 0);
  const endpointOverageCost = endpointOverage * packageItem.additionalEndpointPrice;
  const siteOverageCost = siteOverage * packageItem.additionalSitePrice;
  const monthlyBeforeSubsidy = packageItem.monthlyPrice + endpointOverageCost + siteOverageCost;
  const subsidy = calculateSubsidy(monthlyBeforeSubsidy, requestedSubsidy);

  return {
    endpoints,
    sites,
    endpointOverage,
    siteOverage,
    endpointOverageCost,
    siteOverageCost,
    monthlyBeforeSubsidy,
    ...subsidy,
  };
}

export function formatCoverage(packageItem: K9Package) {
  const endpointText = `${packageItem.includedEndpoints} endpoints`;
  const siteText = packageItem.includedSites > 0 ? `${packageItem.includedSites} site${packageItem.includedSites > 1 ? 's' : ''}` : 'remote users';

  return `${endpointText} · ${siteText}`;
}
