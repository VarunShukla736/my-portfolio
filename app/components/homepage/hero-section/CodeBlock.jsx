"use client";

import React from "react";

export default function CodeBlock() {
  return (
    <div className="bg-[#1E1E1E] text-gray-200 px-4 py-10 rounded-xl font-mono text-sm shadow-lg overflow-x-auto">
      <pre>
        <code>
{`// Developer Profile

const developer = {
  name: "Varun Shukla",
  role: "Frontend Developer",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS"
  ],
  currentlyLearning: "Advanced Next.js Patterns",
  portfolio: "https://portfolio.com"
};

console.log(\`👋 Hi, I'm \${developer.name} - \${developer.role}\`);`}
        </code>
      </pre>
    </div>
  );
}
