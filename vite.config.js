import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: '/0x1337-website/',  // Replace with YOUR repo name
  server: {
    port: 5173
  }
})
