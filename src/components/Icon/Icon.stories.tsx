import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from './Icon';
import iconMapping from './iconMapping';

/**
 * The legacy storiesOf module is used to render components dynamically as there
 * is no way of doing this in Component Story Format (CSF) currently.
 *
 * @see {@link https://github.com/storybookjs/storybook/issues/9828}
 */

const categories = [
  {
    label: 'Action icons',
    regex: /icon(24Px)?Action/i
  },
  {
    label: 'Directional icons',
    regex: /icon(24Px)?Directional/i
  },
  {
    label: 'Content icons',
    regex: /icon(24Px)?Content/i
  },
  {
    label: 'Social icons',
    regex: /icon(24Px)?Social/i
  },
  {
    label: 'Miscellaneous icons',
    regex: /icon(24Px)?Misc/i
  },
  {
    label: '16px icons',
    regex: /icon16Px/i
  }
];

storiesOf('Icons', module).add('Icons', () => {
  const iconNames = Object.keys(iconMapping) as Array<keyof typeof iconMapping>;
  const iconGroups = categories.map(({ label, regex }) => ({
    groupNames: iconNames.filter(name => regex.test(name)),
    groupTitle: label,
    regex
  }));

  return (
    <div>
      {iconGroups.map(({ groupTitle, groupNames, regex }) => (
        <section key={groupTitle} className="sb-section">
          <h2 className="sb-section__title">{groupTitle}</h2>
          <ul className="sb-grid">
            {groupNames.map(name => (
              <li key={name} className="sb-grid__item">
                <figure className="sb-icon-figure">
                  <span className="sb-icon-container">
                    <span className="sb-icon-tap-area">
                      <Icon name={name} />
                    </span>
                  </span>
                  <figcaption>
                    {name
                      .replace(regex, '')
                      .replace(/(?<=[a-z])([A-Z])/g, ' $1')}{' '}
                    <span className="sb-icon-name">({name})</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
});
