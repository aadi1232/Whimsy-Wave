/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Correct way to enable dark mode using the class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all relevant files are included
  ],
  theme: {
    extend: {}, // Customize your theme if necessary
  },
  plugins: [], // Add Tailwind plugins if needed
};
