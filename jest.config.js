module.exports = {
  reporters: ["default", "jest-junit"],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**", "!**/src/types/**"],
};
