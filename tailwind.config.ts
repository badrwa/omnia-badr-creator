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
				display: ['Playfair Display', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Consolas', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					dark: 'hsl(var(--secondary-dark))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					secondary: 'hsl(var(--accent-secondary))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				hero: {
					bg: 'hsl(var(--hero-bg))',
					text: 'hsl(var(--hero-text))',
					accent: 'hsl(var(--hero-accent))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-border': 'var(--gradient-border)',
				'gradient-radial': 'var(--gradient-radial)',
				'gradient-conic': 'var(--gradient-conic)',
				'gradient-mesh': 'var(--gradient-mesh)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'soft': 'var(--shadow-soft)',
				'inner': 'var(--shadow-inner)',
				'neon': 'var(--shadow-neon)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'spring': 'var(--transition-spring)',
				'bounce': 'var(--transition-bounce)',
				'elastic': 'var(--transition-elastic)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'float': {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
					"25%": { transform: "translateY(-10px) rotate(1deg)" },
					"50%": { transform: "translateY(-20px) rotate(0deg)" },
					"75%": { transform: "translateY(-10px) rotate(-1deg)" }
				},
				'glow': {
					"0%": { boxShadow: "var(--shadow-card)" },
					"50%": { boxShadow: "var(--shadow-glow)" },
					"100%": { boxShadow: "var(--shadow-card)" }
				},
				'pulse-glow': {
					"0%, 100%": { 
						boxShadow: "var(--shadow-card)",
						transform: "scale(1)"
					},
					"50%": { 
						boxShadow: "var(--shadow-neon)",
						transform: "scale(1.02)"
					}
				},
				'slide-up': {
					"0%": {
						opacity: "0",
						transform: "translateY(60px) scale(0.95)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0) scale(1)"
					}
				},
				'fade-in-up': {
					"0%": {
						opacity: "0",
						transform: "translateY(40px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'scale-in': {
					"0%": {
						opacity: "0",
						transform: "scale(0.8) rotate(-5deg)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1) rotate(0deg)"
					}
				},
				'rotate-slow': {
					"from": { transform: "rotate(0deg)" },
					"to": { transform: "rotate(360deg)" }
				},
				'bounce-gentle': {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				},
				'shimmer': {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'glow': 'glow 6s ease-in-out infinite alternate',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'fade-in-up': 'fade-in-up 1s ease-out',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
