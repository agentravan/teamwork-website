"use client";

import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import { Globe2, Heart, Target, Rocket, ShieldCheck, Users, Zap, Quote, ArrowRight, CheckCircle2, Cpu, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      {/* SECTION 1: HERO */}
      <section className="container px-4 md:px-6 mx-auto mb-32">
        <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">
                   <Target className="w-3 h-3" /> The TeamWork Story
                </div>
                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                   We are the <span className="text-primary">Operating System</span> for Modern Teams.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                   TeamWork Solutions is more than a service provider—we are the bridge between ambitious companies and exceptional global talent.
                </p>
            </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection direction="left">
                    <h2 className="text-4xl font-black mb-8 tracking-tighter">Our Story</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                       Born from a simple idea: **HR shouldn't be a hurdle.** Founded by payroll and compliance veterans who saw firsthand how archaic processes stifled innovation, TeamWork was built to remove friction from the employee lifecycle.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                       From a small consultancy to a global payroll powerhouse, we've transformed how businesses scale across borders, ensuring that every worker, regardless of geography, is paid fairly and on time.
                    </p>
                </AnimatedSection>
                <AnimatedSection direction="right" className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative p-12 rounded-[3rem] bg-card border shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                       <Quote className="absolute top-8 left-8 w-24 h-24 text-primary/5" />
                       <p className="text-2xl font-bold italic text-center relative z-10">
                         "We didn't just want to build a tool; we wanted to build a trust-layer for the global workforce."
                       </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 3: OUR MISSION */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
            <AnimatedSection direction="up">
                <Heart className="w-12 h-12 text-primary mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Our Mission</h2>
                <p className="text-2xl font-medium leading-relaxed">
                   To empower human potential by **automating the mundane.** We believe that by handling the complexities of compliance, tax, and payroll, we free up brilliant minds to focus on what truly matters: building the future.
                </p>
            </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: GLOBAL REACH */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"></div>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection direction="left">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Global Reach, <br/> Local Precision.</h2>
                    <p className="text-xl opacity-80 leading-relaxed max-w-xl">
                       With interconnected nodes and local experts across **150+ countries**, we provide the compliance security of a global titan with the localized care of a boutique firm.
                    </p>
                    <div className="mt-12 flex gap-12">
                       <div>
                          <p className="text-4xl font-black">150+</p>
                          <p className="text-xs font-bold uppercase tracking-widest opacity-60">Countries</p>
                       </div>
                       <div>
                          <p className="text-4xl font-black">24x7</p>
                          <p className="text-xs font-bold uppercase tracking-widest opacity-60">Operations</p>
                       </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection direction="right" className="bg-white/10 backdrop-blur-xl p-1 rounded-[2.5rem] border border-white/20">
                    <div className="bg-white/5 rounded-[2.2rem] p-12 text-center">
                       <Globe2 className="w-24 h-24 mx-auto mb-8 animate-pulse text-white" />
                       <p className="text-xl font-black tracking-widest uppercase">Statutory Shield Active</p>
                       <p className="text-sm opacity-60 mt-2">Real-time compliance monitoring across timezones.</p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP TEAM */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
            <AnimatedSection direction="up" className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The Leadership</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Strategically driving the future of work with combined decades of expertise.</p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Harshit */}
                <AnimatedSection delay={0.1} direction="up" className="group">
                    <div className="h-full p-8 rounded-[2rem] bg-card border shadow-sm group-hover:border-primary/50 group-hover:shadow-xl transition-all flex flex-col">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">HB</div>
                        <h3 className="text-xl font-black mb-1">Harshit Bhardwaj</h3>
                        <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Founder & CEO</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                          With over 10 years of hardcore experience in Payroll, PF, ESIC, PT, LWF and global compliance, Harshit has helped 100+ businesses worldwide achieve zero-penalty operations. Passionate about building AI-powered HRMS that simplifies HR for modern teams across continents.
                        </p>
                        <div className="pt-6 border-t border-dashed">
                           <span className="text-[10px] font-black tracking-widest text-primary uppercase">Visionary Leader</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Shaksham */}
                <AnimatedSection delay={0.2} direction="up" className="group">
                    <div className="h-full p-8 rounded-[2rem] bg-card border shadow-sm group-hover:border-primary/50 group-hover:shadow-xl transition-all flex flex-col">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3">SC</div>
                        <h3 className="text-xl font-black mb-1">Shaksham Chug</h3>
                        <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Director & Finance Head</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                          Chartered Accountant with deep expertise in international payroll taxation and statutory compliance. Shaksham ensures seamless financial operations and tax optimization for clients in USA, UK, Dubai, Europe and Asia. He has streamlined payroll for multi-country teams saving millions in penalties.
                        </p>
                        <div className="pt-6 border-t border-dashed">
                           <span className="text-[10px] font-black tracking-widest text-primary uppercase">Financial Architect</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Yashika */}
                <AnimatedSection delay={0.3} direction="up" className="group">
                    <div className="h-full p-8 rounded-[2rem] bg-card border shadow-sm group-hover:border-primary/50 group-hover:shadow-xl transition-all flex flex-col">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">YL</div>
                        <h3 className="text-xl font-black mb-1">Yashika Lohchab</h3>
                        <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Director – Operations</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                          Expert in employee lifecycle management, onboarding and global HR policies. Yashika has designed compliance frameworks for startups and enterprises worldwide. Her focus on employee experience and statutory adherence has helped companies scale without legal risks.
                        </p>
                        <div className="pt-6 border-t border-dashed">
                           <span className="text-[10px] font-black tracking-widest text-primary uppercase">Ops Strategist</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Ashu */}
                <AnimatedSection delay={0.4} direction="up" className="group">
                    <div className="h-full p-8 rounded-[2rem] bg-card border shadow-sm group-hover:border-primary/50 group-hover:shadow-xl transition-all flex flex-col">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3">AV</div>
                        <h3 className="text-xl font-black mb-1">Ashu Verma</h3>
                        <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Director – Global Growth</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                          Driving worldwide client acquisition and brand growth. Ashu combines data-driven marketing with deep HR domain knowledge to connect TeamWork Solutions with businesses across 15+ countries. She specializes in turning compliance challenges into growth opportunities.
                        </p>
                        <div className="pt-6 border-t border-dashed">
                           <span className="text-[10px] font-black tracking-widest text-primary uppercase">Growth Engine</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 6: OUR TECHNOLOGY */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection direction="left" className="relative group">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-4">
                          <div className="h-32 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center"><Cpu className="w-10 h-10 text-primary/40" /></div>
                          <div className="h-48 rounded-2xl bg-card border shadow-lg flex flex-col items-center justify-center p-6 text-center">
                             <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                             <p className="font-bold text-xs">AI-Driven Audit</p>
                          </div>
                       </div>
                       <div className="space-y-4 pt-8">
                          <div className="h-48 rounded-2xl bg-card border shadow-lg flex flex-col items-center justify-center p-6 text-center">
                             <ShieldCheck className="w-8 h-8 text-green-500 mb-2" />
                             <p className="font-bold text-xs">SOC2 Compliance</p>
                          </div>
                          <div className="h-32 rounded-2xl bg-primary/5 border border-primary/10"></div>
                       </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection direction="right">
                    <h2 className="text-4xl font-black mb-8 tracking-tighter">Technology First</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                       Our HRMS is security-first, AI-driven, and designed for real-time scale. We utilize advanced algorithms to monitor statutory changes in every region we operate, ensuring your payroll engine is never out of date.
                    </p>
                    <ul className="space-y-4">
                       {[ "Proprietary Compliance Multi-Regime Engine", "End-to-End Encryption for Payroll Data", "Intelligent Anomaly Detection in Payouts" ].map((item, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                         </li>
                       ))}
                    </ul>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
            <AnimatedSection direction="up" className="text-center mb-20 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Why Global Leaders <br/> Choose TeamWork</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", desc: "Our support nodes are live across timezones. We never sleep, so your team stays productive." },
                 { icon: <ShieldCheck className="w-6 h-6" />, title: "Precision & Accuracy", desc: "0.01% error margin in payroll—far exceeding industry standards for manual or mixed systems." },
                 { icon: <Rocket className="w-6 h-6" />, title: "Hyper-Speed Setup", desc: "Go live with global payroll in less than 72 hours, not 72 weeks of boring legal work." }
               ].map((item, idx) => (
                 <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                       {item.icon}
                    </div>
                    <h4 className="text-xl font-black mb-4">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                 </AnimatedSection>
               ))}
            </div>
        </div>
      </section>

      {/* SECTION 8: CLIENT TESTIMONIALS */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute left-0 top-0 p-24 opacity-[0.03] pointer-events-none -rotate-12">
           <Quote className="w-96 h-96" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
           <div className="max-w-4xl mx-auto">
             <AnimatedSection direction="up" className="space-y-12">
                <div className="flex gap-1 justify-center">
                   {[...Array(5)].map((_, i) => <Zap key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-center tracking-tighter leading-tight italic">
                   "TeamWork Solutions didn't just automate our payroll; they fundamentally changed how we think about scaling. Their compliance engine is a game-changer for any multi-national startup."
                </h3>
                <div className="flex items-center justify-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-muted border flex items-center justify-center font-bold">CTO</div>
                   <div className="text-left">
                      <p className="font-black">Global Tech Lead</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Series B Fintech Unicorn</p>
                   </div>
                </div>
             </AnimatedSection>
           </div>
        </div>
      </section>

      {/* SECTION 9: JOIN OUR JOURNEY */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
           <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center text-primary-foreground shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <AnimatedSection direction="up">
                 <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">Join Our Journey.</h2>
                 <p className="text-xl opacity-80 mb-12 max-w-xl mx-auto font-medium">Whether you are a hyper-growth startup or an established enterprise, we are here to build your global home.</p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="/contact" className="bg-white text-primary px-12 py-6 rounded-3xl font-black text-lg uppercase tracking-widest hover:scale-110 transition-transform shadow-xl flex items-center gap-3 justify-center">
                       Partner With Us <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="/careers" className="bg-transparent border-2 border-white/30 hover:bg-white/10 px-12 py-6 rounded-3xl font-black text-lg uppercase tracking-widest transition-all">
                       Join The Team
                    </a>
                 </div>
              </AnimatedSection>
           </div>
        </div>
      </section>

    </div>
  );
}
