const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mdx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',

    // additional addons
    '@whitespace/storybook-addon-html'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config) => {
    // Absolute paths
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./src/'),
      path.resolve('./src/components')
    ];

    // Ensure stories can import TypeScript files
    config.resolve.extensions.push('.ts');

    // SASS
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../')
    });

    return config;
  },
}