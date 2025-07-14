import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // caminho da raiz do projeto Next
});

const customJestConfig = {
  testMatch: ['**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // para importar estilos e assets sem erro
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/views/(.*)$': '<rootDir>/src/views/$1',
    '^@/controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  
};

export default createJestConfig(customJestConfig);
