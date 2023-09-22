/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    
    extend: {
      fontFamily: {
        'sans-serif': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#2b3945',
        'very-dark-blue': '#202c37',
        'primary': '#111517',
        'dark-gray': '#858585',
        'very-light-gray': '#fafafa',
      }
    },
  },
  plugins: [
    "prettier-plugin-foo",
  ],
}

