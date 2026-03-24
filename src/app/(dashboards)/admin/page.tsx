'use client';

import React from 'react';

export default function AdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
                🏢 Tenant Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded border-t-4 border-blue-500">
                    <h2 className="text-xl font-semibold mb-2">Organization Setup</h2>
                    <ul className="text-blue-600 underline">
                        <li>Branches & Departments</li>
                        <li>Employee Master</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-blue-500">
                    <h2 className="text-xl font-semibold mb-2">Leave Engine Configuration</h2>
                    <ul className="text-blue-600 underline">
                        <li>Leave Types & Rules</li>
                        <li>Accrual Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
