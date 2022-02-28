module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      colors: {
        pink: "#f794ab",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
