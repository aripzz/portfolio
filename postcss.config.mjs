const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            'dark-bg': '#0F111A',
            'light-text': '#FFFFFF',
            'secondary-text': '#B0B0B0',
            'button-bg': '#1D4ED8',
            'ecommerce-bg': '#D6BCFA',
            'cms-bg': '#BFDBFE',
            'fitness-bg': '#BFDBFE',
          },
        },
      },
      plugins: [],
    },
  },
};

export default config;
