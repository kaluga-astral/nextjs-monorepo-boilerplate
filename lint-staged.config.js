module.exports = {
  'admin/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'yaspeller --only-errors',
  ],
  'admin/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@example/admin',
  ],

  'common/shared/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/shared',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@common/shared',
    () => 'npm run lint:types --workspace=@common/data',
    () => 'npm run lint:types --workspace=@common/modules',
    () => 'yaspeller --only-errors',
  ],
  'common/shared/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@common/shared',
  ],

  'common/modules/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/modules',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@common/modules',
    () => 'yaspeller --only-errors',
  ],
  'common/modules/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@common/modules',
  ],

  'common/data/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/data',
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@common/data',
  ],
};
