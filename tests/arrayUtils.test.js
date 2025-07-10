import { ArrayUtils } from '../src/arrayUtils.js';

describe('ArrayUtils', () => {
  describe('max', () => {
    test('should find maximum value in array', () => {
      expect(ArrayUtils.max([1, 5, 3, 9, 2])).toBe(9);
    });

    test('should handle negative numbers', () => {
      expect(ArrayUtils.max([-5, -2, -8, -1])).toBe(-1);
    });

    test('should handle single element array', () => {
      expect(ArrayUtils.max([42])).toBe(42);
    });

    test('should throw error for empty array', () => {
      expect(() => ArrayUtils.max([])).toThrow('Array must not be empty');
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.max('not an array')).toThrow('Array must not be empty');
    });
  });

  describe('min', () => {
    test('should find minimum value in array', () => {
      expect(ArrayUtils.min([1, 5, 3, 9, 2])).toBe(1);
    });

    test('should handle negative numbers', () => {
      expect(ArrayUtils.min([-5, -2, -8, -1])).toBe(-8);
    });

    test('should handle single element array', () => {
      expect(ArrayUtils.min([42])).toBe(42);
    });

    test('should throw error for empty array', () => {
      expect(() => ArrayUtils.min([])).toThrow('Array must not be empty');
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.min('not an array')).toThrow('Array must not be empty');
    });
  });

  describe('sum', () => {
    test('should calculate sum of array elements', () => {
      expect(ArrayUtils.sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should handle negative numbers', () => {
      expect(ArrayUtils.sum([-2, -3, 5])).toBe(0);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.sum([])).toBe(0);
    });

    test('should handle single element array', () => {
      expect(ArrayUtils.sum([42])).toBe(42);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.sum('not an array')).toThrow('Input must be an array');
    });
  });

  describe('average', () => {
    test('should calculate average of array elements', () => {
      expect(ArrayUtils.average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should handle decimal results', () => {
      expect(ArrayUtils.average([1, 2, 3])).toBe(2);
      expect(ArrayUtils.average([1, 2, 4])).toBe(2.3333333333333335);
    });

    test('should handle negative numbers', () => {
      expect(ArrayUtils.average([-2, -4, 6])).toBe(0);
    });

    test('should handle single element array', () => {
      expect(ArrayUtils.average([42])).toBe(42);
    });

    test('should throw error for empty array', () => {
      expect(() => ArrayUtils.average([])).toThrow('Array must not be empty');
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.average('not an array')).toThrow('Array must not be empty');
    });
  });

  describe('unique', () => {
    test('should remove duplicate values', () => {
      expect(ArrayUtils.unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle string arrays', () => {
      expect(ArrayUtils.unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should handle arrays with no duplicates', () => {
      expect(ArrayUtils.unique([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.unique([])).toEqual([]);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.unique('not an array')).toThrow('Input must be an array');
    });
  });

  describe('flatten', () => {
    test('should flatten nested arrays', () => {
      expect(ArrayUtils.flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle deeply nested arrays', () => {
      expect(ArrayUtils.flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    });

    test('should handle already flat arrays', () => {
      expect(ArrayUtils.flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.flatten([])).toEqual([]);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.flatten('not an array')).toThrow('Input must be an array');
    });
  });

  describe('chunk', () => {
    test('should split array into chunks', () => {
      expect(ArrayUtils.chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('should handle uneven chunks', () => {
      expect(ArrayUtils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('should handle chunk size larger than array', () => {
      expect(ArrayUtils.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.chunk([], 2)).toEqual([]);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.chunk('not an array', 2)).toThrow('Input must be an array');
    });

    test('should throw error for non-positive chunk size', () => {
      expect(() => ArrayUtils.chunk([1, 2, 3], 0)).toThrow('Chunk size must be positive');
      expect(() => ArrayUtils.chunk([1, 2, 3], -1)).toThrow('Chunk size must be positive');
    });
  });

  describe('shuffle', () => {
    test('should return array with same elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = ArrayUtils.shuffle(original);
      expect(shuffled).toHaveLength(original.length);
      expect(shuffled.sort()).toEqual(original.sort());
    });

    test('should not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = ArrayUtils.shuffle(original);
      expect(original).toEqual([1, 2, 3, 4, 5]);
      expect(shuffled).not.toBe(original);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.shuffle([])).toEqual([]);
    });

    test('should handle single element array', () => {
      expect(ArrayUtils.shuffle([42])).toEqual([42]);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.shuffle('not an array')).toThrow('Input must be an array');
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty array', () => {
      expect(ArrayUtils.isEmpty([])).toBe(true);
    });

    test('should return false for non-empty array', () => {
      expect(ArrayUtils.isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return false for array with falsy values', () => {
      expect(ArrayUtils.isEmpty([null, undefined, 0, ''])).toBe(false);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.isEmpty('not an array')).toThrow('Input must be an array');
    });
  });

  describe('removeFalsy', () => {
    test('should remove falsy values from array', () => {
      expect(ArrayUtils.removeFalsy([1, null, 2, undefined, 3, 0, 4, '', 5, false])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with all falsy values', () => {
      expect(ArrayUtils.removeFalsy([null, undefined, 0, '', false])).toEqual([]);
    });

    test('should handle array with no falsy values', () => {
      expect(ArrayUtils.removeFalsy([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty array', () => {
      expect(ArrayUtils.removeFalsy([])).toEqual([]);
    });

    test('should throw error for non-array input', () => {
      expect(() => ArrayUtils.removeFalsy('not an array')).toThrow('Input must be an array');
    });
  });
});