/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px', // Custom tablet breakpoint
      }
    }
  },
  plugins: [],
}
