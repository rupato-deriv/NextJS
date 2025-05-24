/**
 * Two Sum algorithm implementation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param numbers - A sorted array of numbers
 * @param target - The target sum to find
 * @returns An array containing the 1-indexed positions of the two numbers that sum to target
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}
