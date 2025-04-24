module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          ping: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '50%': { transform: 'scale(1.5)', opacity: '0.5' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  