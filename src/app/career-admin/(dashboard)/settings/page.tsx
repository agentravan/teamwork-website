"use client";

import { useState } from "react";
import { User, Building, Shield, Bell, Save, Lock } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Account Profile", icon: User },
    { id: "company", label: "Company Info", icon: Building },
    { id: "security", label: "Security & Role", icon: Shield },
    { id: "notifications", label: "Alerts & Notifications", icon: Bell },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and global recruiter preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* tabs list */}
        <aside className="lg:w-64 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </aside>

        {/* Content Area */}
        <div className="flex-1 max-w-2xl">
          <AnimatedSection direction="up" key={activeTab}>
            <div className="bg-card border rounded-3xl shadow-sm overflow-hidden">
              <div className="p-8 space-y-8">
                {activeTab === "profile" && (
                  <>
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                         <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-2 border-dashed border-primary/20">
                           HB
                         </div>
                         <button className="text-sm font-medium text-primary hover:underline">Change Avatar</button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <input type="text" defaultValue="Harshit Bhardwaj" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Job Title</label>
                          <input type="text" defaultValue="Founder & CEO" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input type="email" defaultValue="harshit@teamwork.solutions" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "company" && (
                  <>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company Name</label>
                        <input type="text" defaultValue="TeamWork HR Solutions" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Global HQ Address</label>
                        <textarea rows={3} defaultValue="Global Headquarters, Modern Teams Campus" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Industry</label>
                          <input type="text" defaultValue="HR Tech & Compliance" className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Company Size</label>
                          <select className="w-full p-3 bg-background border rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                            <option>1-50 employees</option>
                            <option selected>51-200 employees</option>
                            <option>201-500 employees</option>
                            <option>500+ employees</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "security" && (
                  <>
                   <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/20">
                           <div className="flex items-center gap-3">
                              <Shield className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-bold text-sm">Two-Factor Authentication</p>
                                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                              </div>
                           </div>
                           <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">Disabled</button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/20">
                           <div className="flex items-center gap-3">
                              <Lock className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-bold text-sm">Active Sessions</p>
                                <p className="text-xs text-muted-foreground">Currently logged in from 2 devices.</p>
                              </div>
                           </div>
                           <button className="text-xs font-bold text-muted-foreground hover:text-foreground">View All</button>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                         <button className="text-sm font-bold text-destructive hover:underline">Change Password</button>
                      </div>
                   </div>
                  </>
                )}

                {activeTab === "notifications" && (
                   <div className="space-y-6">
                      <div className="space-y-4">
                        {[
                          { title: "New Application Received", sub: "Get notified as soon as a candidate applies." },
                          { title: "Interview Reminder", sub: "Receive alerts for upcoming candidate interviews." },
                          { title: "Weekly Hiring Report", sub: "A summary of all positions and pipeine status." }
                        ].map((notif, i) => (
                          <div key={i} className="flex items-start justify-between">
                            <div>
                               <p className="font-bold text-sm">{notif.title}</p>
                               <p className="text-xs text-muted-foreground">{notif.sub}</p>
                            </div>
                            <div className="w-10 h-5 bg-primary/20 rounded-full relative group cursor-pointer border border-primary/30">
                               <div className="absolute right-1 top-0.5 w-4 h-4 rounded-full bg-primary"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                )}

                <div className="pt-8 border-t flex justify-end">
                   <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                      <Save className="w-4 h-4" /> Save Changes
                   </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
