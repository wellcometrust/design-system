import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import calc from 'postcss-calc';
// import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve'; // resolves all the node dependencies
import url from 'rollup-plugin-url';

// const packageJson = require('../package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

const utils = {
  input: 'src/styles/utils.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    // sourcemap: !isProduction,
    // assetFileNames: 'utils.css'
  },
  plugins: [
    postcss({
      extract: 'utils.css',
      minimize: isProduction,
      plugins: [autoprefixer(), calc()],
    }),
  ]
};

export default (async () => ([
  // core.css
  {
    input: 'src/styles/core.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      // sourcemap: !isProduction,
      // assetFileNames: 'components/[name][extname]'
    },
    plugins: [
      postcss({
        extract: 'core.css',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()],
      }),
    ]
  },
  // utils.css
  utils,
  // components
  {
    external: Object.keys(globals),
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      // sourcemap: !isProduction,
      assetFileNames: 'components/[name]/[name][extname]'
    },
    preserveModules: true, // Important if we want to code split
    plugins: [
      resolve({
        extensions,
        customResolveOptions: {
          // Allows us to import modules absolutely from these directories
          moduleDirectory: ['./src', './src/components']
        }
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
        runtimeHelpers: true
      }),
      // Minifies JS if production
      isProduction && (await import('rollup-plugin-terser')).terser(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2'],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity
      }),
      json(),
      postcss({
        // extract: 'test.css',
        extract: true,
        minimize: isProduction,
        // minimize: true,
        plugins: [autoprefixer(), calc()],
      }),
    ]
  }
]))();
