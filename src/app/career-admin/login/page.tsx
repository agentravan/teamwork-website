"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate JWT authentication flow
    setTimeout(() => {
      setLoading(false);
      router.push("/career-admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-6">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700"></div>

      <AnimatedSection direction="up" className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
              TW
            </div>
            <span className="text-2xl font-bold tracking-tight">TeamWork Solutions</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Recruiter Portal</h1>
          <p className="text-muted-foreground mt-2">Sign in to manage your global hiring pipeline.</p>
        </div>

        <div className="bg-card border shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm bg-card/80">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" /> Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="admin@teamwork.solutions"
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4 text-muted-foreground" /> Password
                  </label>
                  <Link href="#" className="text-primary hover:underline font-medium">Forgot?</Link>
                </div>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-xs text-blue-500">
               <Shield className="w-4 h-4 shrink-0" />
               <p>Your session is protected with industry-standard JWT encryption.</p>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Sign In to Portal <ArrowRight className="w-5 h-5" /></>}
            </button>
            
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account? <Link href="/contact" className="text-foreground font-bold hover:underline">Contact Support</Link>
            </p>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Authorized Access Only
        </p>
      </AnimatedSection>
    </div>
  );
}
