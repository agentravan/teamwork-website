"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/ui-custom/CalculatorLayout";
import { BarChart3, Info, Users, Sparkles, Building2, TrendingDown, ShieldAlert, ArrowRight, CheckCircle2, Zap, ReceiptIndianRupee, Fingerprint } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function ComplianceCostCalculator() {
  const [employees, setEmployees] = useState<number>(50);
  const [avgSalary, setAvgSalary] = useState<number>(30000);
  const [complexity, setComplexity] = useState<"standard" | "complex">("standard");
  
  const [breakdown, setBreakdown] = useState({
    pf: 0,
    esic: 0,
    pt: 0,
    tds: 0,
    totalMonthly: 0,
    annualTotal: 0,
    penaltyExposure: 0
  });

  useEffect(() => {
    // Basic Statutory Estimation
    const basicPay = avgSalary * 0.5; // Approx 50% basic
    
    // PF: 12% employer contribution (capped at 15k basic for simplicity in est)
    const pfPerEmp = Math.min(basicPay, 15000) * 0.12;
    
    // ESIC: 3.25% employer (only if gross <= 21k)
    const esicPerEmp = avgSalary <= 21000 ? avgSalary * 0.0325 : 0;
    
    // PT: Average ₹200 per month
    const ptPerEmp = 200;
    
    // TDS: Estimated 5% for this avg salary range
    const tdsPerEmp = avgSalary > 50000 ? avgSalary * 0.05 : 0;

    const monthlyTotal = (pfPerEmp + esicPerEmp + ptPerEmp + tdsPerEmp) * employees;
    const annualTotal = monthlyTotal * 12;
    
    // Penalty Exposure: Estimated 20% of annual total if non-compliant
    const penaltyExposure = annualTotal * 0.25;

    setBreakdown({
      pf: Math.round(pfPerEmp * employees),
      esic: Math.round(esicPerEmp * employees),
      pt: Math.round(ptPerEmp * employees),
      tds: Math.round(tdsPerEmp * employees),
      totalMonthly: Math.round(monthlyTotal),
      annualTotal: Math.round(annualTotal),
      penaltyExposure: Math.round(penaltyExposure)
    });
  }, [employees, avgSalary]);

  return (
    <CalculatorLayout 
      title="Compliance Cost Calculator" 
      description="Calculate monthly statutory liabilities and identify potential penalty exposure."
      icon={<BarChart3 className="w-8 h-8" />}
    >
      <div className="space-y-24 pb-20">
        
        {/* SECTION 1: Introduction */}
        <AnimatedSection direction="up" className="max-w-4xl">
           <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <Building2 className="w-8 h-8" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-4">Statutory Cost Management</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   Understanding your monthly contribution liabilities is critical for cash flow planning. Beyond the visible costs of PF, ESIC, and PT, many businesses ignore the **Penalty Exposure** that arises from filing delays or calculation errors.
                 </p>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 2: Input Form */}
        <AnimatedSection direction="up" id="compliance-inputs">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-6 tracking-tight">Organization Profile</h2>
                 <p className="text-muted-foreground mb-8 text-lg">Enter your headcount and average salary to see the statutory breakdown.</p>
                 
                 <div className="space-y-6">
                    <div className="p-8 rounded-[2.5rem] bg-card border shadow-sm space-y-10">
                       <div className="space-y-4">
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">Total Employees</label>
                          <div className="relative">
                             <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                             <input 
                              type="number"
                              value={employees}
                              onChange={(e) => setEmployees(Number(e.target.value))}
                              className="w-full pl-16 pr-6 py-5 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-3xl text-3xl font-black transition-all"
                            />
                          </div>
                       </div>

                       <div className="pt-8 border-t border-dashed space-y-4">
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">Average Monthly Salary (₹)</label>
                          <div className="relative">
                             <ReceiptIndianRupee className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                             <input 
                              type="number"
                              value={avgSalary}
                              onChange={(e) => setAvgSalary(Number(e.target.value))}
                              className="w-full pl-16 pr-6 py-5 bg-muted/30 border-2 border-transparent focus:border-primary/50 outline-none rounded-3xl text-3xl font-black transition-all"
                            />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* SECTION 3: Monthly Breakdown */}
              <div className="space-y-6">
                 <div className="bg-card border rounded-[3rem] p-10 shadow-xl relative overflow-hidden">
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Monthly Breakdown</h3>
                    <div className="space-y-4">
                       {[
                         { label: "Provident Fund (PF)", val: breakdown.pf },
                         { label: "ESIC (Employer Share)", val: breakdown.esic },
                         { label: "Professional Tax (PT)", val: breakdown.pt },
                         { label: "Estimated TDS", val: breakdown.tds }
                       ].map((item, i) => (
                         <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                            <span className="font-bold text-sm text-muted-foreground">{item.label}</span>
                            <span className="font-black text-lg">₹{item.val.toLocaleString()}</span>
                         </div>
                       ))}
                       <div className="pt-6 border-t flex justify-between items-center px-4">
                          <span className="font-black text-primary uppercase tracking-widest text-sm">Total Monthly Liability</span>
                          <span className="text-2xl font-black text-primary">₹{breakdown.totalMonthly.toLocaleString()}</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 4: Annual Cost + Penalty Exposure */}
        <AnimatedSection direction="up" className="max-w-6xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-primary-foreground rounded-[2.5rem] p-12 shadow-2xl flex flex-col justify-center items-center text-center">
                 <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 opacity-80">Total Annual Compliance Cost</h4>
                 <p className="text-6xl md:text-7xl font-black tracking-tighter tabular-nums">₹{breakdown.annualTotal.toLocaleString()}</p>
                 <p className="mt-6 text-xs font-medium opacity-60">Includes all statutory contributions across {employees} employees.</p>
              </div>

              <div className="bg-card border rounded-[2.5rem] p-12 shadow-sm border-red-500/20 bg-red-500/5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldAlert className="w-48 h-48 text-red-500" />
                 </div>
                 <div className="relative z-10">
                    <h4 className="font-black text-red-600 uppercase tracking-widest text-[10px] mb-4">Risk Assessment</h4>
                    <h3 className="text-3xl font-black mb-4">Penalty Exposure</h3>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Lack of timely filing or clerical errors can result in penalties, interest, and legal notices worth an estimated:</p>
                    <p className="text-5xl font-black text-red-600 tabular-nums">₹{breakdown.penaltyExposure.toLocaleString()}</p>
                    <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-[10px] font-black uppercase">
                       <Fingerprint className="w-3 h-3" /> High Risk Profile detected
                    </div>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 5: Savings Tips & CTA */}
        <AnimatedSection direction="up" className="bg-card border rounded-[2.5rem] p-10 md:p-16 text-center max-w-5xl mx-auto shadow-sm">
           <Sparkles className="w-16 min-h-16 text-primary mx-auto mb-8" />
           <h2 className="text-3xl font-black mb-8 tracking-tighter">How to Optimize Compliance Costs?</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                 <h4 className="font-black text-sm text-primary uppercase">Automate Filings</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Eliminate late-payment interest (1% per month) by automating bank-integrated statutory deposits.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="font-black text-sm text-primary uppercase">Error Audits</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Regular dual-checks between HRMS and ECR filings prevent mismatch penalties from the EPFO/ESIC.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="font-black text-sm text-primary uppercase">Centralized Logic</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">Maintain a single source of truth for salary components to ensure accurate TDS and PF capping.</p>
              </div>
           </div>
           
           <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-dashed flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                 <p className="font-black text-xl mb-1">Get 100% Compliant Today</p>
                 <p className="text-xs text-muted-foreground">Our experts help you restructure payroll for maximum tax efficiency and zero litigation.</p>
              </div>
              <a href="https://wa.me/919518842774" className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                 Book Free Audit <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           <p className="mt-12 text-[10px] text-muted-foreground opacity-60 leading-relaxed italic max-w-2xl mx-auto">
             Note: These are indicative estimates based on Standard Indian Payroll norms. Actual liabilities may vary based on specific state laws (PT), overtime, and specific investment declarations (TDS). TeamWork Solutions provides a legal guarantee for accuracy in professional tiers.
           </p>
        </AnimatedSection>

      </div>
    </CalculatorLayout>
  );
}
