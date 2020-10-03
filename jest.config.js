/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/_config/setupEnzyme.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec)\\.(jsx?|tsx?)$)',
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/_config/*',
    '<rootDir>/src/__tests__/components/__snapshots__/*',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
