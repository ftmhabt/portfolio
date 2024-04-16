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
          "0%": { top: "var(--dynamic-top)" },
          "50%": { top: "calc(var(--dynamic-top) / 1.5)" }, 
          "100%": { top: "var(--dynamic-top)" }, 
        },
      },
      animation: {
        top: "top 3000ms ease-in-out",
      },

    }
  },
  plugins: [],
}

