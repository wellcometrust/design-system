import React, { JSX } from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';

import { Button, ButtonProps } from './Button';
import iconMapping from '../Icon/iconMapping';

function Template(args: ButtonProps): JSX.Element {
  return <Button {...args} />;
}

export const Primary = Template.bind({}) as StoryFn<ButtonProps>;
Primary.args = { children: 'Button', variant: 'primary' };

export const Secondary = Template.bind({}) as StoryFn<ButtonProps>;
Secondary.args = { children: 'Button', variant: 'secondary' };

export const Tertiary = Template.bind({}) as StoryFn<ButtonProps>;
Tertiary.args = { children: 'Button', variant: 'tertiary' };

export const Link = Template.bind({}) as StoryFn<ButtonProps>;
Link.args = { children: 'Button', variant: 'link' };

export const Unstyled = Template.bind({}) as StoryFn<ButtonProps>;
Unstyled.args = { children: 'Button', variant: 'unstyled' };

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link', 'unstyled'],
      control: { type: 'radio' },
    },
    icon: {
      options: [null, ...Object.keys(iconMapping)],
      control: {
        type: 'select',
        labels: {
          null: 'No icon',
        },
      },
    },
  },
} as Meta;
