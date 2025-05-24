import { ReactNode } from "react";
import { classNames, containerStyles, sectionStyles } from "@/utils/styles";

interface ChallengeSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ChallengeSection({ title, children, className = "" }: ChallengeSectionProps) {
  return (
    <div className={classNames(sectionStyles.container, className)}>
      <h2 className={`${sectionStyles.title} text-center`}>{title}</h2>
      {children}
    </div>
  );
}

interface ChallengeContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ChallengeContainer({ 
  title, 
  children, 
  className = "" 
}: ChallengeContainerProps) {
  return (
    <div className={classNames(containerStyles.main, className)}>
      <div className={containerStyles.content}>
        <h1 className={containerStyles.title}>{title}</h1>
        {children}
      </div>
    </div>
  );
}
