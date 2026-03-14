import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import { PricingCard, pricingPlans } from "@/components/ui-custom/PricingCard";

interface CalculatorProps {
  id: string;
  name: string;
  description: string;
  imageColor: string;
}

const calculators: CalculatorProps[] = [
  {
    id: "pf",
    name: "PF Calculator",
    description: "Calculate Employee and Employer Provident Fund contributions instantly according to the latest global mandates.",
    imageColor: "bg-blue-500/20"
  },
  {
    id: "esic",
    name: "ESIC Calculator",
    description: "Determine State Insurance deductions for eligible global employees with our automated tool.",
    imageColor: "bg-green-500/20"
  },
  {
    id: "tds",
    name: "TDS Calculator",
    description: "Compute Tax Deducted at Source across different tax regimes and salary structures worldwide.",
    imageColor: "bg-purple-500/20"
  },
  {
    id: "gratuity",
    name: "Gratuity Calculator",
    description: "Calculate end-of-service gratuity payouts based on tenure and last drawn basic salary.",
    imageColor: "bg-orange-500/20"
  },
  {
    id: "compliance",
    name: "Compliance Cost Calculator",
    description: "Estimate your total global compliance and HR administrative overhead.",
    imageColor: "bg-red-500/20"
  }
];

export default function CalculatorsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">HR & Compliance Calculators</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free tools to help you estimate payroll deductions and compliance costs for your global teams. 
            For exact calculations and automated processing, explore our premium plans.
          </p>
        </AnimatedSection>

        <div className="space-y-32 mb-32">
          {calculators.map((calc, i) => (
            <AnimatedSection key={calc.id} direction={i % 2 === 0 ? "left" : "right"} delay={0.1}>
              <div id={calc.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'md:order-last' : ''}>
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                    Free Tool
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{calc.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{calc.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm py-4 border-b border-border">
                      <span className="font-medium">Accuracy</span>
                      <span className="text-muted-foreground">Estimate</span>
                    </div>
                    <div className="flex justify-between text-sm py-4 border-b border-border">
                      <span className="font-medium">Supported Regions</span>
                      <span className="text-muted-foreground">Worldwide</span>
                    </div>
                  </div>
                  
                   <a 
                    href="https://wa.me/919518842774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-3 font-medium inline-block transition-colors"
                  >
                    Get Custom Quote for Global Processing
                  </a>
                </div>
                
                {/* Screenshot Placeholder representing the calculator */}
                <div className={`relative aspect-[4/3] rounded-2xl border shadow-xl overflow-hidden flex flex-col ${calc.imageColor}`}>
                  <div className="h-12 border-b bg-background/50 backdrop-blur flex items-center px-4 gap-2">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-4">
                     <div className="h-8 w-1/3 bg-background/80 rounded animate-pulse"></div>
                     <div className="grid grid-cols-2 gap-4 mt-4">
                       <div className="h-12 bg-background/50 rounded border"></div>
                       <div className="h-12 bg-background/50 rounded border"></div>
                     </div>
                     <div className="h-32 bg-background/50 rounded border mt-4"></div>
                     <div className="mt-auto h-12 w-full bg-primary/80 rounded text-center flex items-center justify-center text-primary-foreground font-medium text-sm">Calculate</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

       {/* Pricing Section */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Upgrade to Automated Precision</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Stop using manual calculators. Automate your entire global payroll with our platforms.</p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
               <AnimatedSection key={plan.name} delay={i * 0.15} direction="up" className="flex">
                  <PricingCard {...plan} />
               </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
