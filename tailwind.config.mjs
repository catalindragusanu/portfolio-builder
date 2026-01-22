/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Apple-inspired color palette
                primary: {
                    50: '#e6f3ff',
                    100: '#cce7ff',
                    200: '#99cfff',
                    300: '#66b8ff',
                    400: '#339fff',
                    500: '#0066cc', // True Blue - main action color
                    600: '#0052a3',
                    700: '#003d7a',
                    800: '#002952',
                    900: '#001429',
                    950: '#000a14'
                },
                accent: {
                    50: '#fff5eb',
                    100: '#ffebd6',
                    200: '#ffd6ad',
                    300: '#ffc285',
                    400: '#ff9633',
                    500: '#f56300', // Orange - excitement, novelty
                    600: '#c44f00',
                    700: '#933b00',
                    800: '#622800',
                    900: '#311400',
                    950: '#190a00'
                },
                // Apple neutrals
                apple: {
                    silver: '#e6e6e6',      // Platinum - luxury
                    gray: '#424245',         // Arsenic - sophistication
                    white: '#f5f5f7',        // Cultured White - openness
                    black: '#1d1d1f',        // Apple's signature black
                    darkgray: '#86868b',     // Secondary text
                    lightgray: '#d2d2d7'     // Borders, dividers
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['SF Mono', 'JetBrains Mono', 'Fira Code', 'monospace']
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scale-in': 'scaleIn 0.3s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 102, 204, 0.2)' },
                    '100%': { boxShadow: '0 0 30px rgba(0, 102, 204, 0.4)' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'apple-gradient': 'linear-gradient(135deg, #0066cc 0%, #f56300 100%)',
                'apple-gradient-subtle': 'linear-gradient(135deg, #0066cc 0%, #339fff 100%)'
            },
            boxShadow: {
                'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'apple-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
                'apple-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};
