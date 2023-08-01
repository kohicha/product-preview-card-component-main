/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
        Montserrat: "Montserrat",
        Fraunces: "Fraunces"
      },
    extend: {
      backgroundImage:{
        'imageproduct': "url('images\image-product-desktop.jpg')",
        'imagemobile': "url('images\image-product-mobile.jpg')"
      },
      

    },
  },
  plugins: [],
}

