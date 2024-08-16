# YAML-JS ESLint Configuration

This repository provides a shared ESLint configuration to be used across all projects under the `yaml-js` umbrella. The goal is to maintain consistent code quality and style throughout the entire ecosystem.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the shared ESLint configuration in your project, follow these steps:

### 1. Install ESLint and the shared configuration

First, install ESLint and the `@yaml-js/config-eslint` package as development dependencies:

```bash
npm install --save-dev @yaml-js/config-eslint eslint globals typescript-eslint eslint-config-prettier

or

yarn add -D @yaml-js/config-eslint eslint globals typescript-eslint eslint-config-prettier;
```

### 2. Create or update your `eslint.config.js` file

Ad add the yamljs configuration

```javascript
// eslint.config.js
import configs from "@yaml-js/config-eslint";

export default [
 ...configs.typescript,
];
```

### 3. Add a lint script to your package.json
To easily format your code, add a script in your package.json:

```json
{
  "scripts": {
    "lint": "eslint -c ./eslint.config.js",
  }
}
```

### Usage
Once the configuration is set up, you can format your code by running the following command:

```bash
npm run lint
```

This will apply the shared eslint rules across your project, ensuring consistency.

### Configuration
The @yaml-js/config-eslint package includes a set of predefined rules aimed at enforcing a consistent quality and coding style. While it is possible to override specific rules in youreslint.config.js file, please note that doing so is generally not advisable, as it contradicts the primary purpose of this package.

### Contributing
We welcome contributions to improve this configuration. If you have suggestions or find issues, please open an issue or a pull request.

### Development
To make changes to the shared configuration, follow these steps:

- Clone the repository.
- Install dependencies with npm install.
- Make your changes in the prettier.config file.
- Test your changes by running the formatting command on test files.
- Submit a pull request with a clear description of the changes.

### License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.




