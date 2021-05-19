/**
 * @file Specifies properties for each component to be server side rendered
 */
import React from 'react'; // eslint-disable-line
import { Button } from '../components/Button/Button';

export const componentMap = [
  {
    name: 'Button',
    component: <Button>Hi there</Button>
  }
];

export default componentMap;
