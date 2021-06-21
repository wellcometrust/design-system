import React from 'react';

import { Icon } from './Icon';
import iconMapping from './iconMapping';

/**
 * Icon categories prefixes
 *
 * Action:          iconAction
 * Directional:     iconDirectional
 * Content:         iconContent
 * Social:          iconSocial
 * Miscellaneous:   iconMisc
 * 16px (small):    iconSmall
 */
const iconNames = Object.keys(iconMapping) as Array<keyof typeof iconMapping>;

export const IconTemplate = ({ regex }: { regex: RegExp }) => {
  const groupNames = iconNames.filter(name => regex.test(name));

  return (
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
              {name.replace(regex, '').replace(/(?<=[a-z])([A-Z])/g, ' $1')}{' '}
              <span className="sb-icon-name">({name})</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};

export const ActionIcons = () => <IconTemplate regex={/iconAction/i} />;

export const DirectionalIcons = () => (
  <IconTemplate regex={/iconDirectional/i} />
);

export const ContentIcons = () => <IconTemplate regex={/iconContent/i} />;

export const SocialIcons = () => <IconTemplate regex={/iconSocial/i} />;

export const MiscellaneousIcons = () => <IconTemplate regex={/iconMisc/i} />;

export const SmallIcons = () => <IconTemplate regex={/iconSmall/i} />;
