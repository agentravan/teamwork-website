import React from 'react';

export default function SuperAdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
                👑 Super Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white shadow rounded border-t-4 border-indigo-500">
                    <h2 className="text-xl font-semibold mb-2">Platform Analytics</h2>
                    <p className="text-gray-600">Total Tenants: 12</p>
                    <p className="text-gray-600">Active Tenants: 10</p>
                    <p className="text-gray-600">Revenue Overview: $12,400</p>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-indigo-500">
                    <h2 className="text-xl font-semibold mb-2">Tenant Management</h2>
                    <ul className="text-indigo-600 underline">
                        <li>Create Tenant</li>
                        <li>Suspend Tenant</li>
                        <li>Convert Trial to Paid</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-indigo-500">
                    <h2 className="text-xl font-semibold mb-2">Global Monitoring</h2>
                    <ul className="text-indigo-600 underline">
                        <li>Audit Logs</li>
                        <li>Integration Logs</li>
                    </ul>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-400 text-center">Software Owner Use Only. This is the SaaS Control Center.</p>
        </div>
    );
}
