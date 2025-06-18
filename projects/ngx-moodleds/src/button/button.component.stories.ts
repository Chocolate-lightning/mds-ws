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
  parameters: {
    docs: {
      description: {
        component: 'Buttons are used in many places in the application to trigger actions or navigate.' +
          'Badges also work when parsed through autodocs: <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>',
      },
      subtitle: 'Button Component Subtitle',
      // More on how to use DocsPage: https://storybook.js.org/docs/writing-docs/docs-page
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * Example of a primary button and autodocs throwing this to the UI.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: false,
    large: false,
    isDisabled: false,
  },
};

/**
 * Example of a Secondary button and autodocs throwing this to the UI.
 */
export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
    small: false,
    large: false,
    isDisabled: false,
  },
};

/**
 * Example of a Large button and autodocs throwing this to the UI.
 */
export const Large: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: false,
    large: true,
    isDisabled: false,
  },
};

/**
 * Example of a Small button and autodocs throwing this to the UI.
 */
export const Small: Story = {
  args: {
    primary: true,
    label: 'Button',
    small: true,
    large: false,
    isDisabled: false,
  },
};

/**
 * Example of a Disabled button and autodocs throwing this to the UI.
 */
export const Disabled: Story = {
  args: {
    primary: true,
    label: "Button",
    small: false,
    large: false,
    isDisabled: true
  }
};
