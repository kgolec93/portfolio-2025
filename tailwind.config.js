/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      'psp-orange': '#F4B341',
      'psp-blue': '#6BC6E6',
      'psp-black': '#171717',
      'psp-graphite': '#2C2C2C',
      'psp-antracite': '#1D1D1D',
      'psp-green': '#339452',
      'psp-dark-blue': '#4e8fd0',
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      'jumbo-home': "url('/jumbo-bg/jumbo_14.jpg')",
      "gradient-psp-blue": "linear-gradient(90deg, rgba(107,198,230,0.8) 0%, rgba(107,198,230,0) 80%)",
      "gradient-psp-orange": "linear-gradient(90deg, rgba(244,179,65,0.8) 0%, rgba(244,179,65,0) 80%)",
      "gradient-psp-blue-vert": "linear-gradient(180deg, rgba(107,198,230,0.7) 0%, rgba(107,198,230,0.5) 100%)",
      "gradient-psp-blue-vert-sub": "linear-gradient(180deg, rgb(70, 142, 168) 0%, rgba(107,198,230,0.7) 100%)",
      "gradient-psp-orange-vert-rev": "linear-gradient(180deg, rgba(244,179,65,0.8) 0%, rgba(244,179,65,0.4) 100%)",
      "gradient-psp-orange-vert": "linear-gradient(0deg, rgba(244,179,65,0.8) 0%, rgba(244,179,65,0.4) 100%)",
      "gradient-model-item": "linear-gradient(0deg, rgb(81, 146, 170) 0%, rgb(39, 39, 39) 80%)",
      "gradient-featured-item": "linear-gradient(0deg, rgba(81, 146, 170, 0.7) 0%, rgba(39, 39, 39, 0.7) 80%)",
      "gradient-material-item": "linear-gradient(0deg, rgba(244, 178, 65, 0.78) 0%, rgb(39, 39, 39) 80%)",
      "gradient-product-page": "linear-gradient(0deg, rgb(26, 26, 26) 0%, rgb(52, 54, 61) 100%)",
      "gradient-dashboard-box": "linear-gradient(25deg, rgb(41, 41, 41) 0%, rgb(52, 54, 61) 100%)",
    },
  },
};
export const plugins = [];
