import React, {
  forwardRef,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  Ref
} from 'react';
import cx from 'classnames';

// import Icon from 'Icon/Icon';
// import Link from 'Link';

import './button.scss';

export type ButtonProps = {
  autoFocus?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  id?: string;
  onClick?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  textClassName?: string;
  type?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'unstyled';
};

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
    // const Element: any = href ? 'Link' : 'button';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Element: any = href ? 'a' : 'button';
    const hasStyles = variant !== 'unstyled';
    const classNames = cx({
      'ds-btn': hasStyles,
      [`ds-btn--${variant}`]: hasStyles,
      [`${className}`]: className
    });
    const iconClassNames = cx('ds-btn__icon', {
      'ds-btn__icon--left': !iconPlacementSwitch,
      'ds-btn__icon--right': iconPlacementSwitch,
      [iconClassName]: iconClassName
    });
    const textClassNames = cx('ds-btn__text', {
      [textClassName]: textClassName
    });

    return (
      <Element
        autoFocus={autoFocus}
        className={classNames}
        disabled={disabled}
        to={href}
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
