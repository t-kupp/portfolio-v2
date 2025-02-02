/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        squarefont: 'Squarefont',
      },
      colors: {
        myLight: 'var(--myLight)',
        myDark: 'var(--myDark)',
        myDarker: 'var(--myDarker)',
      },
      backgroundColor: {
        myLight: 'var(--myLight)',
        myDark: 'var(--myDark)',
        myDarker: 'var(--myDarker)',
      },
    },
  },
  plugins: [],
};
