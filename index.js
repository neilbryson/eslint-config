module.exports = {
  "extends": ["eslint:recommended", "react-app"],
  "parserOptions": {
    "ecmaVersion": 2016,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "array-callback-return": "error",
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": "warn",
    "default-case": "warn",
    "eol-last": "warn",
    "eqeqeq": "warn",
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "no-else-return": "warn",
    "no-eval": "error",
    "no-lonely-if": "error",
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": "warn",
    "no-nested-ternary": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "warn",
    "no-var": "warn",
    "operator-linebreak": ["error", "before"],
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "sort-keys": "warn"
  }
};