const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/index.tsx',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    typescript(),
  ]
};