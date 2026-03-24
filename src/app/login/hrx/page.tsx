'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function HRXLoginPage() {
    const [email, setEmail] = useState('admin@teamwork.com');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) throw signInError;

            // Fetch user profile role
            const { data: profile } = await supabase
              .from('profiles')
              .select('role')
              .eq('id', data.user.id)
              .single();

            if (profile?.role === 'admin') {
                router.push('/dashboard'); // Real dashboard route
            } else {
                router.push('/employee');
            }
            router.refresh(); // Refresh cookies
        } catch (err: any) {
            setError(err.message || 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-blue-900 p-8 text-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">GlobalHRX</h1>
                    <p className="text-blue-200 mt-2">Enterprise Admin Access</p>
                </div>

                <div className="p-8">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm text-center border border-red-200">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                            <input
                                type="email"
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                       >
                            {loading ? 'Authenticating...' : 'Secure Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500 bg-gray-50 p-3 rounded">
                        <p className="font-semibold mb-1">Test Credentials (Admin):</p>
                        <p>admin@teamwork.com</p>
                        <p>password123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
