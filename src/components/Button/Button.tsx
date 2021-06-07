import React, { forwardRef, MouseEvent, MouseEventHandler, ReactNode, Ref } from 'react';
import cx from 'classnames';

// import Icon from 'Icon/Icon';
// import Link from 'Link';

import './button.scss';

/**
 * TODO 8629: Polymorphic props - Use type generics to dynamically set the component props
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8629}
 */
export type ButtonProps = {
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
  type?: 'button' | 'submit' | 'reset' | undefined;
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
    // TODO - use type generics to dynamically set the ref type
    ref: Ref<HTMLAnchorElement> & Ref<HTMLButtonElement>
  ) => {
    const isAnchor = href ? true : false;
    const Element: React.ElementType = isAnchor ? 'a' : 'button';
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
        type={!isAnchor ? type : undefined}
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
