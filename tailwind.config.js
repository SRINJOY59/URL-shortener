/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
   "./src/components/Navbar/Navbar.tsx",
  "./src/App.tsx"],
  theme: {
    extend: {
      colors:{
        'elite-black': '#0B101B',
        'dark-gray': '#181E29',
        'lite-gray': '#C9CED6',
        'bright-blue': '#144EE3',
        'bright-pink': '#EB568E',
      }
    },
  },
  plugins: [],
}

