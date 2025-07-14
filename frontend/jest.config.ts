import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testMatch: ['**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/views/(.*)$': '<rootDir>/src/views/$1',
    '^@/controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/types$': '<rootDir>/src/types',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
  },

};

export default createJestConfig(customJestConfig);
