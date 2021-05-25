const corePlugins = require('./config/tailwind/tailwindCorePlugins');
const variants = require('./config/tailwind/tailwindVariants');
const spacing = require('./config/tailwind/tailwindSpacing');
const keyframes = require('./config/tailwind/tailwindKeyframes');
const animation = require('./config/tailwind/tailwindAnimations');
const inset = require('./config/tailwind/tailwindInset');
const fontSize = require('./config/tailwind/tailwindFontsize');
const customColors = require('./config/tailwind/tailwindCustomColors');
const plugins = require('./config/tailwind/tailwindPlugins');

module.exports = {
  corePlugins,
  variants,
  // purge: {
  //   enabled: true,
  //   mode: 'all',
  //   content: ['./src/**/*.jsx', './src/**/*.js'],
  darkMode: 'media',
  theme: {
    fontSize,
    fontFamily: {
      display: [],
      body: [],
    },
    colors: {
      ...customColors,
      // ...colors,
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {
      spacing,
      keyframes,
      animation,
      inset,
      padding: {
        full: '100%',
      },
      boxShadow: {
        custom: '0 0 0 3px rgba(127, 156, 245, 1)',
        dropdown: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
        modal: '0 3px 9px rgba(0, 0, 0, 0.5)',
        expanse: '0 0 0 0 rgba(67, 65, 144, 0.5)',
      },
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
        smMax: { max: '767px' },
      },
      backgroundImage: (_theme) => ({
        home:
          "url('https://res.cloudinary.com/seva32/image/upload/v1604597682/hero2_tozumh.jpg')",
        'home-small':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605105338/limeHeroMobile_oe8gms.jpg')",
        'home-md':
          "url('https://res.cloudinary.com/seva32/image/upload/c_crop,h_1080,q_100,w_2500,x_0,y_1570/v1605102600/limeHero_iwnf5l.jpg')",
        'product-portrait':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605473783/dogsProducts_portrait_nnigwi.png')",
        'product-landscape':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605473783/dogsProducts_landscape_llfjv8.png')",
        'all-portrait':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605875991/allProdsPort_lmtfml.jpg')",
        'all-landscape':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605875670/allProds_skefii.jpg')",
        'cats-portrait':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605875991/catsPort_i5anll.jpg')",
        'cats-landscape':
          "url('https://res.cloudinary.com/seva32/image/upload/v1605875670/cats_aeeobe.jpg')",
      }),
      zIndex: {
        negative: -1,
        998: 998,
        999: 999,
      },
      rotate: {
        360: '360deg',
      },
      scale: {
        23: '2.3',
      },
    },
  },
  plugins,
};
