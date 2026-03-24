import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-900 border-r border-blue-800 flex flex-col hidden sm:flex">
                <div className="p-6 border-b border-blue-800 text-center">
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">GlobalHRX</h1>
                    <p className="text-blue-300 text-xs mt-1 uppercase tracking-widest">Admin Workspace</p>
                </div>
                <nav className="flex-1 p-4 space-y-2 text-sm font-medium">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-800 text-white rounded-lg transition-colors">
                        <i className="ph-fill ph-squares-four text-lg text-blue-300"></i> Dashboard
                    </Link>
                    <Link href="/dashboard/jobs" className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors">
                        <i className="ph-fill ph-briefcase text-lg text-blue-300"></i> Job Postings
                    </Link>
                    <Link href="/dashboard/applications" className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors">
                        <i className="ph-fill ph-users-three text-lg text-blue-300"></i> Applications
                    </Link>
                    <Link href="/dashboard/services" className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors">
                        <i className="ph-fill ph-currency-dollar text-lg text-blue-300"></i> Dynamic Pricing
                    </Link>
                </nav>
                <div className="p-4 border-t border-blue-800">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-800 rounded-lg transition-colors">
                        <i className="ph-bold ph-sign-out text-lg"></i> Exit Dashboard
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 z-10">
                    <h2 className="text-lg font-bold text-gray-800">Workspace</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">A</div>
                    </div>
                </header>
                <div className="flex-1 p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
