"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Overview", href: "/services" },
    { name: "Recruitment", href: "/services/recruitment" },
    { name: "Payroll", href: "/services/payroll" },
    { name: "Third-Party HR", href: "/services/third-party-hr" },
    { name: "Statutory Compliance", href: "/services/statutory-compliance" },
    { name: "HR Audit & Policy", href: "/services/hr-audit-policy" },
    { name: "Global HRX", href: "/services/global-hrx" },
  ];

  const calculators = [
    { name: "Overview", href: "/calculators" },
    { name: "PF Calculator", href: "/calculators#pf" },
    { name: "ESIC Calculator", href: "/calculators#esic" },
    { name: "TDS Calculator", href: "/calculators#tds" },
    { name: "Gratuity Calculator", href: "/calculators#gratuity" },
    { name: "Compliance Cost", href: "/calculators#compliance" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
              TW
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">TeamWork</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                    className="absolute top-full left-0 pt-4 w-56"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-4 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Calculators Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("calculators")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith("/calculators") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Calculators
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "calculators" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                    className="absolute top-full left-0 pt-4 w-56"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                      {calculators.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            
            <Link
              href="/careers"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/careers" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Careers
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/career-admin"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <a
              href="https://wa.me/919518842774"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background pt-4 pb-6 overflow-hidden"
          >
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50">
                Home
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50 flex justify-between">
                Services
              </Link>
              <Link href="/calculators" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50 flex justify-between">
                Calculators
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50">
                About
              </Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50">
                Careers
              </Link>
              <Link href="/career-admin" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-border/50">
                Portal Login
              </Link>
              <a
                href="https://wa.me/919518842774"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-primary text-primary-foreground text-center px-4 py-3 rounded-xl text-md font-medium"
              >
                Contact via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
