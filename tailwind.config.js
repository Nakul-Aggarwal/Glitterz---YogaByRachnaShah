const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        gradient: {
          DEFAULT:
            'linear-gradient(to left, rgb(223, 79, 8), rgb(217, 137, 7), rgb(217, 137, 7))',
        },
        clay: {
          DEFAULT: '#5767AD',
          '50': '#6E7FB2',
          '100': '#6073AB',
          '200': '#4E6094',
          '300': '#404F79',
          '400': '#263246',
          '500': '#242C44',
          '600': '#11141F',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000',
        },

        gray: {
          DEFAULT: '#f9fafb',
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#646566',
          '500': '#646566',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
        },

        grey: {
          DEFAULT: '#6E7580',
          '50': '#CFD2D6',
          '100': '#C4C8CD',
          '200': '#AFB3BA',
          '300': '#9B9EA3',
          '400': '#838994',
          '500': '#6E7580',
          '600': '#545962',
          '700': '#3A3E44',
          '800': '#202225',
          '900': '#060707'
        },
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to left, rgb(87,103,173), rgb(87,103,173), rgb(87,103,173))',
        inversegradient:
          'linear-gradient(to right, rgb(87,103,173), rgb(87,103,173), rgb(87,103,173))',
        // texture: 'url(/src/assets/texturebg2.png)',
        hero: 'url(/img/Lotus-hero.png)',
        blogheader: 'url(/img/blogheader.png)',
        tutorialheader: 'url(/img/onlinetutorialhero.png)',
        servicesheader: 'url(/img/serviceshero.png)',
        blogpageheader: 'url(/img/bloghero.png)',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.4rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '10rem',
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      header: ['DM Sans', 'sans-serif'],
      hero: ['DM Sans', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
