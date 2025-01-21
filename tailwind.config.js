/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: '#37A65A',
        themeColor: "#0C55AA",
        lightBg: "#f4f7f9",
        themeWhite: "#ffffff",
        lightYellow: "#FFD43A",
      },
      fontFamily: {
        jost: ['"Jost"', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

