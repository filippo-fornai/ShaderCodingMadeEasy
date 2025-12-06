// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://filippo-fornai.github.io',
    base: '/ShaderCodingMadeEasy',
    vite: {
        plugins: [tailwindcss()],
    },
});
