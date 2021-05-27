type ButtonProps = (
  | HTMLAttributes<HTMLButtonElement>
  | HTMLAttributes<HTMLAnchorElement>
) & {
  autoFocus?: boolean;
  className?: string;
  children: React.ReactNode;
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
  type?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'unstyled';
};
