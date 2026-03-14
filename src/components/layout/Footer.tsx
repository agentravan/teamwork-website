import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                TW
              </div>
              <span className="font-bold text-2xl tracking-tight">TeamWork</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The Operating System for Modern Teams. Automate payroll, compliance, and HR operations worldwide with a platform designed for the next generation of business.
            </p>
            <div className="p-4 rounded-xl bg-muted border border-border inline-block cursor-pointer hover:border-primary/50 transition-colors">
              <p className="text-sm font-medium mb-1">Global Client Support</p>
              <a href="https://wa.me/919518842774" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                +91-9518842774
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/global-hrx" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Global HRX AI
                </Link>
              </li>
              <li>
                <Link href="/services/payroll" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Automated Payroll
                </Link>
              </li>
              <li>
                <Link href="/services/statutory-compliance" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Compliance Automation
                </Link>
              </li>
              <li>
                <Link href="/services/recruitment" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Global Recruitment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Tools</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/calculators/pf" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  PF Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/esic" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  ESIC Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/tds" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  TDS Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/gratuity" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Gratuity Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Careers (Hiring!)
                </Link>
              </li>
              <li>
                <Link href="/career-admin" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Admin Portal Login
                </Link>
              </li>
              <li>
                <a href="https://wa.me/919518842774" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center group cursor-pointer">
                  Get Custom Quote <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TeamWork Solutions. All rights reserved. Servicing Businesses Worldwide.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
