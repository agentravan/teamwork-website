import Link from "next/link";
import { Users, Briefcase, Eye, Bookmark, ArrowRight, Plus } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back. Here&apos;s what&apos;s happening today.</p>
         </div>
         <Link 
            href="/career-admin/jobs/new" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Post New Job
         </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-card border shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                 <Briefcase className="w-5 h-5" />
              </div>
           </div>
           <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Active Jobs</h4>
              <p className="text-3xl font-bold">12</p>
           </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-card border shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                 <Users className="w-5 h-5" />
              </div>
           </div>
           <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Total Applications</h4>
              <p className="text-3xl font-bold">148</p>
           </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-card border shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                 <Bookmark className="w-5 h-5" />
              </div>
           </div>
           <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Saved Candidates</h4>
              <p className="text-3xl font-bold">24</p>
           </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-card border shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                 <Eye className="w-5 h-5" />
              </div>
           </div>
           <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Job Views</h4>
              <p className="text-3xl font-bold">2.4k</p>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <div className="bg-card rounded-2xl border shadow-sm p-6 overflow-hidden">
             
             <div className="relative border-l border-border ml-3 space-y-8 py-2">
                
                <div className="relative pl-6">
                   <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-card"></div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-medium text-foreground">New Application Received</p>
                        <p className="text-sm text-muted-foreground">Sarah Jenkins applied for <span className="font-medium text-foreground">Senior Full Stack Engineer</span></p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">2 hours ago</span>
                   </div>
                   <div className="mt-3">
                      <Link href="/career-admin/pipeline" className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md hover:bg-primary/20 transition-colors">Review Application</Link>
                   </div>
                </div>

                <div className="relative pl-6">
                   <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-card"></div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-medium text-foreground">Job Posted</p>
                        <p className="text-sm text-muted-foreground">You published <span className="font-medium text-foreground">Global HR Compliance Specialist</span></p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">1 day ago</span>
                   </div>
                </div>

                <div className="relative pl-6">
                   <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-card"></div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-medium text-foreground">Candidate Moved to Interview</p>
                        <p className="text-sm text-muted-foreground">Michael Chen advanced to Stage 3 for <span className="font-medium text-foreground">Enterprise Account Executive</span></p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">2 days ago</span>
                   </div>
                </div>

             </div>
          </div>
        </div>

        {/* Quick Actions / At a Glance */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Pipeline Overview</h2>
          <div className="bg-card rounded-2xl border shadow-sm p-6 space-y-4">
             <div className="space-y-2">
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">New Applications</span>
                 <span className="font-medium">42</span>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-blue-400 w-[60%] rounded-full"></div>
               </div>
             </div>

             <div className="space-y-2">
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">Screening</span>
                 <span className="font-medium">18</span>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-400 w-[25%] rounded-full"></div>
               </div>
             </div>

             <div className="space-y-2">
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">Interviewing</span>
                 <span className="font-medium">8</span>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-orange-400 w-[10%] rounded-full"></div>
               </div>
             </div>

             <div className="space-y-2">
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">Offered</span>
                 <span className="font-medium">2</span>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-green-400 w-[5%] rounded-full"></div>
               </div>
             </div>

             <div className="pt-4 mt-6 border-t flex justify-end">
               <Link href="/career-admin/pipeline" className="text-sm font-medium text-primary flex items-center hover:underline">
                 View Full Kanban Board <ArrowRight className="w-4 h-4 ml-1" />
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
