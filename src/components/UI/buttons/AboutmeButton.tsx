'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AboutmeButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/about')}
      className="bg-primary cursor-pointer hover:bg-primary/80 justify-center text-white px-6 py-2 rounded-full font-light transition-colors duration-200 flex text-lg items-center gap-2"
    >
      About me
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
