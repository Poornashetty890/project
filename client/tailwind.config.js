/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html',"./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px"
      }
    },
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}

