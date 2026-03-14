import Link from "next/link";
import { LayoutDashboard, Briefcase, Settings, LogOut, Users as Pipeline, Bookmark, PlusCircle } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // In a real app with JWT auth, this would read from middleware context or cookies
  return (
    <div className="flex h-screen bg-muted/20 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r flex flex-col hidden md:flex">
        <div className="p-6 border-b">
          <Link href="/career-admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex flex-col items-center justify-center text-primary-foreground font-bold text-sm">
              TW
            </div>
            <span className="font-bold tracking-tight">Portal Admin</span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <Link 
            href="/career-admin"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link 
             href="/career-admin/jobs"
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Briefcase className="w-5 h-5" /> My Jobs
          </Link>
          <Link 
             href="/career-admin/jobs/new"
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <PlusCircle className="w-5 h-5" /> Submit Job
          </Link>
          <Link 
             href="/career-admin/pipeline"
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Pipeline className="w-5 h-5" /> Pipeline Board
          </Link>
          <Link 
             href="/career-admin/candidates"
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Bookmark className="w-5 h-5" /> Saved Candidates
          </Link>
        </nav>

        <div className="p-4 border-t space-y-2">
          <Link 
             href="/career-admin/settings"
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <button 
             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive w-full text-left font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto flex flex-col relative container px-0 max-w-none">
        {/* Mobile Header (simplified) */}
        <header className="md:hidden p-4 border-b bg-card flex justify-between items-center z-10 sticky top-0">
          <Link href="/career-admin" className="font-bold">Portal Admin</Link>
          <Link href="/career-admin/jobs/new" className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium">Post Job</Link>
        </header>

        <div className="p-6 md:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
