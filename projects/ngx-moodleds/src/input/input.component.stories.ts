import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {InputComponent} from './input.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputComponent> = {
    title: 'Component/Input',
    component: InputComponent,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: 'Inputs are used in many places in the application to enter data.',
            },
            subtitle: 'Input Component Subtitle',
            // More on how to use DocsPage: https://storybook.js.org/docs/writing-docs/docs-page
        }
    },
    decorators: [componentWrapperDecorator((story) => `<div style="margin: 1rem">${story}</div>`)],
    args: {},
};

export default meta;
type Story = StoryObj<InputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * Example of a primary Input and autodocs throwing this to the UI.
 */
export const Primary: Story = {
    args: {
        id: 'input-id',
        type: 'text',
        placeholder: 'Input',
        small: false,
        large: false,
        isDisabled: false,
        isRequired: false,
    },
};

/**
 * Example of a Large Input and autodocs throwing this to the UI.
 */
export const Large: Story = {
    args: {
        id: 'input-id',
        type: 'text',
        placeholder: 'Input',
        small: false,
        large: true,
        isDisabled: false,
        isRequired: false,
    },
};

/**
 * Example of a Small Input and autodocs throwing this to the UI.
 */
export const Small: Story = {
    args: {
        id: 'input-id',
        type: 'text',
        placeholder: 'Input',
        small: true,
        large: false,
        isDisabled: false,
        isRequired: false,
    },
};

/**
 * Example of a Disabled Input and autodocs throwing this to the UI.
 */
export const Disabled: Story = {
    args: {
        id: 'input-id',
        type: 'text',
        placeholder: "Input",
        small: false,
        large: false,
        isDisabled: true,
        isRequired: false,
    }
};

export const Password: Story = {
    args: {
        id: 'input-id',
        type: 'password',
        placeholder: "Input",
        small: false,
        large: false,
        isDisabled: false,
        isRequired: false,
    }
};
