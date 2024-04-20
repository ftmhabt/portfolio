/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bottom: {
          "70%": { bottom: 0 }, 
          "100%": { bottom: '-300px' }, 
        },
      },
      animation: {
        bottom: "bottom 5s forwards 1s",
      },

    }
  },
  plugins: [],
}

