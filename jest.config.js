/* eslint-disable import/no-default-export */

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',

  testMatch: ['<rootDir>/src/**/*.{spec,test}.ts'],
  testPathIgnorePatterns: ['dist/', '/node_modules/'],
  globals: { 'ts-jest': { diagnostics: false } },
  setupFiles: ['<rootDir>/testHelpers/setupTest.ts'],
};
