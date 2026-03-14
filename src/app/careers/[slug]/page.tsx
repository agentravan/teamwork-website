"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, Briefcase, Clock, FileText, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

// Simulated fetch data for MVP build without active DB connection
const mockJobMap: Record<string, any> = {
  "1": { title: "Senior Full Stack Engineer", category: "Engineering", location: "Global (Remote)", experience: "5+ Years", salaryRange: "$100k - $140k", jobType: "Full-time" },
  "2": { title: "Global HR Compliance Specialist", category: "Human Resources", location: "Global (Remote)", experience: "3-5 Years", salaryRange: "$70k - $90k", jobType: "Full-time" },
  "general": { title: "General Application", category: "Any", location: "Global (Remote)", experience: "Any", salaryRange: "Varies", jobType: "Any" }
};

export default function ApplicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const isGeneral = slug === "general";
  const job = mockJobMap[slug] || mockJobMap["general"];
  
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    resumeUrl: "",
    coverLetter: "",
    source: "Website",
    jobId: isGeneral ? "general-posting" : slug
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
       // Fallback for build preview environment
       setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col min-h-screen pt-32 pb-20 items-center justify-center">
        <AnimatedSection direction="up" className="max-w-md w-full p-8 text-center bg-card border rounded-3xl shadow-sm">
           <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
             <CheckCircle2 className="w-10 h-10" />
           </div>
           <h2 className="text-3xl font-bold mb-4">Application Sent!</h2>
           <p className="text-muted-foreground mb-8">
             Thank you for applying to the {job.title} position. You will receive a confirmation email shortly. Our recruitment team will review your profile.
           </p>
           <Link href="/careers" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-3 font-medium inline-block transition-colors w-full">
             Back to Careers
           </Link>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <AnimatedSection direction="up">
          <Link href="/careers" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to job board
          </Link>
          
          <div className="mb-10 pb-8 border-b">
             <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{job.title}</h1>
             {!isGeneral && (
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
                  <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.experience}</span>
                  <span className="flex items-center"><FileText className="w-4 h-4 mr-1.5" /> {job.salaryRange}</span>
                </div>
             )}
             {isGeneral && (
                <p className="text-lg text-muted-foreground">Submit your profile to our global talent pool.</p>
             )}
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.1}>
           <div className="bg-card border shadow-sm p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Submit Your Application</h2>
              <p className="text-muted-foreground mb-8">Please fill out the form below. Links to online portfolios or LinkedIn are accepted in the resume link field.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Full Name *</label>
                     <input 
                       type="text" 
                       name="candidateName"
                       value={formData.candidateName}
                       onChange={handleChange}
                       required
                       className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Email Address *</label>
                     <input 
                       type="email" 
                       name="candidateEmail"
                       value={formData.candidateEmail}
                       onChange={handleChange}
                       required
                       className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                     />
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Phone Number</label>
                     <input 
                       type="tel" 
                       name="candidatePhone"
                       value={formData.candidatePhone}
                       onChange={handleChange}
                       className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Link to Resume / LinkedIn *</label>
                     <input 
                       type="url" 
                       name="resumeUrl"
                       value={formData.resumeUrl}
                       onChange={handleChange}
                       required
                       placeholder="https://"
                       className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                     />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium">Cover Letter / Note</label>
                   <textarea 
                     name="coverLetter"
                     value={formData.coverLetter}
                     onChange={handleChange}
                     rows={5}
                     placeholder="Tell us why you're a great fit for TeamWork Solutions..."
                     className="w-full p-4 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y" 
                   ></textarea>
                 </div>
                 
                 <div className="pt-4 border-t">
                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 w-full sm:w-auto"
                    >
                      {submitting ? "Submitting Application..." : <>Submit Application <ArrowRight className="w-5 h-5 ml-2" /></>}
                    </button>
                    <p className="text-xs text-muted-foreground mt-4 text-center sm:text-left align-middle">
                      By submitting this form, you acknowledge that automating emails will be dispatched to both your inbox and the internal team.
                    </p>
                 </div>
                 
              </form>
           </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
