module.exports = {
    preset: 'ts-jest',
    testRegex: '(<rootDir>/test/.*|(\\.|/)(test|spec))\\.tsx?$',
    modulePaths: ['<rootDir>/src'],
    setupFiles: [
      '<rootDir>/test/__mocks__/phenix-web-packages'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.tsx',
      '<rootDir>/src/**/*.ts'
    ],
    clearMocks: true,
    restoreMocks: true,
    coverageDirectory: '<rootDir>/coverage/',
    setupFilesAfterEnv: ['<rootDir>/test/setupEnzyme.ts'],
    transform: {'^.+\\.js$': 'ts-jest'},
    moduleNameMapper: {'\\.css$': 'identity-obj-proxy'}
  };
  