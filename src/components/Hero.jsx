import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   Floating geometric shapes that drift around the hero
   Each shape is an SVG with its own animation timing
   ────────────────────────────────────────────────────────────── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ring — top right */}
      <svg className="hero-shape absolute -top-16 -right-16 w-[320px] h-[320px] opacity-[0.07]" viewBox="0 0 320 320" style={{ animationDelay: '0s' }}>
        <circle cx="160" cy="160" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-400" />
        <circle cx="160" cy="160" r="100" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gold-300" strokeDasharray="8 12" />
      </svg>

      {/* Small ring — bottom left */}
      <svg className="hero-shape absolute -bottom-8 -left-12 w-[200px] h-[200px] opacity-[0.06]" viewBox="0 0 200 200" style={{ animationDelay: '-5s' }}>
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
      </svg>

      {/* Cross motif — center left (inspired by school crest) */}
      <svg className="hero-shape absolute top-1/3 left-[8%] w-[80px] h-[80px] opacity-[0.08]" viewBox="0 0 80 80" style={{ animationDelay: '-3s' }}>
        <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-gold-400" />
        <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-gold-400" />
      </svg>

      {/* Diamond — right side */}
      <svg className="hero-shape absolute top-[55%] right-[10%] w-[60px] h-[60px] opacity-[0.06]" viewBox="0 0 60 60" style={{ animationDelay: '-8s' }}>
        <rect x="15" y="15" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" transform="rotate(45 30 30)" />
      </svg>

      {/* Dots constellation — top left */}
      <svg className="hero-shape absolute top-[15%] left-[15%] w-[180px] h-[180px] opacity-[0.05]" viewBox="0 0 180 180" style={{ animationDelay: '-12s' }}>
        <circle cx="20" cy="40" r="2.5" fill="currentColor" className="text-gold-300" />
        <circle cx="80" cy="20" r="2" fill="currentColor" className="text-white" />
        <circle cx="140" cy="60" r="3" fill="currentColor" className="text-gold-400" />
        <circle cx="60" cy="100" r="2" fill="currentColor" className="text-white" />
        <circle cx="120" cy="130" r="2.5" fill="currentColor" className="text-gold-300" />
        <circle cx="160" cy="150" r="2" fill="currentColor" className="text-gold-400" />
        {/* Lines connecting some dots */}
        <line x1="20" y1="40" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.4" />
        <line x1="80" y1="20" x2="140" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.4" />
        <line x1="60" y1="100" x2="120" y2="130" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.3" />
      </svg>

      {/* Arc sweep — bottom right */}
      <svg className="hero-shape absolute bottom-[15%] right-[5%] w-[250px] h-[250px] opacity-[0.05]" viewBox="0 0 250 250" style={{ animationDelay: '-7s' }}>
        <path d="M 50 200 A 120 120 0 0 1 200 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-300" strokeDasharray="6 8" />
      </svg>

      {/* Small circles — scattered */}
      <div className="hero-dot absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-gold-400/20" style={{ animationDelay: '-2s' }} />
      <div className="hero-dot absolute top-[60%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/15" style={{ animationDelay: '-6s' }} />
      <div className="hero-dot absolute top-[75%] right-[35%] w-2.5 h-2.5 rounded-full bg-gold-300/10" style={{ animationDelay: '-9s' }} />
      <div className="hero-dot absolute top-[40%] left-[40%] w-1 h-1 rounded-full bg-white/20" style={{ animationDelay: '-4s' }} />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Animated horizontal rules that draw themselves
   ────────────────────────────────────────────────────────────── */
function AnimatedRulers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal rule — upper */}
      <div 
        className="absolute top-[22%] left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent hero-ruler"
        style={{ animationDelay: '0.5s' }}
      />
      {/* Horizontal rule — lower */}
      <div 
        className="absolute top-[78%] left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent hero-ruler"
        style={{ animationDelay: '0.8s' }}
      />
      {/* Vertical rule — left */}
      <div 
        className="absolute left-[12%] top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hero-ruler-v hidden lg:block"
        style={{ animationDelay: '1.0s' }}
      />
      {/* Vertical rule — right */}
      <div 
        className="absolute right-[12%] top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hero-ruler-v hidden lg:block"
        style={{ animationDelay: '1.2s' }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Mouse-tracking radial glow
   ────────────────────────────────────────────────────────────── */
function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.background = 
        `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(201,148,74,0.06), transparent 60%)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div ref={glowRef} className="absolute inset-0 pointer-events-none z-[2] transition-[background] duration-300" />
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO COMPONENT — Fully animated, no images
   ══════════════════════════════════════════════════════════════ */
export default function Hero({ onNavigate, onOpenInquiry }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] max-h-[1000px] overflow-hidden flex items-center justify-center"
    >
      {/* ── Background layers ── */}

      {/* 1. Base dark gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-950 via-[#0d1b30] to-[#0a1220]" />

      {/* 2. Animated mesh gradient overlay */}
      <div className="absolute inset-0 z-[1] hero-gradient-mesh" />

      {/* 3. Dot grid texture */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 4. Floating geometric shapes */}
      <FloatingShapes />

      {/* 5. Animated ruler lines */}
      <AnimatedRulers />

      {/* 6. Mouse-tracking radial glow */}
      <MouseGlow />

      {/* ── Content ── */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">

        {/* Establishment Badge */}
        <div className={`text-rise ${loaded ? '' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] text-xs font-semibold tracking-wider uppercase text-white/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400 hero-pulse-dot" />
              <span>Est. 1979</span>
            </span>
            <span className="w-[1px] h-3 bg-white/15" />
            <span className="text-gold-300 font-bold">Diocese of Rajkot</span>
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mt-10 sm:mt-12">
          <span className={`text-rise text-rise-delay-1 block font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.88] ${loaded ? '' : 'opacity-0'}`}>
            St. Mary's
          </span>
          <span className={`text-rise text-rise-delay-2 block font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.88] mt-2 ${loaded ? '' : 'opacity-0'}`}>
            School
          </span>
        </h1>

        {/* Decorative Line + Gondal */}
        <div className={`text-rise text-rise-delay-3 flex items-center justify-center gap-5 mt-7 ${loaded ? '' : 'opacity-0'}`}>
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent to-gold-400/60 line-grow" />
          <span className="font-hand text-3xl sm:text-4xl lg:text-5xl text-gold-300/90 tracking-wide">Gondal</span>
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent to-gold-400/60 line-grow" />
        </div>

        {/* Tagline */}
        <p className={`text-rise text-rise-delay-4 mt-7 text-base sm:text-lg text-white/50 font-light max-w-lg mx-auto leading-relaxed ${loaded ? '' : 'opacity-0'}`}>
          Where curious minds become compassionate leaders.<br className="hidden sm:inline" />
          Nurturing excellence for over four decades.
        </p>

        {/* CTAs */}
        <div className={`text-rise text-rise-delay-5 mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 ${loaded ? '' : 'opacity-0'}`}>
          <button
            onClick={() => onNavigate('about')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-navy-950 font-bold text-sm shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Our Story</span>
            <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-md text-white font-bold text-sm border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Admissions 2025-26</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-canvas)] to-transparent z-[3]" />
    </section>
  );
}
