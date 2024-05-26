/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27AE60",
        blackprimary: "#161513",
        blacksecondary: "#1C1C22",
        whiteprimary: "#F0F2F5",
        whitesecondary: "#FFFFFF",
      }
    }
  },
  plugins: [],
};
