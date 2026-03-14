"use client";

import { useState } from "react";
import { Search, MoreHorizontal, Mail, Calendar } from "lucide-react";

const stages = ["New", "Screening", "Interview", "Offer", "Hired", "Declined"];

const mockCandidates = [
  { id: "c1", name: "Sarah Jenkins", role: "Senior Full Stack Engineer", stage: "New", date: "2 hrs ago", email: "sarah@example.com" },
  { id: "c2", name: "David Chen", role: "Global HR Compliance Specialist", stage: "Screening", date: "1 day ago", email: "david@example.com" },
  { id: "c3", name: "Emily Rodriguez", role: "Enterprise Account Executive", stage: "Interview", date: "3 days ago", email: "emily@example.com" },
  { id: "c4", name: "Michael Chang", role: "Senior Full Stack Engineer", stage: "Offer", date: "1 week ago", email: "michael@example.com" },
  { id: "c5", name: "Jessica Smith", role: "Marketing Director", stage: "Hired", date: "2 weeks ago", email: "jessica@example.com" },
  { id: "c6", name: "Alex Johnson", role: "Operations Lead", stage: "Declined", date: "3 days ago", email: "alex@example.com" },
];

export default function PipelinePage() {
  const [candidates, setCandidates] = useState(mockCandidates);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, newStage: string) => {
    e.preventDefault();
    if (draggedItem) {
      setCandidates(candidates.map(c => 
        c.id === draggedItem ? { ...c, stage: newStage } : c
      ));
      setDraggedItem(null);
      
      // In a real app: await fetch(`/api/applications/${draggedItem}/status`, { method: 'PUT', body: JSON.stringify({ status: newStage }) })
    }
  };

  return (
    <div className="flex flex-col h-full space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Applicant Pipeline</h1>
            <p className="text-muted-foreground mt-1">Manage all candidates across your openings.</p>
         </div>
         <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search candidates..." 
              className="w-full sm:w-64 pl-9 pr-4 py-2 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
            />
         </div>
      </div>

      {/* Kanban Board Container */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden rounded-2xl border bg-muted/10">
        <div className="flex h-full min-w-max p-4 gap-4">
          
          {stages.map((stage) => {
            const stageCandidates = candidates.filter(c => c.stage === stage);
            
            return (
              <div 
                key={stage} 
                className="w-80 flex flex-col bg-card rounded-xl border shadow-sm h-full max-h-[calc(100vh-200px)]"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, stage)}
              >
                {/* Column Header */}
                <div className="p-3 border-b flex justify-between items-center bg-muted/30 rounded-t-xl">
                  <h3 className="font-bold flex items-center gap-2">
                    {stage}
                    <span className="bg-background text-foreground text-xs font-bold px-2 py-0.5 rounded-full border">
                      {stageCandidates.length}
                    </span>
                  </h3>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Column Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                  {stageCandidates.map((candidate) => (
                    <div 
                      key={candidate.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, candidate.id)}
                      className="bg-background p-4 rounded-lg border shadow-sm cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors group"
                    >
                       <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold">{candidate.name}</h4>
                          <span className="text-xs text-muted-foreground">{candidate.date}</span>
                       </div>
                       
                       <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                         Applied for <span className="font-medium text-foreground">{candidate.role}</span>
                       </p>
                       
                       <div className="flex items-center gap-2 pt-3 border-t">
                          <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-primary rounded-md transition-colors tooltip-trigger" title="Send Email">
                            <Mail className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-primary rounded-md transition-colors tooltip-trigger" title="Schedule Interview">
                            <Calendar className="w-4 h-4" />
                          </button>
                          
                          <div className="flex-1"></div>
                          
                          <button className="text-xs font-medium text-primary hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                            View Profile
                          </button>
                       </div>
                    </div>
                  ))}
                  
                  {stageCandidates.length === 0 && (
                    <div className="h-24 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-foreground text-sm font-medium">
                      Drag candidates here
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
