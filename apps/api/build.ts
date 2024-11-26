Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: '../../prod/api',
    target: 'bun',
    format: 'esm',
    sourcemap: 'external',
    minify: true,
    packages: 'bundle',
})
