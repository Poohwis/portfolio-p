import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			lightgray: '#efefef',
  			midgray: '#bcbcbc',
  			darkgray: '#545454',
  			orange: '#f73503',
  			lime: '#b1f700',
  			primary: '#B17457',
  			secondary: '#F5EFE7'
  		},
  		animation: {
  			blob: 'blob 7s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			blob: {
  				'0%': {
  					transfrom: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transfrom: 'translate(30px, -50px) scale(1.1)'
  				},
  				'66%': {
  					transfrom: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transfrom: 'translate(0px, 0px)scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
