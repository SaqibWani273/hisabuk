import {
  homepageImg1Url

} from './src/utils/const';
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Josefin Sans"', 'sans-serif'], // Set Josefin Sans as default sans-serif
      arabic: ['"Lateef"', 'Amiri', 'serif'], // Set Lateef as default serif
    },
    extend: {
      backgroundImage: {
        'homepageImg1': "url('/src/assets/images/homepage_img5.png')",
        "homepageImg2": "url('/src/assets/images/homepage_img2.png')",
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}