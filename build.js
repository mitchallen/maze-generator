'use strict';

const esbuild = require('esbuild');

const base = {
    entryPoints: ['./src/index.js'],
    bundle: true,
    platform: 'node',
};

async function build() {
    await esbuild.build({ ...base, outfile: './dist/maze-generator.js' });
    await esbuild.build({ ...base, minify: true, outfile: './dist/maze-generator.min.js' });
    console.log('built dist/maze-generator.js and dist/maze-generator.min.js');
}

build().catch(() => process.exit(1));
