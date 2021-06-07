import React, { ReactNode } from 'react';
import cx from 'classnames';

import './test.scss';

type TestProps = {
  children?: ReactNode;
  className?: string;
};

export const Test = ({ children, className }: TestProps) => {
  const classNames = cx('ds-test', {
    [className as string]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default Test;
