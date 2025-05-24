import { buttonStyles, examples } from "@/config/two-sum";

interface ActionButtonsProps {
  onSolve: () => void;
  onLoadExample: (index: number) => void;
}

/**
 * Component that renders the action buttons for the Two Sum challenge
 */
export default function ActionButtons({ onSolve, onLoadExample }: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap space-x-4 mb-6">
      <div className="flex space-x-2">
        <button
          onClick={onSolve}
          className={buttonStyles.primary}
        >
          Solve
        </button>
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => onLoadExample(index)}
            className={buttonStyles.secondary}
          >
            Ex: {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
