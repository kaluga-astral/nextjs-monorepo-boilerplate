module.exports = {
  // all
  '**/*.{ts,tsx}': [() => 'yaspeller --only-errors'],

  // common
  'common/**/*.{ts,tsx}': [
    () => 'npm run lint:types --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/main',
  ],

  // admin
  'admin/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/admin',
  ],
  'admin/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@example/admin',
  ],

  // main
  'main/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/main',
    () => 'npm run lint:types --workspace=@example/main',
  ],
  'main/**/styles.{ts,tsx}': ['npm run lint:styles --workspace=@example/main'],

  // shared
  'common/shared/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/shared',
    () => 'npm run lint:types --workspace=@common/shared',
    () => 'npm run lint:types --workspace=@common/data',
    () => 'npm run lint:types --workspace=@common/features',
    () => 'npm run lint:types --workspace=@common/domain',
  ],
  'common/shared/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@common/shared',
  ],

  // features
  'common/features/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/features',
    () => 'npm run lint:types --workspace=@common/features',
  ],
  'common/features/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@common/features',
  ],

  // domain
  'common/domain/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/domain',
    () => 'npm run lint:types --workspace=@common/domain',
  ],

  // data
  'common/data/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@common/data',
    () => 'npm run lint:types --workspace=@common/data',
  ],
};
