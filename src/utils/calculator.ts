/**
 * Utility functions for calculator operations
 */

/**
 * Adds two numbers and returns the result
 * Returns null if either input is not a valid number
 * 
 * @param a - First number as string
 * @param b - Second number as string
 * @returns The sum of the two numbers, or null if inputs are invalid
 */
export function addNumbers(a: string, b: string): number | null {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }
  
  return num1 + num2;
}
