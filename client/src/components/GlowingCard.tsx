"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowingCardProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  className?: string;
}

export function GlowingCard({ title, description, icon, className }: GlowingCardProps) {
  return (
    <div 
      className={cn(
        "relative group min-h-[16rem] transition-all duration-300",
        className
      )}
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
      
      <div className="relative h-full flex flex-col rounded-xl bg-slate-900/90 border border-slate-700/50 p-6 backdrop-blur-sm z-10">
        <div className="w-fit rounded-lg border border-indigo-500/30 bg-indigo-950/30 p-3 transition-all duration-300 group-hover:bg-indigo-900/40 group-hover:border-indigo-400/50">
          {icon}
        </div>
        
        <div className="mt-6 flex-grow space-y-3">
          <h3 className="text-xl font-semibold text-indigo-100 tracking-tight transition-all duration-300 group-hover:text-white">
            {title}
          </h3>
          <div className="text-sm text-slate-300 leading-relaxed transition-all duration-300 group-hover:text-slate-200">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}