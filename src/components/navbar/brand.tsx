import { brandConfig } from "@/config/navbar-config";

/**
 * A component for the brand/logo in the navbar
 */
export default function Brand({ className }: { className?: string }) {
  return (
    <a href={brandConfig.href} className={className}>
      {brandConfig.name}
    </a>
  );
}
