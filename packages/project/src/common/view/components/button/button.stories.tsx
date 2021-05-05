import type { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    jest: ['__tests__/button.spec.tsx']
  },
  argTypes: {
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button'
};
