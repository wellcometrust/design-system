import React, {
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  Ref
} from 'react';
import cx from 'classnames';

// import Icon from 'Icon/Icon';
// import Link from 'Link';

import './button.scss';

export type ButtonProps = JSX.Element & {
  autoFocus?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: string;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  id?: string;
  onClick?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  textClassName?: string;
  type?: 'button' | 'reset' | 'submit';
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
    // explicitly provide the possible element types
    ref: Ref<HTMLAnchorElement> & Ref<HTMLButtonElement>
  ) => {
    const Element = href ? 'a' : 'button';
    const hasStyles = variant !== 'unstyled';
    const classNames = cx({
      'ds-btn': hasStyles,
      [`ds-btn--${variant}`]: hasStyles,
      [className as string]: className
    });
    // const iconClassNames = cx('ds-btn__icon', {
    //   'ds-btn__icon--left': !iconPlacementSwitch,
    //   'ds-btn__icon--right': iconPlacementSwitch,
    //   [iconClassName as string]: iconClassName
    // });
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

export default Button;
