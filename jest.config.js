module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  verbose: true,
  collectCoverage: true
};