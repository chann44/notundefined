"use client";

import { useState, useEffect } from "react";

interface SkillProps {
  name: string;
  frames: string[];
}

export function SkillCard({ name, frames }: SkillProps) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 500);

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <pre className="text-xs leading-tight mb-3 text-gray-600 dark:text-gray-400 font-mono">
        {frames[currentFrame]}
      </pre>
      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {name}
      </p>
    </div>
  );
}

interface SkillsGridProps {
  skills: SkillProps[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}

