Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: '../../prod/api',
    target: 'bun',
    format: 'esm',
    sourcemap: 'linked',
    minify: true,
    drop: ["console", "debugger", "anyIdentifier.or.propertyAccess"],
    banner: '// Hello',
    footer: '// World!',
    root: './src'
})
