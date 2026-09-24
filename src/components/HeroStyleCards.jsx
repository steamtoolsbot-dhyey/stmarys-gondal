import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles, MapPin, Award, ShieldCheck } from 'lucide-react';

export default function HeroStyleCards({ onNavigate, onOpenInquiry }) {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      id: 0,
      src: "/assets/home-page-main.jpg",
      title: "Main Campus Quad",
      caption: "Senior Scholastic Complex",
      rotate: "-rotate-6",
      offset: "translate-x-0"
    },
    {
      id: 1,
      src: "/assets/kg-building.jpg",
      title: "Kindergarten Center",
      caption: "Early Childhood Wing",
      rotate: "rotate-3",
      offset: "translate-x-4"
    },
    {
      id: 2,
      src: "/assets/basketball2.jpg",
      title: "Athletic Arena",
      caption: "Sports & Skating Complex",
      rotate: "rotate-8",
      offset: "translate-x-8"
    }
  ];

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-500 pt-8 pb-14 sm:pt-10 sm:pb-20"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-10 left-1/3 w-[600px] h-[300px] pointer-events-none -z-10 rounded-full blur-[90px] opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22), rgba(59, 130, 246, 0.08) 60%, transparent 80%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clean, confident typography */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            
            {/* Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-amber-300/60 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-xs font-semibold text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>St. Mary’s School Gondal</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-600 font-bold">Est. 1979</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--text-primary)] tracking-tight leading-[1.12]">
                Where curiosity
                <br />
                <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                  becomes character.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                Four decades of academic distinction, holistic values, and lifelong leadership in Saurashtra.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-navy-950 to-navy-900 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] border border-amber-400/40"
              >
                <span>Admissions 2025–26</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => onNavigate('academics')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[var(--text-primary)] font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Our Academics</span>
              </button>
            </div>

            {/* Simple Trust Markers */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-center lg:justify-start gap-5 text-xs text-[var(--text-muted)] font-medium">
              <span>✦ GSEB English Medium</span>
              <span>✦ 100% Pass Record</span>
              <span>✦ Nursery to Std 12</span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Fanned-out Card Deck */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <div className="relative w-72 sm:w-80 h-80 sm:h-96">
              
              {cards.map((card, index) => {
                const isActive = activeCard === index;
                // Calculate dynamic z-index and rotation
                const zIndex = isActive ? 30 : 20 - index * 5;
                const rotation = isActive ? 'rotate-0 scale-105' : card.rotate;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(index)}
                    className={`absolute inset-0 cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out bg-white p-2.5 border-2 ${
                      isActive 
                        ? 'border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.3)]' 
                        : 'border-slate-200/90 hover:border-amber-300'
                    } ${rotation}`}
                    style={{ zIndex }}
                  >
                    <div className="relative w-full h-[78%] rounded-xl overflow-hidden bg-slate-900">
                      <img 
                        src={card.src} 
                        alt={card.title} 
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-mono text-white border border-white/20">
                        {index + 1} / 3
                      </div>
                    </div>

                    <div className="pt-2 px-1 text-left flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)] font-serif">
                          {card.title}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)]">
                          {card.caption}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        TAP TO VIEW
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
