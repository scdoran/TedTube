module.exports = {
  // For future use to show test coverage
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  // coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['./tests/jest-setup.js'],
  snapshotSerializers: ['jest-serializer-vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!vue-router|@babel|vuetify|material-design-icons-iconfont|@storybook)',
  ],
};
