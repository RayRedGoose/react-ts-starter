module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/_config/setupEnzyme.ts'],
  modulePaths: ['<rootDir>/src'],
  verbose: true,
  testRegex: '/__tests__/.*.test.(js|ts|tsx)?$',
};
