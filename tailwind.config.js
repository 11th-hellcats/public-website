/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f15',
        panel: '#111824',
        ink: '#e6edf3',
        muted: '#a7b6c8',
        accent: '#be331b',
        accent2: '#7c0d03',
      },
      boxShadow: {
        glow: '0 8px 28px rgba(88,224,162,.35)'
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"]
      }
    }
  },
  plugins: []
};
