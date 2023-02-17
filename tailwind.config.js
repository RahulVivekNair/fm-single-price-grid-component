/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        lightcyan: "hsl(179, 47%, 52%)",
        brightYellow: "hsl(71, 73%, 54%)",
        Gray: "hsl(204, 43%, 93%)",
        GrayBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
