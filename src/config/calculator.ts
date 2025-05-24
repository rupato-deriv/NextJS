/**
 * Configuration for calculator input fields
 */
export interface CalculatorInputConfig {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

/**
 * Input field definitions for the calculator
 * This is a factory function that creates the input field configurations
 * based on the current state and setters
 */
export function createInputFields(
  firstNumber: string,
  setFirstNumber: (value: string) => void,
  secondNumber: string,
  setSecondNumber: (value: string) => void
) {
  return [
    {
      id: "firstNumber",
      label: "First Number",
      value: firstNumber,
      setValue: setFirstNumber,
    },
    {
      id: "secondNumber",
      label: "Second Number",
      value: secondNumber,
      setValue: setSecondNumber,
      className: "mb-6", // Add more bottom margin for the last input
    },
  ];
}

/**
 * Common input field styles
 */
export const inputFieldStyles = "w-full p-2 border rounded-md outline-none text-black bg-white";

/**
 * Common label styles
 */
export const labelStyles = "block text-sm font-medium mb-1 text-left";

/**
 * Button styles
 */
export const buttonStyles = "w-full bg-gray-500 hover:bg-gray-600 text-white font-bold mb-6 shadow-md p-[10px] rounded-md";
