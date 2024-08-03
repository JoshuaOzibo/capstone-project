module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `radial-gradient(at 27% 37%, hsla(215, 30%, 90%, 1) 0px, transparent 0%),
                           radial-gradient(at 97% 21%, hsla(125, 30%, 90%, 1) 0px, transparent 50%),
                           radial-gradient(at 52% 99%, hsla(354, 30%, 90%, 1) 0px, transparent 50%),
                           radial-gradient(at 10% 29%, hsla(256, 30%, 90%, 1) 0px, transparent 50%),
                           radial-gradient(at 97% 96%, hsla(38, 30%, 90%, 1) 0px, transparent 50%),
                           radial-gradient(at 33% 50%, hsla(222, 30%, 90%, 1) 0px, transparent 50%),
                           radial-gradient(at 79% 53%, hsla(343, 30%, 90%, 1) 0px, transparent 50%)`,
      },
    },
  },
  plugins: [],
};
