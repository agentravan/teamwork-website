'use client';

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function ApplicationForm({ jobId, candidateId }: { jobId: string, candidateId?: string }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    
    const router = useRouter();
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!candidateId) {
            setError('You must be logged in as a candidate to apply.');
            return;
        }
        
        if (!resumeFile) {
            setError('Please attach your resume.');
            return;
        }

        setLoading(true);
        
        try {
            // 1. Upload Resume to Supabase Storage 'resumes' bucket
            const fileExt = resumeFile.name.split('.').pop();
            const fileName = `${candidateId}_${jobId}_${Date.now()}.${fileExt}`;
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('resumes')
                .upload(fileName, resumeFile);
                
            if (uploadError) throw new Error(`Failed to upload resume: ${uploadError.message}`);
            
            // Get public URL
            const { data: { publicUrl } } = supabase.storage.from('resumes').getPublicUrl(fileName);

            // 2. Insert Application Record
            const { error: dbError } = await supabase.from('applications').insert({
                job_id: jobId,
                candidate_id: candidateId,
                full_name: fullName,
                email: email,
                phone: phone,
                resume_url: publicUrl,
                status: 'pending'
            });

            if (dbError) throw new Error(`Failed to submit application: ${dbError.message}`);

            setSuccess(true);
            setTimeout(() => {
                router.push('/careers');
            }, 3000);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph-bold ph-check text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p>Thank you for applying. Redirecting you back to careers...</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Submit Your Application</h3>
            
            {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">{error}</div>}
            
            {!candidateId && (
                <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg text-sm border border-yellow-200 flex items-center gap-2">
                    <i className="ph-fill ph-warning"></i>
                    You need to log in to the Career Portal to apply.
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input 
                        type="text" required 
                        className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition" 
                        value={fullName} onChange={(e) => setFullName(e.target.value)} 
                    />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" required 
                            className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition" 
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                        <input 
                            type="tel" required 
                            className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition" 
                            value={phone} onChange={(e) => setPhone(e.target.value)} 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Resume (PDF, DOCX)</label>
                    <input 
                        type="file" required accept=".pdf,.doc,.docx"
                        className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" 
                        onChange={(e) => setResumeFile(e.target.files?.[0] || null)} 
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading || !candidateId} 
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-700 transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Submitting Application...' : 'Submit Application'}
            </button>
        </form>
    );
}
