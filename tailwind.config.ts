import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xs: ["0.684rem", { lineHeight: "1rem" }], // 12px → 11.4px
        sm: ["0.7875rem", { lineHeight: "1.25rem" }], // 14px → 13.3px
        base: ["0.912rem", { lineHeight: "1.5rem" }], // 16px → 15.2px
        lg: ["1.0125rem", { lineHeight: "1.75rem" }], // 18px → 17.1px
        xl: ["1.14rem", { lineHeight: "1.75rem" }], // 20px → 19px
        "2xl": ["1.368rem", { lineHeight: "2rem" }], // 24px → 22.8px
        "3xl": ["1.7125rem", { lineHeight: "2.25rem" }], // 30px → 28.5px
        "4xl": ["2.052rem", { lineHeight: "2.5rem" }], // 36px → 34.2px
        "5xl": ["2.736rem", { lineHeight: "1" }], // 48px → 45.6px
        "6xl": ["3.42rem", { lineHeight: "1" }], // 60px → 57px
        "7xl": ["4.104rem", { lineHeight: "1" }], // 72px → 68.4px
        "8xl": ["5.472rem", { lineHeight: "1" }], // 96px → 91.2px
        "9xl": ["7.296rem", { lineHeight: "1" }], // 128px → 121.6px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
