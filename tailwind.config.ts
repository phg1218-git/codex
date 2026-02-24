import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        roseBrand: {
          50: "#fff1f5",
          100: "#ffe4ec",
          500: "#ec4899",
          700: "#be185d"

        },
        blush: {
          50: "#fff8fa",
          100: "#fdeef3",
          200: "#f9dce6"
        },
        ink: {
          900: "#0f172a"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
