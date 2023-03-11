/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ctm: "90rem",
      },
      lineHeight: {
        error: "1.62",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      minHeight: {
        picture: "6.5rem",
      },
      maxWidth: {
        "card-1": "21.8125rem",
        "card-2": "24rem",
        "card-default": "22.6875rem",
      },
      fontSize: {
        vsm: "0.625rem",
        small: ["0.4375rem", "0.0357rem"],
        "clamp-24-40": ["clamp(1.5rem, 3vw, 2.5rem)", "150%"],
        "clamp-14-20": ["clamp(0.875rem, 1.5vw, 1.25rem)", "150%"],
        base: ["clamp(0.875rem, 1.2vw, 1rem)", "1.5rem"],
        "clamp-18-32": ["clamp(1.125rem, 2.5vw, 2rem)", "150%"],
      },
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonials": "hsl(219, 30%, 18%)",
        "dark-form": "hsla(217, 28%, 15%, 1);",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
