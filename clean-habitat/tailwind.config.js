module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cleanhabitat-gradient': 'linear-gradient(90deg, #00A4A2, #64B34D)', // Dégradé basé sur votre logo
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'], // Ajout de la police Dancing Script
      },
    },
  },
  plugins: [],
}