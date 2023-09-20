/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink1: "#ff7674",
        pink2: "ff7467",
        pink3: "#ff74fc",
        pink4: "#ffbc74",
      },
    },
    fontSize: {
      sm: ["10px", "12px"],
      base: ["12px", "18.77px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [],
};
