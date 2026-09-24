import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function HeroCreative({ onNavigate, onOpenInquiry }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const campusShots = [
    {
      src: "/assets/home-page-main.jpg",
      title: "Main Campus Quad",
      location: "Gondal, Gujarat",
      tag: "Heritage Scholastic Complex"
    },
    {
      src: "/assets/kg-building.jpg",
      title: "Kindergarten Wing",
      location: "Early Learning Center",
      tag: "Foundational K–G"
    },
    {
      src: "/assets/basketball2.jpg",
      title: "Athletics Arena",
      location: "Sports Complex",
      tag: "Basketball & Skating"
    }
  ];

  // Subtle mouse tilt effect
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 8; // -4 to +4 deg
    const y = ((clientY - top) / height - 0.5) * -8;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-500 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      {/* Dynamic Glowing Ambient Aura 1: Top Center Halo */}
      <div 
        className="absolute top-2 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[320px] pointer-events-none -z-10 rounded-full blur-[90px] opacity-70"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.22), rgba(217, 119, 6, 0.12) 40%, rgba(59, 130, 246, 0.08) 70%, transparent 80%)'
        }}
      />

      {/* Dynamic Glowing Ambient Aura 2: Floating Stage Underglow */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[180px] pointer-events-none -z-10 rounded-full blur-[80px] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25), rgba(234, 88, 12, 0.12) 50%, transparent 75%)'
        }}
      />

      {/* Subtle Glowing Stardust Specks */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-amber-400/60 blur-[1px] animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-12 w-2.5 h-2.5 rounded-full bg-orange-400/50 blur-[1px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-300/60 blur-[1px] animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Glowing Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-300/60 shadow-[0_0_20px_rgba(245,158,11,0.22)] mb-4 sm:mb-5 transition-all hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-[var(--text-primary)]">
            St. Mary’s School Gondal
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs font-bold text-amber-600">
            Est. 1979
          </span>
        </div>

        {/* Headline — Scaled to 100% Zoom (No more oversized screen blowout) */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.75rem] font-bold text-[var(--text-primary)] tracking-[-0.025em] leading-[1.12]">
            Where curiosity
            <br />
            <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 drop-shadow-[0_0_22px_rgba(245,158,11,0.30)]">
              becomes character.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl mx-auto">
            Four decades of academic distinction, holistic values, and lifelong leadership in the heart of Saurashtra.
          </p>
        </div>

        {/* Glowing Tactile Buttons */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Glowing Primary CTA */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-navy-950 to-navy-900 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(217,119,6,0.32)] hover:shadow-[0_0_35px_rgba(217,119,6,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98] border border-amber-400/40"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Admissions 2025–26</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Clean Glassmorphic Secondary CTA */}
          <button
            onClick={() => onNavigate('academics')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-[var(--text-primary)] font-bold text-xs sm:text-sm border border-slate-200/90 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] hover:border-amber-400/60 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
          >
            <span>Explore Academics</span>
          </button>
        </div>

        {/* Clean Inline Metrics */}
        <div className="pt-6 pb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--text-primary)] font-bold">45+ Years</span> Legacy
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber-600 font-bold">100%</span> GSEB Pass Rate
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--text-primary)] font-bold">Nursery to 12</span> English Medium
          </span>
        </div>

        {/* THE GLOWING CINEMATIC FLOATING STAGE (Scaled nicely to fit 100% zoom!) */}
        <div 
          className="relative max-w-2xl sm:max-w-3xl mx-auto perspective-[1000px] mt-2 group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Intense Outer Neon / Amber Glow Halo behind Card */}
          <div 
            className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-r from-amber-400/30 via-orange-400/25 to-amber-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />

          {/* The Card Container with 3D Tilt */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(10,25,47,0.18)] bg-slate-900 border-2 border-white/90 transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`
            }}
          >
            {/* Widescreen 21:10 aspect ratio — fits comfortably into 100% zoom viewports */}
            <div className="relative aspect-[21/10] sm:aspect-[21/10] w-full overflow-hidden bg-slate-950">
              <img 
                key={campusShots[activePhoto].src}
                src={campusShots[activePhoto].src} 
                alt={campusShots[activePhoto].title}
                className="w-full h-full object-cover object-center scale-[1.01] transition-all duration-700 animate-fadeIn"
              />

              {/* Soft Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

              {/* Glowing Vignette Badge (Bottom-left) */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 text-left text-white z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-mono mb-1 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{campusShots[activePhoto].location}</span>
                </div>
                <div className="text-sm sm:text-base font-bold font-serif text-white tracking-wide">
                  {campusShots[activePhoto].title}
                </div>
              </div>

              {/* Glowing Interactive 3-Pill Switcher (Bottom-right) */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 flex items-center gap-1.5 z-10 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                {campusShots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`transition-all rounded-full ${
                      activePhoto === idx
                        ? 'w-5 h-2 bg-gradient-to-r from-amber-400 to-orange-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                        : 'w-2 h-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`View ${shot.title}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
