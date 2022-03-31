const { build } = require('esbuild');
const path = require('path');
const sassPlugin = require('esbuild-plugin-sass');

const isProduction = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV)

const indexComponents = [
  'Button/Button',
  'Icon/Icon'
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

build({
  entryPoints: ['src/index.ts', ...indexComponents],
  bundle: false,
  // external: Object.keys(globals),
  format: 'esm',
  // outfile: 'dist-esb/index.js',
  outbase: '',
  outdir: 'dist-esb',
  plugins: [sassPlugin({
    type: 'css',
    includePaths: [
      path.resolve(__dirname, 'node_modules')
    ]
  })],
  // loader: {".ts": "ts"},
  minify: isProduction,
  sourcemap: !isProduction,
  splitting: true,
  target: ["esnext", "node15.0.1"]
})
.then(() => console.log("⚡ JS build done"))
.catch(() => process.exit(1))
