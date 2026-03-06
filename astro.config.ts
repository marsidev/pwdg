import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import solidJs from '@astrojs/solid-js'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	site: 'https://pwdg.vercel.app',
	integrations: [solidJs(), robotsTxt()],
	vite: {
		plugins: [tailwindcss()]
	}
})
