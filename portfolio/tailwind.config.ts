import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    // colors: {
    //  "brightblue": "#51e2f5",
    //  "bluegreen": "#9df9ef",
    //  "dustywhite": "#f5f5f5",
    //  "pinksand": "#ffa8B6",
    //},
  },
  plugins: [],
} satisfies Config;
