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
