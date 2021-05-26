/**
 * @file Specifies properties for each component to be server side rendered
 */
import React from 'react'; // eslint-disable-line

import { Button } from '../components/Button/Button';
import { Test } from '../components/Test/Test';

export const componentMap = [
  {
    name: 'Button',
    component: <Button>Hi there</Button>
  },
  {
    name: 'Test',
    component: <Test variant="secondary">test</Test>
  }
];

export default componentMap;
