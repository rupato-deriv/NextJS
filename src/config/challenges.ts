/**
 * Configuration for all challenges in the application
 * This allows for a more maintainable and scalable approach to adding new challenges
 */

export interface ChallengeConfig {
  id: string;
  name: string;
  path: string;
  component: string;
}

/**
 * List of all available challenges
 */
export const challenges: ChallengeConfig[] = [
  {
    id: "calculator",
    name: "Calculator",
    path: "/challenges/calculator",
    component: "calculator-client",
  },
  {
    id: "navbar",
    name: "Navbar",
    path: "/challenges/navbar",
    component: "navbar-client",
  },
  {
    id: "two-sum",
    name: "Two Sum",
    path: "/challenges/two-sum",
    component: "two-sum-client",
  },
];

/**
 * Get a challenge by its ID
 */
export function getChallengeById(id: string): ChallengeConfig | undefined {
  return challenges.find(challenge => challenge.id === id);
}
