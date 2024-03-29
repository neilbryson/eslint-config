module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
    "plugin:prettier/recommended",
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
  ],
  "rules": {
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/quotes": ["warn", "single", { allowTemplateLiterals: true, avoidEscape: true }],
    "array-callback-return": "error",
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": "warn",
    "default-case": "warn",
    "eol-last": "warn",
    "eqeqeq": "error",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "no-alert": "warn",
    "no-duplicate-imports": "error",
    "no-else-return": "warn",
    "no-eval": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "warn",
    "no-nested-ternary": "error",
    "no-self-compare": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": "error",
    "no-useless-constructor": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prettier/prettier": "warn",
    "quotes": "off",
    "require-await": "error",
    "semi": ["error", "always"],
  },
};
