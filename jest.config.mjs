/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: { '@/(.*)': '<rootDir>/src/$1' },
};
