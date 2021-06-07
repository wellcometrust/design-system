import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

test('Button has correct text', () => {
  const { getByText } = render(<Button>My button</Button>);
  expect(getByText('My button')).toBeInTheDocument();
});
