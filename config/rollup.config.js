import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import calc from 'postcss-calc';
import json from 'rollup-plugin-json';
import styles from 'rollup-plugin-styles';
import resolve from 'rollup-plugin-node-resolve'; // resolves all the node dependencies
import url from 'rollup-plugin-url';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ([
  // core variables and styles and utility classes
  {
    input: [
      'src/styles/core.ts',
      'src/styles/utils.ts'
    ],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: !isProduction,
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

  // components
  {
    external: Object.keys(globals),
    input: [
      'Button/Button.tsx',
    ],
    output: {
      dir: 'dist/components',
      format: 'es',
      sourcemap: !isProduction,
      assetFileNames: '[name][extname]'
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

      // rollup-plugin-postcss does not extract to multiple bundles
      // so use rollup-plugin-styles instead which does
      styles({
        mode: 'extract',
        minimize: isProduction,
        plugins: [autoprefixer(), calc()]
      })
    ]
  }
]))();
