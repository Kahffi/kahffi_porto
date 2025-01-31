/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        profile_animate: {
          "0%": {
            borderRadius: "100%",
          },
          "25%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "75%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "100%",
          },
        },
        indicator_move: {
          "0%": {
            borderRadius: "100%",
          },
          // "20%": {
          //   borderRadius: "90% 40% 80% 70%/60% 80% 70% 90%",
          // },
          "50%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },

          // "80%": {
          //   borderRadius: "90% 40% 80% 70%/60% 80% 70% 90%",
          // },

          "95%": {
            borderRadius: "100%",
          },
        },
      },

      animation: {
        profile_animate: "profile_animate 20s ease-in-out infinite",
        indicator_move: "indicator_move 300ms",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
