import Link from "next/link";
import { Plus, Search, Edit, Eye, Trash2 } from "lucide-react";

const mockJobs = [
  { id: "1", title: "Senior Full Stack Engineer", status: "Active", applicants: 42, posted: "2026-03-01", category: "Engineering" },
  { id: "2", title: "Global HR Compliance Specialist", status: "Active", applicants: 18, posted: "2026-03-10", category: "Human Resources" },
  { id: "3", title: "Enterprise Account Executive", status: "Closed", applicants: 88, posted: "2026-02-15", category: "Sales" },
];

export default function JobsPage() {
  return (
    <div className="space-y-6 pb-20 fade-in animate-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage your active and closed job postings.</p>
         </div>
         <Link 
            href="/career-admin/jobs/new" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Post New Job
         </Link>
      </div>

      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-muted/20">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full pl-9 pr-4 py-2 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-background border rounded-lg px-3 py-2 text-sm outline-none font-medium">
              <option>All Status</option>
              <option>Active</option>
              <option>Closed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold">Job Title</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Applicants</th>
                <th className="px-6 py-4 font-semibold">Posted Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockJobs.map((job) => (
                <tr key={job.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-foreground text-base">{job.title}</div>
                    <div className="text-muted-foreground">{job.category}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      job.status === 'Active' 
                        ? 'bg-green-500/10 text-green-600' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/career-admin/pipeline?job=${job.id}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
                      {job.applicants}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{job.posted}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-muted-foreground">
                      <button className="p-2 hover:bg-muted rounded-lg hover:text-foreground transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg hover:text-foreground transition-colors" title="Edit Job">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded-lg hover:text-destructive transition-colors text-destructive opacity-70" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {mockJobs.length === 0 && (
             <div className="text-center py-12">
               <p className="text-muted-foreground mb-4">No jobs posted yet.</p>
               <Link href="/career-admin/jobs/new" className="text-primary font-medium hover:underline">Post your first job</Link>
             </div>
          )}
        </div>
        
        <div className="p-4 border-t bg-muted/20 text-xs text-muted-foreground flex justify-between items-center">
          <span>Showing {mockJobs.length} of {mockJobs.length} jobs</span>
        </div>
      </div>
    </div>
  );
}
