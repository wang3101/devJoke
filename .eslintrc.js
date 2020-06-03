module.exports = {
  extends: [
    "airbnb",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', 
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "consistent-return": "off",
    "func-names": "off",
    "no-console": "off",
    "curly": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-closing-tag-location": "off",
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}