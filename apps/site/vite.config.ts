import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { getPorts } from '@repo/utils/env';

const ports = getPorts();

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
    server: {
        port: ports.SITE_PORT,
    },
    cacheDir: './.vite',
});
