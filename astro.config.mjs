// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://bver.be',
	redirects: { '/blog': '/' },
	markdown: {
		shikiConfig: { theme: 'github-dark' },
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono',
			weights: [400, 600],
			styles: ['normal', 'italic'],
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],
});
