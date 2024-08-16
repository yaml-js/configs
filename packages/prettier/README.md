# YAML-JS Prettier Configuration

This repository provides a shared Prettier configuration to be used across all projects under the `yaml-js` umbrella. The goal is to maintain consistent code formatting and style throughout the entire ecosystem.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the shared Prettier configuration in your project, follow these steps:

### 1. Install Prettier and the shared configuration

First, install Prettier and the `@yaml-js/config-prettier` package as development dependencies:

```bash
npm install --save-dev @yaml-js/config-prettier

or

yarn add -D @yaml-js/config-prettier
```

### 2. Create or update your `.prettierrc` file

Add the following to your `.prettierrc` file to extend the shared configuration:

```json
"@yaml-js/config-prettier"
```

Alternatively, you can use a prettier.config.cjs file:

```javascript
module.exports = {
  ...require("@yaml-js/config-prettier")
};
```

### 3. Add a format script to your package.json
To easily format your code, add a script in your package.json:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### Usage
Once the configuration is set up, you can format your code by running the following command:

```bash
yarn run format
```

This will apply the shared Prettier rules across your project, ensuring consistency.

### Configuration
The @yaml-js/config-prettier package includes a set of predefined rules aimed at enforcing a consistent coding style. While it is possible to override specific rules in your .prettierrc or prettier.config.cjs file, please note that doing so is generally not advisable, as it contradicts the primary purpose of this package.

For example, to change the print width:

```javascript
module.exports = {
  ...require("@yaml-js/config-prettier"),
  "printWidth": 100
};
```

Refer to the Prettier documentation for a full list of available options.

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




