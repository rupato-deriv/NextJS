import { resultStyles } from "@/config/two-sum";

interface ResultDisplayProps {
  error: string | null;
  result: number[] | null;
  explanation: string | null;
}

/**
 * Component that displays the result of the Two Sum challenge
 */
export default function ResultDisplay({ error, result, explanation }: ResultDisplayProps) {
  if (error) {
    return (
      <div className={resultStyles.error}>
        {error}
      </div>
    );
  }

  if (result) {
    return (
      <div className={resultStyles.success}>
        <h3 className="font-semibold mb-2">Output:</h3>
        <div className="font-mono">{JSON.stringify(result)}</div>

        {explanation && (
          <>
            <h3 className="font-semibold mt-4 mb-2">Explanation:</h3>
            <p>{explanation}</p>
          </>
        )}
      </div>
    );
  }

  return null;
}
