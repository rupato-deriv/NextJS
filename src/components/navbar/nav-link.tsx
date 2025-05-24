/**
 * A reusable navigation link component
 */
export default function NavLink({ 
  href, 
  label, 
  className,
  isSelected = false,
  onClick,
  variant = "desktop"
}: { 
  href: string; 
  label: string; 
  className?: string;
  isSelected?: boolean;
  onClick?: (label: string) => void;
  variant?: "mobile" | "desktop";
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation
    if (onClick) {
      onClick(label); // Call the parent's onClick handler with this item's label
    }
  };

  if (variant === "mobile") {
    // Mobile view styling
    return (
      <div className="w-full my-2">
        <a 
          href={href} 
          onClick={handleClick}
          className={`${className} block w-full py-3 text-center ${isSelected ? 'bg-gray-500 text-white' : ''}`}
        >
          {label}
        </a>
      </div>
    );
  } else {
    // Desktop view styling
    return (
      <a 
        href={href} 
        onClick={handleClick}
        className={`${className} px-4 py-2 ${isSelected ? 'bg-gray-500 text-white rounded-md' : ''}`}
      >
        {label}
      </a>
    );
  }
}
