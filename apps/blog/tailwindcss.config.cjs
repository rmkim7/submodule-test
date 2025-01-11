/** @type {import('tailwindcss').Config} */
const config = require("@repo/tailwind-config/tailwindConfig");

module.exports = {
  ...config,
  content: [
    "./app/**/*.{tsx,jsx,ts,js,mdx}",
    "../../packages/ui/**/*.{tsx,jsx,ts,js,mdx}",
  ],
};
