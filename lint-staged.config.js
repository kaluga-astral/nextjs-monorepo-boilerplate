module.exports = {
  'admin/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'yaspeller --only-errors',
  ],
  'admin/**/styles.{js,jsx,ts,tsx}': [
    'npm run lint:styles --workspace=@example/admin',
  ],
  'common/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/common',
    'npm run lint:styles --workspace=@example/common',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/common',
    () => 'yaspeller --only-errors',
  ],
  'common/**/styles.{js,jsx,ts,tsx}': [
    'npm run lint:styles --workspace=@example/common',
  ],
};
