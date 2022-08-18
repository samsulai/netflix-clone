module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
     screens: {
      'sm': '400px',
     
      'md': '768px',
      

      'lg': '976px',
      

      'xl': '1440px',
      'ds': '1920px',
      'dm': '2480px',
      'dl': '2700px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
  ],
}