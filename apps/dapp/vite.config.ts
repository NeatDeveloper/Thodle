import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
    server: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        port: Bun.env.DAPP_PORT,
    },
    cacheDir: './.vite',
});
