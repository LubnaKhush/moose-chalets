/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playball: "Playball",
        Poppins: "Poppins",
      },
      colors: {
        heading: "#2B4931", // Custom color for text-headings
        subHeading: "#323232",
        paragraph: "#323232", // Custom color for text-paragraph
        sectionBackground: "#EEEEEEEE",
        
      },
    },
  },
  plugins: [],
};
