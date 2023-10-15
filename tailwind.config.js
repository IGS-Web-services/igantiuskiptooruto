/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Lexend Deca", "sans-serif"],
    },
   
    extend: {
      colors: {
        primary: "#313bac",
        secondary: "#F0F7FF",
        card: "#F1F1F1",
        designColor:"#1da1f2"
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
