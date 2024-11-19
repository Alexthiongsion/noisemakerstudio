/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      black: "#000000",
      grey: "#b0a8b9",
      purple :"#845ec2",
      white: "FFFFFF",

    },
    fontFamily: {
      sans: ['Tenor sans', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}

