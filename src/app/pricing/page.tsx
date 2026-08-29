'use client';

import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Standard Recruitment',
      price: '8.33%',
      salary: 'of Annual CTC',
      desc: 'Perfect for single high-priority hires.',
      features: ['1 Month Replacement Guarantee', 'Dedicated Account Manager', 'Screened Candidates only'],
    },
    {
      name: 'Bulk Hiring',
      price: '7.00%',
      salary: 'of Annual CTC',
      desc: 'Ideal for 5+ hires in a quarter.',
      features: ['45 Days Replacement Guarantee', 'Customized Assessment Tests', 'Volume Discount Applied'],
      highlight: true,
    },
    {
      name: 'Enterprise Partner',
      price: '6.50%',
      salary: 'of Annual CTC',
      desc: 'For long-term strategic partnership.',
      features: ['90 Days Replacement Guarantee', 'On-site Coordinator', 'Full HR Compliance Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Strategic Pricing Models
        </h1>
        <p className="text-slate-400 text-xl mb-16">
          High-performance hiring with a focus on retention and value.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border ${
                plan.highlight ? 'border-emerald-500 bg-emerald-500/5' : 'border-slate-800 bg-slate-900/50'
              } relative`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400 ml-2">{plan.salary}</span>
              </div>
              <p className="text-slate-400 mb-8">{plan.desc}</p>
              <ul className="text-left space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className="text-emerald-500">+</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact-form"
                className={`block w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
