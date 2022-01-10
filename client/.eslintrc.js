/* eslint-disable quote-props */
/* eslint-disable quotes */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 13,
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    'linebreak-style': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/named': 'off',
    'react/forbid-prop-types': 'off',
  },
};
