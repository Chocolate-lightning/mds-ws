# Moodle Design System Workspace

[![npm version](https://badge.fury.io/js/ngx-moodleds.svg)](https://badge.fury.io/js/ngx-moodleds)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Angular Build](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/node.js.yml/badge.svg)](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/node.js.yml)
[![Run Angular CLI Update](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/ng-update.yml/badge.svg)](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/ng-update.yml)
[![Chromatic](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/chromatic.yml/badge.svg)](https://github.com/Chocolate-lightning/mds-ws/actions/workflows/chromatic.yml)

# Getting Started

Welcome! Whether you're a designer or a developer, this guide will help you get started and connect you to the essential resources you need.

## Table of Contents

- [Design Resources](#design-resources)
- [Figma](#figma)
- [UI/UX Design Guidelines](#uiux-design-guidelines)
- [Design Assets](#design-assets)

- [Development Resources](#development-resources)
- [Coding Standards](#coding-standards)
- [Version Control](#version-control)
- [Development Tools](#development-tools)
- [Building](#building)
- [Publishing the Library](#publishing-the-library)
- [Running unit tests](#running-unit-tests)
- [Viewing the components within Storybook](#viewing-the-components-within-storybook)

## Design Resources

### Figma

[Figma](https://www.figma.com/) is a collaborative design and prototyping tool. It's the heart of the design process, allowing designers to work together seamlessly.

- **Get Access**: If you're not already part of the Figma project, request access from the project lead or manager.

### UI/UX Design Guidelines

Before you dive into designing, familiarize yourself with our UI/UX design guidelines. They provide valuable insights into our design philosophy and standards.

- [UI/UX Guidelines Document](https://your-design-guidelines-link.com)

### Design Assets

All the essential design assets like logos, icons, and brand guidelines can be found in the Figma project. Ensure you have access and familiarize yourself with these assets for consistency.

## Development Resources

### Coding Standards

Maintaining a consistent code style is essential for collaborative development. Our coding standards document will guide you on best practices.

- [Coding Standards Document](https://your-coding-standards-link.com)

### Version Control

We use Git for version control. Make sure you have Git installed and are familiar with its basics.

### Development Tools

Your development environment is critical. Here are some tools and resources to help you set up your workspace:

- **Code Editor**: We recommend using [Visual Studio Code](https://code.visualstudio.com/) for development. It's highly customizable and supports a wide range of extensions.

- **Package Manager**: [npm](https://www.npmjs.com/) is the package manager we use for JavaScript projects. Install it to manage project dependencies.

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

#### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ngx-moodleds
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Viewing the components within Storybook

To view the components in action, you can run the development server. This will allow you to see the components in a live environment.

```bash
npm install
npm run storybook
```
