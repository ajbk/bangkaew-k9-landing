import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bangkaew K9 — AI Cyber Watchdog for Thai SMEs',
  description:
    'AI-powered cybersecurity platform and edge appliance for Thai SMEs. ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
