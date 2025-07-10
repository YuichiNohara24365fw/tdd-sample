import { Calculator } from './calculator.js';
import { StringUtils } from './stringUtils.js';

console.log('=== TDD Sample Project Demo ===');

const calculator = new Calculator();
console.log('\nCalculator examples:');
console.log(`2 + 3 = ${calculator.add(2, 3)}`);
console.log(`10 - 3 = ${calculator.subtract(10, 3)}`);
console.log(`4 * 5 = ${calculator.multiply(4, 5)}`);
console.log(`15 / 3 = ${calculator.divide(15, 3)}`);
console.log(`2 ^ 4 = ${calculator.power(2, 4)}`);

console.log('\nString utilities examples:');
console.log(`Reverse 'hello': ${StringUtils.reverse('hello')}`);
console.log(`Is 'racecar' a palindrome? ${StringUtils.isPalindrome('racecar')}`);
console.log(`Capitalize 'world': ${StringUtils.capitalize('world')}`);
console.log(`Word count in 'hello world test': ${StringUtils.wordCount('hello world test')}`);

console.log('\n=== Demo completed ===');