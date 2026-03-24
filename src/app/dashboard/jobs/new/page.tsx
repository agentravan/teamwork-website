'use client';

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateJobPage() {
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        type: 'full-time',
        description: '',
        requirements: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const router = useRouter();
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: dbError } = await supabase.from('jobs').insert({
                ...formData,
                status: 'open'
            });

            if (dbError) throw dbError;
            
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/dashboard" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                    <i className="ph-bold ph-arrow-left"></i>
                </Link>
                <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Create New Job Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                {error && <div className="bg-red-50 text-red-600 p-4 rounded text-sm border border-red-200">{error}</div>}
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title</label>
                        <input required type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Senior Frontend Developer" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                        <input required type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} placeholder="e.g. Engineering" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                        <input required type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="e.g. Remote, India" />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type</label>
                        <select className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description</label>
                        <textarea required className="w-full h-32 border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Describe the role and responsibilities..." />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Requirements</label>
                        <textarea required className="w-full h-32 border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none" value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} placeholder="Required skills, qualifications, etc..." />
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                    <button type="submit" disabled={loading} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition duration-200 shadow-md disabled:opacity-50">
                        {loading ? 'Publishing...' : 'Publish Job'}
                    </button>
                </div>
            </form>
        </div>
    );
}
