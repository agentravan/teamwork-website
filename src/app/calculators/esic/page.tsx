"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Activity, Info, BarChart, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function ESICCalculator() {
  const [grossSalary, setGrossSalary] = useState<number>(18000);
  const [results, setResults] = useState({
    employeeESIC: 0,
    employerESIC: 0,
    totalMonthly: 0,
    isEligible: true
  });

  useEffect(() => {
    // ESIC Calculation (India)
    // Eligibility: Monthly Gross Salary <= 21,000
    // Employee: 0.75% of Gross
    // Employer: 3.25% of Gross
    
    if (grossSalary > 21000) {
      setResults({
        employeeESIC: 0,
        employerESIC: 0,
        totalMonthly: 0,
        isEligible: false
      });
      return;
    }

    const empESIC = Math.ceil(grossSalary * 0.0075);
    const employerESIC = Math.ceil(grossSalary * 0.0325);
    
    setResults({
      employeeESIC: empESIC,
      employerESIC: employerESIC,
      totalMonthly: empESIC + employerESIC,
      isEligible: true
    });
  }, [grossSalary]);

  return (
    <CalculatorLayout 
      title="ESIC Calculator" 
      description="Check ESIC eligibility and estimate monthly contributions for health insurance."
      icon={<Activity className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Gross Salary
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground underline italic">Monthly Gross Salary (₹)</label>
                <input 
                  type="range"
                  min="5000"
                  max="40000"
                  step="100"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mb-2"
                />
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                   <input 
                    type="number"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                    className={`w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 font-bold text-lg ${!results.isEligible ? 'border-orange-500/50 focus:ring-orange-500/50' : 'focus:ring-primary/50'}`}
                  />
                </div>
              </div>
            </div>
            
            {!results.isEligible && (
              <div className="mt-6 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                <p className="text-xs font-bold text-orange-600 mb-1 tracking-wider uppercase">Not Eligible</p>
                <p className="text-xs text-orange-600/80 leading-relaxed">
                  ESIC is only mandatory for employees with a gross monthly salary of ₹21,000 or below.
                </p>
              </div>
            )}
            
            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs text-muted-foreground leading-relaxed italic underline italic">
                * Rates used: Employee (0.75%), Employer (3.25%). Rounding is applied to the nearest rupee.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Results */}
        <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden relative">
               {results.isEligible ? (
                 <>
                   <div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="text-muted-foreground font-medium mb-1 underline italic">Employee Share</h4>
                    <p className="text-3xl font-bold tracking-tight">₹{results.employeeESIC.toLocaleString()}</p>
                  </div>
                 </>
               ) : (
                 <div className="flex items-center justify-center h-full text-center">
                    <p className="text-muted-foreground text-sm italic">Eligibility cap exceeded</p>
                 </div>
               )}
            </div>
            
            <div className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden relative">
               {results.isEligible ? (
                 <>
                  <div>
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-muted-foreground font-medium mb-1 underline italic">Employer Share</h4>
                    <p className="text-3xl font-bold tracking-tight">₹{results.employerESIC.toLocaleString()}</p>
                  </div>
                 </>
               ) : (
                 <div className="flex items-center justify-center h-full text-center">
                    <p className="text-muted-foreground text-sm italic">No mandatory contribution</p>
                 </div>
               )}
            </div>
          </div>

          <div className={`rounded-3xl p-8 flex items-center justify-between overflow-hidden relative border transition-all ${results.isEligible ? 'bg-primary/10 border-primary/20' : 'bg-muted/50 border-border grayscale opacity-50'}`}>
             <div className="absolute right-0 top-0 p-12 opacity-5 pointer-events-none">
               <Activity className="w-48 h-48" />
             </div>
             <div>
               <h4 className={`font-bold uppercase tracking-widest text-sm mb-2 ${results.isEligible ? 'text-primary' : 'text-muted-foreground'}`}>Total Monthly ESI Contribution</h4>
               <p className={`text-4xl md:text-5xl font-black tracking-tighter ${results.isEligible ? 'text-primary' : 'text-muted-foreground'}`}>
                 ₹{results.totalMonthly.toLocaleString()}
               </p>
             </div>
             <div className="hidden sm:block text-right">
                <p className={`text-sm font-medium ${results.isEligible ? 'text-primary/70' : 'text-muted-foreground'}`}>Yearly Insurance Coverage</p>
                <p className="text-xl font-bold italic underline">Full Medical Benefit</p>
             </div>
          </div>

          <div className="bg-card border rounded-3xl p-8 shadow-sm">
             <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
               <BarChart className="w-5 h-5 text-primary" /> Key Benefits for Employees
             </h4>
             <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">• Sickness & Maternity Benefits</li>
                <li className="flex items-center gap-2">• Full medical care for self and family</li>
                <li className="flex items-center gap-2">• Cashless treatment at ESI hospitals</li>
                <li className="flex items-center gap-2">• Disablement and Dependents benefit</li>
             </ul>
          </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
