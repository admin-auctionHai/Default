/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".form-label": {
          "@apply text-lg font-medium text-gray-700 block text-left": "",
        },
        ".form-input": {
          "@apply mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500": "",
        },
      });
    },
  ],
}

