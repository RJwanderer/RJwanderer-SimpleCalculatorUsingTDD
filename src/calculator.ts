// src/calculator.ts
export class Calculator {
  
    add(numbers: string): number {
      if (numbers === '') return 0; // If input is empty, return 0
      
      let delimiter = /,|\n/; // Default delimiters: comma or newline
  
      // Check for custom delimiter
      if (numbers.startsWith("//")) {
        const [customDelimiter, rest] = numbers.split('\n', 2);
      const delimiterPattern = customDelimiter.slice(2); // Extract custom delimiter
      delimiter = new RegExp(this.escapeSpecialChars(delimiterPattern));
      numbers = rest;
      }
  
      // Split the numbers by the delimiter(s)
      const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
      // Check for negative numbers
      const negativeNumbers = numberArray.filter(num => num < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
      }
  
      // Sum all the numbers
      let sum = 0;
      for (const num of numberArray) {
        sum += num;
      }
  
      return sum;
    }
    private escapeSpecialChars(delimiter: string): string {
        // Escape special characters for RegExp
        return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
  }
  