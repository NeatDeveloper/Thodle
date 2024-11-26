Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: '../../prod/doc',
    target: 'bun',
    format: 'esm',
    sourcemap: 'external',
    minify: true,
    packages: 'bundle',
})
