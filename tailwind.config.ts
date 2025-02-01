import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
