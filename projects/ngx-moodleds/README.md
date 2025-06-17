# Moodle Design System

<p align="center">
  <!--<a href="CONTRIBUTING.md#pull-requests"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>-->
  <!--<a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>-->
</p>

## Introduction

This repository includes the source for the Moodle Design System - a
collection of components and sensible styling defaults aimed at making your life as a Moodle Developer easier.

## Contributing

The Moodle Design System is a MoodleHQ driven project however, we welcome suggestions from anyone who wants to help improve it.

If you plan to contribute, then you may wish to setup a local development
environment to make it easier to do so.

We highly recommend that you read our [TODO: design system contributions guide](#), which includes important information on [TODO: getting started](#getting-started).

## Installation

TODO: Add instructions for installing the design system locally.







## Building

To build the library, run:

```bash
ng build ngx-moodleds
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ngx-moodleds
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
