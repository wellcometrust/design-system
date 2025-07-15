import React from 'react';

/*
 * IconGallery and IconItem do not present the icons very well - code is not
 * massively accessible and icon names overlap
 */

// import { IconGallery, IconItem } from '@storybook/addon-docs';

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
export default {};
const iconNames = Object.keys(iconMapping) as Array<keyof typeof iconMapping>;

export function IconGroupTemplate({ regex }: { regex: RegExp }) {
  const groupNames = iconNames.filter((name) => regex.test(name));

  return (
    <ul className="sb-grid">
      {groupNames.map((name) => (
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
}

export function ActionIcons() {
  return <IconGroupTemplate regex={/iconAction/i} />;
}

export function DirectionalIcons() {
  return <IconGroupTemplate regex={/iconDirectional/i} />;
}

export function ContentIcons() {
  return <IconGroupTemplate regex={/iconContent/i} />;
}

export function SocialIcons() {
  return <IconGroupTemplate regex={/iconSocial/i} />;
}

export function MiscellaneousIcons() {
  return <IconGroupTemplate regex={/iconMisc/i} />;
}

export function SmallIcons() {
  return <IconGroupTemplate regex={/iconSmall/i} />;
}
