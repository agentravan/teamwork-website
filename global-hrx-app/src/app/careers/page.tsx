import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function CareersPage() {
    const supabase = createClient();

    // Fetch open jobs from Supabase
    const { data: jobs, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false });

    // Fetch user (if logged in as candidate)
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

            {/* HEADER */}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="ph-fill ph-users-three text-3xl text-green-600"></i>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Career Portal</span>
                    </div>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-600">Logged in as {user.email}</span>
                            <form /* action="/api/auth/signout" */ method="post">
                                <button type="submit" className="text-red-600 hover:text-red-800 text-sm font-semibold">Sign Out</button>
                            </form>
                        </div>
                    ) : (
                        <Link href="/login/candidate" className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition">
                            Candidate Login
                        </Link>
                    )}
                </div>
            </header>

            {/* HERO */}
            <section className="bg-green-900 text-white py-20 px-6 sm:px-12 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Join Our Team</h1>
                <p className="text-lg text-green-100 max-w-2xl mx-auto">Discover roles that let you do your best work. We're looking for passionate individuals to join our growing team.</p>
            </section>

            {/* JOBS LISTING */}
            <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Open Positions</h2>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 mb-8">
                        Error loading jobs: {error.message}
                    </div>
                )}

                {!jobs || jobs.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <i className="ph-duotone ph-briefcase text-6xl text-gray-300 mb-4 inline-block"></i>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No Open Roles Right Now</h3>
                        <p className="text-gray-500">Check back later or join our talent network.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><i className="ph-fill ph-clock"></i> {job.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                    <p className="text-gray-500 flex items-center gap-2 mb-4"><i className="ph-fill ph-map-pin"></i> {job.location}</p>
                                </div>
                                
                                <Link href={`/careers/${job.id}`} className="bg-gray-900 text-white hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors whitespace-nowrap">
                                    View Details & Apply
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>

        </div>
    );
}
