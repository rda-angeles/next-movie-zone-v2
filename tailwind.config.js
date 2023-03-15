/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-primary": "#171717",
        "c-secondary": "#444444",
        "c-tertiary": "#DA0037",
        "c-quarternary": "#EDEDED",
      },
    },
  },
  plugins: [],
};
