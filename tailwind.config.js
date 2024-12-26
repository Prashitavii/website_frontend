/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // prefix: "tw-",
  important: true,
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         white: "#ffffff", // Ensures 'white' is explicitly defined in the theme
//       },
//     },
//   },
//   plugins: [],
//   important: true,  // Ensures all tailwind classes are given high specificity
// };
