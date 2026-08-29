'use client';

import React from 'react';

export default function ManagerDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
                👨‍💻 Manager Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded border-t-4 border-orange-500">
                    <h2 className="text-xl font-semibold mb-2">Team Attendance</h2>
                    <ul className="text-orange-600 underline">
                        <li>View Team Attendance</li>
                        <li>Approve Leave / OD</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-orange-500">
                    <h2 className="text-xl font-semibold mb-2">Performance</h2>
                    <ul className="text-orange-600 underline">
                        <li>View Team Performance</li>
                        <li>Meeting Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
