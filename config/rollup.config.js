// node-resolve will resolve all the node dependencies
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import calc from 'postcss-calc';
import sass from 'rollup-plugin-sass';
// import copy from 'rollup-plugin-copy';

const packageJson = require('../package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  external: Object.keys(globals),
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: "cjs",
      sourcemap: !isProduction
    },
    {
      dir: 'dist',
      format: "esm",
      sourcemap: !isProduction
    }
  ],
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
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/lodash.throttle/index.js': ['throttle'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
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
      extract: packageJson.style,
      minimize: isProduction,
      plugins: [autoprefixer(), calc()]
    }),
    sass({
      insert: true
    }),
    // can use copy to make sass files available for consuming apps
    // copy({
    //   targets: [
    //     {
    //       src: "src/variables.scss",
    //       dest: "dist",
    //       rename: "variables.scss"
    //     },
    //     {
    //       src: "src/typography.scss",
    //       dest: "dist",
    //       rename: "typography.scss"
    //     }
    //   ]
    // })
  ]
}))();
