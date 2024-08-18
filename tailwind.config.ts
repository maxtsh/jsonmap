import { nextui } from "@nextui-org/react";
import ContainerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "dark-1": {
          50: "hsl(225, 15%, 95%)",
          75: "hsl(230, 12%, 91%)",
          100: "hsl(229, 14%, 85%)",
          200: "hsl(233, 14%, 75%)",
          300: "hsl(233, 14%, 65%)",
          400: "hsl(233, 14%, 55%)",
          500: "hsl(234, 14%, 45%)",
          600: "hsl(235, 14%, 35%)",
          700: "hsl(233, 14%, 25%)",
          800: "hsl(235, 14%, 15%)",
          900: "hsl(232.5, 14.81%, 10.59%)",
        },
        "dark-2": {
          25: "hsl(210, 33%, 95%)",
          50: "hsl(210, 34%, 86%)",
          75: "hsl(210, 34%, 77%)",
          100: "hsl(210, 35%, 68%)",
          200: "hsl(210, 35%, 59%)",
          300: "hsl(210, 34%, 50%)",
          400: "hsl(210, 35%, 41%)",
          500: "hsl(210, 35%, 32%)",
          600: "hsl(210, 34%, 23%)",
          650: "hsl(213, 25%, 18.69%)",
          700: "hsl(210, 34%, 14%)",
          800: "hsl(207, 18%, 10%)",
          900: "hsl(210, 33%, 5%)",
        },
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        radius: {},
        borderWidth: {},
        boxShadow: {},
      },

      themes: {
        light: {
          colors: {},
        },
        dark: { colors: {} },
      },
    }),
    ContainerQueries,
  ],
};
export default config;

