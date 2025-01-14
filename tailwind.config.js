/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-neutral-content-strong)",
        secondary: "var(--color-neutral-content)",
      },
      backgroundColor: {
        primary: "var(--color-neutral-background)",
        secondary: "var(--color-neutral-background-strong)",
      },
      borderColor: {
        primary: "var(--color-neutral-border-weak)",
      },
    },
  },
  plugins: [],
};
