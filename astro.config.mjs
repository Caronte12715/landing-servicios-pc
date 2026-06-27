import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Con Tailwind v4 ya no necesitas pasar nada por las integrations de Astro
export default defineConfig({
  site: 'https://Caronte12715.github.io',
  base: '/landing-servicios-pc',
  vite: {
    plugins: [tailwindcss()],
  },
});