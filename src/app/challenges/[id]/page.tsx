import { notFound } from "next/navigation";
import { getChallengeById } from "@/config/challenges";
import ClientWrapper from "./client-wrapper";

type Props = {
  params: { id: string };
};

export default async function ChallengePage({ params }: Props) {

  const challenge = await getChallengeById(params.id);

  if (!challenge) notFound();

  return <ClientWrapper challengeId={params.id} challenge={challenge} />;
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const { challenges } = await import("@/config/challenges");

  return challenges
    .filter((challenge): challenge is { id: string } => Boolean(challenge.id))
    .map(({ id }) => ({ id }));
}