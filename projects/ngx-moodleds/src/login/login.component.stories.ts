import type {Meta, StoryObj} from '@storybook/angular';
import {expect} from 'storybook/test';
import {LoginComponent} from './login.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LoginComponent> = {
    title: 'Component/Login',
    component: LoginComponent,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: 'Login is the entry point into the application.',
            },
            subtitle: 'Login Component Subtitle',
            // More on how to use DocsPage: https://storybook.js.org/docs/writing-docs/docs-page
        }
    },
    args: {},
};

export default meta;
type Story = StoryObj<LoginComponent>;

export const EmptyForm: Story = {
    play: async ({canvas, userEvent}) => {
        // 👇 Simulate interactions with the component
        // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
        await userEvent.click(canvas.getByRole('button'));

        // 👇 Assert DOM structure
        await expect(
            canvas.getByText(
                'Please enter your Username.'
            )
        ).toBeVisible();
        await expect(
            canvas.getByText(
                'Please enter your Password.'
            )
        ).toBeVisible();
    },
};

export const FilledForm: Story = {
    play: async ({canvas, userEvent}) => {
        // 👇 Simulate interactions with the component
        await userEvent.type(canvas.getByPlaceholderText('Username'), 'email@provider.com');

        await userEvent.type(canvas.getByPlaceholderText('Password'), 'a-random-password');

        // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
        await userEvent.click(canvas.getByRole('button'));

        // 👇 Assert DOM structure
        await expect(
            canvas.getByText(
                'Everything is perfect. Your account is ready and we should probably get you started!'
            )
        ).toBeVisible();
    },
};
