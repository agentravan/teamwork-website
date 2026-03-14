"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Receipt, Info, PieChart, BadgeIndianRupee, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function TDSCalculator() {
  const [incomeType, setIncomeType] = useState<"monthly" | "yearly">("monthly");
  const [inputValue, setInputValue] = useState<number>(100000);
  const [regime, setRegime] = useState<"new" | "old">("new");
  
  // Old Regime deductions
  const [deductions80C, setDeductions80C] = useState<number>(150000);
  const [hra, setHra] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);
  const [otherIncome, setOtherIncome] = useState<number>(0);

  const [results, setResults] = useState({
    annualGross: 0,
    newRegime: {
      taxableIncome: 0,
      annualTax: 0,
      monthlyTDS: 0,
      effectiveRate: 0
    },
    oldRegime: {
      taxableIncome: 0,
      annualTax: 0,
      monthlyTDS: 0,
      effectiveRate: 0
    }
  });

  useEffect(() => {
    const annualGross = (incomeType === "monthly" ? inputValue * 12 : inputValue) + otherIncome;
    
    // 1. New Regime Calculation (FY 2025-26 / AY 2026-27)
    // Slabs: 4L (0%), 4-8L (5%), 8-12L (10%), 12-16L (15%), 16-20L (20%), 20L+ (30%)
    const standardDeductionNew = 75000; // Increased to 75k in new budget
    const taxableNew = Math.max(0, annualGross - standardDeductionNew);
    let taxNew = 0;
    
    if (taxableNew <= 700000) { // Rebate under 87A for New Regime usually up to 7L
      taxNew = 0;
    } else {
      if (taxableNew > 2000000) taxNew += (taxableNew - 2000000) * 0.30;
      if (taxableNew > 1600000) taxNew += (Math.min(taxableNew, 2000000) - 1600000) * 0.20;
      if (taxableNew > 1200000) taxNew += (Math.min(taxableNew, 1600000) - 1200000) * 0.15;
      if (taxableNew > 800000) taxNew += (Math.min(taxableNew, 1200000) - 800000) * 0.10;
      if (taxableNew > 400000) taxNew += (Math.min(taxableNew, 800000) - 400000) * 0.05;
      
      taxNew *= 1.04; // Cess
    }

    // 2. Old Regime Calculation
    const standardDeductionOld = 50000;
    const totalDeductionsOld = Math.min(deductions80C, 150000) + hra + otherDeductions + standardDeductionOld;
    const taxableOld = Math.max(0, annualGross - totalDeductionsOld);
    let taxOld = 0;
    
    if (taxableOld <= 500000) {
      taxOld = 0;
    } else {
      if (taxableOld > 1000000) taxOld += (taxableOld - 1000000) * 0.30;
      if (taxableOld > 500000) taxOld += (Math.min(taxableOld, 1000000) - 500000) * 0.20;
      if (taxableOld > 250000) taxOld += (Math.min(taxableOld, 500000) - 250000) * 0.05;
      
      taxOld *= 1.04; // Cess
    }

    setResults({
      annualGross,
      newRegime: {
        taxableIncome: taxableNew,
        annualTax: Math.round(taxNew),
        monthlyTDS: Math.round(taxNew / 12),
        effectiveRate: annualGross > 0 ? (taxNew / annualGross) * 100 : 0
      },
      oldRegime: {
        taxableIncome: taxableOld,
        annualTax: Math.round(taxOld),
        monthlyTDS: Math.round(taxOld / 12),
        effectiveRate: annualGross > 0 ? (taxOld / annualGross) * 100 : 0
      }
    });
  }, [inputValue, incomeType, otherIncome, deductions80C, hra, otherDeductions]);

  const activeResult = regime === "new" ? results.newRegime : results.oldRegime;
  const isNewBetter = results.newRegime.annualTax < results.oldRegime.annualTax;

  return (
    <CalculatorLayout 
      title="TDS Calculator" 
      description="Estimate your monthly tax deduction and compare Old vs New Regimes."
      icon={<Receipt className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Inputs (4 columns) */}
        <AnimatedSection direction="left" className="lg:col-span-5 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Income Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex bg-muted p-1 rounded-xl mb-6">
                  <button 
                    onClick={() => setIncomeType("monthly")}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${incomeType === "monthly" ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
                  >
                    Monthly
                  </button>
                  <button 
                    onClick={() => setIncomeType("yearly")}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${incomeType === "yearly" ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
                  >
                    Yearly
                  </button>
                </div>

                <label className="block text-sm font-medium mb-3 text-muted-foreground underline italic">
                  Basic + Allowances ({incomeType === "monthly" ? "/month" : "/year"})
                </label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                   <input 
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 font-bold text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground underline italic">Other Income (Annual)</label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                   <input 
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 font-bold text-lg"
                  />
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Tax Regime Toggle</h4>
                <div className="flex gap-4">
                   <button 
                    onClick={() => setRegime("new")}
                    className={`flex-1 p-4 rounded-2xl border-2 transition-all text-left relative ${regime === "new" ? 'border-primary bg-primary/5' : 'border-border'}`}
                   >
                     {regime === "new" && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                     <span className="block font-bold">New Regime</span>
                     <span className="text-[10px] text-muted-foreground">FY 2025-26</span>
                   </button>
                   <button 
                    onClick={() => setRegime("old")}
                    className={`flex-1 p-4 rounded-2xl border-2 transition-all text-left relative ${regime === "old" ? 'border-primary bg-primary/5' : 'border-border'}`}
                   >
                     {regime === "old" && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                     <span className="block font-bold">Old Regime</span>
                     <span className="text-[10px] text-muted-foreground">Classic Slabs</span>
                   </button>
                </div>
              </div>

              {regime === "old" && (
                <div className="space-y-4 pt-6 animate-in slide-in-from-top duration-300">
                   <h4 className="text-sm font-bold uppercase tracking-wider">Deductions (Old Regime)</h4>
                   <div className="space-y-4">
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Section 80C (Max 1.5L)</label>
                        <input type="number" value={deductions80C} onChange={(e) => setDeductions80C(Number(e.target.value))} className="w-full p-2 bg-muted/30 border rounded-lg text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">HRA Exemption</label>
                        <input type="number" value={hra} onChange={(e) => setHra(Number(e.target.value))} className="w-full p-2 bg-muted/30 border rounded-lg text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Other (80D, etc.)</label>
                        <input type="number" value={otherDeductions} onChange={(e) => setOtherDeductions(Number(e.target.value))} className="w-full p-2 bg-muted/30 border rounded-lg text-sm" />
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Right Results (7 columns) */}
        <AnimatedSection direction="right" className="lg:col-span-7 space-y-6">
           <div className="bg-primary text-primary-foreground rounded-3xl p-10 shadow-xl overflow-hidden relative">
              <div className="absolute right-0 top-0 p-10 opacity-10 pointer-events-none">
                 <Receipt className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                 <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Estimated Monthly TDS ({regime === "new" ? "New" : "Old"})</h4>
                    <p className="text-6xl font-black tracking-tighter">₹{activeResult.monthlyTDS.toLocaleString()}</p>
                 </div>
                 <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 min-w-[180px]">
                    <p className="text-xs opacity-80 uppercase font-bold mb-1">Annual Liability</p>
                    <p className="text-2xl font-black">₹{activeResult.annualTax.toLocaleString()}</p>
                 </div>
              </div>
           </div>

           {/* Comparison Summary */}
           <div className="bg-card border rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <PieChart className="w-5 h-5" />
                 </div>
                 <h4 className="text-xl font-bold">Regime Comparison</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className={`p-6 rounded-2xl border-2 ${isNewBetter ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                    <p className="font-bold mb-1">New Regime</p>
                    <p className="text-2xl font-black mb-2">₹{results.newRegime.annualTax.toLocaleString()}</p>
                    {isNewBetter && <span className="text-[10px] font-bold uppercase text-green-600 bg-green-200/50 px-2 py-0.5 rounded">You Save ₹{(results.oldRegime.annualTax - results.newRegime.annualTax).toLocaleString()}</span>}
                 </div>
                 <div className={`p-6 rounded-2xl border-2 ${!isNewBetter ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                    <p className="font-bold mb-1">Old Regime</p>
                    <p className="text-2xl font-black mb-2">₹{results.oldRegime.annualTax.toLocaleString()}</p>
                    {!isNewBetter && <span className="text-[10px] font-bold uppercase text-green-600 bg-green-200/50 px-2 py-0.5 rounded">You Save ₹{(results.newRegime.annualTax - results.oldRegime.annualTax).toLocaleString()}</span>}
                 </div>
              </div>

              <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-2xl">
                 <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                 <p className="text-xs text-muted-foreground leading-relaxed italic">
                   Note: Based on your inputs, the <strong>{isNewBetter ? 'New' : 'Old'} Regime</strong> appears to be more tax-efficient for you. This estimate includes the increased standard deduction and updated slabs for 2026.
                 </p>
              </div>
           </div>

           <div className="p-6 rounded-3xl bg-muted/50 border border-dashed flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center shadow-sm border">
                  <BadgeIndianRupee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold">Advanced Payroll Audit</h5>
                  <p className="text-xs text-muted-foreground italic underline">Automate complex tax computations across 20+ regimes.</p>
                </div>
              </div>
              <a href="https://wa.me/919518842774" className="bg-primary/10 text-primary hover:bg-primary/20 p-2 rounded-lg transition-all">
                <ArrowRight className="w-5 h-5" />
              </a>
           </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
