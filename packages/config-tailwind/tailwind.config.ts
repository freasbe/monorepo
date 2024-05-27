import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      boxShadow: {
        primary: '10px 10px 0 #84cc16',
      },
      fontFamily : {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#A69077", //A69077
          "secondary": "#654F38", // 654F38
          "accent": "#fbbf24",
          "neutral": "#6C7A89",
          "base-100": "#343434",
          "info": "#ffffff",
          "success": "#34d399",
          "warning": "#fde047",
          "error": "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
