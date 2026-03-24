'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

export default function DashboardHome() {
    const supabase = createClient();
    
    const [stats, setStats] = useState({
        activeJobs: 0,
        totalApplications: 0,
        pendingReview: 0,
        interviews: 0
    });
    
    const [recentApps, setRecentApps] = useState<any[]>([]);

    useEffect(() => {
        fetchDashboardData();

        // 8. REAL-TIME UPDATES setup
        const channel = supabase.channel('dashboard-metrics')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, (payload) => {
                console.log('Real-time change received!', payload);
                fetchDashboardData();
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'jobs' }, () => {
                fetchDashboardData();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchDashboardData = async () => {
        // Fetch Active Jobs
        const { count: jobsCount } = await supabase.from('jobs').select('*', { count: 'exact', head: true }).eq('status', 'open');
        
        // Fetch Application Stats
        const { data: apps } = await supabase.from('applications').select('status');
        
        const total = apps?.length || 0;
        const pending = apps?.filter(a => a.status === 'pending').length || 0;
        const interviewing = apps?.filter(a => a.status === 'interviewing').length || 0;

        setStats({
            activeJobs: jobsCount || 0,
            totalApplications: total,
            pendingReview: pending,
            interviews: interviewing
        });

        // Recent Applications Pipeline
        const { data: recents } = await supabase.from('applications')
            .select(`*, jobs:job_id(title)`)
            .order('created_at', { ascending: false })
            .limit(5);

        if (recents) setRecentApps(recents);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Overview</h1>
                <Link href="/dashboard/jobs/new" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-semibold shadow-sm transition-colors flex items-center gap-2">
                    <i className="ph-bold ph-plus"></i> Create Job Post
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Metric Cards */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Active Jobs</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stats.activeJobs}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl"><i className="ph-fill ph-briefcase"></i></div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Total Applications</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stats.totalApplications}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl"><i className="ph-fill ph-files"></i></div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Pending Review</p>
                        <h3 className="text-3xl font-bold text-amber-600">{stats.pendingReview}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xl"><i className="ph-fill ph-hourglass-high"></i></div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Interviews Scheduled</p>
                        <h3 className="text-3xl font-bold text-green-600">{stats.interviews}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl"><i className="ph-fill ph-check-circle"></i></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Candidate Pipeline</h3>
                    <div className="space-y-4">
                        {recentApps.length === 0 ? <p className="text-gray-500">No applications yet.</p> : recentApps.map((app) => (
                            <div key={app.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                                        {app.full_name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{app.full_name}</h4>
                                        <p className="text-sm text-gray-500">Applied for: {app.jobs?.title}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full uppercase tracking-wider">{app.status}</span>
                                    <a href={app.resume_url} target="_blank" className="text-blue-600 hover:text-blue-800 bg-blue-50 p-2 rounded-full" title="View Resume">
                                        <i className="ph-bold ph-download-simple"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
