/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        top: {
          "0%": { top: "1000px" },
          "50%": { top: "250px" },
          "100%":{top:'300px'}
        }
      },
      animation: {
        top: "top 3000ms ease-in-out"
      },

    }
  },
  plugins: [],
}