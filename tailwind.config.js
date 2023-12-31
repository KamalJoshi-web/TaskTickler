/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      // Gradient
      BrightBlue: "hsl(220, 98%, 61%)",
      LightBlue: "hsl(192, 100%, 67%)",
      LightPurple: "hsl(280, 87%, 65%)",
      // Light Theme
      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      LightGrayishBlue: "hsl(233, 11%, 84%)",
      DarkGrayishBlue: "hsl(236, 9%, 61%)",
      VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      // Dark Theme
      VeryDarkBlue: "hsl(235, 21%, 11%)",
      VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      LightGrayishBlue: "hsl(234, 39%, 85%)",
      LightGrayishBlue_hover: "hsl(236, 33%, 92%)",
      DarkGrayishBlue: "hsl(234, 11%, 52%)",
      VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "desktop-dark": "url('./src/assets/bg-desktop-dark.jpg')",
        "desktop-light": "url('./src/assets/bg-desktop-light.jpg')",
        "mobile-dark": "url('./src/assets/bg-mobile-dark.jpg')",
        "mobile-light": "url('./src/assets/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
