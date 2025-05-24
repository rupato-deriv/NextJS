import Link from "next/link";
import { ReactNode } from "react";

export default function ChallengeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">NextJS Challenges</h1>
          <Link 
            href="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-3 rounded-md transition-colors shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
