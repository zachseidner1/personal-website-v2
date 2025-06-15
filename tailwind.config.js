import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        animate: {
          fadeIn: "fadeIn 0.5s ease-out",
        },
      },
    },
  },
  plugins: [typography, daisyui],
};
