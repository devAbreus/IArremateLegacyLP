import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B69355',
        background: '#EEEAD6',
        secondary: '#222344',
        white: '#FFFFFF',
        // Mantendo as cores padrão do Tailwind também
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-regular': ['Montserrat', 'sans-serif'],
        'montserrat-semibold': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'semibold': '600',
      }
    },
  },
  plugins: [],
}
export default config
