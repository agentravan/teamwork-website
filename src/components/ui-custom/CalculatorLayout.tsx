"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Printer } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  icon: ReactNode;
}

export function CalculatorLayout({ title, description, children, icon }: CalculatorLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen pt-40 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <AnimatedSection direction="up">
          <Link href="/calculators" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all calculators
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{title}</h1>
                <p className="text-lg text-muted-foreground">{description}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button onClick={() => window.print()} className="p-3 rounded-xl border hover:bg-muted transition-colors" title="Print results">
                <Printer className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="p-3 rounded-xl border hover:bg-muted transition-colors" 
                title="Share tool"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
        
        {children}
        
        <AnimatedSection direction="up" className="mt-20">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Need precise global processing?</h2>
                <p className="text-lg opacity-90 mb-8">
                  While these tools provide estimates, our platform handles complex multi-country calculations with zero-penalty guarantees.
                </p>
                <a 
                  href="https://wa.me/919518842774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-foreground hover:bg-muted font-bold px-8 py-4 rounded-xl inline-flex items-center transition-colors"
                >
                  Contact Expert for Audit
                </a>
             </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
