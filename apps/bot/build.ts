Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: '../../prod/bot',
    target: 'bun',
    format: 'esm',
    sourcemap: 'external',
    minify: true,
    packages: 'bundle',
})
