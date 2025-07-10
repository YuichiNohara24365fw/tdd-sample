import { jest } from '@jest/globals';

describe('Index.js Demo', () => {
  let consoleMock;
  let originalConsoleLog;

  beforeEach(() => {
    originalConsoleLog = console.log;
    consoleMock = jest.fn();
    console.log = consoleMock;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    jest.clearAllMocks();
  });

  test('should run demo and display all outputs', async () => {
    // Clear module cache and import fresh
    jest.resetModules();
    
    // Import the index.js module to execute the demo
    await import('../src/index.js?test=1');
    
    // Verify that console.log was called multiple times
    expect(consoleMock).toHaveBeenCalled();
    
    // Get all the calls made to console.log
    const calls = consoleMock.mock.calls.map(call => call[0]);
    
    // Verify specific demo messages exist
    expect(calls).toContain('=== TDD Sample Project Demo ===');
    expect(calls).toContain('\nCalculator examples:');
    expect(calls).toContain('\nString utilities examples:');
    expect(calls).toContain('\n=== Demo completed ===');
    
    // Verify calculator outputs
    expect(calls).toContain('2 + 3 = 5');
    expect(calls).toContain('10 - 3 = 7');
    expect(calls).toContain('4 * 5 = 20');
    expect(calls).toContain('15 / 3 = 5');
    expect(calls).toContain('2 ^ 4 = 16');
    
    // Verify string utility outputs
    expect(calls).toContain("Reverse 'hello': olleh");
    expect(calls).toContain("Is 'racecar' a palindrome? true");
    expect(calls).toContain("Capitalize 'world': World");
    expect(calls).toContain("Word count in 'hello world test': 3");
  });

  test('should import dependencies correctly', async () => {
    // Test that required modules can be imported
    const calculatorModule = await import('../src/calculator.js');
    const stringUtilsModule = await import('../src/stringUtils.js');
    
    expect(calculatorModule.Calculator).toBeDefined();
    expect(stringUtilsModule.StringUtils).toBeDefined();
    
    // Test that instances can be created
    const calculator = new calculatorModule.Calculator();
    expect(calculator.add(2, 3)).toBe(5);
    expect(stringUtilsModule.StringUtils.reverse('test')).toBe('tset');
  });
});