/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{tsx,jsx, ts, js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",


  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}

