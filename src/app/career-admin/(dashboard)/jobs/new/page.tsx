"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function NewJobPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "Global (Remote)",
    experience: "",
    salaryRange: "",
    jobType: "Full-time",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // In a real app: await fetch('/api/jobs', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setSubmitting(false);
      router.push("/career-admin/jobs");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/career-admin/jobs" className="p-2 border rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Post New Job</h1>
            <p className="text-muted-foreground text-sm">Publish an opening to the global career portal.</p>
          </div>
        </div>
      </div>

      <AnimatedSection direction="up" className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b pb-2">Basic Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Title *</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                  placeholder="e.g. Senior Full Stack Engineer" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category *</label>
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Select Category</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange}
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all text-muted-foreground" 
                  readOnly 
                />
                <p className="text-xs text-muted-foreground">All our roles are global.</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Type *</label>
                <select 
                  name="jobType" 
                  value={formData.jobType} 
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b pb-2">Requirements & Compensation</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level *</label>
                <input 
                  type="text" 
                  name="experience" 
                  value={formData.experience} 
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                  placeholder="e.g. 5+ Years" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Salary Range *</label>
                <input 
                  type="text" 
                  name="salaryRange" 
                  value={formData.salaryRange} 
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                  placeholder="e.g. $100k - $140k" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Full Description *</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange}
                required 
                rows={8}
                className="w-full p-4 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y" 
                placeholder="Write the full job description here. Use markdown for formatting." 
              ></textarea>
            </div>
          </div>

          <div className="pt-4 border-t flex justify-end gap-4">
             <Link href="/career-admin/jobs" className="px-6 py-3 font-medium rounded-xl hover:bg-muted transition-colors">
               Cancel
             </Link>
             <button 
               type="submit" 
               disabled={submitting}
               className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
             >
               {submitting ? "Publishing..." : <><Save className="w-5 h-5" /> Publish Job</>}
             </button>
          </div>

        </form>
      </AnimatedSection>
    </div>
  );
}
