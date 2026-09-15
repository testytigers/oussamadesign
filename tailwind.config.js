/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        'card-bg': 'rgba(17, 17, 17, 1)',
      },
    },
  },
  plugins: [],
}
