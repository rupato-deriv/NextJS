import { inputStyles, labelStyles } from "@/config/two-sum";

interface InputFormProps {
  inputArray: string;
  setInputArray: (value: string) => void;
  targetValue: string;
  setTargetValue: (value: string) => void;
}

/**
 * Component that renders the input form for the Two Sum challenge
 */
export default function InputForm({
  inputArray,
  setInputArray,
  targetValue,
  setTargetValue
}: InputFormProps) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="inputArray" className={labelStyles}>
          Input Array (JSON format, e.g., [2, 7, 11, 15])
        </label>
        <input
          id="inputArray"
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className={inputStyles}
          placeholder="[2, 7, 11, 15]"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="targetValue" className={labelStyles}>
          Target Value
        </label>
        <input
          id="targetValue"
          type="text"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value)}
          className={inputStyles}
          placeholder="9"
        />
      </div>
    </>
  );
}
