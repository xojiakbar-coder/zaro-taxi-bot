/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		height: {
  			'max-height': 'var(--max-height)',
  			'full-screen': 'var(--full-height)'
  		},
  		colors: {}
  	}
  },
  plugins: [],
};
