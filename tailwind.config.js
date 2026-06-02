/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        brandorange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B00', // Primary Vibrant Bio-Pharma Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        tealaccent: {
          50: '#eefcfb',
          100: '#d5f7f4',
          200: '#aeede7',
          300: '#7adad2',
          400: '#48beb7',
          500: '#00B8A9', // Secondary Biotech Teal
          600: '#00978d',
          700: '#047b74',
          800: '#09625d',
          900: '#0d514d',
        },
        softgreen: {
          50: '#f0fdf4',
          500: '#29CC74', // Accent Compliance Green
          600: '#1eb863',
        },
        darkslate: {
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
