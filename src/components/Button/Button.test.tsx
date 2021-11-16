import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

test('Button has correct text', () => {
  render(<Button>Text button</Button>);

  const button = screen.getByRole('button', {
    name: /text button/i
  });

  expect(button).toBeInTheDocument();
});

test('Disabled Button component is not accessible', () => {
  render(<Button disabled>Text button</Button>);

  const button = screen.getByRole('button', {
    name: /text button/i
  });

  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});
