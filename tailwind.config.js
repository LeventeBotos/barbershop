/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#878282",
          "200": "#222",
          "300": "#111827",
          "400": "rgba(255, 255, 255, 0.07)",
        },
        darkslategray: "#333",
        burlywood: "#d3a27b",
        white: "#fff",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        ubuntu: "Ubuntu",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
