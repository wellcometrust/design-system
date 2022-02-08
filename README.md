# Wellcome Design System - Alpha

## Introduction

The Wellcome Design System provides **foundations** for use across Wellcome's digital products. This comprises global styling variables and generic components, built using React and TypeScript.


## Consuming the Design System

### Installation

```npm install @wellcometrust/design-system --save```


### Import components

```js
import { ComponentName } from '@wellcometrust/design-system
```

### Import styles

```css
/* core styles */
@import '~@wellcometrust/design-system/dist/core';

/* theme styles */
@import '~@wellcometrust/design-system/dist/theme';
```

### Storybook

https://designsystem.wellcome.org/


## Contributing to Design System development

### Clone this repo

```git clone git@github.com:wellcometrust/design-system.git```


### Node version and NVM

This repo supports a specific version of Node.js which is specified in [.nvmrc](.nvmrc). It is strongly recommended that you install [NVM](http://nvm.sh/) on your local machine to easily manage multiple versions of Node.

Running `nvm use` from the command line will automatically pick up the version named in the `.nvmrc` file and set this as the node version for the current terminal window.


### Installation

```npm install```

### Development

```npm run storybook```

### Build all files

```npm run build```

### Publishing for consumption

New releases are published to NPM. Please speak to a member of the project dev team about this.
