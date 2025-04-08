/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/space-bg.jpg')", // רקע לחלל אם אתה רוצה להשתמש בו כ־bg-space
      },
    },
  },
  plugins: [],
};
