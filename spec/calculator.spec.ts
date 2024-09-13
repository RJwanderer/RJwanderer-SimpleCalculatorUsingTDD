// spec/calculator.spec.ts
import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the sum of two numbers separated by commas', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('should handle any amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  it('should support custom delimiter', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error if negative numbers are provided', () => {
    expect(() => calculator.add('1,-2,3')).toThrowError('negative numbers not allowed: -2');
  });

  it('should throw an error with all negative numbers', () => {
    expect(() => calculator.add('1,-2,-3,4,-5')).toThrowError('negative numbers not allowed: -2,-3,-5');
  });
  it('should support custom delimiters with different characters', () => {
    expect(calculator.add('//|\n1|2|3')).toBe(6);
  });

  it('should support custom delimiters with special characters', () => {
    expect(calculator.add('//*\n1*2*3')).toBe(6);
  });
 
});
