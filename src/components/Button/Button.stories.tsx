import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import iconMapping from '../Icon/iconMapping';

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Button', variant: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { children: 'Button', variant: 'tertiary' };

export const Link = Template.bind({});
Link.args = { children: 'Button', variant: 'link' };

export const Unstyled = Template.bind({});
Unstyled.args = { children: 'Button', variant: 'unstyled' };

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link', 'unstyled'],
      control: { type: 'radio' }
    },
    icon: {
      options: [null, ...Object.keys(iconMapping)],
      control: {
        type: 'select',
        labels: {
          null: 'No icon'
        }
      }
    }
  }
} as Meta;
