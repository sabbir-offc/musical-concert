/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mukta': "'Mukta', sans-serif",
      },
      backgroundImage: {
        'arijit': "url('/public/assets/artist_image/arijit.jpg')",
        'atif': "url('/public/assets/artist_image/atif.jpg')",
        'ArRahman': "url('/public/assets/artist_image/ArRahman.jpg')",
        'armaan': "url('/public/assets/artist_image/armaanMalik.jpg')",
      },
      spacing: {
        'register': 'calc(100vh - 150px)',
      }
    },
  },
  plugins: [require("daisyui")],
}

