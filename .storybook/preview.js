import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './styles/storybook-app.scss';

export const parameters = {
  options: {
    name: 'Wellcome Design System',
    url: 'https://designsystem.wellcome.org',
    storySort: {
      order: ['Global', 'Components']
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: 'page header',
        value: 'var(--colour-amber-05)',
      },
      {
        name: 'infobox',
        value: 'var(--colour-cyan-05)',
      },
      {
        name: 'grey',
        value: 'var(--colour-grey-20)',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    source: {
      state: 'open',
    }
  }
}