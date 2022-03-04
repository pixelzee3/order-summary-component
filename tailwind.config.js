module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'pale-blue': '#e0e8ff',
        'bright-blue': '#3829e0',
        'very-pale-blue': '#f5f7ff',
        'desaturated-blue': '#7280a7',
        'dark-blue': '#1f2f56',
      },
      backgroundImage: {
        'background-mobile': 'url("images/pattern-background-mobile.svg")',
        'background-desktop': "url('images/pattern-background-desktop.svg')",
      },
    }
  },
};
