const path = require('path');
const sassPlugin = require('esbuild-plugin-sass');

require('esbuild').build({
  entryPoints: ['src/styles/core.scss', 'src/styles/theme.scss'],
  // outfile: 'dist-esb/bundle.css',
  minify: true,
  outdir: 'dist-esb',
  bundle: false,
  // plugins: [sassPlugin()]
  plugins: [sassPlugin({ 
    type: 'css', 
    includePaths: [
      path.resolve(__dirname, 'node_modules')
    ] 
  })]
})
.then(() => console.log('⚡ CSS build done'))
.catch(() => process.exit(1));
