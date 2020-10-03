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
  roots: ['<rootDir>/src', '<rootDir>/test'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/test/_config/setupEnzyme.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec)\\.(jsx?|tsx?)$)',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
