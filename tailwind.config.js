/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dashbg':"#242731",
        'dashC': "#808191",
        'dashLight':"#fff",
        'bodybg':'#1F2128',
        'CursrC': '#EF9011',
        'levelHover': "#333",
        'rangeC': '#FF6370',
        'breakC': '#A162F7',
        'tireC': '#F6CC0D',
        'goldenC': '#E1DFA4',
        'silvrC': '#E3ECF1',
        'roseC':'#F4E3E5',
        'success': '#70CF97',
        'chipBg': '#2B2E38'
      },
      boxShadow: {
        'blockShadow':'0px 20px 101px rgba(3, 3, 3, 0.25)'
      },
      fontFamily: {
        dmsansBlck: ["DMSans-Black"],
        dmsansBold: ["DMSans-Bold"],
        dmsansReg: ["DMSans-Regular"],
      },
      borderRadius:{
        'rd': '0px 100px 100px 0px',
      },
      margin:{'ma': "0 auto"},
      screens:{
        'sm': { max: '640px'},
        'md': { max: '768px'},
        'med': {max: '960px'},
        'lg': { max: '1024px'},
        'xl': { max: '1280px'}
      }
    },
  },
  plugins: [],
}
