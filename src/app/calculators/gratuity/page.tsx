"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Milestone, Info, Clock, Award, Calculator, Scale, FileCheck, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [tenure, setTenure] = useState<number>(5);
  const [results, setResults] = useState({
    amount: 0,
    isEligible: true
  });

  useEffect(() => {
    // Gratuity Calculation (India)
    // Formula: (15 * Last Drawn Basic * Years of Service) / 26
    // Eligibility: >= 5 years
    // Cap: 20,00,000
    if (tenure < 5) {
      setResults({ amount: 0, isEligible: false });
      return;
    }

    const calculated = Math.round((15 * basicSalary * tenure) / 26);
    const capped = Math.min(calculated, 2000000);
    
    setResults({
      amount: capped,
      isEligible: true
    });
  }, [basicSalary, tenure]);

  return (
    <CalculatorLayout 
      title="Gratuity Calculator" 
      description="Estimate your tax-free gratuity pay-out based on the Payment of Gratuity Act, 1972."
      icon={<Award className="w-8 h-8" />}
    >
      <div className="space-y-24 pb-20">
        
        {/* SECTION 1: Introduction & Eligibility */}
        <AnimatedSection direction="up" className="max-w-4xl">
           <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <Milestone className="w-8 h-8" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-4">What is Gratuity?</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   Gratuity is a lump sum amount paid by an employer to an employee as a token of appreciation for their long-term service. It is mandatory for establishments with 10 or more employees. To be eligible, an employee must have completed **5 years of continuous service** with the same organization.
                 </p>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 2: Input Form */}
        <AnimatedSection direction="up" id="gratuity-inputs">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-6 tracking-tight">Enter Service Details</h2>
                 <p className="text-muted-foreground mb-8 text-lg">Input your last drawn basic salary and total years of service to calculate your exact gratuity entitlement.</p>
                 
                 <div className="space-y-6">
                    <div className="p-8 rounded-[2.5rem] bg-card border shadow-sm space-y-10">
                       <div className="space-y-4">
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">Last Drawn Monthly Basic (₹)</label>
                          <div className="relative">
                             <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">₹</span>
                             <input 
                              type="number"
                              value={basicSalary}
                              onChange={(e) => setBasicSalary(Number(e.target.value))}
                              className="w-full pl-12 pr-6 py-5 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-3xl text-3xl font-black transition-all"
                            />
                          </div>
                       </div>

                       <div className="pt-8 border-t border-dashed space-y-4">
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">Total Years of Service</label>
                          <div className="relative">
                             <input 
                              type="number"
                              value={tenure}
                              onChange={(e) => setTenure(Number(e.target.value))}
                              max="50"
                              className={`w-full px-6 py-5 bg-muted/30 border-2 outline-none rounded-3xl text-3xl font-black transition-all ${!results.isEligible ? 'border-orange-500/30' : 'border-transparent focus:border-primary/50'}`}
                            />
                          </div>
                          <input 
                            type="range"
                            min="1"
                            max="40"
                            step="1"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mt-4"
                          />
                       </div>
                    </div>

                    {!results.isEligible && (
                      <div className="p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <Info className="w-6 h-6 text-orange-500 shrink-0" />
                        <div>
                          <p className="font-bold text-orange-600 mb-1">Eligibility Warning</p>
                          <p className="text-sm text-orange-600/80 leading-relaxed">You have entered less than 5 years. Gratuity is typically only payable after 5 years of continuous service, except in cases of death or disablement.</p>
                        </div>
                      </div>
                    )}
                 </div>
              </div>

              {/* SECTION 3: Live Results */}
              <div className="space-y-8">
                 <div className={`p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group transition-all duration-700 min-h-[400px] flex flex-col justify-center items-center text-center ${results.isEligible ? 'bg-primary text-primary-foreground shadow-primary/30' : 'bg-muted border grayscale opacity-80'}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute right-0 top-0 p-12 opacity-10 pointer-events-none group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000">
                       <Award className="w-64 h-64" />
                    </div>
                    
                    <div className="relative z-10">
                       <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-6 opacity-80">Total Payable Gratuity Amount</h4>
                       <p className="text-7xl md:text-8xl font-black tracking-tighter mb-8 tabular-nums transition-all">₹{results.amount.toLocaleString()}</p>
                       <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-black uppercase tracking-widest">
                          {results.isEligible ? <><CheckCircle2 className="w-5 h-5 text-green-300" /> Fully Eligible</> : <><Info className="w-5 h-5" /> Not Eligible Yet</>}
                       </div>
                       <p className="mt-8 text-xs font-medium opacity-60 max-w-[280px] mx-auto italic">
                         * Capped at ₹20,00,000 as per current Central Government norms.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 4: Formula & Breakdown */}
        <AnimatedSection direction="up" className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
           <div className="bg-card border rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-5">
                 <Calculator className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><Scale className="w-6 h-6 text-primary" /> Statutory Formula</h3>
              <div className="space-y-8">
                 <div className="p-6 rounded-2xl bg-muted/50 border-2 border-primary/20 text-center">
                    <p className="text-sm font-bold text-muted-foreground mb-2 uppercase">Core Equation</p>
                    <p className="text-2xl font-black tracking-tight text-primary">(15 × Basic Salary × Tenure) ÷ 26</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">15:</strong> Represents 15 days of salary for every completed year.</p>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">26:</strong> Fixed number of working days in a month for calculation.</p>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Tenure:</strong> Rounded to nearest year (6+ months counts as full year).</p>
                 </div>
              </div>
           </div>

           <div className="flex flex-col gap-6">
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
                 <h4 className="font-black text-sm uppercase tracking-widest mb-4">Calculation Example</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed italic">
                    If your basic is ₹50,000 and you work for 10 years: <br/>
                    (15 × 50,000 × 10) / 26 = **₹2,88,461**
                 </p>
              </div>
              <div className="bg-card border rounded-3xl p-8 flex-1">
                 <h4 className="font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Continuous Service</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                   Service is considered continuous even with interruptions like sickness, accidents, leave, or lay-offs not due to employee fault.
                 </p>
                 <div className="px-4 py-2 rounded-xl bg-green-500/5 border border-green-500/10 text-[10px] font-bold text-green-600 uppercase">
                    New: 190 days in a year counts for 5-day week units.
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 5: Legal & Tax Notes */}
        <AnimatedSection direction="up" className="bg-card border rounded-[2.5rem] p-10 md:p-16 text-center max-w-5xl mx-auto shadow-sm">
           <FileCheck className="w-16 min-h-16 text-primary mx-auto mb-8" />
           <h2 className="text-3xl font-black mb-8 tracking-tighter">Tax Exemptions & Payout Rules</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="space-y-2">
                 <h4 className="font-black text-sm text-primary uppercase">Govt Employees</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Fully tax-exempt for all Central, State, and Municipal employees regardless of amount.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-black text-sm text-primary uppercase">Private Sector</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Tax-exempt up to ₹20 Lakhs. Any amount exceeding this is taxable as per income slabs.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-black text-sm text-primary uppercase">Payment Deadline</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Employer must pay within 30 days of last working day or pay interest on delay.</p>
              </div>
           </div>
           
           <div className="mt-16 p-8 rounded-3xl bg-muted/30 border border-dashed flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                 <p className="font-black text-lg mb-1">Facing Gratuity Delay?</p>
                 <p className="text-xs text-muted-foreground capitalize">Our legal team assists in recovery of unpaid statutory dues.</p>
              </div>
              <a href="https://wa.me/919518842774" className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                 Get Legal Help
              </a>
           </div>

           <p className="mt-12 text-[10px] text-muted-foreground opacity-60 leading-relaxed italic max-w-2xl mx-auto">
             Disclaimer: Gratuity calculations depend on whether an establishment is covered under the 1972 Act. Organizations NOT covered use a different formula (15 days salary of last 10 months avg). Consult your HR for specific coverage.
           </p>
        </AnimatedSection>

      </div>
    </CalculatorLayout>
  );
}
