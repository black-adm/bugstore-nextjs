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
        'primary-white': '#DBD6EB',
        'primary-grey': '#F1F0E8',
        'light-purple': '#7E0CEF',
        'light-violet': '#BEADFA',
        'medium-violet': '#3326BE',
        'dark-violet': '#14122B',
        'medium-purple': '#1B122B'
      },
      gridTemplateRows: {
        'app': 'min-content max-content'
      }
    }

  },
  plugins: [],
}
export default config
