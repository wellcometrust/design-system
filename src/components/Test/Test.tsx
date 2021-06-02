import React, { forwardRef, MouseEvent, Ref } from 'react';
import cx from 'classnames';

import { ButtonProps } from 'Button/Button';
// import Icon from 'Icon/Icon';
// import Link from 'Link';

import './test.scss';

export const Test = forwardRef(
  (
    {
      autoFocus = false,
      children,
      className,
      disabled,
      href,
      icon,
      iconClassName,
      iconPlacementSwitch,
      id,
      onClick,
      role,
      tabIndex,
      textClassName,
      type = 'button',
      variant = 'primary',
      ...props
    }: ButtonProps,
    ref: Ref<HTMLAnchorElement> & Ref<HTMLButtonElement>
  ) => {
    const Element = href ? 'a' : 'button';
    const hasStyles = variant !== 'unstyled';
    const classNames = cx({
      'test-btn': hasStyles,
      [`test-btn--${variant}`]: hasStyles,
      [className as string]: className
    });
    const iconClassNames = cx('test-btn__icon', {
      'test-btn__icon--left': !iconPlacementSwitch,
      'test-btn__icon--right': iconPlacementSwitch,
      [iconClassName as string]: iconClassName
    });
    const textClassNames = cx('test-btn__text', {
      [textClassName as string]: textClassName
    });

    return (
      <Element
        autoFocus={autoFocus}
        className={classNames}
        disabled={disabled}
        href={href}
        id={id}
        onClick={(e: MouseEvent) => {
          if (onClick && !disabled) {
            onClick(e);
          }
        }}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        type={!href ? type : null}
        {...props}
      >
        {/* {icon && !iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )} */}
        <span className={textClassNames}>{children}</span>
        {/* {icon && iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )} */}
      </Element>
    );
  }
);

export default Test;
