import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from './Button';

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Button', variant: 'secondary' };
Secondary.parameters = { backgrounds: { default: 'infobox' } };

export const Ghost = Template.bind({});
Ghost.args = { children: 'Button', variant: 'ghost' };
Ghost.parameters = { backgrounds: { default: 'infobox' } };

export const Link = Template.bind({});
Link.args = { children: 'Button', variant: 'link' };

export const Unstyled = Template.bind({});
Unstyled.args = { children: 'Button', variant: 'unstyled' };

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;
