"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { BarChart3, Info, Users, Sparkles, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function ComplianceCostCalculator() {
  const [employees, setEmployees] = useState<number>(50);
  const [complexity, setComplexity] = useState<"standard" | "complex">( "standard");
  const [results, setResults] = useState({
    manualCost: 0,
    automatedCost: 0,
    savings: 0,
    savingsPercent: 0
  });

  useEffect(() => {
    // Compliance Cost Logic (Estimated)
    // Legacy/Manual Cost: ~₹1500 per emp for standard, ~₹3500 for complex
    const baseCost = complexity === "standard" ? 1500 : 3500;
    const manualTotal = employees * baseCost;
    
    // TeamWork Automation Cost (Estimated Strategy): ~60% reduction
    const automatedTotal = manualTotal * 0.45;
    
    setResults({
      manualCost: Math.round(manualTotal),
      automatedCost: Math.round(automatedTotal),
      savings: Math.round(manualTotal - automatedTotal),
      savingsPercent: 55
    });
  }, [employees, complexity]);

  return (
    <CalculatorLayout 
      title="Compliance Cost Calculator" 
      description="Estimate the ROI of automating your HR and statutory compliance."
      icon={<BarChart3 className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" /> Setup Details
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-4 text-muted-foreground underline italic italic underline italic">Total Number of Employees</label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold italic underline italic">
                     <Users className="w-4 h-4" />
                   </span>
                   <input 
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 font-bold text-lg"
                  />
                </div>
                <input 
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mt-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-4 text-muted-foreground underline italic italic underline italic">Compliance Complexity</label>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                    onClick={() => setComplexity("standard")}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${complexity === "standard" ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-muted border-border'}`}
                   >
                     Single Region
                   </button>
                   <button 
                    onClick={() => setComplexity("complex")}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${complexity === "complex" ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-muted border-border'}`}
                   >
                     Multi-Region
                   </button>
                </div>
                <p className="text-[10px] text-muted-foreground mt-3 italic underline italic italic underline italic">
                  * Multi-region includes additional state-wise registrations and complex payroll variations.
                </p>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-primary/5 rounded-2xl border border-primary/10">
               <p className="text-xs text-muted-foreground leading-relaxed italic underline italic">
                * Cost estimates include payroll processing, PF/ESIC/PT filing, record management and periodic audits.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Results */}
        <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
           <div className="bg-card border rounded-3xl p-1 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10 bg-background rounded-[22px]">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    <div className="space-y-8 flex-1">
                       <div>
                          <h4 className="text-muted-foreground font-medium mb-1 underline italic">Your Current Manual Cost</h4>
                          <p className="text-4xl font-bold tracking-tight text-foreground/50 line-through decoration-red-500/50">₹{results.manualCost.toLocaleString()}<span className="text-sm font-normal ml-2">/year</span></p>
                       </div>
                       
                       <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                          <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">TeamWork Automated Cost</h4>
                          <p className="text-6xl font-black tracking-tighter text-primary">₹{results.automatedCost.toLocaleString()}<span className="text-sm font-normal ml-2">/year</span></p>
                       </div>
                    </div>

                    <div className="bg-primary text-primary-foreground rounded-3xl p-10 text-center flex flex-col justify-center min-w-[240px] shadow-2xl shadow-primary/20 relative">
                       <div className="absolute top-0 right-0 p-4 opacity-20 rotate-12">
                          <Sparkles className="w-12 h-12" />
                       </div>
                       <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Annual Savings</h4>
                       <p className="text-4xl font-black mb-1">₹{results.savings.toLocaleString()}</p>
                       <p className="text-sm font-bold bg-white/20 rounded-full px-3 py-1 mt-4 inline-block mx-auto">
                         Save {results.savingsPercent}%
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
                 <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" /> Cost Factor Breakdown
                 </h4>
                 <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center opacity-70">
                       <span>Payroll Infrastructure</span>
                       <span>35%</span>
                    </div>
                    <div className="flex justify-between items-center opacity-70">
                       <span>Compliance Filing Risks</span>
                       <span>45%</span>
                    </div>
                    <div className="flex justify-between items-center opacity-70">
                       <span>Administrative Personnel</span>
                       <span>20%</span>
                    </div>
                 </div>
              </div>
              
              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col justify-center">
                 <h4 className="text-primary font-bold mb-3 italic underline italic">Why settle for estimates?</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed italic underline italic">
                   Request a detailed "Global HR Audit" to identify exactly where your operations are leaking capital and exposing you to penalties.
                 </p>
                 <a href="https://wa.me/919518842774" className="mt-6 text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all italic underline italic">
                   Book Free Audit Now
                 </a>
              </div>
           </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
