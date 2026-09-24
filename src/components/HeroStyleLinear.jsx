import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Shield, Zap } from 'lucide-react';

export default function HeroStyleLinear({ onNavigate, onOpenInquiry }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const shots = [
    { src: "/assets/home-page-main.jpg", title: "Central Quadrangle", subtitle: "Senior Academic Complex" },
    { src: "/assets/kg-building.jpg", title: "Early Childhood Wing", subtitle: "Kindergarten & Primary" },
    { src: "/assets/basketball2.jpg", title: "Sports Complex", subtitle: "Athletics & Skating Arena" }
  ];

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 6;
    const y = ((clientY - top) / height - 0.5) * -6;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-[#060913] text-white pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-24 border-b border-white/10"
    >
      {/* Linear Ambient Laser Beam & Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Top Luminous Light Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
      
      {/* Ambient Radial Spotlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none -z-10 rounded-full blur-[110px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35), rgba(59, 130, 246, 0.15) 50%, transparent 75%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Sleek Raycast Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)] mb-5 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,1)]" />
          <span className="text-slate-200">S.M.S. GONDAL</span>
          <span className="text-white/30">•</span>
          <span className="text-amber-400 font-bold">ESTD. 1979</span>
        </div>

        {/* High-Impact Headline */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.75rem] font-bold text-white tracking-[-0.03em] leading-[1.1]">
            Where curiosity
            <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">
              becomes character.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-400 font-normal max-w-xl mx-auto leading-relaxed">
            Four decades of academic rigor, holistic values, and lifelong leadership in the heart of Saurashtra.
          </p>
        </div>

        {/* Linear Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Admissions 2025–26</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('academics')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.07] hover:bg-white/[0.12] text-white font-bold text-xs sm:text-sm border border-white/15 backdrop-blur-md shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Academics</span>
          </button>
        </div>

        {/* Minimal Laser Metric Strip */}
        <div className="pt-6 pb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
          <span className="text-slate-300"><span className="text-amber-400 font-bold">45+</span> YEARS LEGACY</span>
          <span className="text-white/20">•</span>
          <span className="text-slate-300"><span className="text-amber-400 font-bold">100%</span> GSEB PASS</span>
          <span className="text-white/20">•</span>
          <span className="text-slate-300">NURSERY TO STD 12</span>
        </div>

        {/* Linear 3D Floating Stage */}
        <div 
          className="relative max-w-2xl sm:max-w-3xl mx-auto perspective-[1000px] mt-1 group"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
          {/* Card Backglow */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`
            }}
          >
            <div className="relative aspect-[21/10] w-full overflow-hidden">
              <img 
                key={shots[activeIdx].src}
                src={shots[activeIdx].src} 
                alt={shots[activeIdx].title} 
                className="w-full h-full object-cover object-center scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-4 text-left z-10">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-0.5">
                  {shots[activeIdx].subtitle}
                </div>
                <div className="text-sm sm:text-base font-serif font-bold text-white">
                  {shots[activeIdx].title}
                </div>
              </div>

              {/* Minimal Dots */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                {shots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`transition-all rounded-full ${
                      activeIdx === i ? 'w-4 h-1.5 bg-amber-400' : 'w-1.5 h-1.5 bg-white/40'
                    }`}
                    aria-label={`View ${i + 1}`}
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
