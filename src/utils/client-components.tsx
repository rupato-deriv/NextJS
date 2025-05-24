import { ComponentType } from "react";
import dynamic from "next/dynamic";

/**
 * Default loading component that displays a centered loading message
 */
function DefaultLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
}

/**
 * A higher-order component that wraps client components to prevent server-side rendering
 * and handle client-side only rendering with a loading state.
 * 
 * @param Component The client component to wrap
 * @param useCustomLoading Whether to use a custom loading component or the default one
 * @returns A wrapped component that only renders on the client
 */
export function createClientComponent<P extends object>(
  Component: ComponentType<P>,
  useCustomLoading = false
) {
  // Create a dynamic import with SSR disabled
  const DynamicComponent = dynamic(() => Promise.resolve(Component), {
    ssr: false,
    loading: useCustomLoading ? undefined : DefaultLoading
  });

  // Return a wrapper component that renders the dynamic component
  return function ClientComponentWrapper(props: P) {
    return <DynamicComponent {...props} />;
  };
}
