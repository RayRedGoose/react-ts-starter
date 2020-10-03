module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/test/_config/setupEnzyme.ts'],
  modulePaths: ['<rootDir>/src'],
};
