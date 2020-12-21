module.exports = {
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
