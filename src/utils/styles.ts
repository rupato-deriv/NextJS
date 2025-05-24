/**
 * Utility functions for managing styles in the application
 */

/**
 * Combines multiple class names into a single string, filtering out falsy values
 * 
 * @param classes - Array of class names or conditional class expressions
 * @returns A string of combined class names
 */
export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Common container styles used across the application
 */
export const containerStyles = {
  main: "min-h-screen flex flex-col items-center justify-center p-8",
  content: "w-full max-w-3xl",
  title: "text-3xl font-bold mb-6",
};

/**
 * Specific container styles for different challenges
 */
export const challengeContainerStyles = {
  calculator: {
    container: "max-w-[400px] mx-auto", // Fixed width for calculator (400px)
  },
  twoSum: {
    container: "max-w-[700px] mx-auto", // Fixed width for two-sum (600px)
  },
};

/**
 * Common section styles used across the application
 */
export const sectionStyles = {
  container: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8",
  title: "text-xl font-semibold mb-4",
};
