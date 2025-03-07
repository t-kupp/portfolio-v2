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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0' },
        },
        blinkFast: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        blinkFast: 'blinkFast 0.15s infinite',
      },
    },
  },
  plugins: [],
};
