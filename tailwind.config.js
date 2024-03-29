module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Playfair Display", "sans-serif"],
      body: ["Playfair Display", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?w=740&t=st=1674289011~exp=1674289611~hmac=d951c54ac13ac20bc47ef063aa6037f059c2fc6076811a3ff75c87cba872241e')",
      },
      backgroundSize: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
