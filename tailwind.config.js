/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to check your components
  ],
  theme: {
    extend: {
      colors: {
        zomato: "#EF4F5F", // Adding Zomato's official red color
      },
    },
  },
  plugins: [],
}