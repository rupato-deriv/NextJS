import { notFound } from "next/navigation";
import ChallengeWrapper from "@/components/challenge-wrapper";
import { getChallengeById } from "@/config/challenges";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const challenge = getChallengeById(params.id);
  
  if (!challenge) {
    return {
      title: "Challenge Not Found",
    };
  }
  
  return {
    title: `${challenge.name} | NextJS Challenges`,
    description: `Interactive ${challenge.name} challenge built with Next.js`,
  };
}

type ChallengePageProps = {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

/**
 * Dynamic page component for individual challenges
 * This uses the challenge ID from the URL to load the appropriate challenge
 */
export default function ChallengePage({ params }: ChallengePageProps) {
  const { id } = params;
  const challenge = getChallengeById(id);
  
  // If the challenge doesn't exist, show a 404 page
  if (!challenge) {
    notFound();
  }
  
  return <ChallengeWrapper challengeId={id} />;
}

/**
 * Generate static params for all challenges
 * This ensures that all challenge pages are pre-rendered at build time
 */
export async function generateStaticParams() {
  // Import challenges directly to avoid circular dependencies
  const { challenges } = await import("@/config/challenges");
  
  return challenges.map((challenge) => ({
    id: challenge.id,
  }));
}
