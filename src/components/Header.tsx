'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenQuoteModal?: (vertical?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-200">
      {/* Top Parent Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3 font-medium">
            <span className="bg-blue-600 text-white font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Parent Umbrella
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-200 font-semibold tracking-wide">
              TeamWork Group <span className="text-slate-400 font-normal italic">&ldquo;together we can do so much&rdquo;</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Gurugram HQ Hub
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline flex items-center gap-1">
              ⚡ Fast Turnaround & Pan-India
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
            TW
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
              TeamWork <span className="text-blue-600 font-bold">Group</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
              3 Verticals • One Trusted Partner
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              isActive('/')
                ? 'bg-slate-100 text-blue-600'
                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Group Overview
          </Link>

          {/* Vertical 1: HR Consulting */}
          <Link
            href="/hr-consulting"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/hr-consulting')
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            HR Consulting
          </Link>

          {/* Vertical 2: GiftCraft */}
          <Link
            href="/giftcraft"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/giftcraft')
                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                : 'text-slate-700 hover:text-rose-600 hover:bg-rose-50/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            GiftCraft Hampers
          </Link>

          {/* Vertical 3: GadgetOnRent */}
          <Link
            href="/gadget-on-rent"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/gadget-on-rent')
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            GadgetOnRent
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2"
          >
            <span>Get a Free Quote</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/') ? 'bg-slate-100 text-blue-600' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Group Overview
          </Link>

          <div className="pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
            Business Verticals
          </div>

          <Link
            href="/hr-consulting"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              isActive('/hr-consulting') ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-blue-50/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              TeamWork HR Consulting
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">Blue</span>
          </Link>

          <Link
            href="/giftcraft"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              isActive('/giftcraft') ? 'bg-rose-50 text-rose-700' : 'text-slate-800 hover:bg-rose-50/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
              GiftCraft Hampers
            </span>
            <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">Rose</span>
          </Link>

          <Link
            href="/gadget-on-rent"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              isActive('/gadget-on-rent') ? 'bg-emerald-50 text-emerald-700' : 'text-slate-800 hover:bg-emerald-50/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              GadgetOnRent
            </span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Green</span>
          </Link>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow text-center block text-base"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
