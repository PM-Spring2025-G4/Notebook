module.exports = {
  // Content section: tells Tailwind which files to scan for classes
  content: [
    "./index.html", // Scans the root index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript/TypeScript files in src/
  ],

  // Theme section: where you can customize your design system
  theme: {
    extend: {
      // Add your custom styles here, for example:
      // colors: {
      //   'brand': '#FF0000',
      // },
    },
  },

  // Plugins section: add additional Tailwind plugins
  plugins: [],
}
