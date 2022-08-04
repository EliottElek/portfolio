module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(4deg)" },
          "20%": { transform: "rotate(-4deg)" },
          "30%": { transform: "rotate(4deg)" },
          "40%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(4.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slide: {
          "0%": { transform: "translateY(0%)" },
          "10%": { transform: "translateY(50%)" },
          "20%": { transform: "translateY(100%)" },
          "30%": { transform: "translateY(50%)" },
          "40%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(50%)" },
          "60%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
    animation: {
      "waving-arrow": "wave 2s linear infinite",
      "sliding-arrow": "slide 2s linear infinite",
      "text-translate": "text 1s linear",
    },
  },
  plugins: [],
};
