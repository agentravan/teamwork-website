'use client';

import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ApplicationForm from '@/components/ApplicationForm';

export default async function JobDetailsPage({ params }: { params: { jobId: string } }) {
    const supabase = createClient();

    // Fetch Job Data
    const { data: job, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', params.jobId)
        .single();

    if (error || !job) {
        notFound();
    }

    // Auth status
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Nav */}
            <div className="bg-white shadow-sm border-b py-4 px-6">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/careers" className="text-gray-500 hover:text-green-600 font-medium flex items-center gap-2">
                        <i className="ph-bold ph-arrow-left"></i> Back to Careers
                    </Link>
                    {!user && (
                        <Link href="/login/candidate" className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-full">
                            Candidate Login
                        </Link>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-12 px-6">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><i className="ph-fill ph-clock"></i> {job.type}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><i className="ph-fill ph-map-pin"></i> {job.location}</span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{job.title}</h1>
                    
                    <div className="prose max-w-none text-gray-600 mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Job Description</h2>
                        <p className="whitespace-pre-wrap">{job.description}</p>
                    </div>

                    {job.requirements && (
                        <div className="prose max-w-none text-gray-600">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Requirements</h2>
                            <p className="whitespace-pre-wrap">{job.requirements}</p>
                        </div>
                    )}
                </div>

                {/* Application Section */}
                <div id="apply">
                    <ApplicationForm jobId={job.id} candidateId={user?.id} />
                </div>
            </div>
        </div>
    );
}
