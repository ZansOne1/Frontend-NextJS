/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontSize: {
            'xxs': '0.625rem', // 10px
          },
      },
    },
    plugins: [],
  };
  