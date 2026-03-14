"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Activity, Info, BarChart, ShieldCheck, HeartPulse, ClipboardList, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function ESICCalculator() {
  const [grossSalary, setGrossSalary] = useState<number>(18000);
  const [employeeCount, setEmployeeCount] = useState<number>(1);
  const [results, setResults] = useState({
    employeeESIC: 0,
    employerESIC: 0,
    totalMonthlyPerEmployee: 0,
    totalMonthlyBulk: 0,
    isEligible: true
  });

  useEffect(() => {
    // ESIC Calculation (India)
    // Eligibility: Monthly Gross Salary <= 21,000
    if (grossSalary > 21000) {
      setResults({
        employeeESIC: 0,
        employerESIC: 0,
        totalMonthlyPerEmployee: 0,
        totalMonthlyBulk: 0,
        isEligible: false
      });
      return;
    }

    const empESIC = Math.ceil(grossSalary * 0.0075);
    const employerESIC = Math.ceil(grossSalary * 0.0325);
    const totalPerEmp = empESIC + employerESIC;
    
    setResults({
      employeeESIC: empESIC,
      employerESIC: employerESIC,
      totalMonthlyPerEmployee: totalPerEmp,
      totalMonthlyBulk: totalPerEmp * employeeCount,
      isEligible: true
    });
  }, [grossSalary, employeeCount]);

  return (
    <CalculatorLayout 
      title="ESIC Calculator" 
      description="Calculate insurance contributions and verify eligibility for the ESI scheme (2026 Rules)."
      icon={<Activity className="w-8 h-8" />}
    >
      <div className="space-y-24 pb-20">
        
        {/* SECTION 1: Introduction & Coverage */}
        <AnimatedSection direction="up" className="max-w-4xl">
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ESIC Coverage & Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Employees' State Insurance (ESI) is a self-financing social security and health insurance scheme for Indian workers. It is managed by the ESIC and mandated for employees earning a gross monthly salary of ₹21,000 or below. The scheme provides full medical care to employees and their dependents, along with cash benefits during sickness and maternity.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 2: Input Form */}
        <AnimatedSection direction="up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Configure Salary Details</h2>
              <p className="text-muted-foreground mb-8 text-lg">Enter your gross monthly salary and the number of employees to calculate individual and bulk insurance costs.</p>
              
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-card border shadow-sm space-y-8">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">Monthly Gross Salary</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">₹</span>
                      <input 
                        type="number"
                        value={grossSalary}
                        onChange={(e) => setGrossSalary(Number(e.target.value))}
                        className={`w-full pl-10 pr-4 py-4 bg-muted/30 border-2 outline-none rounded-2xl text-2xl font-black transition-all ${!results.isEligible ? 'border-orange-500/30' : 'border-transparent focus:border-primary/50'}`}
                      />
                    </div>
                    <input 
                      type="range"
                      min="5000"
                      max="40000"
                      step="100"
                      value={grossSalary}
                      onChange={(e) => setGrossSalary(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div className="pt-6 border-t border-dashed space-y-4">
                    <label className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">Employee Count (For Dept/Company Total)</label>
                    <div className="relative">
                       <input 
                        type="number"
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(Math.max(1, Number(e.target.value)))}
                        className="w-full px-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-2xl text-2xl font-black transition-all"
                      />
                    </div>
                  </div>
                </div>

                {!results.isEligible && (
                  <div className="p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <Info className="w-6 h-6 text-orange-500 shrink-0" />
                    <div>
                      <p className="font-bold text-orange-600 mb-1">Threshold Exceeded</p>
                      <p className="text-sm text-orange-600/80 leading-relaxed">Monthly Gross Salary exceeds ₹21,000. ESIC contribution is not mandatory for this employee under current statutory rules.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION 3: Live Results */}
            <div className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className={`p-8 rounded-[2.5rem] bg-card border shadow-xl transition-all flex flex-col justify-between group ${!results.isEligible ? 'opacity-50 grayscale' : 'hover:border-primary/30 shadow-primary/5'}`}>
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:rotate-12 transition-transform">
                        <Activity className="w-6 h-6" />
                      </div>
                      <h4 className="text-muted-foreground font-bold text-sm uppercase mb-1">Employee (0.75%)</h4>
                      <p className="text-4xl font-black tracking-tighter">₹{results.employeeESIC.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className={`p-8 rounded-[2.5rem] bg-card border shadow-xl transition-all flex flex-col justify-between group ${!results.isEligible ? 'opacity-50 grayscale' : 'hover:border-primary/30 shadow-primary/5'}`}>
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:-rotate-12 transition-transform">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h4 className="text-muted-foreground font-bold text-sm uppercase mb-1">Employer (3.25%)</h4>
                      <p className="text-4xl font-black tracking-tighter">₹{results.employerESIC.toLocaleString()}</p>
                    </div>
                  </div>
               </div>

               <div className={`p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group transition-all duration-500 ${results.isEligible ? 'bg-primary text-primary-foreground shadow-primary/30' : 'bg-muted border grayscale opacity-80'}`}>
                  <div className="absolute right-0 top-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <Activity className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-3 opacity-80">
                      Total {employeeCount > 1 ? `Cost for ${employeeCount} Employees` : 'Monthly Contribution'}
                    </h4>
                    <p className="text-6xl font-black tracking-tighter mb-4">₹{results.totalMonthlyBulk.toLocaleString()}</p>
                    <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                      <CheckCircle2 className="w-4 h-4" /> Full Insurance Eligibility for Employee & Family
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 4: Contribution Breakdown */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto">
           <div className="bg-card border rounded-[2.5rem] overflow-hidden">
              <div className="bg-primary/5 p-8 border-b">
                 <h3 className="text-2xl font-bold flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-primary" /> Contribution Breakdown Table
                 </h3>
              </div>
              <div className="p-8">
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <div className="flex justify-between items-center py-4 border-b">
                          <span className="text-muted-foreground">Gross Monthly Salary</span>
                          <span className="font-bold">₹{grossSalary.toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between items-center py-4 border-b">
                          <span className="text-muted-foreground font-medium text-blue-500">Employee Contribution (0.75%)</span>
                          <span className="font-bold text-blue-500">₹{results.employeeESIC}</span>
                       </div>
                       <div className="flex justify-between items-center py-4 border-b">
                          <span className="text-muted-foreground font-medium text-green-600">Employer Contribution (3.25%)</span>
                          <span className="font-bold text-green-600">₹{results.employerESIC}</span>
                       </div>
                       <div className="flex justify-between items-center py-6">
                          <span className="font-bold text-lg">Total Monthly per Employee</span>
                          <span className="text-2xl font-black text-primary">₹{results.totalMonthlyPerEmployee}</span>
                       </div>
                    </div>
                    <div className="bg-muted/30 rounded-3xl p-8 flex flex-col justify-center">
                       <h4 className="font-bold mb-4">Why is this deducted?</h4>
                       <p className="text-sm text-muted-foreground leading-relaxed">
                          ESIC acts as a comprehensive insurance pool. Unlike PF which is a savings account, ESIC works like a premium. This small monthly deduction grants the employee access to specialized ESI hospitals, maternity leaves with full pay, and cash benefits during prolonged sickness.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 5: Benefits & Legal Notes */}
        <AnimatedSection direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-card border rounded-[2rem] p-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <ClipboardList className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold">Comprehensive ESIC Benefits</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { title: "Medical Benefit", desc: "Full medical care provided to self and dependents from day one." },
                   { title: "Maternity Benefit", desc: "Payable for 26 weeks at full average daily wages." },
                   { title: "Sickness Benefit", desc: "70% of wages in cash during certified sickness periods." },
                   { title: "Dependents Benefit", desc: "Financial support to dependents in case of unfortunate death." }
                 ].map((benefit, idx) => (
                   <div key={idx} className="p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                      <p className="font-bold mb-1">{benefit.title}</p>
                      <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-10 flex flex-col justify-between">
              <div>
                 <h3 className="text-xl font-bold mb-4">Statutory Notes</h3>
                 <ul className="space-y-4 text-xs text-muted-foreground leading-relaxed italic">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Mandatory for units with 10+ employees.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Threshold increased from ₹15k to ₹21k recently.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Rounding is always to the next higher rupee.</li>
                 </ul>
              </div>
              <p className="text-[10px] opacity-60 mt-8 italic">
                Disclaimer: The 2026 ESIC rules are subject to Ministry of Labour & Employment updates. TeamWork Solutions provides these estimates for planning purposes only.
              </p>
           </div>
        </AnimatedSection>

      </div>
    </CalculatorLayout>
  );
}
