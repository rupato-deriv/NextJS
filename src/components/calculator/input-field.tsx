import { CalculatorInputConfig, inputFieldStyles, labelStyles } from "@/config/calculator";

/**
 * A reusable input field component for the calculator
 */
export default function InputField({ id, label, value, setValue, className = "mb-4" }: CalculatorInputConfig) {
  return (
    <div className={`${className} text-left`}>
      <label htmlFor={id} className={`${labelStyles} text-left`}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={inputFieldStyles}
      />
    </div>
  );
}
