import { searchConfig } from "@/config/navbar-config";

/**
 * A reusable search input component for the navbar
 */
export default function SearchInput({ className }: { className?: string }) {
  return (
    <input
      type="text"
      placeholder={searchConfig.placeholder}
      className={`px-4 py-2 ${className}`}
    />
  );
}
