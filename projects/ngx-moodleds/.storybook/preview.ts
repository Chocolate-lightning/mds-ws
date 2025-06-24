import type {Preview} from '@storybook/angular'
import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const preview: Preview = {
    parameters: {
        a11y: {
            /*
             * Axe's context parameter
             * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#context-parameter
             * to learn more. Typically, this is the CSS selector for the part of the DOM you want to analyze.
             */
            context: 'div#storybook-root',
            /*
             * Axe's configuration
             * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure
             * to learn more about the available properties.
             */
            config: {},
            /*
             * Axe's options parameter
             * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
             * to learn more about the available options.
             */
            options: {
                /*
                 * Note that you must explicitly re-specify the defaults (all but the last array entry)
                 * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter-examples for more details
                 */
                runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
                /**
                 * If there is a failure, it will be reported as an error.
                 */
                test: 'error'
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            canvas: {
                sourceState: 'shown',
            },
        },
    },
};

export default preview;
