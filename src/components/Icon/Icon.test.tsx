import React from 'react';
import { render, isInaccessible } from '@testing-library/react';
import Icon from './Icon';

test('Icon renders correctly', () => {
  const { container } = render(<Icon name="iconSmallActionCross" />);

  const icon = container.querySelector('.ds-icon');

  // check it exists
  expect(icon).toBeInTheDocument();
});

test('Icon is presentational only and therefore inaccessible', () => {
  const { container } = render(<Icon name="iconSmallActionCross" />);

  const icon = container.querySelector('.ds-icon');

  // verify that it can't be accessed due to aria-hidden attribute
  expect(isInaccessible(icon as Element)).toBeTruthy();
});
