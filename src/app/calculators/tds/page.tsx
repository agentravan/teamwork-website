"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Receipt, Info, PieChart, BadgeIndianRupee } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function TDSCalculator() {
  const [monthlyGross, setMonthlyGross] = useState<number>(75000);
  const [results, setResults] = useState({
    annualIncome: 0,
    taxableIncome: 0,
    annualTax: 0,
    monthlyTDS: 0,
    effectiveRate: 0
  });

  useEffect(() => {
    // TDS / Income Tax Calculation (India - New Regime FY 2024-25)
    const annualGross = monthlyGross * 12;
    const standardDeduction = 50000;
    const taxableIncome = Math.max(0, annualGross - standardDeduction);
    
    let tax = 0;
    
    // Rebate under 87A: No tax if taxable income <= 7,00,000 (New Regime)
    if (taxableIncome <= 700000) {
      tax = 0;
    } else {
      // Slab wise calculation
      if (taxableIncome > 1500000) {
        tax += (taxableIncome - 1500000) * 0.30;
        tax += (1500000 - 1200000) * 0.20;
        tax += (1200000 - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 1200000) {
        tax += (taxableIncome - 1200000) * 0.20;
        tax += (1200000 - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 900000) {
        tax += (taxableIncome - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 600000) {
        tax += (taxableIncome - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 300000) {
        tax += (taxableIncome - 300000) * 0.05;
      }
      
      // Add 4% Health & Education Cess
      tax = tax * 1.04;
    }

    setResults({
      annualIncome: annualGross,
      taxableIncome: taxableIncome,
      annualTax: Math.round(tax),
      monthlyTDS: Math.round(tax / 12),
      effectiveRate: annualGross > 0 ? (tax / annualGross) * 100 : 0
    });
  }, [monthlyGross]);

  return (
    <CalculatorLayout 
      title="TDS Calculator" 
      description="Estimate your estimated monthly tax deduction under the New Tax Regime."
      icon={<Receipt className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Salary Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground underline italic italic">Monthly Gross Salary (₹)</label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">₹</span>
                   <input 
                    type="number"
                    value={monthlyGross}
                    onChange={(e) => setMonthlyGross(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 font-bold text-lg"
                  />
                </div>
                <input 
                  type="range"
                  min="20000"
                  max="500000"
                  step="1000"
                  value={monthlyGross}
                  onChange={(e) => setMonthlyGross(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mt-4"
                />
              </div>
              
              <div className="p-4 bg-muted/30 rounded-2xl border border-dashed flex justify-between items-center">
                 <span className="text-sm font-medium">Annual Gross</span>
                 <span className="font-bold">₹{results.annualIncome.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <h5 className="text-xs font-bold uppercase mb-2">Assumptions:</h5>
              <ul className="text-[10px] text-muted-foreground space-y-1 list-disc pl-3">
                <li>FY 2024-25 New Regime slabs used.</li>
                <li>Standard deduction of ₹50,000 applied.</li>
                <li>Section 87A rebate applied for income up to 7L.</li>
                <li>Other exemptions (80C, etc.) are NOT included as they apply mainly to Old Regime.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Results */}
        <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl flex flex-col justify-between overflow-hidden relative">
                 <div className="absolute right-0 top-0 p-8 opacity-10 pointer-events-none">
                    <Receipt className="w-32 h-32" />
                 </div>
                 <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 opacity-80">Estimated Monthly TDS</h4>
                    <p className="text-5xl font-black tracking-tighter">₹{results.monthlyTDS.toLocaleString()}</p>
                 </div>
                 <p className="text-xs opacity-70 mt-6 flex items-center gap-1">
                   <Info className="w-3 h-3" /> Average deduction per month
                 </p>
              </div>
              
              <div className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                 <div>
                    <h4 className="text-muted-foreground font-medium mb-1 underline italic">Annual Tax Liability</h4>
                    <p className="text-3xl font-bold tracking-tight">₹{results.annualTax.toLocaleString()}</p>
                    <div className="mt-4 flex items-center gap-2">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${results.effectiveRate > 0 ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                         Effective Rate: {results.effectiveRate.toFixed(1)}%
                       </span>
                    </div>
                 </div>
                 <p className="text-xs text-muted-foreground mt-6 italic underline italic">Includes 4% Health & Education Cess.</p>
              </div>
           </div>

           <div className="bg-card border rounded-3xl p-8 shadow-sm">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" /> Taxable Income Breakdown
              </h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Annual Gross Salary</span>
                    <span className="font-medium">₹{results.annualIncome.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Standard Deduction</span>
                    <span className="text-green-500 font-medium">- ₹50,000</span>
                 </div>
                 <div className="pt-4 border-t flex justify-between items-center font-bold">
                    <span>Total Taxable Income</span>
                    <span className="text-primary font-bold">₹{results.taxableIncome.toLocaleString()}</span>
                 </div>
              </div>
           </div>

           <div className="p-6 rounded-3xl bg-muted/50 border border-dashed flex flex-col sm:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary shrink-0 shadow-sm border">
                <BadgeIndianRupee className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold mb-1 italic underline italic">Verify for Global Taxation</h5>
                <p className="text-sm text-muted-foreground leading-relaxed italic underline italic">
                  Running a multinational team? Taxation rules differ wildly by country. Get a detailed audit of your global payroll tax compliance across 15+ regions.
                </p>
              </div>
           </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
