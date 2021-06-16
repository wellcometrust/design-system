import React from 'react';
import cx from 'classnames';

import iconMapping from './iconMapping';

import './icon.scss';

export type IconSVGProps = {
  role?: string;
  title?: string;
};

// type IconProps = React.SVGAttributes<HTMLOrSVGElement> & {
type IconProps = {
  className?: string;
  height?: string;
  name: keyof typeof iconMapping;
  role?: string;
  title?: string;
  width?: string;
};

export const Icon = ({
  className,
  height,
  name,
  width,
  ...props
}: IconProps) => {
  const isIcon = Object.prototype.hasOwnProperty.call(iconMapping, name);

  if (!isIcon) return null;

  const IconElement = iconMapping[name];
  const classNames = cx('ds-icon', { [className as string]: className });

  return (
    <span className={classNames} style={{ height, width }} aria-hidden="true">
      <IconElement {...props} />
    </span>
  );
};

export default Icon;
