'use client';

import Link from 'next/link';

export default function LoginSelectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden p-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Welcome to TeamWork Solutions</h1>
        <p className="text-gray-600 mb-10 text-lg">Please select your login destination to continue.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GlobalHRX Option */}
          <Link href="/login/hrx" className="group block p-8 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="ph-fill ph-buildings text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">GlobalHRX System</h2>
            <p className="text-gray-500">Access point for Administrators, HR, Managers, and Employees.</p>
          </Link>

          {/* Career Portal Option */}
          <Link href="/login/candidate" className="group block p-8 border-2 border-gray-200 rounded-xl hover:border-green-600 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <i className="ph-fill ph-student text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Career Portal</h2>
            <p className="text-gray-500">Access point for Candidates to view and apply for open positions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
