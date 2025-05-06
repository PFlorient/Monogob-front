module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ✅ important pour détecter les classes dynamiques
    './src/**/*.{css}', // ✅ pour que Tailwind scanne aussi les .css si tu utilises @apply
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
