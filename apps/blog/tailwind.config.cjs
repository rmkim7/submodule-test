const path = require("path");
/** @type {import('tailwindcss').Config} */
const config = require("@repo/tailwind-config/tailwindConfig");

module.exports = {
  ...config,
  content: [
    path.resolve(__dirname, "./app/**/*.{tsx,jsx,ts,js,mdx}"),
    path.resolve(__dirname, "../../packages/ui/src/**/*.{tsx,jsx,ts,js,mdx}"),
  ],
};
