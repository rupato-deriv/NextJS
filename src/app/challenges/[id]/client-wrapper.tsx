'use client';

import ChallengeWrapper from '@/components/challenge-wrapper';
import type { ChallengeConfig } from '@/config/challenges';

type ClientWrapperProps = {
  challengeId: string;
  challenge?: ChallengeConfig;
};

export default function ClientWrapper({ challengeId }: ClientWrapperProps) {
  return <ChallengeWrapper challengeId={challengeId} />;
}
