import { problemDescription } from "@/config/two-sum";

/**
 * Component that displays the problem description for the Two Sum challenge
 */
export default function ProblemDescription() {
  return (
    <>
      <p className="mb-4">
        <strong>{problemDescription.paragraph1}</strong>
      </p>
      <p className="mb-4">
        {problemDescription.paragraph2}
      </p>
      <p className="mb-4">
        {problemDescription.paragraph3}
      </p>
      <p>
        {problemDescription.paragraph4}
      </p>
    </>
  );
}
