module.exports = {
  stories: ['../../src/components/**/*.stories.@(jsx|mdx|tsx)'],
  addons: [
    // essentials installed with storybook 6.2.9 
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',

    // additional addons
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
};
