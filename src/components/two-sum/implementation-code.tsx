import { implementationCode, resultStyles } from "@/config/two-sum";

/**
 * Component that displays the implementation code for the Two Sum challenge
 */
export default function ImplementationCode() {
  return (
    <div className={resultStyles.implementation}>
      <h3 className="font-semibold mb-2">Implementation:</h3>
      <div className="overflow-x-auto w-full">
        <div className={`${resultStyles.code} whitespace-pre-wrap`}>
          {implementationCode}
        </div>
      </div>
    </div>
  );
}
