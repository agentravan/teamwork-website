"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Wallet, Info, TrendingUp, ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function PFCalculator() {
  const [basicSalary, setBasicSalary] = useState<number>(25000);
  const [applyCap, setApplyCap] = useState<boolean>(true);
  const [results, setResults] = useState({
    employeeEPF: 0,
    employerEPF: 0,
    employerEPS: 0,
    totalMonthly: 0
  });

  useEffect(() => {
    // PF Calculation logic with Capping
    const calculationBasic = applyCap ? Math.min(basicSalary, 15000) : basicSalary;
    
    // Employee: 12% of Basic
    const empEPF = Math.round(calculationBasic * 0.12);
    
    // EPS is 8.33% of basic (capped at 15000 regardless of applyCap for EPS usually)
    // However, user wants "Calculate on full basic salary" when OFF. 
    // Usually EPS is always capped at 15k, but I will follow "Calculate on full" literally if OFF.
    const epsBasic = applyCap ? Math.min(basicSalary, 15000) : basicSalary;
    const employerEPS = Math.round(epsBasic * 0.0833);
    
    // Employer EPF is the balance of 12%
    const totalEmployer = Math.round(calculationBasic * 0.12);
    const employerEPF = totalEmployer - employerEPS;
    
    setResults({
      employeeEPF: empEPF,
      employerEPF: employerEPF,
      employerEPS: employerEPS,
      totalMonthly: empEPF + totalEmployer
    });
  }, [basicSalary, applyCap]);

  return (
    <CalculatorLayout 
      title="PF Calculator" 
      description="Professional statutory calculator for Provident Fund contributions (2026 Rules)."
      icon={<Wallet className="w-8 h-8" />}
    >
      <div className="space-y-24 pb-20">
        
        {/* SECTION 1: Introduction */}
        <AnimatedSection direction="up" className="max-w-4xl">
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">How Provident Fund Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Employee Provident Fund (EPF) is a mandatory savings scheme in India for salaried employees. Both the employee and the employer contribute 12% of the employee's basic salary + dearness allowance every month. This ensures a secure retirement corpus and provides financial stability after service.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 2: Input Form */}
        <AnimatedSection direction="up" id="calculator-input">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Configure Your Salary</h2>
                <p className="text-muted-foreground mb-8 text-lg">Adjust the basic salary and capping rules to see how it impacts your monthly contributions and pension growth.</p>
                
                <div className="space-y-8">
                  <div className="p-6 rounded-3xl bg-card border shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Apply PF Capping (₹15,000)</label>
                      <button 
                        onClick={() => setApplyCap(!applyCap)}
                        className={`w-14 h-7 rounded-full transition-all relative ${applyCap ? 'bg-primary' : 'bg-muted'}`}
                      >
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${applyCap ? 'left-8' : 'left-1'}`}></div>
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 italic">
                      When ON, the 12% contribution is calculated only up to a basic salary of ₹15,000 as per statutory norms. When OFF, it's calculated on your full basic.
                    </p>

                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-muted-foreground">Monthly Basic Salary</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">₹</span>
                        <input 
                          type="number"
                          value={basicSalary}
                          onChange={(e) => setBasicSalary(Number(e.target.value))}
                          className="w-full pl-10 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-2xl text-2xl font-black transition-all"
                        />
                      </div>
                      <input 
                        type="range"
                        min="5000"
                        max="200000"
                        step="500"
                        value={basicSalary}
                        onChange={(e) => setBasicSalary(Number(e.target.value))}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  </div>

                  {basicSalary > 15000 && applyCap && (
                    <div className="flex gap-4 p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 animate-in fade-in slide-in-from-top-4 duration-500">
                      <AlertCircle className="w-6 h-6 text-orange-500 shrink-0" />
                      <div>
                        <p className="font-bold text-orange-600 mb-1">Capping Rule Active</p>
                        <p className="text-sm text-orange-600/80">Your basic salary (₹{basicSalary.toLocaleString()}) exceeds the statutory limit. Calculations are currently restricted to the ₹15,000 threshold.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 3: Live Results */}
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2.5rem] bg-card border shadow-xl shadow-primary/5 hover:border-primary/30 transition-all flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <h4 className="text-muted-foreground font-bold text-sm uppercase mb-1">Employee Share</h4>
                      <p className="text-4xl font-black tracking-tighter">₹{results.employeeEPF.toLocaleString()}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-6 uppercase font-bold tracking-widest">12% Contribution</p>
                  </div>

                  <div className="p-8 rounded-[2.5rem] bg-card border shadow-xl shadow-primary/5 hover:border-primary/30 transition-all flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h4 className="text-muted-foreground font-bold text-sm uppercase mb-1">Employer Share</h4>
                      <p className="text-4xl font-black tracking-tighter">₹{(results.employerEPF + results.employerEPS).toLocaleString()}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <div className="px-2 py-1 rounded bg-green-500/10 text-[9px] font-bold text-green-600">EPF: ₹{results.employerEPF}</div>
                      <div className="px-2 py-1 rounded bg-blue-500/10 text-[9px] font-bold text-blue-600">EPS: ₹{results.employerEPS}</div>
                    </div>
                  </div>
                </div>

                <div className="p-10 rounded-[2.5rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/30 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <Wallet className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-3 opacity-80">Total Monthly PF Savings</h4>
                    <p className="text-6xl font-black tracking-tighter mb-4">₹{results.totalMonthly.toLocaleString()}</p>
                    <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                      <CheckCircle2 className="w-4 h-4" /> Growth for 2026 Retirement Corpus
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 4: Detailed Formula */}
        <AnimatedSection direction="up" className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border rounded-[2rem] p-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Calculation Formula</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 mt-1">1</div>
                <div>
                  <p className="font-bold">Employee Contribution</p>
                  <p className="text-sm text-muted-foreground">12% of (Basic Salary + DA). Deducted monthly from salary.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 mt-1">2</div>
                <div>
                  <p className="font-bold">Employer EPS (Pension)</p>
                  <p className="text-sm text-muted-foreground">8.33% of Basic Salary (Statutory cap usually applies).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 mt-1">3</div>
                <div>
                  <p className="font-bold">Employer EPF (Savings)</p>
                  <p className="text-sm text-muted-foreground">Total Employer (12%) minus the Pension Share (8.33%).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 border border-dashed rounded-[2rem] p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">The ₹15,000 Cap Explained</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Under the EPF scheme, if an employee's basic salary is above ₹15,000, the company has the option to cap the contribution at the ₹15,000 level. This means instead of 12% of ₹50,000, you only pay 12% of ₹15,000. Many organizations follow this "Statutory Capping" to manage payroll costs efficiently.
            </p>
            <div className="p-6 rounded-2xl bg-background border shadow-sm">
               <p className="text-sm font-medium italic underline">Note: As per 2026 regulations, voluntary contributions above the cap are permitted but require separate declaration.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 5: Tips & Legal */}
        <AnimatedSection direction="up" className="bg-card border rounded-[2rem] p-10 md:p-16 text-center max-w-5xl mx-auto">
          <FileText className="w-12 h-12 text-primary mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Pro Tips & Statutory Notes</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-muted/50">
              <h4 className="font-bold mb-2">Max Tax Benefits</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Ensure your employer contribution is NOT deducted from your Gross CTC to maximize take-home pay while maintaining PF growth.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/50">
              <h4 className="font-bold mb-2">Withdrawal Rules</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Avoid withdrawing PF during job changes. Transferring the UAN ensures compounding interest continues over decades.</p>
            </div>
          </div>
          <p className="mt-12 text-xs text-muted-foreground opacity-60 leading-relaxed max-w-2xl mx-auto italic">
            Disclaimer: This calculator provides estimates based on current statutory rules. Actual deductions may vary based on specific company policies, voluntary provident fund (VPF) opt-ins, and changes in government regulations. TeamWork Solutions is not liable for payroll discrepancies.
          </p>
        </AnimatedSection>

      </div>
    </CalculatorLayout>
  );
}

function AlertCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
