/**
 * A reusable SVG icon component
 */
export default function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d={path} 
      />
    </svg>
  );
}
