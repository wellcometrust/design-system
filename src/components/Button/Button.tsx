import React, {
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  Ref
} from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';
import iconMapping from 'Icon/iconMapping';

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
  icon?: keyof typeof iconMapping;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  id?: string;
  onClick?: MouseEventHandler;
  onFocus?: FocusEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  textClassName?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'unstyled';
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
      onFocus,
      onMouseEnter,
      onMouseLeave,
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
    const isAnchor = !!href;
    const Element: React.ElementType = isAnchor ? 'a' : 'button';
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
        onClick={(e: MouseEvent) => {
          if (onClick && !disabled) {
            onClick(e);
          }
        }}
        onFocus={(e: FocusEvent) => {
          if (onFocus && !disabled) {
            onFocus(e);
          }
        }}
        onMouseEnter={(e: MouseEvent) => {
          if (onMouseEnter && !disabled) {
            onMouseEnter(e);
          }
        }}
        onMouseLeave={(e: MouseEvent) => {
          if (onMouseLeave && !disabled) {
            onMouseLeave(e);
          }
        }}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        type={!isAnchor ? type : undefined}
        {...props}
      >
        {icon && !iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )}
        <span className={textClassNames}>{children}</span>
        {icon && iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )}
      </Element>
    );
  }
);

Button.displayName = 'Button';

export default Button;
