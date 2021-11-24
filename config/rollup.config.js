import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import calc from 'postcss-calc';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import ignoreImport from 'rollup-plugin-ignore-import';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve'; // resolves all the node dependencies
import styles from 'rollup-plugin-styles';
import url from '@rollup/plugin-url';
import virtual from '@rollup/plugin-virtual';

import indexComponents from '../src/index.ts';
import indexStyles from '../src/index-styles.ts';

const extensions = ['.js', '.jsx', '.mdx', '.ts', '.tsx'];

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
      'src/styles/theme.ts'
    ],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: !isProduction,

      // this determines the naming of output CSS files based on input entries
      assetFileNames: '[name][extname]'
    },
    plugins: [
      // rollup-plugin-postcss does not extract to multiple bundles
      // so use rollup-plugin-styles instead
      styles({
        mode: 'extract',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()]
      })
    ]
  },


  /**
   * 2. Component CSS
   *
   * CSS is processed separately to React and JS, as opposed to importing
   * the styles into their React component and then extracting.
   * This is to prevent bundling of child component styles and therefore
   * avoids duplication of code i.e. if Button.tsx imports Icon.tsx and each
   * component imports styles the output Button.css will also include the
   * classes which are already in the output Icon.css.
   */
  {
    input: indexStyles,
    output: {
      dir: 'dist/components',

      /*
       * TODO: Replace or refactor to prevent outputting extraneous JS files
       *
       * @see {@link https://github.com/wellcometrust/corporate/issues/8793}
       */
      entryFileNames: '[name]/[name].js',
      format: 'es',
      sourcemap: !isProduction,

      // this determines the naming of output CSS files based on input entries
      assetFileNames: '[name]/[name][extname]'
    },
    plugins: [
      nodeResolve({
        // Allows us to import modules absolutely from these directories
        moduleDirectories: ['./src', './src/components']
      }),

      // rollup-plugin-postcss does not extract to multiple bundles
      // so use rollup-plugin-styles instead
      styles({
        mode: 'extract',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()]
      }),
    ]
  },

  /**
   * 3. React components
   *
   * By default Rollout creates the same number of output bundles as input
   * entries. To ensure individual CSS files are created, components also have
   * to be input individually.
   */
  {
    external: Object.keys(globals),

    input: indexComponents,
    output: {
      dir: 'dist/components',
      format: 'es',
      preserveModules: true, // Important if we want to code split
      sourcemap: !isProduction,
    },
    plugins: [
      nodeResolve({
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
      json()
    ]
  },



  /**
   * 4. Component index
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
        entry: Object.keys(indexComponents).map(entry => {
          // captures a file name minus the file extension from a given path
          // e.g. Button/Button.tsx will return a full match of `Button.`
          // and `Button` from the first capturing group
          // const regex = /(\w+)\./;
          // const entryName = entry.match(regex)[1];

          // outputs each component as a named export, one per line
          return `export { ${entry} } from '/components/${entry}/${entry}';`
        }).join('\n')
      })
    ]
  },

  /**
   * 5. Server side rendering to output component HTML
   *
   * This process relies on ssr-config being kept up to date. Long-term this
   * could be labour intensive.
   */
   {
    external: ['stream'],
    input: 'ssr/html.js',
    output: {
      file: 'ssr/html.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        extensions,
        
        // Allows us to import modules absolutely from these directories
        moduleDirectories: ['./src', './src/components'],
        preferBuiltins: true,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      commonjs(),
      ignoreImport({
        extensions: ['.scss', '.css']
      }),

      /**
       * 6. Copy and rename dist/index to provide correct type defs
       * for named exports
       *
       * This is included here to separate it from the previous process which
       * runs the virtual index build, to ensure that process completes and
       * the index file is generated before attempting to copy.
       */
      copy({
        targets: [{ src: 'dist/index.js', dest: 'dist/', rename: 'index.d.ts' }],
        verbose: true
      })
    ]
  },

]))();
