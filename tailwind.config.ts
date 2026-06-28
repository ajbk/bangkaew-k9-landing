import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07101f',
        panel: '#0b1830',
        line: '#1b3d6b',
        cyan: '#17c7e6',
        teal: '#16d6a5',
        royal: '#2f7df6',
        amber: '#ffb020'
      },
      boxShadow: {
        glow: '0 0 50px rgba(47,125,246,0.35)',
        card: '0 24px 80px rgba(0,0,0,0.35)'
      },
      fontFamily: {
        sans: ['Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
