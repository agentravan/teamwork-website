'use client';

import React from 'react';

export default function RecruiterDashboard() {
  const stats = [
    { label: 'Active Jobs', value: '12', color: 'text-blue-600' },
    { label: 'Total Applications', value: '148', color: 'text-emerald-600' },
    { label: 'Interviews Scheduled', value: '8', color: 'text-amber-600' },
    { label: 'Hired this Month', value: '3', color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-10">Recruiter Portal</h2>
        <nav className="space-y-4 text-sm font-medium">
          <div className="p-3 bg-emerald-600 rounded-lg cursor-pointer">Dashboard</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">Post a Job</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">Candidates</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">Analytics</div>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back, Recruiter</h1>
          <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold">
            New Post +
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-500 text-sm mb-1">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-bold mb-6">Recent Applications</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 hover:bg-slate-50 rounded-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-bold text-slate-900">Candidate Name {i + 1}</p>
                    <p className="text-slate-500 text-sm">Senior Fullstack Developer • 4 years exp</p>
                  </div>
                </div>
                <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                  Applied Today
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
