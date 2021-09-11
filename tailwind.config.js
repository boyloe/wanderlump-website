module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": "Josefin Sans",
        "barlow-condensed": "Barlow Condensed",
        lato: "Lato",
      },
      textColor: {
        "dark-brown": "#18100a",
      },
      backgroundImage: () => ({
        "lumpy-belly": "url('../public/images/Lumpy_Belly.jpg')",
        "lumpy-belly-rotate": "url('../public/images/lumpy_belly_rotate.png')",
        "big-stretch-lumpy": "url('../public/images/big-stretch-lumpy.png')",
        "trailer-sold":
          "url('../public/images/posts/our-new-home/sold-front-cropped.JPG')",
        "griffs-cropped":
          "url('../public/images/posts/griffs-campground/griffs-cropped.JPG')",
        "wine-glass":
          "url('../public/images/posts/round-lake/wine-glass-cropped.JPG')",
        "sioux-falls":
          "url('../public/images/posts/sioux-falls/lower-falls.JPG')",
        "sylvan-lake":
          "url('../public/images/posts/custer-state/sylvan-lake-rock.JPG')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
