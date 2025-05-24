"use client";

import { useState } from "react";
import { ChallengeSection } from "@/components/challenge-container";
import InputField from "@/components/calculator/input-field";
import ResultDisplay from "@/components/calculator/result-display";
import { createInputFields, buttonStyles } from "@/config/calculator";
import { addNumbers } from "@/utils/calculator";

export default function CalculatorClient() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  // Get input fields configuration from the factory function
  const inputFields = createInputFields(
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber
  );

  const handleAddNumbers = () => {
    const result = addNumbers(firstNumber, secondNumber);
    setTotal(result);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center mt-6">Adding Two Numbers</h1>
      <div className="max-w-[400px] mx-auto">
        <ChallengeSection title="Calculator" className="md:mx-6 mx-10">
          {/* Render input fields from configuration */}
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              value={field.value}
              setValue={field.setValue}
              className={field.className}
            />
          ))}
          
          <button
            onClick={handleAddNumbers}
            className={`${buttonStyles} text-center`}
          >
            Add Two Numbers
          </button>
          
          <ResultDisplay total={total} />
        </ChallengeSection>
      </div>
    </div>
  );
}
