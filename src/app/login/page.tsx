'use client';
import React from 'react';
import Link from 'next/link';

export default function LoginSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-slate-900">Welcome to TeamWork Group</h1>
        <p className="text-slate-600 text-sm">Select the portal you wish to access below:</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Link href="/login-hrx" className="p-8 border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all text-left block group">
            <h2 className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">TeamWork HR Desk</h2>
            <p className="text-xs text-slate-500 mt-2">Access for Administrators, HR Officers, and Employees.</p>
          </Link>
          <Link href="/login-recruiter" className="p-8 border border-slate-200 rounded-2xl hover:border-emerald-600 hover:shadow-lg transition-all text-left block group">
            <h2 className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700">Recruiter Portal</h2>
            <p className="text-xs text-slate-500 mt-2">Post open requisitions and track candidate pipelines.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
