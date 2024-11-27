import adapter from '@repo/adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            out: '../../prod/admin',
            port: process.env.ADMIN_PORT
        }),
        files: {
            lib: './lib',
            routes: './template/routes',
            appTemplate: './template/index.html',
            errorTemplate: './template/error.html',
        },
        alias: {
            lib: './lib',
            stores: './lib/stores',
            components: './src/components',
            sections: './src/sections',
        }
    },
    compilerOptions: {
        runes: true
    }
};

export default config;
