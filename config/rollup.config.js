import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import calc from 'postcss-calc';
import json from '@rollup/plugin-json';
import styles from 'rollup-plugin-styles';
import resolve from '@rollup/plugin-node-resolve'; // resolves all the node dependencies
import url from '@rollup/plugin-url';
import virtual from '@rollup/plugin-virtual';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ([
  /**
   * 1. Core CSS
   *
   * Output core variables, styles and utility classes.
   */
  {
    input: [
      'src/styles/core.ts',
      'src/styles/utils.ts'
    ],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: !isProduction,

      // this determines the naming of output CSS files based on input entries
      assetFileNames: '[name][extname]'
    },
    plugins: [
      styles({
        mode: 'extract',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()]
      })
    ]
  },

  /**
   * 2. React components and associated CSS
   *
   * By default Rollout creates the same number of output bundles as input
   * entries. To ensure individual CSS files are created, components also have
   * to be input individually.
   */
  {
    external: Object.keys(globals),
    input: [
      'Button/Button.tsx',
    ],
    output: {
      dir: 'dist/components',
      format: 'es',
      sourcemap: !isProduction,

      // this determines the naming of output CSS files based on input entries
      assetFileNames: '[name][extname]'
    },
    preserveModules: true, // Important if we want to code split
    plugins: [
      resolve({
        extensions,

        // Allows us to import modules absolutely from these directories
        moduleDirectories: ['./src', './src/components']
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
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

      // rollup-plugin-postcss does not extract to multiple bundles
      // so use rollup-plugin-styles instead which does
      styles({
        mode: 'extract',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()]
      }),
    ]
  },

  /**
   * 3. Component index
   *
   * To enable consuming apps to use the React components a virtual index
   * file is created to provide named exports.
   */
  {
    input: 'entry',
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'index.js'
    },
    plugins: [
      // write the index file content
      virtual({
        entry: `
        export { Button } from '/components/Button/Button';
        export { Test } from '/components/Test/Test';
        `
      })
    ]
  },
]))();
