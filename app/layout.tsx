import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bangkaew K9 — AI Cyber Watchdog for Thai SMEs',
  description:
    'AI cybersecurity platform and commercial edge appliance for Thai SMEs. Detect early, explain clearly, and wait for human approval before critical response.',
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
