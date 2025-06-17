import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Component/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: false,
    large: false,
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
    small: false,
    large: false,
    isDisabled: false,
  },
};

export const Large: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: false,
    large: true,
    isDisabled: false,
  },
};

export const Small: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: true,
    large: false,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    label: "Button",
    small: false,
    large: false,
    isDisabled: true
  }
};
