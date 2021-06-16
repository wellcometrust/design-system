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
    regex: /icon(24Px)?Action/
  },
  {
    label: 'Directional icons',
    regex: /icon(24Px)?Directional/
  },
  {
    label: 'Content icons',
    regex: /icon(24Px)?Content/
  },
  {
    label: 'Social icons',
    regex: /icon(24Px)?Social/
  },
  {
    label: 'Miscellaneous icons',
    regex: /icon(24Px)?Misc/
  },
  {
    label: '16px icons',
    regex: /icon16Px/
  }
];

storiesOf('Icons', module).add('Icons', () => {
  const iconNames = Object.keys(iconMapping) as Array<keyof typeof iconMapping>;
  const iconGroups = categories.map(({ label, regex }) => ({
    groupTitle: label,
    groupLabels: iconNames.filter(name => regex.test(name))
  }));

  return (
    <div>
      {iconGroups.map(({ groupTitle, groupLabels }) => (
        <section>
          <h2>{groupTitle}</h2>
          <div className="u-dis-f u-fw-wrap">
            {groupLabels.map(label => (
              <div className="u-w-20">
                <h3 className="u-fs-body-md u-fw-normal">{label}</h3>
                <Icon name={label} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
});
