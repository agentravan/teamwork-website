'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

export default function CandidateLoginPage() {
    const [email, setEmail] = useState('candidate@test.com');
    const [password, setPassword] = useState('password123');
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    // extra signup fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const router = useRouter();
    const supabase = createClient();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignup) {
                const { data, error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            first_name: firstName,
                            last_name: lastName,
                        }
                    }
                });
                if (signUpError) throw signUpError;
                // Since email confirmations might be off we just redirect to careers
                router.push('/careers');
                router.refresh();
            } else {
                const { data, error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (signInError) throw signInError;
                
                router.push('/careers');
                router.refresh();
            }
        } catch (err: any) {
            setError(err.message || 'Failed to authenticate');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-green-700 p-8 text-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Career Portal</h1>
                    <p className="text-green-100 mt-2">{isSignup ? 'Create Candidate Account' : 'Candidate Login'}</p>
                </div>

                <div className="p-8">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm text-center border border-red-200">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleAuth} className="space-y-4">
                        {isSignup && (
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" required className="w-full border-gray-300 rounded border p-2 text-sm" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" required className="w-full border-gray-300 rounded border p-2 text-sm" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 text-white font-semibold py-2.5 px-4 rounded hover:bg-green-700 transition duration-200 disabled:opacity-50"
                       >
                            {loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Sign In')}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <button onClick={() => setIsSignup(!isSignup)} className="text-green-600 hover:underline">
                            {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                        </button>
                    </div>

                    {!isSignup && (
                        <div className="mt-4 text-center text-xs text-gray-400 bg-gray-50 p-2 rounded">
                            <p>Test Candidate: candidate@test.com / password123</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
