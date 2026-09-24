import React, { useState } from 'react';
import { ArrowRight, Sparkles, Calendar, MapPin, Award, Trophy, Compass, Clock } from 'lucide-react';

export default function HeroStyleBento({ onNavigate, onOpenInquiry }) {
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    { src: "/assets/home-page-main.jpg", title: "Main Academic Quad", tag: "Senior Complex" },
    { src: "/assets/kg-building.jpg", title: "Kindergarten Wing", tag: "Early Learning" },
    { src: "/assets/basketball2.jpg", title: "Sports Complex", tag: "Athletics Arena" }
  ];

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-500 pt-6 pb-12 sm:pt-8 sm:pb-16"
    >
      {/* Ambient soft glow background */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none -z-10 rounded-full blur-[100px] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.20), rgba(59, 130, 246, 0.08) 60%, transparent 80%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header & Minimal Headline */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-amber-300/50 shadow-[0_0_15px_rgba(245,158,11,0.18)] text-xs font-semibold text-[var(--text-primary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Admissions Open 2025–2026</span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-600 font-bold">Diocese of Rajkot</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
            St. Mary’s School <span className="text-amber-600 font-serif italic">Gondal</span>
          </h1>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal max-w-lg mx-auto">
            A sanctuary for curious minds. Where academic distinction meets moral leadership.
          </p>
        </div>

        {/* Apple-Style Glass Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          
          {/* Bento Item 1: Large Panoramic Cinematic Card (8 Cols) */}
          <div className="md:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md group aspect-[16/9] sm:aspect-[16/9]">
            <img 
              key={photos[activePhoto].src}
              src={photos[activePhoto].src} 
              alt={photos[activePhoto].title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Left: Location Pill */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>Gondal, Gujarat</span>
              </span>
            </div>

            {/* Bottom: Info and 3-Pill Switcher */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-300 font-bold px-2 py-0.5 rounded bg-black/40 border border-white/10 mb-1 inline-block">
                  {photos[activePhoto].tag}
                </span>
                <div className="text-base sm:text-lg font-bold font-serif">
                  {photos[activePhoto].title}
                </div>
              </div>

              {/* Photo switcher */}
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                {photos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`transition-all rounded-full ${
                      activePhoto === idx
                        ? 'w-5 h-1.5 bg-amber-400'
                        : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`View ${p.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bento Item 2: Official Crest & Founding Card (4 Cols) */}
          <div className="md:col-span-4 rounded-2xl sm:rounded-3xl p-5 bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-amber-300/80 transition-all">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 p-2 border border-amber-200/60 shadow-xs flex items-center justify-center">
                <img 
                  src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                  alt="St. Mary's Crest" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                ESTD. 1979
              </span>
            </div>

            <div className="my-3 space-y-1">
              <div className="text-2xl font-serif font-bold text-[var(--text-primary)]">
                45+ Years
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Nurturing academic mastery and moral integrity for generations across Saurashtra.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 text-[var(--text-primary)] hover:text-amber-800 text-xs font-bold transition-colors border border-slate-200/70"
            >
              <span>Our Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Item 3: Direct Admissions Action (4 Cols) */}
          <div className="md:col-span-4 rounded-2xl sm:rounded-3xl p-5 bg-gradient-to-br from-navy-950 to-navy-900 text-white border border-slate-800 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1 relative z-10">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-amber-300 font-bold">
                <Calendar className="w-3 h-3" />
                <span>NURSERY TO STD 12</span>
              </div>
              <div className="text-lg font-serif font-bold">
                Apply for 2025–26
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Admissions open for GSEB English Medium curriculum.
              </p>
            </div>

            <button
              onClick={onOpenInquiry}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-xs shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Online Inquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Item 4: Academic Pass Record (4 Cols) */}
          <div className="md:col-span-4 rounded-2xl sm:rounded-3xl p-5 bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                STATE BOARD
              </span>
            </div>

            <div className="my-2 space-y-0.5">
              <div className="text-2xl font-serif font-bold text-[var(--text-primary)]">
                100% Pass
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Consistent distinction results in Gujarat Secondary & Higher Secondary Board.
              </p>
            </div>

            <button
              onClick={() => onNavigate('academics')}
              className="text-left text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Bento Item 5: Campus Facilities (4 Cols) */}
          <div className="md:col-span-4 rounded-2xl sm:rounded-3xl p-5 bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                15+ ACRES
              </span>
            </div>

            <div className="my-2 space-y-0.5">
              <div className="text-2xl font-serif font-bold text-[var(--text-primary)]">
                Campus Life
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Lush green campus with skating rink, basketball courts, and science labs.
              </p>
            </div>

            <button
              onClick={() => onNavigate('campus')}
              className="text-left text-xs font-bold text-[var(--text-primary)] hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              <span>Virtual Tour</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
