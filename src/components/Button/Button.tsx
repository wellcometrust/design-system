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
export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  // autoFocus?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: keyof typeof iconMapping;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  // id?: string;
  // onBlur?: FocusEventHandler;
  // onClick?: MouseEventHandler;
  // onFocus?: FocusEventHandler;
  // onMouseEnter?: MouseEventHandler;
  // onMouseLeave?: MouseEventHandler;
  // role?: string;
  // tabIndex?: number;
  textClassName?: string;
  // type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'unstyled';
};

export type ButtonProps<
  E extends React.ElementType = React.ElementType
> = ButtonOwnProps & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

/**
 * Functional call to action
 */
export const Button = forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      as,
      autoFocus = false,
      children,
      className,
      disabled,
      href,
      icon,
      iconClassName,
      iconPlacementSwitch,
      id,
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      role,
      tabIndex,
      textClassName,
      type = 'button',
      variant = 'primary'
    }: ButtonProps<E>,
    ref: Ref<React.ComponentProps<E>>
  ) => {
    // const isAnchor = !!href;
    // const Element: React.ElementType = isAnchor ? 'a' : defaultElement;
    const Element = as || defaultElement;
    const isAnchor = Element === 'a';
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
        disabled={!isAnchor && disabled}
        href={href}
        id={id}
        onBlur={(e: FocusEvent) => {
          if (onBlur && !disabled) {
            onBlur(e);
          }
        }}
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
