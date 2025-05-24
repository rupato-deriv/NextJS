import Link from "next/link";
import { challenges } from "@/config/challenges";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">NextJS Challenges</h1>
      
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
        {challenges.map((challenge, index) => (
          <Link 
            key={challenge.id}
            href={challenge.path} 
            className="p-6 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Challenge {index + 1}</h2>
            <p>{challenge.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
