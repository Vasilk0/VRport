module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050510",
        secondary: "#0a0a1f",
        accent: "#ff1493",
        "accent-hover": "#ff69b4",
        "accent-secondary": "#9333ea",
        "accent-tertiary": "#06b6d4",
        "accent-warm": "#f472b6",
        pink: {
          400: "#f472b6",
          500: "#ec4899",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        purple: {
          400: "#c084fc",
          500: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 20, 147, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 20, 147, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(255, 20, 147, 0.08) 0%, transparent 70%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 20, 147, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
      },
    },
  },
  plugins: [],
};
