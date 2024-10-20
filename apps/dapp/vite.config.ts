import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    // @ts-ignore
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
    server: {
        port: Bun.env.DAPP_PORT,
    },
    cacheDir: './.vite'
});
