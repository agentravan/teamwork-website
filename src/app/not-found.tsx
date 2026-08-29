import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-900 text-white px-4 py-16">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-block bg-blue-600/20 text-blue-400 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-500/30">
          404 • Page Not Found
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Lost in Space?
        </h1>

        <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Explore TeamWork Group&apos;s parent overview or jump to one of our three business verticals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
          <Link
            href="/hr-consulting"
            className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 transition-colors group"
          >
            <div className="text-xs font-bold text-blue-400 uppercase">HR Consulting</div>
            <div className="text-sm font-semibold text-white group-hover:text-blue-300 flex items-center justify-between mt-1">
              <span>Payroll &amp; Compliance</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/giftcraft"
            className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 transition-colors group"
          >
            <div className="text-xs font-bold text-rose-400 uppercase">GiftCraft</div>
            <div className="text-sm font-semibold text-white group-hover:text-rose-300 flex items-center justify-between mt-1">
              <span>Corporate Hampers</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/gadget-on-rent"
            className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 transition-colors group"
          >
            <div className="text-xs font-bold text-emerald-400 uppercase">GadgetOnRent</div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-300 flex items-center justify-between mt-1">
              <span>Laptop &amp; IT Rentals</span>
              <span>→</span>
            </div>
          </Link>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm"
          >
            <span>Back to Group Homepage</span>
            <span>🏠</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
