/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2E63F6",
          "secondary": "#555B67",
          "accent": "#F3F5F9",
          "neutral": "#0F1C35",
          "base-100": "#F5F6FA",
          "info": "#0000FF",
          "success": "#5EB182",
          "warning": "#FFFF00",
          "error": "#E30A17",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}