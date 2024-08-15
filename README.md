# yaml-js Configurations Monorepo

This repository contains shared project configurations for the `yaml-js` organization. These configurations are designed to enforce consistent code quality and styling across all projects within the organization.

## Overview

The repository currently hosts the following configuration packages:

1. **ESLint**: Provides a set of linting rules to ensure consistent coding standards and to catch common programming errors.
2. **Prettier**: Offers formatting rules to maintain consistent code style across the codebase.
3. **EditorConfig**: Supplies configuration files to help maintain consistent coding styles between different editors and IDEs.

Each package is located inside the `packages` directory and has its own `README.md` file with specific details on how to use it.

## Repository Structure

The repository is organized as follows:
```
/packages/
├── eslint/
├── prettier/
└── editorconfig/
└── [aditional packages]
```

- **`/packages/eslint/`**: Contains the ESLint configuration package.
- **`/packages/prettier/`**: Contains the Prettier configuration package.
- **`/packages/editorconfig/`**: Contains the EditorConfig package.

## Usage

To use any of these configurations in your project, navigate to the specific package directory and follow the instructions provided in the `README.md` file of that package.

### Example

To integrate the ESLint configuration into your project:

1. Navigate to the [`eslint`](./packages/eslint) directory.
2. Follow the setup instructions in the `README.md` file.

## Contributing

Contributions to this repository are welcome! If you'd like to add new configurations or improve existing ones, please follow the guidelines below:

1. **Fork** the repository.
2. Create a **new branch** for your feature or bugfix.
3. **Commit** your changes.
4. **Push** your branch and create a **Pull Request**.

## License

This repository is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.