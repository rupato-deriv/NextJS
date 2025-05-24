/**
 * Configuration for the Two Sum challenge
 */

/**
 * Example cases for the Two Sum challenge
 */
export const examples = [
  { array: [2, 7, 11, 15], target: 9, result: [1, 2] },
  { array: [2, 3, 4], target: 6, result: [1, 3] },
  { array: [-1, 0], target: -1, result: [1, 2] }
];

/**
 * Input field styles
 */
export const inputStyles = "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white";

/**
 * Label styles
 */
export const labelStyles = "block text-sm font-medium mb-1";

/**
 * Button styles
 */
export const buttonStyles = {
  primary: "bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-3 rounded-md transition-colors shadow-md",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-3 rounded-md transition-colors shadow-md"
};

/**
 * Result display styles
 */
export const resultStyles = {
  error: "p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md mb-4",
  success: "p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md mb-4",
  implementation: "mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md flex flex-wrap",
  code: "font-mono text-sm p-4 bg-gray-800 text-gray-100 rounded-md break-words"
};

/**
 * Problem description text
 */
export const problemDescription = {
  paragraph1: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
  paragraph2: "Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.",
  paragraph3: "The tests are generated such that there is exactly one solution. You may not use the same element twice.",
  paragraph4: "Your solution must use only constant extra space."
};

/**
 * Implementation code to display
 */
export const implementationCode = `function twoSum(numbers: number[], target: number): number[] { 
let left = 0;
let right = numbers.length - 1;
                
while (left < right) {
const sum = numbers[left] + numbers[right];
                  
if (sum === target) {
  // Return 1-indexed positions
  return [left + 1, right + 1];
} else if (sum < target) {
  left++;
} else {
  right--;
}
}
                
// This should not happen with the given constraints
return [-1, -1];}`;
