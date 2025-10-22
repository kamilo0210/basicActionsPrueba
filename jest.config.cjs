module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/students/**/tests/**/*.test.js"],
  collectCoverageFrom: ["students/**/src/**/*.js"],
  coverageDirectory: 'coverage',
  verbose: true
};
