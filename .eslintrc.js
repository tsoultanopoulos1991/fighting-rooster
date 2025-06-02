require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended' // Ενεργοποιεί prettier μέσα στο eslint
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 100
      }
    ]
  },
  ignorePatterns: ['.next/', 'node_modules/'],
}
