import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4500', // bright orange!
        secondary: '#1e90ff', // dodger blue!
        accent: '#ff1493', // deep pink!
      }
    }
  },
  plugins: [],
};
export default config;
