import type { Config } from 'jest';


const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^firebase/auth$': '<rootDir>/__mocks__/firebase/auth.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '^firebase/firestore$': '<rootDir>/__mocks__/firebase/firestore.ts',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
