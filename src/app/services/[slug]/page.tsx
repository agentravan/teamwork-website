import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";
import { PricingCard, pricingPlans } from "@/components/ui-custom/PricingCard";

// Define the content for each service page
const serviceContents: Record<string, any> = {
  "recruitment": {
    title: "Global Recruitment Solutions",
    subtitle: "End-to-end talent acquisition for global teams.",
    description: "Finding the right talent is the difference between scaling and stalling. Our Global Recruitment service removes geographical boundaries, giving you access to top-tier professionals worldwide. We handle the entire lifecycle from sourcing and vetting to offer negotiation and onboarding, ensuring every hire aligns with your company culture and technical requirements.",
    benefits: [
      "Access to a pre-vetted global talent pool",
      "Reduced time-to-hire by up to 40%",
      "Specialized technical and executive search capabilities",
      "Seamless integration with local employment laws",
      "Dedicated recruitment account manager"
    ]
  },
  "payroll": {
    title: "Automated Global Payroll",
    subtitle: "Automated payroll calculation ensuring flawless execution.",
    description: "Managing payroll across different countries, currencies, and tax jurisdictions is complex and risky. Our automated global payroll engine simplifies this process, guaranteeing 100% accuracy and on-time payments for your distributed workforce. We handle all local tax calculations, statutory deductions, and final settlements with zero administrative burden on your team.",
    benefits: [
      "Multi-currency processing in 150+ countries",
      "Automated tax and compliance calculations",
      "Transparent reporting and analytics dashboard",
      "Secure employee self-service portal for payslips",
      "Integration with existing ERP and attendance systems"
    ]
  },
  "third-party-hr": {
    title: "Third-Party HR Outsourcing",
    subtitle: "Outsourced HR support tailored for global teams.",
    description: "Scale your operations without bloating your internal HR department. Our Third-Party HR service acts as your extended team, managing day-to-day employee queries, policy enforcement, benefits administration, and performance tracking. We provide the infrastructure and expertise of an enterprise HR department at a fraction of the cost.",
    benefits: [
      "Dedicated fractional HR business partners",
      "Complete employee lifecycle management",
      "Grievance handling and conflict resolution",
      "Customized benefits program administration",
      "Regular employee engagement initiatives"
    ]
  },
  "statutory-compliance": {
    title: "Statutory Compliance Management",
    subtitle: "Full statutory coverage for PF, ESIC across regions.",
    description: "Navigating local labor laws is the biggest hurdle in global expansion. Our compliance experts ensure your business adheres to all regional statutory requirements, including provident funds, employee state insurance, professional taxes, and labor welfare funds. We take complete responsibility for filings, registrations, and liaison with local authorities, backed by our zero-penalty guarantee.",
    benefits: [
      "100% adherence to local labor laws and regulations",
      "Zero-penalty guarantee on all statutory filings",
      "Proactive updates on changing legislations",
      "Complete documentation and audit trail management",
      "Representation during labor department inspections"
    ]
  },
  "hr-audit-policy": {
    title: "HR Audit & Policy Design",
    subtitle: "Risk-free policy design and global HR infrastructure audits.",
    description: "Are your HR practices exposing your business to hidden risks? Our comprehensive HR Audit service evaluates your current framework against global best practices and local regulations. We then design custom policies—from remote work guidelines to diversity and inclusion frameworks—that protect your organization while fostering a high-performance culture.",
    benefits: [
      "Thorough risk assessment of existing HR practices",
      "Custom employee handbook creation",
      "Alignment of company policies with local labor laws",
      "Implementation of modern workplace guidelines",
      "Periodic reviews to ensure ongoing compliance"
    ]
  },
  "global-hrx": {
    title: "Global HRX Platform",
    subtitle: "The complete AI HRMS platform for modern teams.",
    description: "Global HRX is our proprietary operating system that brings all your HR, payroll, and compliance needs into one unified dashboard. Powered by AI, it automates manual workflows, provides predictive insights on employee retention, and ensures your global operations run smoothly without fragmented software stacks.",
    benefits: [
      "Unified dashboard for all global HR operations",
      "AI-driven predictive analytics and insights",
      "Automated workflow generation for onboarding/offboarding",
      "Enterprise-grade security and data privacy (SOC2)",
      "Open API for seamless third-party integrations"
    ]
  }
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceContents[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <AnimatedSection direction="up" delay={0.1}>
            <Link href="/services" className="inline-flex items-center text-sm font-medium opacity-80 hover:opacity-100 mb-8 transition-opacity">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to all services
            </Link>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl opacity-90 mb-10">
              {service.subtitle}
            </p>
            <a 
              href="https://wa.me/919518842774"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-primary hover:bg-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 transition-transform hover:scale-105 shadow-xl"
            >
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Details & Benefits */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="bg-muted/50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section - Included on EVERY relevant page as requested */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing for {service.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Transparent plans designed for businesses worldwide.</p>
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
