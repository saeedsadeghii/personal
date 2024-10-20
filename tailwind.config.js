import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
      rubik: ['var(--font-rubik)', 'sans-serif'],
    },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
      },
      backgroundImage: {
        'saeed-pattern': "url('@/assets/saeedPics/Picsart_24-10-19_00-03-48-982.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
