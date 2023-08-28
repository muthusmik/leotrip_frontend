/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mdlg: '912px', // New breakpoint between md and lg
      // => @media (min-width: 912px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1310px',
      // => @media (min-width: 1310px) { ... }

      lgxl: '1280px', // New breakpoint between lg and xl
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      slideOutTop: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
      },
      },
      animation: {
        'fade-out': 'fadeOut 1s ease-in-out',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-top': 'slideInTop 0.5s ease-out',
        'slide-out-top': 'slideOutTop 0.5s ease-out',
      },
      boxShadow: {
        card: '0px 20px 44px #C9D3D7, 0px 1px 2px rgba(0, 0, 0, 0.15)',
        timer: '0px 13px 14px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.4)',
        table: '0px 2px 3px -1px rgba(0, 0, 0, 0.14)',
        'media-player-control': '0px 11px 24px -1px rgba(0, 0, 0, 0.25)',
        patientInfo: '0px 6px 14px rgba(0, 0, 0, 0.05), 0px 0.5px 0px #ECEFF0',
      },
      dropShadow: {
        'diashow-img': '0px 14px 94px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateRows: {
        admin: 'auto 1fr auto',
      },
      fontFamily: {
        poppinsBold: ['Poppins-Bold'],
        poppinsRegular: ['Poppins-Regular'],
        PoppinsSemiBold: ['Poppins-SemiBold'],
        poppinsBlack: ['poppins-Black'],
      },

      colors: {
        'int-sandal': '#FBB040',
        "primary": '#52A0D2',
        bluebtn: '#5562D2',
        "int-yellow": '#F5B540',
        sandalbtnborder: '#636262',
        Genderbut: '#329DE1',
        'int-sandal':'#FBB040',
        'int-green-alert': '#97D382',
        'int-black': '#000000',
        'int-light-blue': '#ECEFF0',
        'int-grey-100': '#151B26',
        'int-grey-90': '#454950',
        'int-grey-60': '#6F7782',
        'int-grey-40': '#9BA6B5',
        'int-grey-30': '#B2BAC6',
        'int-gray-20': '#CBCFD5',
        'int-mid-blue': '#D3E4E8',
        'int-dark-blue': '#56A0BB',
        'int-very-dark-blue': '#498EA8',
        'int-green': '#B2DAA4',
        'int-green-alert': '#97D382',
        'int-dark': '#333333',
        'int-background': '#FAFAFA',
        'int-red': '#EB5757',
        'int-brown': '#EC8E03',
      },
      fontSize: {
        button: [
          '14px',
          {
            letterSpacing: '0.05em',
            lineHeight: '22.4px',
          },
        ],
        link: ['16px', '25.6px'],
        'body-small': ['14px', '22.4px'],
        body: ['16px', '24px'],
        h3: ['16px', '21px'],
        h2: ['18px', '26.3px'],
        h1: ['24px', '31.2px'],
        small: ['11px', '15,4'],
        timer: ['74px', '96.2px'],
        'bottom-clock': ['33px', '52.8px'],
        'chat-date': ['14px', '19.6px'],
        subtitle: ['12px', '16.8px'],
      },
    },

  },
  plugins: [],
}

