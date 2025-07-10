export class StringUtils {
  static reverse(str) {
    return str.split('').reverse().join('');
  }

  static isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === this.reverse(cleaned);
  }

  static capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static wordCount(str) {
    if (str.trim() === '') return 0;
    return str.trim().split(/\s+/).length;
  }
}