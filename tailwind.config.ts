import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)"
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], 
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              color: 'theme("colors.primary")',
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'theme("colors.primary")',
              marginTop: 0,
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'theme("colors.primary")',
              marginTop: 0,
              lineHeight: '1.4'
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.3',
              color: 'var(--foreground)',
            },
            a: {
              lineHeight: '1.4',    
              color: 'var(--foreground)',
              textDecoration: 'none',
            },
            button: {
              display: 'inline-block',
              fontWeight: '600',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            },
          },
        },
        md: {
          css: {
            h2: {
              fontSize: '1.875rem'
            },
          }
        },
        lg:{
          css: {
            p: {
              lineHeight: 1.4
            }
          }
        }
      },
      backgroundImage: {
        'slick-overlay': 'linear-gradient(50deg, #0000005c 11%, #00000000 32%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
} satisfies Config;
