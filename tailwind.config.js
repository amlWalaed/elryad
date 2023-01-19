/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        orange: "#FF4D00",
        semiBlack: "#343434",
        lightBlack: "#787878",
        darkBlack: "#585858",
        banky: "#FDE1CA",
        lightBank:"#FFAE8B",
        gray:"#DDDDDD",
        green:"#12A008",
        red:"#FF1010",
        blue:"#0043FF"
      },
      boxShadow: {
        '3xl': '0 0px 16px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
