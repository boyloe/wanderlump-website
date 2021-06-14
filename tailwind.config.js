module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": "Josefin Sans",
      },
      backgroundImage: (theme) => ({
        "lumpy-belly": "url('../public/images/Lumpy_Belly.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
