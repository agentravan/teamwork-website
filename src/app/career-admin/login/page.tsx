"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, Mail, ArrowRight, Loader2, Chrome } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to dashboard on success
        router.push("/career-admin");
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-6">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700"></div>

      <AnimatedSection direction="up" className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
              TW
            </div>
            <span className="text-2xl font-bold tracking-tight">TeamWork Solutions</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Career Admin Portal</h1>
          <p className="text-muted-foreground mt-2">Sign in to manage your recruitment pipeline.</p>
        </div>

        <div className="bg-card border shadow-2xl rounded-[2rem] overflow-hidden backdrop-blur-sm bg-card/80">
          <div className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 text-sm flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                   <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> Email ID
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="admin@teamwork.solutions"
                    className="w-full p-4 bg-background border border-border/60 rounded-2xl outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="font-semibold flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" /> Password
                    </label>
                    <Link href="#" className="text-primary hover:underline font-bold text-xs uppercase tracking-wider">Forgot?</Link>
                  </div>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    className="w-full p-4 bg-background border border-border/60 rounded-2xl outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">Remember Me</span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/95 p-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 active:scale-[0.98]"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Sign In <ArrowRight className="w-5 h-5" /></>}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground font-bold">Or continue with</span></div>
            </div>

            <button className="w-full bg-background border border-border/60 hover:border-primary/40 p-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all hover:bg-muted/30">
               <Chrome className="w-5 h-5" /> Login with Google
            </button>
            
            <div className="pt-4 flex items-center gap-3 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
               <Shield className="w-5 h-5 text-blue-500 shrink-0" />
               <p className="text-[10px] text-blue-500/80 leading-tight">
                 Access restricted to authorized HR personnel. Login sessions are encrypted and monitored.
               </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">
          TeamWork Security v2.4
        </p>
      </AnimatedSection>
    </div>
  );
}

function AlertCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
