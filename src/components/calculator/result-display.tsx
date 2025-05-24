/**
 * A component to display the result of a calculation
 */
export default function ResultDisplay({ total }: { total: number | null }) {
  return (
    <div className="text-center">
      <p className="text-lg font-medium">Total:</p>
      <p className="text-2xl font-bold">{total !== null ? total : ""}</p>
    </div>
  );
}
