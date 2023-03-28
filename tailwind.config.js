/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2E63F6",
          "secondary": "#555B67",
          "accent": "#F3F5F9",
          "neutral": "#0F1C35",
          "base-100": "#FFFFFF",
          "base-200": "#656B8A",
          "base-300": "#F5F6FA",
          "base-400": "#5EB182",
          "info": "#0000FF",
          "success": "#e4f4ec",
          "warning": "#5EB182",
          "error": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}