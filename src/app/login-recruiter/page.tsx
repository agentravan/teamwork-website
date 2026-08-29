'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RecruiterLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center">Recruiter Portal</h1>
        <form className="space-y-6 mt-8">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded" placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded" placeholder="Password" />
          <Link href="/recruiter-dashboard" className="block w-full bg-emerald-600 text-white py-3 rounded text-center font-bold">Sign In</Link>
        </form>
      </div>
    </div>
  );
}