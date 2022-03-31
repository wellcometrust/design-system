import React from 'react';
import cx from 'classnames';

import iconMapping from './iconMapping';

import './icon.scss';

export type IconProps = {
  className?: string;
  height?: string;
  name: keyof typeof iconMapping;
  viewBox?: string;
  width?: string;
};

export const Icon = ({
  className,
  height,
  name,
  viewBox,
  width
}: IconProps) => {
  const isIcon = Object.prototype.hasOwnProperty.call(iconMapping, name);

  if (!isIcon) return null;

  const IconElement = iconMapping[name];

  // small icons need additional styles to be displayed at the correct size
  const isSmall = /iconSmall/i.test(name);
  const classNames = cx('ds-icon', {
    [className as string]: className,
    'ds-icon--sm': isSmall
  });

  return (
    <span className={classNames} style={{ height, width }} aria-hidden="true">
      <IconElement viewBox={viewBox} />
    </span>
  );
};

Icon.displayName = 'Icon';

export default Icon;
