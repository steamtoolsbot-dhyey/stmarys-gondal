import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles, 
  ChevronRight, 
  GraduationCap, 
  CheckCircle2, 
  Compass,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   1. Canvas Golden Dust Particles Component
   - 35 lightweight particles drifting with organic Brownian sway
   - Gentle cursor repulsion within 100px
   - Auto-pauses offscreen via IntersectionObserver
   - Honors prefers-reduced-motion
   ────────────────────────────────────────────────────────────── */
function GoldenDustParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: null, y: null };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle definition
    const PARTICLE_COUNT = window.innerWidth < 768 ? 16 : 36;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      baseAlpha: Math.random() * 0.45 + 0.15,
      alpha: 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.015,
    }));

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;
        p.alpha = Math.max(0.08, p.baseAlpha + Math.sin(p.pulse) * 0.18);

        // Gentle cursor interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (110 - dist) / 110;
            p.x += (dx / (dist || 1)) * force * 1.5;
            p.y += (dy / (dist || 1)) * force * 1.5;
          }
        }

        // Wrap around viewport
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 92, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(212, 168, 92, 0.35)';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      aria-hidden="true"
    />
  );
}

/* ──────────────────────────────────────────────────────────────
   2. Interactive 3D/Tilt Brass Medallion Component
   - Hardware-accelerated CSS 3D Matrix (rotateX, rotateY)
   - Real-time specular light flare tracking cursor position
   - Roman numeral engraved outer bezel (MCMLXXIX • 1979)
   - Smooth ambient oscillation fallback on touch devices
   ────────────────────────────────────────────────────────────── */
function BrassSchoolMedallion() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false
  });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Up to 15 degrees tilt
    const rotateX = -((y - centerY) / centerY) * 14;
    const rotateY = ((x - centerX) / centerX) * 14;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      glareX,
      glareY,
      glareOpacity: 0.55,
      isHovered: true
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false
    });
  }, []);

  return (
    <div 
      className="relative flex items-center justify-center py-2"
      style={{ perspective: '1100px' }}
    >
      {/* Outer ambient golden flare bloom behind medallion */}
      <div 
        className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full blur-[60px] pointer-events-none transition-all duration-700 -z-10"
        style={{
          background: tilt.isHovered 
            ? 'radial-gradient(circle, rgba(212, 168, 92, 0.35) 0%, rgba(201, 148, 74, 0.12) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(212, 168, 92, 0.22) 0%, rgba(201, 148, 74, 0.08) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* Decorative Rotating Celestial Ring */}
      <svg 
        className="absolute w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] pointer-events-none opacity-25 -z-10 animate-[spin_60s_linear_infinite]"
        viewBox="0 0 260 260"
        aria-hidden="true"
      >
        <circle cx="130" cy="130" r="115" fill="none" stroke="#D4A85C" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="130" cy="130" r="126" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Cardinal tick marks */}
        <line x1="130" y1="2" x2="130" y2="12" stroke="#D4A85C" strokeWidth="1.5" />
        <line x1="130" y1="248" x2="130" y2="258" stroke="#D4A85C" strokeWidth="1.5" />
        <line x1="2" y1="130" x2="12" y2="130" stroke="#D4A85C" strokeWidth="1.5" />
        <line x1="248" y1="130" x2="258" y2="130" stroke="#D4A85C" strokeWidth="1.5" />
      </svg>

      {/* 3D Tilt Medallion Disc */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full cursor-pointer select-none"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1, 1, 1)`,
          transition: tilt.isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {/* Outer Heavy Beveled Brass Rim */}
        <div 
          className="absolute inset-0 rounded-full p-[3px] shadow-[0_15px_35px_rgba(0,0,0,0.65),0_0_25px_rgba(212,168,92,0.22)]"
          style={{
            background: 'linear-gradient(135deg, #FDF0DE 0%, #D4A85C 30%, #8E6128 70%, #FAF0DE 100%)'
          }}
        >
          {/* Inner Inset Ring with Fine Fluting */}
          <div className="w-full h-full rounded-full p-[2px] bg-[#0E1A2E] shadow-[inset_0_3px_8px_rgba(0,0,0,0.8)]">
            
            {/* Medallion Core Face */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#13233E] via-[#0E1A2E] to-[#08101D] flex flex-col items-center justify-center p-3 overflow-hidden border border-gold-400/30">
              
              {/* Concentric engraved hairline pinstripe */}
              <div className="absolute inset-2 rounded-full border border-gold-400/20 pointer-events-none" />
              <div className="absolute inset-3 rounded-full border border-dashed border-gold-300/15 pointer-events-none" />

              {/* Dynamic Specular Glare Layer */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 z-20"
                style={{
                  background: `radial-gradient(circle 80px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(253, 240, 222, 0.18) 40%, transparent 80%)`,
                  opacity: tilt.glareOpacity,
                }}
              />

              {/* School Crest Emblem */}
              <div 
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform duration-200"
                style={{
                  transform: 'translateZ(25px)',
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.45))'
                }}
              >
                <img
                  src="/assets/SCHOOLLOGOCOLOUR-full.png"
                  alt="St. Mary's School Crest"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Roman Numeral Inscription Pill (MCMLXXIX — 1979) */}
              <div 
                className="absolute bottom-2 z-10 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-gold-300/90 uppercase font-semibold"
                style={{ transform: 'translateZ(15px)' }}
              >
                MCMLXXIX
              </div>

            </div>
          </div>
        </div>

        {/* Subtle Ambient Shimmer for Touch Devices (when hover isn't active) */}
        {!tilt.isHovered && (
          <div 
            className="absolute inset-0 rounded-full pointer-events-none overflow-hidden opacity-30"
            aria-hidden="true"
          >
            <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_5s_infinite_ease-in-out]" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. MAIN HERO COMPONENT — CINEMATIC ACADEMIC MONUMENT
   ══════════════════════════════════════════════════════════════ */
export default function Hero({ onNavigate, onOpenInquiry }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen bg-gradient-to-b from-[#060B14] via-[#0B172E] to-[#08101E] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12"
    >
      {/* ── Layer 1: Canvas Golden Dust Motes ── */}
      <GoldenDustParticles />

      {/* ── Layer 2: Background Atmospheric Lighting ── */}
      {/* Central Warm Gold Ambient Bloom */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full pointer-events-none opacity-25 blur-[130px] -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 168, 92, 0.4) 0%, rgba(14, 165, 233, 0.12) 55%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* Secondary Bottom Azure Bloom */}
      <div 
        className="absolute bottom-0 right-10 w-[500px] h-[350px] rounded-full pointer-events-none opacity-15 blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      {/* Blueprint Dot-Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      {/* Architectural Charter Framing Hairlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] hidden md:block -z-10">
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>

      {/* ── Layer 3: Main Editorial Monument Stage ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center my-auto">
        
        {/* Top Institutional Credential Ribbon */}
        <div 
          className={`flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-6 sm:mb-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.12] text-xs font-semibold text-white/85 shadow-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold">Admissions Open 2025–26</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-gold-300 font-mono text-[11px] tracking-wide">ESTD. 1979</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-white/70 text-[11px] uppercase tracking-wider hidden sm:inline">Diocese of Rajkot</span>
          </div>
        </div>

        {/* ── Visual Centerpiece: Interactive 3D Brass Medallion ── */}
        <div 
          className={`transition-all duration-1000 delay-100 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <BrassSchoolMedallion />
        </div>

        {/* ── Main Monumental Heading ── */}
        <div 
          className={`mt-6 sm:mt-8 space-y-2 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            <span className="bg-gradient-to-b from-white via-[#F6EBD9] to-[#D4A85C] bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(212,168,92,0.18)]">
              St. Mary&apos;s School
            </span>
          </h1>

          {/* Flourished Script Accent */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="font-hand text-3xl sm:text-4xl lg:text-5xl text-gold-300 tracking-wide drop-shadow-sm">
              Gondal
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </div>

        {/* ── Ethos & Value Proposition ── */}
        <p 
          className={`mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/75 font-light leading-relaxed max-w-2xl mx-auto font-sans transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Where curious minds encounter timeless values. For over 45 years under the Diocese of Rajkot, nurturing disciplined scholars, compassionate hearts, and visionary leaders.
        </p>

        {/* ── Primary Conversion Actions ── */}
        <div 
          className={`mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Primary Admissions Button */}
          <button
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 text-navy-950 font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(201,148,74,0.32)] hover:shadow-[0_15px_42px_rgba(201,148,74,0.48)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Apply for Admission 2025–26</span>
            <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Legacy Button */}
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.07] backdrop-blur-md hover:bg-white/[0.13] text-white font-semibold text-sm sm:text-base border border-white/20 transition-all duration-200 hover:border-white/35 active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-gold-300" />
            <span>Explore 45-Year Legacy</span>
          </button>

          {/* Campus Tour Shortcut */}
          <button
            onClick={() => onNavigate('campus')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs font-semibold text-white/60 hover:text-gold-300 transition-colors"
          >
            <span>Virtual Campus Tour</span>
            <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

        {/* ── Trust Milestone Credentials Dock ── */}
        <div 
          className={`mt-10 sm:mt-12 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span className="text-xs font-medium text-white/85">100% Board Pass Record</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span className="text-xs font-medium text-white/85">5-Acre Green Campus</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span className="text-xs font-medium text-white/85">Nursery to Std 12 (GSEB)</span>
          </div>
        </div>

      </div>

      {/* ── Layer 4: Base Architectural Dock & Scroll Indicator ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="flex items-center justify-between text-[11px] text-white/40 font-mono pt-3 border-t border-white/[0.07]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gold-400/80" />
            <span>Gondal, Gujarat • 21.96° N, 70.80° E</span>
          </div>

          <div className="flex items-center gap-2">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-3.5 h-5 rounded-full border border-white/20 flex items-start justify-center p-0.5">
              <div className="w-1 h-1.5 bg-gold-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
