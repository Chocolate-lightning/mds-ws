import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {fireEvent, within} from 'storybook/test';
import {ButtonComponent} from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
    title: 'Component/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'onClick' }
    },
    parameters: {
        docs: {
            description: {
                component: 'Buttons are used in many places in the application to trigger actions or navigate.' +
                    ' They can be styled as primary or secondary buttons, and can also be sized as small or large.' +
                    ' Buttons within the Moodle design system are based off Bootstrap styling.' +
                    'Badges also work when parsed through autodocs: <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>',
            },
            subtitle: 'Moodle Button examples',
            // More on how to use DocsPage: https://storybook.js.org/docs/writing-docs/docs-page
        },
    },
    decorators: [componentWrapperDecorator((story) => `<div style="margin: 1rem">${story}</div>`)],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        // Simulates clicking the button
        await fireEvent.click(canvas.getByText('Button'));
        window.console.log('Button clicked!'); // This is just for demonstration purposes
    }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/**
 * Example of a primary button and autodocs throwing this to the UI.
 */
export const Primary: Story = {
    args: {
        type: 'submit',
        primary: true,
        label: 'Button',
        small: false,
        large: false,
        isDisabled: false,
    },
};

/**
 * Example of a Secondary button. The secondary button is used for less important actions or to complement the primary button.
 */
export const Secondary: Story = {
    args: {
        type: 'submit',
        primary: false,
        label: 'Button',
        small: false,
        large: false,
        isDisabled: false,
    },
};

/**
 * Example of a Large button. This button is larger than the standard button and is used for emphasis or to draw attention to a specific action.
 */
export const Large: Story = {
    args: {
        type: 'submit',
        primary: true,
        label: 'Button',
        small: false,
        large: true,
        isDisabled: false,
    },
};

/**
 * Example of a Small button. This button is smaller than the standard button and is used for less prominent actions or in compact layouts.
 */
export const Small: Story = {
    args: {
        type: 'submit',
        primary: true,
        label: 'Button',
        small: true,
        large: false,
        isDisabled: false,
    },
};

/**
 * Example of a Disabled button. This button is not clickable and is used to indicate that the action is not available at the moment.
 */
export const Disabled: Story = {
    args: {
        type: 'submit',
        primary: true,
        label: "Button",
        small: false,
        large: false,
        isDisabled: true,
    },
};
