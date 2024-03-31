/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["'Inter'", "'sans-serif'"],
    },
    screens: {
      xs: { max: "360px" },
      sm: { max: "650px" },
      l: { max: "1023px" },
      m: { max: "800px" },
      s: { max: "480px" },
      xl: { max: "1200px" },
    },
    backgroundImage: {
      bgabs: "url('/pexels-asim-alnamat-32997.jpg')",
    },
  },
  plugins: [],
};
