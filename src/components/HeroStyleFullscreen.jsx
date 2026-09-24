import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, MapPin, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';

export default function HeroStyleFullscreen({ onNavigate, onOpenInquiry }) {
  const [activePhoto, setActivePhoto] = useState(0);

  const scenes = [
    { src: "/assets/home-page-main.jpg", label: "Senior Quad", desc: "Heritage Academic Complex • Estd. 1979" },
    { src: "/assets/kg-building.jpg", label: "Early Childhood", desc: "Play-Based Foundational Wing" },
    { src: "/assets/basketball2.jpg", label: "Athletic Arena", desc: "Championship Basketball & Skating Complex" }
  ];

  return (
    <section 
      id="hero"
      className="relative overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white border-b border-white/10"
    >
      {/* Background Image Carousel with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        <img 
          key={scenes[activePhoto].src}
          src={scenes[activePhoto].src} 
          alt={scenes[activePhoto].label} 
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out animate-fadeIn"
        />
        {/* Cinematic Dual-Tone Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/70" />
        <div className="absolute inset-0 bg-navy-950/30 backdrop-blur-[2px]" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Centered Minimalist Typography */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center py-12">
        
        {/* Glowing Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-[0_0_20px_rgba(245,158,11,0.3)] mb-4 text-xs font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
          <span>ST. MARY’S GONDAL</span>
          <span className="text-white/40">•</span>
          <span className="text-amber-300 font-bold">SINCE 1979</span>
        </div>

        {/* Cinematic Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Where curiosity
          <br />
          <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
            becomes character.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-200 font-normal max-w-lg mx-auto mt-3 leading-relaxed drop-shadow-sm">
          Four decades of academic distinction and compassionate leadership in Saurashtra.
        </p>

        {/* Quick Action Pill Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Admissions 2025–26</span>
          </button>

          <button
            onClick={() => onNavigate('academics')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Our Academics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* FLOATING FROSTED GLASS CONTROL DOCK (Bottom Center) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-auto max-w-[95vw]">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl">
          {scenes.map((scene, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhoto(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activePhoto === idx
                  ? 'bg-white text-slate-950 shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activePhoto === idx ? 'bg-amber-600' : 'bg-white/40'}`} />
              <span className="hidden sm:inline">{scene.label}</span>
              <span className="sm:hidden">{idx + 1}</span>
            </button>
          ))}

          <div className="w-[1px] h-4 bg-white/20 mx-1 hidden sm:block" />

          <button
            onClick={() => onNavigate('campus')}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-amber-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Full Tour</span>
          </button>
        </div>
      </div>

    </section>
  );
}
