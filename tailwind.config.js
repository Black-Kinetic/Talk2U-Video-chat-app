// tailwind.config.js
  module.exports = {
    mode: 'jit',
    content: [
      './**/*.{html,js,jsx,ts,tsx}'
    ],
    purge: false,
    safelist: [{ pattern: /./ }],
    theme: {
      extend: {},
    },
    plugins: [],
  }


