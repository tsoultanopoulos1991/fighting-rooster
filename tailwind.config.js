/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New primary color scheme
        primary: {
          50: '#f0fffe',
          100: '#c7fffe', 
          200: '#95ffff',
          300: '#64ffff',  // Your main cyan color
          400: '#2dffff',
          500: '#00e5e5',
          600: '#00b3b3',
          700: '#008080',
          800: '#004d4d',
          900: '#001a1a',
        },
        // Orange accent colors
        accent: {
          50: '#fff5f0',
          100: '#ffe5d6',
          200: '#ffcaad',
          300: '#ffaf84',
          400: '#ff945b',
          500: '#ff6b35',  // Main orange accent
          600: '#e55a2b',
          700: '#cc4a21',
          800: '#b33918',
          900: '#99280e',
        },
        // Professional grays
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',  // Dark gray
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}