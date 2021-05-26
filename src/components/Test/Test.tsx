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

type ButtonProps = {
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
    ref: Ref<HTMLButtonElement>
  ) => {
    // const Element: any = href ? 'Link' : 'button';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Element: any = href ? 'a' : 'button';
    const hasStyles = variant !== 'unstyled';
    const classNames = cx({
      'test-btn': hasStyles,
      [`test-btn--${variant}`]: hasStyles,
      [`${className}`]: className
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

export default Test;
