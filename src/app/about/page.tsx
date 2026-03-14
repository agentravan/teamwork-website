import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import { Globe2 } from "lucide-react";
import { PricingCard } from "@/components/ui-custom/PricingCard";
import { pricingPlans } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      {/* Story Section */}
      <section className="container px-4 md:px-6 mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Who We Are</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Simplifying HR for Modern Teams. We combine technology with human expertise to deliver seamless payroll, compliance, and strategic HR solutions.
            </p>
            <div className="p-6 rounded-2xl bg-card border shadow-sm">
              <p className="font-medium text-lg mb-2">10+ years hardcore Payroll, PF, ESIC, PT, LWF & Recruitment experience.</p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Globe2 className="w-5 h-5" /> 100+ businesses worldwide ko zero penalty compliance diya.
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="relative h-[400px] rounded-3xl overflow-hidden border bg-background flex flex-col items-center justify-center">
             <div className="bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.2)_0,transparent_100%)] absolute inset-0"></div>
             <div className="relative z-10 w-full max-w-sm text-center">
               <h3 className="text-4xl font-black mb-2">15+</h3>
               <p className="text-lg text-muted-foreground font-medium uppercase tracking-widest">Countries Served</p>
               
               <div className="mt-8 border-t pt-8">
                 <h3 className="text-4xl font-black mb-2">0</h3>
                 <p className="text-lg text-muted-foreground font-medium uppercase tracking-widest">Compliance Penalties</p>
               </div>
             </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Mission */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto">
            <Globe2 className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Global Mission</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              We are building the infrastructure that allows any company, anywhere in the world, to hire, pay, and manage teams across borders without the friction of local compliance hurdles. Legal boundaries should never limit exceptional talent.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership - Exact bios from prompt */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The strategic minds powering businesses worldwide.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-6">HB</div>
              <h3 className="text-2xl font-bold">Harshit Bhardwaj</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 10 years of hardcore experience in Payroll, PF, ESIC, PT, LWF and global compliance, Harshit has helped 100+ businesses worldwide achieve zero-penalty operations. Passionate about building AI-powered HRMS that simplifies HR for modern teams across continents.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-6">SC</div>
              <h3 className="text-2xl font-bold">Shaksham Chug</h3>
              <p className="text-primary font-medium mb-4">Director & Finance Head</p>
              <p className="text-muted-foreground leading-relaxed">
                Chartered Accountant with deep expertise in international payroll taxation and statutory compliance. Shaksham ensures seamless financial operations and tax optimization for clients in USA, UK, Dubai, Europe and Asia. He has streamlined payroll for multi-country teams saving millions in penalties.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-6">YL</div>
              <h3 className="text-2xl font-bold">Yashika Lohchab</h3>
              <p className="text-primary font-medium mb-4">Director – Operations & HR Strategy</p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in employee lifecycle management, onboarding and global HR policies. Yashika has designed compliance frameworks for startups and enterprises worldwide. Her focus on employee experience and statutory adherence has helped companies scale without legal risks.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} direction="up" className="p-8 rounded-3xl bg-card border shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-6">AV</div>
              <h3 className="text-2xl font-bold">Ashu Verma</h3>
              <p className="text-primary font-medium mb-4">Director – Marketing & Global Growth</p>
              <p className="text-muted-foreground leading-relaxed">
                Driving worldwide client acquisition and brand growth. Ashu combines data-driven marketing with deep HR domain knowledge to connect TeamWork Solutions with businesses across 15+ countries. She specializes in turning compliance challenges into growth opportunities.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Global solutions tailored to your scale.</p>
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
    </div>
  );
}
