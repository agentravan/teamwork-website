import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import prisma from "@/lib/prisma"; // Note: Using mock data if DB connection is unavailable during build

export const revalidate = 60; // Revalidate every minute

// Fallback data in case DB is unseeded or unreachable
const fallbackJobs = [
  {
    id: "1",
    title: "Senior Full Stack Engineer",
    category: "Engineering",
    location: "Global (Remote)",
    experience: "5+ Years",
    salaryRange: "$100k - $140k",
    jobType: "Full-time",
  },
  {
    id: "2",
    title: "Global HR Compliance Specialist",
    category: "Human Resources",
    location: "Global (Remote)",
    experience: "3-5 Years",
    salaryRange: "$70k - $90k",
    jobType: "Full-time",
  },
  {
    id: "3",
    title: "Enterprise Account Executive",
    category: "Sales",
    location: "Global (Remote)",
    experience: "4+ Years",
    salaryRange: "$80k + Commission",
    jobType: "Full-time",
  }
];

export default async function CareersPage() {
  let jobs = fallbackJobs;
  
  try {
    // Attempt to fetch real active jobs from DB
    const dbJobs = await prisma.job.findMany({
      where: { status: "ACTIVE" },
      orderBy: { createdAt: "desc" }
    });
    
    if (dbJobs.length > 0) {
      jobs = dbJobs;
    }
  } catch (e) {
    console.error("Failed to fetch jobs from DB, using fallback", e);
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      {/* Hero */}
      <section className="container px-4 md:px-6 mx-auto mb-20 text-center">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            We&apos;re Hiring Worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Come build the future of HR.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join our fully distributed team of experts making global hiring, payroll, and compliance seamless for modern businesses.
          </p>
        </AnimatedSection>
      </section>

      {/* Philosophy */}
      <section className="container px-4 md:px-6 mx-auto mb-24">
         <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} direction="up" className="p-8 rounded-3xl bg-muted/50 border">
              <Globe2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Work Anywhere</h3>
              <p className="text-muted-foreground">We are a 100% remote company. Work from wherever you are happiest and most productive.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="up" className="p-8 rounded-3xl bg-muted/50 border">
              <Zap className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Impact Day One</h3>
              <p className="text-muted-foreground">Every role here is critical. You&apos;ll be working on problems that tangibly impact our clients&apos; success.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} direction="up" className="p-8 rounded-3xl bg-muted/50 border">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Health & Wealth</h3>
              <p className="text-muted-foreground">Top-tier compensation, equity, and global health coverage for you and your dependents.</p>
            </AnimatedSection>
         </div>
      </section>

      {/* Job Board */}
      <section className="container px-4 md:px-6 mx-auto">
        <AnimatedSection direction="up" className="flex justify-between items-end mb-10 pb-4 border-b">
          <div>
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <p className="text-muted-foreground mt-2">Join our growing global team.</p>
          </div>
          <div className="hidden sm:block">
            <span className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm">
              {jobs.length} Roles
            </span>
          </div>
        </AnimatedSection>

        <div className="space-y-6 max-w-5xl">
          {jobs.map((job, i) => (
             <AnimatedSection key={job.id} delay={i * 0.1} direction="up" className="group block">
                <div className="p-6 md:p-8 rounded-3xl bg-card border shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border">
                            {job.category}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1" /> {job.jobType}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
                          <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.experience}</span>
                          <span className="flex items-center"><FileText className="w-4 h-4 mr-1.5" /> {job.salaryRange}</span>
                        </div>
                      </div>
                      
                      <div className="shrink-0">
                        <Link href={`/careers/${job.id}`} className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors px-6 py-3 rounded-xl font-bold flex items-center justify-center w-full md:w-auto">
                          Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                   </div>
                </div>
             </AnimatedSection>
          ))}

          {jobs.length === 0 && (
            <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed">
              <p className="text-xl font-medium mb-2">No open positions at the moment.</p>
              <p className="text-muted-foreground">Please check back later or follow us on LinkedIn.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* General Application */}
      <section className="container px-4 md:px-6 mx-auto mt-24">
        <AnimatedSection direction="up" className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-12 -translate-y-12">
            <FileText className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t see a fit?</h2>
            <p className="text-lg opacity-90 mb-8">
              We&apos;re always looking for talented individuals to join our global network. Send us your resume and we&apos;ll reach out if a relevant position opens up.
            </p>
            <Link href="/careers/general" className="bg-background text-foreground hover:bg-muted font-bold px-8 py-4 rounded-xl inline-flex items-center transition-colors">
              Submit General Application <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

// Importing icons here to avoid Next.js complaining about missing imports above
import { Globe2, Zap, Users } from "lucide-react";
