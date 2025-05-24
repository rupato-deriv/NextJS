"use client";

import { useState } from "react";
import { ChallengeSection } from "@/components/challenge-container";
import { twoSum } from "@/utils/algorithms";
import { parseInputArray, parseTargetValue, generateExplanation } from "@/utils/two-sum";
import { examples } from "@/config/two-sum";
import { challengeContainerStyles } from "@/utils/styles";

// Import components
import ProblemDescription from "@/components/two-sum/problem-description";
import InputForm from "@/components/two-sum/input-form";
import ActionButtons from "@/components/two-sum/action-buttons";
import ResultDisplay from "@/components/two-sum/result-display";
import ImplementationCode from "@/components/two-sum/implementation-code";

export default function TwoSumClient() {
  const [inputArray, setInputArray] = useState<string>("");
  const [targetValue, setTargetValue] = useState<string>("");
  const [result, setResult] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleSolve = () => {
    try {
      // Reset previous results
      setError(null);
      setResult(null);
      setExplanation(null);

      // Parse and validate inputs
      const parsedArray = parseInputArray(inputArray);
      const parsedTarget = parseTargetValue(targetValue);

      // Calculate solution
      const solution = twoSum(parsedArray, parsedTarget);
      setResult(solution);

      // Generate explanation
      const explanationText = generateExplanation(parsedArray, parsedTarget, solution);
      setExplanation(explanationText);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
  };

  const handleLoadExample = (index: number) => {
    const example = examples[index];
    setInputArray(JSON.stringify(example.array));
    setTargetValue(example.target.toString());
    setResult(null);
    setExplanation(null);
    setError(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center mt-6">Two Sum</h1>
      <div className={`${challengeContainerStyles.twoSum.container} max-w-[700px]`}>
        <ChallengeSection title="Problem Description" className="md:mx-6 mx-10">
          <ProblemDescription />
        </ChallengeSection>

        <ChallengeSection title="Solution" className="md:mx-6 mx-10">
        <InputForm
          inputArray={inputArray}
          setInputArray={setInputArray}
          targetValue={targetValue}
          setTargetValue={setTargetValue}
        />

        <ActionButtons
          onSolve={handleSolve}
          onLoadExample={handleLoadExample}
        />

        <ResultDisplay
          error={error}
          result={result}
          explanation={explanation}
        />

        <ImplementationCode />
        </ChallengeSection>
      </div>
    </div>
  );
}
