import adapter from '@repo/adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            out: '../../prod/site',
            port: process.env.SITE_PORT
        }),
    },
    compilerOptions: {
        runes: true
    }
};

export default config;
