module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": "Josefin Sans",
        "barlow-condensed": "Barlow Condensed",
      },
      textColor: {
        "dark-brown": "#18100a",
      },
      backgroundImage: (theme) => ({
        "lumpy-belly": "url('../public/images/Lumpy_Belly.jpg')",
        "lumpy-belly-rotate": "url('../public/images/lumpy_belly_rotate.png')",
        "big-stretch-lumpy": "url('../public/images/big-stretch-lumpy.png')",
        "sunset-background": "url('../public/images/sunset.png')",
        "textured-background":
          "url('../public/images/textured-background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
