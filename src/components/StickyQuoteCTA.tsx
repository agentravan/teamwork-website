'use client';

import React from 'react';

interface StickyQuoteCTAProps {
  onOpenModal: () => void;
}

export default function StickyQuoteCTA({ onOpenModal }: StickyQuoteCTAProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
      <button
        onClick={onOpenModal}
        className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold px-6 py-3.5 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2.5 focus:outline-none focus:ring-4 focus:ring-blue-400"
        aria-label="Get a Free Quote"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-sm tracking-wide">Get a Free Quote</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
}
