/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        borderColor: "borderColor 5s linear infinite",
        textColor: "textColor 5s linear infinite",
      },
      keyframes: {
        borderColor: {
          "0%, 100%": { borderColor: "#818cf8" }, // indigo-400
          "25%": { borderColor: "#bfdbfe" }, // blue-100
          "50%": { borderColor: "#a5f3fc" }, // cyan-100
          "75%": { borderColor: "#bbf7d0" }, // green-100
        },
        textColor: {
          "0%, 100%": { color: "#ffffff" }, // white
          "25%": { color: "#bfdbfe" }, // blue-100
          "50%": { color: "#a5f3fc" }, // cyan-100
          "75%": { color: "#bbf7d0" }, // green-100
        },
      },
    },
  },
  plugins: [],
};
