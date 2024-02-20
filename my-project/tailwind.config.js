/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: {"max": "410px"},
      },
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyanBackground: "hsl(180, 52%, 96%)",
        LightGrayishCyanFilterTablets: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
}