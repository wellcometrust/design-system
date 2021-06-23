import React from 'react';

/*
 * IconGallery and IconItem do not present the icons very well - code is not
 * massively accessible and icon names overlap
 */

// import { IconGallery, IconItem } from '@storybook/addon-docs/blocks';

import { Icon } from './Icon';
import iconMapping from './iconMapping';

/**
 * Icon categories and prefixes
 *
 * Action:          iconAction
 * Directional:     iconDirectional
 * Content:         iconContent
 * Social:          iconSocial
 * Miscellaneous:   iconMisc
 * 16px (small):    iconSmall
 */
const iconNames = Object.keys(iconMapping) as Array<keyof typeof iconMapping>;

export const IconGroupTemplate = ({ regex }: { regex: RegExp }) => {
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

export const ActionIcons = () => <IconGroupTemplate regex={/iconAction/i} />;

export const DirectionalIcons = () => (
  <IconGroupTemplate regex={/iconDirectional/i} />
);

export const ContentIcons = () => <IconGroupTemplate regex={/iconContent/i} />;

export const SocialIcons = () => <IconGroupTemplate regex={/iconSocial/i} />;

export const MiscellaneousIcons = () => (
  <IconGroupTemplate regex={/iconMisc/i} />
);

export const SmallIcons = () => <IconGroupTemplate regex={/iconSmall/i} />;
