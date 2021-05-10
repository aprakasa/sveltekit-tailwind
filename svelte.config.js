import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
		postcss: true,
		defaults: { style: 'postcss' }
	})
};

export default config;
