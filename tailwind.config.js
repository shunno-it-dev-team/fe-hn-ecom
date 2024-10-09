/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["light"],
          primary: "Brown",
          secondary: "teal",
          "primary-content": "#fff",
          "secondary-content": "#fff",
          "accent-content": "#fff",
          "info-content": "#fff",
          "success-content": "#fff",
        },
        dark: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "Brown",
          secondary: "teal",
          "base-100": "#111827",
          "base-200": "#1F2937",
          "primary-content": "#fff",
          "secondary-content": "#fff",
          "accent-content": "#fff",
          "info-content": "#fff",
          "success-content": "#fff",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
