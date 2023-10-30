import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-white': '#DBD6EB',
      'light-purple': '#7E0CEF',
      'medium-violet': '#3326BE',
      'dark-violet': '#14122B',
      'medium-purple': '#1B122B'
    }
  },
  plugins: [],
}
export default config
