'use client';

import React from 'react';

export default function EmployeeDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
                👷 Employee ESS Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded border-t-4 border-purple-500">
                    <h2 className="text-xl font-semibold mb-2">My Time</h2>
                    <ul className="text-purple-600 underline">
                        <li>My Attendance</li>
                        <li>My Leave Balance</li>
                        <li>Apply Leave / OD</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-purple-500">
                    <h2 className="text-xl font-semibold mb-2">My Documents</h2>
                    <ul className="text-purple-600 underline">
                        <li>Download Payslips</li>
                        <li>Download HR Letters</li>
                        <li>View Meeting Schedule</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
