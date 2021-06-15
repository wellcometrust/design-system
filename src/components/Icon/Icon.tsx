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
  name: string;
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
  const isIcon = iconMapping.has(name);

  if (!isIcon) return null;

  // const IconElement: React.ComponentType<React.ReactSVGElement> = iconMapping.get(name);
  const IconElement = iconMapping.get(name);
  const classNames = cx('ds-icon', { [className as string]: className });

  return (
    <span className={classNames} style={{ height, width }} aria-hidden="true">
      {/*
        TODO - fix type error
        JSX element type 'IconElement' does not have any construct or call signatures.

        // @ts-ignore */}
      <IconElement {...props} />
    </span>
  );
};

export default Icon;
