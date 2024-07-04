## Getting Started

This guide will help you set up and run the project locally. Follow the steps below to get started.

### Prerequisites

1. Node (22.1.0)
1. Yarn (1.22.19)
1. NVM

### Step-by-Step Instructions

#### Use node 22.1.0

```bash
nvm use 22.1.0
```

#### Use yarn 1.22.19

```bash
yarn set version 1.22.19
```

#### Install node modules

```bash
yarn
```

#### Run Local server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run Story Book

```bash
yarn run storybook
```

### Run Test Cases

```bash
yarn run test
```

## Folder structure

- `app` - next router and screens
- `public` - images, fonts, etc
- `modules` - business logic
  - `[module]` - a module should be a self-contained feature
    - `components` - module components
    - `hooks` - hooks used by this module
    - `utils` - utils used by this module

## Development Rules

- Use classic functional components instead of inline functions
- Stick to the folder structure above
- Use `camelCase` for variables and functions, exceptions: `snake_case` for backend data
- Use **common** components from `modules/common/components` instead of creating new ones
- If no common component fits your needs, create a new one in the `modules/common/components` folder

## Adding a new assets

The assets are stored in the `public` folder.

### Icons

- Add the icon to the `modules/common/icons` folder
- Import and export the icon in the `modules/common/components/index.tsx` file, there are existing examples that you can follow
