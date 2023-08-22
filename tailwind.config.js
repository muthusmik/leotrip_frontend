/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppinsBold: ['Poppins-Bold'],
        poppinsRegular: ['Poppins-Regular'],
        PoppinsSemiBold: ['Poppins-SemiBold']
      },

      colors: {
        primary: '#52A0D2',
        bluebtn: '#5562D2',
        sandalbtn: '#EC8E03',
        sandalbtnborder: '#636262',
        Genderbut: '#329DE1',
      },
    },

  },
  plugins: [],
}

