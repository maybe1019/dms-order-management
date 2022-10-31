/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {



    extend: {

      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '1000px'},
        // => @media (max-width: 639px) { ... }
        'smbrick': {'max': '680px'},
        
      },



      colors: {
        blue: {
          light: '#F3F7FF',
          medium: '',
          dark: '#4489FE',
        },
        gray: {
          light: '#DADCE0',
          lighter: '#E5E9EE',
          medium: '#F1F3F4',
          dark: '#757575',
          darker: '#767676',
          border:'#C4C4C4'

        },
        black: {
          dark: '#212121',
        },
        darkLight: '#00000052',
        green: {
          dark: '#0FAA58',
          bgsuccess: 'rgba(15, 170, 88, 0.28)'
        },
        orange: {
          dark: '#FF8477'
        }
      },
      spacing: {
        27.5: '6.875rem',
        12.25: '3.0625rem',
        '3.8xl': '121.875rem',
      },

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'roboto': ['Roboto', 'sans-serif']
    },
    fontWeight: {
      medium: 500
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')

  ],
}
