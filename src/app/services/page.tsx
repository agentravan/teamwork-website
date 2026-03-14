import Link from "next/link";
import { ArrowRight, BarChart3, Users, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-200px)] pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR, payroll, and compliance solutions designed for businesses worldwide. 
            We focus on operations so you can focus on growth.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} direction="up" className="group rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Recruitment</h3>
                <p className="text-muted-foreground mb-6">
                  End-to-end talent acquisition for global teams. Find the right talent, fast, with zero geographical constraints.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/recruitment" className="inline-flex items-center text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="up" className="group rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Automated Payroll</h3>
                <p className="text-muted-foreground mb-6">
                  Automated payroll calculation ensuring flawless execution of international salary cycles without compliance headaches.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/payroll" className="inline-flex items-center text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="group rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Globe2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Third-Party HR</h3>
                <p className="text-muted-foreground mb-6">
                  Outsourced HR support tailored for global teams. We act as your extended internal HR department.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/third-party-hr" className="inline-flex items-center text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} direction="up" className="group rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Statutory Compliance</h3>
                <p className="text-muted-foreground mb-6">
                  Full statutory coverage for PF, ESIC and other local regulations across regions, backed by our zero-penalty guarantee.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/statutory-compliance" className="inline-flex items-center text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} direction="up" className="group rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">HR Audit & Policy</h3>
                <p className="text-muted-foreground mb-6">
                  Risk-free policy design and global HR infrastructure audits to ensure your business scales safely.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/hr-audit-policy" className="inline-flex items-center text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="up" className="group rounded-3xl bg-primary border-primary text-primary-foreground hover:shadow-xl overflow-hidden flex flex-col h-full relative">
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <Zap className="w-32 h-32" />
              </div>
              <div className="p-8 pb-0 relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Global HRX</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Complete AI HRMS platform integrating all of our services into a single, seamless operating system.
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto relative z-10">
                <Link href="/services/global-hrx" className="inline-flex items-center text-sm font-bold bg-primary-foreground text-primary px-4 py-2 rounded-lg hover:bg-primary-foreground/90 transition-colors">
                  Explore Platform <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
