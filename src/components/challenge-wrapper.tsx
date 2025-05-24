"use client";

import { getChallengeById } from "@/config/challenges";
import dynamic from "next/dynamic";

interface ChallengeWrapperProps {
  challengeId: string;
}

/**
 * A wrapper component that dynamically loads the appropriate challenge client component
 * based on the challenge ID.
 */
export default function ChallengeWrapper({ challengeId }: ChallengeWrapperProps) {
  const challenge = getChallengeById(challengeId);
  
  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Challenge Not Found</h2>
          <p>The challenge &quot;{challengeId}&quot; does not exist.</p>
        </div>
      </div>
    );
  }
  
  // Dynamically import the challenge client component
  const ClientComponent = dynamic(
    () => import(`@/app/challenges/${challenge.id}/${challenge.component}`),
    {
      loading: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-lg">Loading {challenge.name} Challenge...</p>
          </div>
        </div>
      ),
      ssr: false,
    }
  );
  
  return <ClientComponent />;
}
