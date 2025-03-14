/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
       primary: 'rgb(15,118,110)'
      }
    },
    fontFamily: {
      heading : 'Cinzel',
      primary : 'Roboto Slab',
      secondary:'Tenor Sans'
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }  
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }  
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [],
};