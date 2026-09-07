/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F5F1E8",
          200: "#EBE3D3",
          300: "#DDD2BD",
          DEFAULT: "#F7F1E2",
        },
        navy: {
          950: "#0E1827",
          900: "#18263C",
          800: "#223450",
          700: "#2E4467",
          600: "#3E5983",
          500: "#54719D",
        },
        ochre: {
          DEFAULT: "#D08E4E",
          dark: "#B87537",
          light: "#E3A56D",
          tint: "#FBF5ED",
          border: "#E9CDAE",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(24, 38, 60, 0.06)",
        card: "0 8px 30px -4px rgba(24, 38, 60, 0.08)",
        hover: "0 14px 36px -4px rgba(24, 38, 60, 0.12)",
      },
    },
  },
  plugins: [],
};
