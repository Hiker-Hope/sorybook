module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['react-app', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
    'jsx-a11y/control-has-associated-label': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [0],
    'import/prefer-default-export': [0],
    'func-names': [
      2,
      'always',
      {
        generators: 'never',
      },
    ],
    'react/static-property-placement': 0,
    'react/destructuring-assignment': [
      0,
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    'react/forbid-prop-types': [0],
    'import/no-dynamic-require': [0],
    'global-require': [0],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [['~', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
