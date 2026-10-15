/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        charcoal: '#2F3E4D',
        'charcoal-light': '#3D4F61',
        wood: {
          DEFAULT: '#C49A6C',
          dark: '#8B7355',
          light: '#D4B894',
        },
        cream: '#F5F5F5',
        sand: '#D3D3C9',
        sage: '#6B8E23',
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
