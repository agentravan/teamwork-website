"use client";

import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-3xl bg-card border shadow-sm transition-all duration-300 hover:shadow-xl ${
        isPopular ? "border-primary shadow-primary/10 scale-105 z-10" : "border-border hover:border-primary/50"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm h-10">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
        {price !== "Custom" && (
          <p className="text-xs text-muted-foreground mt-2">+ One-time Setup Fee: ₹49,999</p>
        )}
      </div>

      <a
        href="https://wa.me/919518842774"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 px-4 rounded-xl text-center font-medium transition-colors mb-8 ${
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        Get Custom Quote
      </a>

      <div className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


