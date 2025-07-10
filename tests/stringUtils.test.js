import { StringUtils } from '../src/stringUtils.js';

describe('StringUtils', () => {
  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(StringUtils.reverse('hello')).toBe('olleh');
    });

    test('should handle empty string', () => {
      expect(StringUtils.reverse('')).toBe('');
    });

    test('should handle single character', () => {
      expect(StringUtils.reverse('a')).toBe('a');
    });
  });

  describe('isPalindrome', () => {
    test('should return true for palindromes', () => {
      expect(StringUtils.isPalindrome('racecar')).toBe(true);
      expect(StringUtils.isPalindrome('level')).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(StringUtils.isPalindrome('hello')).toBe(false);
      expect(StringUtils.isPalindrome('world')).toBe(false);
    });

    test('should handle case insensitive palindromes', () => {
      expect(StringUtils.isPalindrome('RaceCar')).toBe(true);
    });

    test('should handle empty string', () => {
      expect(StringUtils.isPalindrome('')).toBe(true);
    });
  });

  describe('capitalize', () => {
    test('should capitalize first letter', () => {
      expect(StringUtils.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized string', () => {
      expect(StringUtils.capitalize('Hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(StringUtils.capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(StringUtils.capitalize('a')).toBe('A');
    });
  });

  describe('wordCount', () => {
    test('should count words in a sentence', () => {
      expect(StringUtils.wordCount('hello world')).toBe(2);
    });

    test('should handle multiple spaces', () => {
      expect(StringUtils.wordCount('hello    world')).toBe(2);
    });

    test('should handle empty string', () => {
      expect(StringUtils.wordCount('')).toBe(0);
    });

    test('should handle single word', () => {
      expect(StringUtils.wordCount('hello')).toBe(1);
    });
  });
});