module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    scale: {
      '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '90': '.9',
     '95': '.95',
    '100': '1',
    '105': '1.05',
    '110': '1.1',
    '125': '1.25',
    '150': '1.5',
    '200': '2',
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
    '100': 100,
   'auto': 'auto',
    }
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
}
