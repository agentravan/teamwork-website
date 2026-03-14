"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { Milestone, Info, Clock, Award } from "lucide-react";
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
      description="Calculate your tax-free gratuity amount based on salary and service tenure."
      icon={<Award className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <AnimatedSection direction="left" className="lg:col-span-1 space-y-6">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Inputs
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground underline italic italic">Last Drawn Monthly Basic (₹)</label>
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

              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground underline italic italic">Years of Continuous Service</label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold italic">Y</span>
                   <input 
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    min="1"
                    max="50"
                    className={`w-full pl-8 pr-4 py-3 bg-muted/50 border rounded-xl outline-none focus:ring-2 font-bold text-lg ${!results.isEligible ? 'border-orange-500/50' : 'focus:ring-primary/50'}`}
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
              <div className="mt-8 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                <p className="text-xs font-bold text-orange-600 mb-1 tracking-wider uppercase">Not Yet Eligible</p>
                <p className="text-xs text-orange-600/80 leading-relaxed italic underline italic">
                  Gratuity is typically payable after completing a minimum of 5 years of continuous service with the same employer.
                </p>
              </div>
            )}
            
            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                * Calculation follows the Payment of Gratuity Act, 1972. The amount is capped at ₹20,00,000.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Results */}
        <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center overflow-hidden relative min-h-[300px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0,transparent_100%)]"></div>
             
             <div className="relative z-10">
               <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Estimated Gratuity Pay-out</h4>
               <p className={`text-6xl md:text-8xl font-black tracking-tighter mb-4 ${results.isEligible ? 'text-primary' : 'text-muted-foreground opacity-30'}`}>
                 ₹{results.amount.toLocaleString()}
               </p>
               {results.isEligible ? (
                 <p className="text-primary/70 font-medium flex items-center justify-center gap-2">
                   <Award className="w-5 h-5" /> Tax-free benefit under Income Tax Act
                 </p>
               ) : (
                 <p className="text-muted-foreground font-medium italic underline italic">Min. 5 years required for payout</p>
               )}
             </div>
             
             <div className="absolute left-0 bottom-0 p-8 opacity-[0.03] pointer-events-none">
               <Award className="w-64 h-64" />
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-3xl p-8 shadow-sm">
               <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                 <Clock className="w-5 h-5" />
               </div>
               <h4 className="font-bold mb-2 underline italic">Eligibility Criteria</h4>
               <p className="text-sm text-muted-foreground leading-relaxed italic underline italic">
                 Applicable to employees working in factories, mines, oilfields, plantations, ports, and various commercial establishments with 10+ employees.
               </p>
            </div>
            
            <div className="bg-card border rounded-3xl p-8 shadow-sm">
               <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                 <Milestone className="w-5 h-5" />
               </div>
               <h4 className="font-bold mb-2 underline italic">Tax Implications</h4>
               <p className="text-sm text-muted-foreground leading-relaxed italic underline italic">
                 Gratuity received by government employees is fully tax-exempt. For private sector, exemptions apply up to the statutory limit.
               </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </CalculatorLayout>
  );
}
