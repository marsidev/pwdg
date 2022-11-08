import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	site: 'https://pwdg.vercel.app',
	integrations: [tailwind(), solidJs(), robotsTxt()]
})
