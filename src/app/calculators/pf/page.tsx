"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Wallet, Info, TrendingUp, ShieldCheck } from "lucide-react";
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
    
    // EPS is 8.33% of capped basic
    const epsBasic = Math.min(calculationBasic, 15000);
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
      description="Estimate your monthly Provident Fund contributions accurately."
      icon={<Wallet className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Input Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground flex justify-between items-center">
                   <span>Apply statutory cap (₹15,000)</span>
                   <button 
                    onClick={() => setApplyCap(!applyCap)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${applyCap ? 'bg-primary' : 'bg-muted'}`}
                   >
                     <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${applyCap ? 'left-7' : 'left-1'}`}></div>
                   </button>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground underline italic">Monthly Basic Salary (₹)</label>
                <input 
                  type="range"
                  min="5000"
                  max="200000"
                  step="500"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mb-2"
                />
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                   <input 
                    type="number"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 font-bold text-lg"
                  />
                </div>
              </div>

              {basicSalary > 15000 && applyCap && (
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
                   <p className="text-[10px] font-bold text-orange-600 uppercase mb-1">Cap Active</p>
                   <p className="text-xs text-orange-600/80 leading-relaxed italic">
                     Basic Salary is capped at ₹15,000 for PF calculation (as per 2026 rules).
                   </p>
                </div>
              )}
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                * Calculations are based on standard 12% contribution rates. Actual deductions may vary based on company policy and voluntary contributions.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Results */}
        <AnimatedSection direction="right" className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-muted-foreground font-medium mb-1">Employee Contribution</h4>
              <p className="text-3xl font-bold tracking-tight">₹{results.employeeEPF.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-2 italic underline italic">Deducted from your monthly basic salary.</p>
            </div>
          </div>
          
          <div className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-muted-foreground font-medium mb-1">Employer Contribution</h4>
              <p className="text-3xl font-bold tracking-tight">₹{(results.employerEPF + results.employerEPS).toLocaleString()}</p>
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-dashed">
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">EPF (Savings)</p>
                  <p className="font-bold">₹{results.employerEPF.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">EPS (Pension)</p>
                  <p className="font-bold">₹{results.employerEPS.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:col-span-2 flex items-center justify-between overflow-hidden relative">
             <div className="absolute right-0 top-0 p-12 opacity-5 pointer-events-none">
               <Wallet className="w-48 h-48" />
             </div>
             <div>
               <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Total Monthly PF Accumulation</h4>
               <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">₹{results.totalMonthly.toLocaleString()}</p>
             </div>
             <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-primary/70">Estimated Yearly Growth</p>
                <p className="text-xl font-bold text-primary italic">₹{(results.totalMonthly * 12).toLocaleString()}</p>
             </div>
          </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
