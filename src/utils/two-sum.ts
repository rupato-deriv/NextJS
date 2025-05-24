/**
 * Utility functions for the Two Sum challenge
 */

/**
 * Validates and parses the input array
 * 
 * @param input - The input array as a string
 * @returns The parsed array of numbers
 * @throws Error if the input is invalid
 */
export function parseInputArray(input: string): number[] {
  // Replace single quotes with double quotes for JSON parsing
  const cleanedInput = input.replace(/'/g, '"');
  
  try {
    const parsedArray = JSON.parse(cleanedInput);
    
    if (!Array.isArray(parsedArray)) {
      throw new Error("Input must be an array");
    }
    
    if (!parsedArray.every((num: any) => typeof num === 'number')) {
      throw new Error("All array elements must be numbers");
    }
    
    // Check if array is sorted in non-decreasing order
    for (let i = 1; i < parsedArray.length; i++) {
      if (parsedArray[i] < parsedArray[i - 1]) {
        throw new Error("Array must be sorted in non-decreasing order");
      }
    }
    
    return parsedArray;
  } catch (error: any) {
    if (error.message.includes("JSON")) {
      throw new Error("Invalid array format. Please use format like [1, 2, 3]");
    }
    throw error;
  }
}

/**
 * Validates and parses the target value
 * 
 * @param input - The target value as a string
 * @returns The parsed target number
 * @throws Error if the input is invalid
 */
export function parseTargetValue(input: string): number {
  const parsedTarget = parseInt(input);
  
  if (isNaN(parsedTarget)) {
    throw new Error("Target must be a valid number");
  }
  
  return parsedTarget;
}

/**
 * Generates an explanation for the two sum solution
 * 
 * @param numbers - The input array
 * @param target - The target sum
 * @param solution - The solution indices
 * @returns An explanation string
 */
export function generateExplanation(numbers: number[], target: number, solution: number[]): string | null {
  if (solution[0] === -1) {
    return null;
  }
  
  const num1 = numbers[solution[0] - 1];
  const num2 = numbers[solution[1] - 1];
  
  return `The sum of ${num1} and ${num2} is ${target}. Therefore, index₁ = ${solution[0]}, index₂ = ${solution[1]}.`;
}
