/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
  			dashbg: '#242731',
  			dashC: '#808191',
  			dashLight: '#fff',
  			bodybg: '#1F2128',
  			CursrC: '#EF9011',
  			levelHover: '#333',
  			rangeC: '#FF6370',
  			breakC: '#A162F7',
  			tireC: '#F6CC0D',
  			goldenC: '#E1DFA4',
  			silvrC: '#E3ECF1',
  			roseC: '#F4E3E5',
  			success: '#70CF97',
  			chipBg: '#2B2E38',
  			redFill: '#F84F56',
  			shareHead: '#E0E4E7',
  			shareRate: '#407EF9',
  			badge: 'rgba(161, 98, 247, 0.1)',
  			calendHead: '#2884FF',
  			calendSlect: '#549CFD',
  			Greenbg: '#70CF97',
  			Orangebg: '#FF764C',
			chatBg: '#2B2E38',
			iconC: "#7C7C8D",
			faceBg: "#4776D0",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			blockShadow: '0px 20px 101px rgba(3, 3, 3, 0.25)',
  			servState: '0 0 10px 8px rgba(255, 99, 112, 0.3);'
  		},
  		fontFamily: {
  			dmsansBlck: [
  				'DMSans-Black'
  			],
  			dmsansBold: [
  				'DMSans-Bold'
  			],
  			dmsansReg: [
  				'DMSans-Regular'
  			]
  		},
  		borderRadius: {
  			rd: '0px 100px 100px 0px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		margin: {
  			ma: '0 auto'
  		},
  		screens: {
  			sm: {
  				max: '640px'
  			},
  			md: {
  				max: '768px'
  			},
  			med: {
  				max: '960px'
  			},
  			lg: {
  				max: '1024px'
  			},
  			xl: {
  				max: '1280px'
  			}
  		}
    },
  },
  plugins: [],
};
