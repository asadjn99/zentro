import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        white: "#FFFFFF",
        black: "#000000", // Your 'Primary 1' dark shade
        
        // Semantic Colors
        primary: "#000000",  // Main dark color (Text/Dark BG)
        secondary: "#DB4444", // Your red secondary color
        
        // Backgrounds
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F5F5F5", 
        "bg-tertiary": "#FEFAF1", // Your 'Second 2' cream color

        // Text & Accents
        "text-accent": "#D37643", // The orange/brown text color
        
        // Buttons
        "btn-green": "#47B486",
        "btn-red": "#DB4444",
        "btn-hover-yellow": "#E2B93B",
        "btn-hover-red": "#EB5757",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
export default config;

// import type { Config } from "tailwindcss";
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         white: "#FFFFFF",
//         black: "#363738",
//         primary: "#363738",
//         secondary: "#DB4444",
//         "bg-primary": "#FFFFFF",
//         "bg-secondary": "#F5F5F5", 
//         "text-accent": "#D37643",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;