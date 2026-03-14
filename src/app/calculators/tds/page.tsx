"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Receipt, Info, PieChart, BadgeIndianRupee, ArrowRight, CheckCircle2, AlertCircle, Split, LayoutGrid, Calculator } from "lucide-react";
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
    
    // 1. New Regime Calculation (FY 2025-26 / AY 2026-27 Updates)
    const standardDeductionNew = 75000; 
    const taxableNew = Math.max(0, annualGross - standardDeductionNew);
    let taxNew = 0;
    
    if (taxableNew <= 700000) { 
      taxNew = 0;
    } else {
      if (taxableNew > 2000000) taxNew += (taxableNew - 2000000) * 0.30;
      if (taxableNew > 1600000) taxNew += (Math.min(taxableNew, 2000000) - 1600000) * 0.20;
      if (taxableNew > 1200000) taxNew += (Math.min(taxableNew, 1600000) - 1200000) * 0.15;
      if (taxableNew > 800000) taxNew += (Math.min(taxableNew, 1200000) - 800000) * 0.10;
      if (taxableNew > 400000) taxNew += (Math.min(taxableNew, 800000) - 400000) * 0.05;
      taxNew *= 1.04; 
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
      taxOld *= 1.04;
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
      description="Compare New vs Old Tax Regimes and estimate your monthly TDS (FY 2025-26)."
      icon={<Receipt className="w-8 h-8" />}
    >
      <div className="space-y-24 pb-20">
        
        {/* SECTION 1: Introduction & Regime Explanation */}
        <AnimatedSection direction="up" className="max-w-4xl">
           <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <Split className="w-8 h-8" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-4">Understanding Tax Regimes</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   India offers two tax regimes. The **New Regime** (Default) offers lower tax rates but ignores most deductions like 80C or HRA. The **Old Regime** has higher slabs but allows you to reduce taxable income through investments and expenses. Use this tool to find your optimal path.
                 </p>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 2: Input Form */}
        <AnimatedSection direction="up" id="tds-inputs">
           <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                 <div className="bg-card border rounded-[2rem] p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <LayoutGrid className="w-5 h-5 text-primary" /> Income Configuration
                    </h3>
                    
                    <div className="space-y-8">
                       <div>
                          <div className="flex bg-muted p-1 rounded-xl mb-6">
                            {["monthly", "yearly"].map((type) => (
                              <button 
                                key={type}
                                onClick={() => setIncomeType(type as any)}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all capitalize ${incomeType === type ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>

                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 underline italic">Basic + Allowances ({incomeType})</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                             <input 
                              type="number"
                              value={inputValue}
                              onChange={(e) => setInputValue(Number(e.target.value))}
                              className="w-full pl-8 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-2xl text-2xl font-black transition-all"
                            />
                          </div>
                       </div>

                       <div className="pt-6 border-t font-semibold">
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 underline italic">Other Annual Income</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold font-black">₹</span>
                             <input 
                              type="number"
                              value={otherIncome}
                              onChange={(e) => setOtherIncome(Number(e.target.value))}
                              className="w-full pl-8 pr-4 py-3 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-xl font-bold"
                            />
                          </div>
                       </div>

                       {/* Regime Toggle */}
                       <div className="pt-6 border-t">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Select Target Regime</h4>
                          <div className="grid grid-cols-2 gap-4">
                             {["new", "old"].map((r) => (
                               <button 
                                key={r}
                                onClick={() => setRegime(r as any)}
                                className={`p-4 rounded-2xl border-2 transition-all text-left relative ${regime === r ? 'border-primary bg-primary/5' : 'border-border'}`}
                               >
                                 {regime === r && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                                 <span className="block font-black capitalize">{r} Regime</span>
                                 <span className="text-[10px] text-muted-foreground">{r === "new" ? "FY 2025-26" : "Standard Slabs"}</span>
                               </button>
                             ))}
                          </div>
                       </div>

                       {regime === "old" && (
                         <div className="space-y-4 pt-6 animate-in slide-in-from-top-4 duration-300 border-t border-dashed">
                            <h4 className="text-xs font-bold uppercase tracking-wider">Old Regime Deductions</h4>
                            <div className="space-y-4">
                               { [
                                 { label: "Section 80C", val: deductions80C, setter: setDeductions80C },
                                 { label: "HRA Exemption", val: hra, setter: setHra },
                                 { label: "Other (80D / 24b)", val: otherDeductions, setter: setOtherDeductions }
                               ].map((d, i) => (
                                 <div key={i}>
                                   <label className="text-[10px] font-bold text-muted-foreground block mb-1 uppercase">{d.label}</label>
                                   <input type="number" value={d.val} onChange={(e) => d.setter(Number(e.target.value))} className="w-full p-2 bg-muted/20 border rounded-lg text-sm font-medium" />
                                 </div>
                               ))}
                            </div>
                         </div>
                       )}
                    </div>
                 </div>
              </div>

              {/* SECTION 3: Live Results */}
              <div className="lg:col-span-7 space-y-6">
                 <div className="bg-primary text-primary-foreground rounded-[2.5rem] p-12 shadow-2xl overflow-hidden relative group">
                    <div className="absolute right-0 top-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                       <Receipt className="w-56 h-56" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                       <div>
                          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-4 opacity-80">Estimated Monthly TDS Deduction ({regime})</h4>
                          <p className="text-7xl font-black tracking-tighter">₹{activeResult.monthlyTDS.toLocaleString()}</p>
                       </div>
                       <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 min-w-[220px]">
                          <p className="text-xs opacity-80 uppercase font-black mb-1">Annual Tax Liability</p>
                          <p className="text-3xl font-black">₹{activeResult.annualTax.toLocaleString()}</p>
                       </div>
                    </div>
                 </div>

                 {/* SECTION 4: Regime Comparison */}
                 <div className="bg-card border rounded-[2.5rem] p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <PieChart className="w-6 h-6" />
                       </div>
                       <h4 className="text-2xl font-black tracking-tight">Regime Comparison Table</h4>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                       <div className={`p-8 rounded-3xl border-2 transition-all ${isNewBetter ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                          <p className="font-black text-sm uppercase tracking-widest mb-2 opacity-70">New Regime</p>
                          <p className="text-4xl font-black mb-4">₹{results.newRegime.annualTax.toLocaleString()}</p>
                          {isNewBetter && <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-green-600 bg-green-200/50 px-3 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" /> Save ₹{(results.oldRegime.annualTax - results.newRegime.annualTax).toLocaleString()}</div>}
                       </div>
                       <div className={`p-8 rounded-3xl border-2 transition-all ${!isNewBetter ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                          <p className="font-black text-sm uppercase tracking-widest mb-2 opacity-70">Old Regime</p>
                          <p className="text-4xl font-black mb-4">₹{results.oldRegime.annualTax.toLocaleString()}</p>
                          {!isNewBetter && <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-green-600 bg-green-200/50 px-3 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" /> Save ₹{(results.newRegime.annualTax - results.oldRegime.annualTax).toLocaleString()}</div>}
                       </div>
                    </div>

                    <div className="mt-8 flex items-start gap-4 p-6 bg-muted/50 rounded-2xl">
                       <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                       <p className="text-xs text-muted-foreground leading-relaxed italic">
                         Note: Our algorithms recommend the <strong>{isNewBetter ? 'New' : 'Old'} Regime</strong> for your income profile. The estimate includes the standard deduction and 4% Cess.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 5: Deductions Guide & Legal Notes */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto space-y-12">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border rounded-[2rem] p-8 md:col-span-2">
                 <h3 className="text-xl font-black mb-6 flex items-center gap-3"><Calculator className="w-5 h-5 text-primary" /> Tax Optimization Guide</h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <p className="text-sm text-muted-foreground leading-relaxed"><strong>Standard Deduction (75k):</strong> New Regime now offers 75,000 deduction for FY 25-26, making it attractive for mid-income levels.</p>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <p className="text-sm text-muted-foreground leading-relaxed"><strong>80C Limit (1.5L):</strong> Old Regime is better if you have high LIC, PPF, and Home Loan interest payments.</p>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <p className="text-sm text-muted-foreground leading-relaxed"><strong>Surcharges:</strong> For income above 50L, additional surcharges apply which are calculated automatically in professional audits.</p>
                    </div>
                 </div>
              </div>
              
              <div className="p-8 rounded-[2rem] bg-muted/50 border border-dashed flex flex-col justify-between">
                 <div>
                    <h4 className="font-black text-xs uppercase mb-4 tracking-widest underline">Statutory Compliance</h4>
                    <p className="text-xs text-muted-foreground mb-4">TDS must be deducted monthly by the employer and deposited with the government by the 7th of the following month.</p>
                    <p className="text-xs text-muted-foreground italic">Failure to deduct TDS attracts 1% interest per month.</p>
                 </div>
                 <a href="https://wa.me/919518842774" className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase hover:underline mt-6">
                    Talk to CA Expert <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
           </div>
           
           <p className="text-[10px] text-center text-muted-foreground opacity-60 italic max-w-3xl mx-auto">
             Disclaimer: This is a planning tool. Income Tax rules (FY 2025-26) are complex and subject to marginal relief and specific exemptions. Always verify with a qualified tax professional before filing. TeamWork Solutions is not a tax advisor.
           </p>
        </AnimatedSection>

      </div>
    </CalculatorLayout>
  );
}
