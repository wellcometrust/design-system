import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

// test('Icon renders correctly', () => {
//   const { container } = render(<Icon name="icon16PxActionCross" />);
//   const icon = container.querySelector('.icon');

//   expect(icon).toBeInTheDocument();
//   expect(icon).toBeVisible();
// });

test.skip('Icon renders correctly', () => {
  const { container } = render(<Icon name="icon16PxActionCross" />);
  const icon = container.querySelector('.icon');

  // expect(screen.getByRole('presentation')).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  // expect(icon).toBeVisible();
});
