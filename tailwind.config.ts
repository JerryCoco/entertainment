import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: '#e0e0e0', // Ash-colored border
        input: '#ffffff', // White input field
        ring: '#000000', // Black ring color
        background: '#ffffff', // White background
        foreground: '#000000', // Black text

        primary: {
          DEFAULT: '#000000', // Black primary color
          foreground: '#ffffff', // White foreground text
          glow: '#a53fff' // Purple glow
        },
        secondary: {
          DEFAULT: '#ffffff', // White secondary color
          foreground: '#000000' // Black foreground text
        },
        destructive: {
          DEFAULT: '#ff4b5c', // Red for destructive actions
          foreground: '#ffffff' // White text on destructive buttons
        },
        muted: {
          DEFAULT: '#ffffff', // Muted background in white
          foreground: '#000000' // Black muted text
        },
        accent: {
          DEFAULT: '#000000', // Black accent color
          foreground: '#ffffff' // White text for accent elements
        },
        popover: {
          DEFAULT: '#ffffff', // White popover background
          foreground: '#000000' // Black popover text
        },
        card: {
          DEFAULT: '#ffffff', // White card background
          foreground: '#000000', // Black text on cards
          border: '#e0e0e0' // Ash-colored border on cards
        },
        sidebar: {
          DEFAULT: '#ffffff', // White sidebar background
          foreground: '#000000', // Black text in sidebar
          primary: '#ffffff', // White primary sidebar background
          'primary-foreground': '#000000', // Black text on primary sidebar
          accent: '#e0e0e0', // Ash accent color for sidebar
          'accent-foreground': '#000000', // Black text on accent sidebar
          border: '#e0e0e0', // Ash-colored sidebar border
          ring: '#000000' // Black ring for sidebar
        },
        entertainment: {
          'neon-pink': '#ff0066', // Neon pink
          'neon-blue': '#00ccff', // Neon blue
          'electric-purple': '#9b2aee', // Electric purple
          'cyber-green': '#00ff00' // Cyber green
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #000000, #ffffff)', // Black to White gradient
        'gradient-neon': 'linear-gradient(to right, #ff0066, #00ccff)', // Neon gradient (Pink to Blue)
        'gradient-cyber': 'linear-gradient(to right, #9b2aee, #00ff00)', // Electric Purple to Cyber Green gradient
        'gradient-dark': 'linear-gradient(to right, #2f2f2f, #0f0f0f)' // Dark gradient
      },
      borderRadius: {
        lg: '0.5rem', // Large border radius
        md: 'calc(0.5rem - 2px)', // Medium border radius with slight reduction
        sm: 'calc(0.5rem - 4px)' // Small border radius with further reduction
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
