# eslint-config
An ESLint configuration, with additional rules for readability and stylistic code, for React/TypeScript projects. 

## Installation
Run `npm install --save-dev @neilbryson/eslint-config`

## Usage
Add this to the `extends` field of `.eslintrc` :

Option 1:
```json
{
  "extends": "@neilbryson"
}
```

Option 2:
```json
{
  "extends": "@neilbryson/eslint-config"
}
```

This ESLint config uses [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) so
make sure that the parser is correctly configured.

```json
{
  "parserOptions": {
    "project": "./path/to/tsconfig.json"
  }
}
```

## License
[MIT](/LICENSE)
