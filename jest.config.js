module.exports = {
  reporters: ["default", "jest-junit"],
  testPathIgnorePatterns: ["/node_modules", "dist"],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**", "!**/src/types/**"],
};
