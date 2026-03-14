import Link from "next/link";
import { ArrowRight, BarChart3, Users, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import { PricingCard, pricingPlans } from "@/components/ui-custom/PricingCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] md:h-[500px] md:w-[500px]"></div>
        
        <div className="container px-4 md:px-6 relative z-10 text-center mx-auto">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              The Operating System for Modern Teams
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Automate payroll, compliance, and HR operations worldwide.
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Replace manual spreadsheets and disconnected tools with a platform designed for the next generation of global business.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/919518842774"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-medium flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-primary/20"
            >
              Get Your Global Free Audit <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              href="/services"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-8 py-4 font-medium transition-colors border border-border"
            >
              Explore Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simplifying HR for Modern Teams</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We combine technology with human expertise to deliver seamless payroll, compliance, and strategic HR solutions. 
              </p>
              <div className="p-6 rounded-2xl bg-card border shadow-sm">
                <p className="font-medium text-lg mb-2">10+ years hardcore Payroll, PF, ESIC, PT, LWF & Recruitment experience.</p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Globe2 className="w-5 h-5" /> 100+ businesses worldwide ko zero penalty compliance diya.
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative h-[400px] rounded-3xl overflow-hidden border bg-background flex flex-col items-center justify-center dashboard-grid">
               <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] absolute inset-0"></div>
               {/* Decorative Abstract Flow */}
               <div className="relative z-10 w-full max-w-sm">
                 <div className="flex gap-4 p-4 mb-4 bg-card rounded-xl border shadow-lg transform -rotate-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</div>
                    <div>
                      <h4 className="font-bold text-sm">Global Audit Complete</h4>
                      <p className="text-xs text-muted-foreground">Zero penalties detected across 15 regions.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 p-4 bg-card rounded-xl border shadow-lg transform rotate-2 ml-8">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">💰</div>
                    <div>
                      <h4 className="font-bold text-sm">Payroll Automated</h4>
                      <p className="text-xs text-muted-foreground">Successfully processed for 2,450 employees.</p>
                    </div>
                 </div>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Specialized services for rapidly ascending global organizations.</p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1} direction="up" className="group p-6 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Recruitment</h3>
              <p className="text-muted-foreground mb-6">End-to-end talent acquisition for global teams.</p>
              <Link href="/services/recruitment" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="up" className="group p-6 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Payroll</h3>
              <p className="text-muted-foreground mb-6">Flawless execution of international salary cycles.</p>
              <Link href="/services/payroll" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="group p-6 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Statutory Compliance</h3>
              <p className="text-muted-foreground mb-6">Full statutory coverage for PF, ESIC across regions.</p>
              <Link href="/services/statutory-compliance" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} direction="up" className="group p-6 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Third-Party HR</h3>
              <p className="text-muted-foreground mb-6">Outsourced HR support tailored for global teams.</p>
              <Link href="/services/third-party-hr" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} direction="up" className="group p-6 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <BarChart3 className="w-6 h-6" />
              </div>
              <div className="md:flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold mb-3">HR Audit & Policy</h3>
                  <p className="text-muted-foreground mb-6 md:mb-0 max-w-md">Risk-free policy design and global HR infrastructure audits.</p>
                </div>
                <Link href="/services/hr-audit-policy" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner with Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Human Expertise + AI Efficiency</h4>
                    <p className="opacity-80">We blend the speed of AI with the strategic nuance of senior HR consultants.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Zero-Penalty Guarantee</h4>
                    <p className="opacity-80">Our compliance frameworks are bulletproof, shielding your global business from statutory risks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Scale Without Overhead</h4>
                    <p className="opacity-80">Access an entire HR department for a fraction of the cost of an internal hire.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">True Global Perspective</h4>
                    <p className="opacity-80">We service businesses worldwide with solutions optimized across different legislative regimes.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-xl"></div>
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-white/20 to-white/5 shadow-2xl overflow-hidden aspect-square flex items-center justify-center transform group-hover:rotate-1 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]"></div>
                <h3 className="text-4xl md:text-6xl font-black text-center leading-tight">100+<br/><span className="text-2xl md:text-3xl font-medium tracking-wide">Global Clients</span></h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The minds behind our global solutions.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">HB</div>
              <h3 className="text-2xl font-bold">Harshit Bhardwaj</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground">With over 10 years of hardcore experience in Payroll, PF, ESIC, PT, LWF and global compliance, Harshit has helped 100+ businesses worldwide achieve zero-penalty operations. Passionate about building AI-powered HRMS that simplifies HR for modern teams across continents.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">SC</div>
              <h3 className="text-2xl font-bold">Shaksham Chug</h3>
              <p className="text-primary font-medium mb-4">Director & Finance Head</p>
              <p className="text-muted-foreground">Chartered Accountant with deep expertise in international payroll taxation and statutory compliance. Shaksham ensures seamless financial operations and tax optimization for clients in USA, UK, Dubai, Europe and Asia. He has streamlined payroll for multi-country teams saving millions in penalties.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">YL</div>
              <h3 className="text-2xl font-bold">Yashika Lohchab</h3>
              <p className="text-primary font-medium mb-4">Director – Operations & HR Strategy</p>
              <p className="text-muted-foreground">Expert in employee lifecycle management, onboarding and global HR policies. Yashika has designed compliance frameworks for startups and enterprises worldwide. Her focus on employee experience and statutory adherence has helped companies scale without legal risks.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">AV</div>
              <h3 className="text-2xl font-bold">Ashu Verma</h3>
              <p className="text-primary font-medium mb-4">Director – Marketing & Global Growth</p>
              <p className="text-muted-foreground">Driving worldwide client acquisition and brand growth. Ashu combines data-driven marketing with deep HR domain knowledge to connect TeamWork Solutions with businesses across 15+ countries. She specializes in turning compliance challenges into growth opportunities.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Global SaaS solutions designed to scale with your organization.</p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
               <AnimatedSection key={plan.name} delay={i * 0.15} direction="up" className="flex">
                  <PricingCard {...plan} />
               </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to streamline your global teams?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join 100+ modern businesses transforming their HR and compliance operations.</p>
            <a 
              href="https://wa.me/919518842774"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-5 font-bold text-lg inline-flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-primary/20"
            >
              Get Your Global Free Audit <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
