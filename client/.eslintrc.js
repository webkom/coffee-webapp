module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
  },
  'globals': {
    'API_URL': true,
  },
  'rules': {
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': ['warn', 120],
    'react/prop-types': ['error', { ignore: ['children', 'params', 'location', 'router'] }],
    'react/require-default-props': 'off'
  }
};
