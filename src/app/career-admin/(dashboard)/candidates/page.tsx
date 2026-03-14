"use client";

import { useState } from "react";
import { Search, User, Mail, Phone, Bookmark, MoreVertical, Filter, Download } from "lucide-react";
import { AnimatedSection } from "@/components/ui-custom/AnimatedSection";

const mockCandidates = [
  { id: "c1", name: "Sarah Jenkins", email: "sarah@example.com", phone: "+1 234 567 890", role: "Senior Full Stack Engineer", status: "New", saved: true },
  { id: "c2", name: "David Chen", email: "david@example.com", phone: "+1 987 654 321", role: "Global HR Compliance Specialist", status: "Screening", saved: true },
  { id: "c4", name: "Michael Chang", email: "michael@example.com", phone: "+44 20 1234 5678", role: "Senior Full Stack Engineer", status: "Offer", saved: false },
  { id: "c5", name: "Jessica Smith", email: "jessica@example.com", phone: "+91 95188 42774", role: "Marketing Director", status: "Hired", saved: true },
];

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = mockCandidates.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
            <p className="text-muted-foreground mt-1">Manage and track your global talent pool.</p>
         </div>
         <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-muted transition-colors text-sm font-medium">
               <Download className="w-4 h-4" /> Export
            </button>
         </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search by name, role, or skills..." 
            className="w-full pl-9 pr-4 py-3 bg-card border rounded-2xl outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border rounded-2xl hover:bg-muted transition-colors text-sm font-bold bg-card shadow-sm">
           <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCandidates.map((candidate) => (
          <AnimatedSection direction="up" key={candidate.id}>
            <div className="group bg-card border rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex items-center gap-1">
                    <button className={`p-2 rounded-lg transition-colors ${candidate.saved ? 'text-orange-500 bg-orange-500/10' : 'text-muted-foreground hover:bg-muted'}`}>
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                    <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
               </div>

               <div className="space-y-1 mb-6">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{candidate.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{candidate.role}</p>
               </div>

               <div className="space-y-3 pb-6 border-b mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                     <Mail className="w-4 h-4" /> {candidate.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                     <Phone className="w-4 h-4" /> {candidate.phone}
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    candidate.status === 'Hired' ? 'bg-green-500/10 text-green-500' : 
                    candidate.status === 'Offer' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {candidate.status}
                  </span>
                  <button className="text-sm font-bold text-primary hover:underline">View Profile</button>
               </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
         <div className="text-center py-20 bg-card border border-dashed rounded-3xl">
            <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold">No candidates found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
         </div>
      )}
    </div>
  );
}
