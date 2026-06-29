import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bangkaew K9 — AI Cyber Watchdog for Thai SMEs',
  description:
    'AI cybersecurity platform and commercial edge appliance for Thai SMEs. Detect early, explain clearly in Thai, and wait for human approval before critical response. ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ',
  keywords: ['cybersecurity', 'Thai SME', 'AI security', 'edge appliance', 'cyber watchdog', 'DNS protection', 'phishing detection'],
  openGraph: {
    title: 'Bangkaew K9 — AI Cyber Watchdog for Thai SMEs',
    description: 'AI cybersecurity platform + edge appliance for Thai SMEs. Detect, explain, recommend, approve. ดมไว เห่าทัน เฝ้าบ้านอย่างใส่ใจ',
    type: 'website',
    locale: 'th_TH',
    siteName: 'Bangkaew K9',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangkaew K9 — AI Cyber Watchdog for Thai SMEs',
    description: 'AI cybersecurity platform + edge appliance for Thai SMEs.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
