#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const commands = {
  'run-tests': () => {
    console.log('🧪 Running all tests...');
    execSync('npm test', { stdio: 'inherit' });
  },
  
  'run-test-file': (filename) => {
    console.log(`🧪 Running tests for: ${filename}`);
    execSync(`npm run test:specific ${filename}`, { stdio: 'inherit' });
  },
  
  'check-coverage': () => {
    console.log('📊 Checking test coverage...');
    execSync('npm run test:coverage', { stdio: 'inherit' });
  },
  
  'lint-code': () => {
    console.log('🔍 Running lint checks...');
    execSync('npm run lint', { stdio: 'inherit' });
  },
  
  'tdd-red': () => {
    console.log('🔴 TDD RED Phase: Checking for failing tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('⚠️  All tests passed - this might not be the RED phase');
    } catch (error) {
      console.log('✅ Tests are failing as expected in RED phase');
    }
  },
  
  'tdd-green': () => {
    console.log('🟢 TDD GREEN Phase: Making tests pass...');
    execSync('npm test', { stdio: 'inherit' });
  },
  
  'tdd-refactor': () => {
    console.log('🔵 TDD REFACTOR Phase: Improving code quality...');
    execSync('npm run lint', { stdio: 'inherit' });
    execSync('npm run test:coverage', { stdio: 'inherit' });
  },
  
  'create-test': (className) => {
    const testContent = `import { ${className} } from '../src/${className.toLowerCase()}.js';

describe('${className}', () => {
  let instance;

  beforeEach(() => {
    instance = new ${className}();
  });

  describe('constructor', () => {
    test('should create an instance', () => {
      expect(instance).toBeInstanceOf(${className});
    });
  });

  // Add more tests here following TDD principles
});`;

    const testPath = `tests/${className.toLowerCase()}.test.js`;
    fs.writeFileSync(testPath, testContent);
    console.log(`✅ Created test file: ${testPath}`);
  },
  
  'create-class': (className) => {
    const classContent = `export class ${className} {
  constructor() {
    // Initialize your class here
  }
  
  // Add methods here following TDD principles
}`;

    const classPath = `src/${className.toLowerCase()}.js`;
    fs.writeFileSync(classPath, classContent);
    console.log(`✅ Created class file: ${classPath}`);
  }
};

const [command, ...args] = process.argv.slice(2);

if (commands[command]) {
  commands[command](...args);
} else {
  console.log('Available commands:');
  Object.keys(commands).forEach(cmd => {
    console.log(`  - ${cmd}`);
  });
}