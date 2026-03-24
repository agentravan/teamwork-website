import React from 'react';

export default function HRDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
                👨‍💼 HR / Payroll Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded border-t-4 border-green-500">
                    <h2 className="text-xl font-semibold mb-2">Employee Operations</h2>
                    <ul className="text-green-600 underline">
                        <li>Manage Employees</li>
                        <li>Approve Leave</li>
                        <li>Tracking Lifecycle</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow rounded border-t-4 border-green-500">
                    <h2 className="text-xl font-semibold mb-2">Payroll & Reports</h2>
                    <ul className="text-green-600 underline">
                        <li>Process Payroll</li>
                        <li>Generate Compliance Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
