import {
  homepageImg1Url

} from './src/utils/const';
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Josefin Sans"', 'sans-serif'], // Set Josefin Sans as default sans-serif
    },
    extend: {
      backgroundImage: {
        'homepageImg1': "url('/src/assets/images/homepage_img5.png')",
        "homepageImg2": "url('/src/assets/images/homepage_img2.png')",
      },
    },
  },
  plugins: [],
}