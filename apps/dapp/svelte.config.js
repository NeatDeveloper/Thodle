import adapter from '@repo/adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
            out: "../../prod/dapp",
            port: process.env.DAPP_PORT,
        }),

        alias: {
            lib: './lib',
            stores: './lib/stores',
        },

        files: {
            appTemplate: './template/index.html',
            errorTemplate: './template/error.html',
            assets: './static',
            hooks: {
                server: './lib/hooks/server.ts',
                client: './lib/hooks/client.ts',
                universal: './lib/hooks/universal.ts',
            },
            lib: './lib',
            routes: './template/routes',
            serviceWorker: './src/worker.ts'
        }
	},
    compilerOptions: {
        runes: true,
    }
};
