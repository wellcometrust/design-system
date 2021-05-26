import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import './styles/storybook-app.scss';

addParameters({
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
  docs: {
    container: DocsContainer,
    page: DocsPage,
    source: {
      state: 'open',
    }
  }
});
