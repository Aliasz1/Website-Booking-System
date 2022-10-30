/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#2E87FA',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#08531A',
      'lightgreen': '#00800B',
      'yellow': '#DFD746',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#292929',
      'white': '#FFFFFF',
      'sienna': '#EE6C4D',
      'cyan': '#e0fbfc',
      'dark-gray': '#293241',

    },
    fontFamily: {
      sans: ["Helvetica Neue", 'sans-serif'],
      mono: ['monospace', 'serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'carousel': '0.8rem',
      'full': '9999px',
      'large': '12px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}