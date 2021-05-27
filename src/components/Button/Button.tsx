import React, { forwardRef, MouseEvent as ReactMouseEvent, Ref } from 'react';
import cx from 'classnames';

// import Icon from 'Icon/Icon';
// import Link from 'Link';

import './button.scss';

/**
 * Functional call to action
 */
export const Button = forwardRef(
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
    ref: Ref<HTMLButtonElement>
  ) => {
    const Element = href ? 'a' : 'button';
    const hasStyles = variant !== 'unstyled';
    const classNames = cx({
      'ds-btn': hasStyles,
      [`ds-btn--${variant}`]: hasStyles,
      [className as string]: className
    });
    const iconClassNames = cx('ds-btn__icon', {
      'ds-btn__icon--left': !iconPlacementSwitch,
      'ds-btn__icon--right': iconPlacementSwitch,
      [iconClassName as string]: iconClassName
    });
    const textClassNames = cx('ds-btn__text', {
      [textClassName as string]: textClassName
    });

    return (
      <Element
        autoFocus={autoFocus}
        className={classNames}
        disabled={disabled}
        href={href}
        id={id}
        onClick={(e: ReactMouseEvent) => {
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

export default Button;
