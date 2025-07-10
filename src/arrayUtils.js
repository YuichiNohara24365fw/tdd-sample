export class ArrayUtils {
  static max(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Array must not be empty');
    }
    return Math.max(...arr);
  }

  static min(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Array must not be empty');
    }
    return Math.min(...arr);
  }

  static sum(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return arr.reduce((acc, val) => acc + val, 0);
  }

  static average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Array must not be empty');
    }
    return this.sum(arr) / arr.length;
  }

  static unique(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return [...new Set(arr)];
  }

  static flatten(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return arr.flat(Infinity);
  }

  static chunk(arr, size) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    if (size <= 0) {
      throw new Error('Chunk size must be positive');
    }
    
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  static shuffle(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static isEmpty(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return arr.length === 0;
  }

  static removeFalsy(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return arr.filter(Boolean);
  }
}