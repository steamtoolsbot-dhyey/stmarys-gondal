import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Compass, 
  MapPin, 
  ShieldCheck, 
  Award, 
  BookOpen
} from 'lucide-react';

export default function HeroConcept1({ onNavigate, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const campusPerspectives = [
    {
      id: "01",
      name: "Main Academic Quad",
      category: "Senior Scholastic Complex",
      image: "/assets/home-page-main.jpg",
      caption: "The central heritage facade featuring multi-story ventilated classrooms, central quadrangle, and administrative wing.",
      spec: "Established 1979 • Diocese of Rajkot"
    },
    {
      id: "02",
      name: "Early Childhood Wing",
      category: "Foundational K–G Wing",
      image: "/assets/kg-building.jpg",
      caption: "Purpose-built foundational learning complex with dedicated play courts, daylight-optimized reading rooms, and creative zones.",
      spec: "Nursery to UKG • Safe Enclosed Environment"
    },
    {
      id: "03",
      name: "Athletic Arena",
      category: "Sports Complex & Courts",
      image: "/assets/basketball2.jpg",
      caption: "Regulation-size basketball facility, roller skating rink, and multi-purpose athletic fields for physical and teamwork training.",
      spec: "Outdoor Sports Facilities & Co-Curriculars"
    },
    {
      id: "04",
      name: "Primary Wing",
      category: "Primary Education Wing",
      image: "/assets/prim-building.jpg",
      caption: "Dedicated primary school building equipped with science laboratories, audio-visual halls, and foundational activity centers.",
      spec: "Std 1 to Std 5 • Holistic Curriculars"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % campusPerspectives.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, campusPerspectives.length]);

  const activePhoto = campusPerspectives[activeTab];

  return (
    <section 
      id="hero" 
      className="relative bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)] overflow-hidden transition-colors duration-300"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-16 lg:pt-12 lg:pb-20">
        
        {/* Header Metadata Bar */}
        <div className="border-b border-[var(--border-subtle)] pb-4 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-wider uppercase font-semibold text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SESSION 2025–2026
            </span>
            <span className="hidden sm:inline-block opacity-40">/</span>
            <span className="hidden sm:inline-block">DIOCESE OF RAJKOT</span>
            <span className="hidden sm:inline-block opacity-40">/</span>
            <span className="hidden md:inline-block">GSEB ENGLISH MEDIUM</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[var(--accent-primary)]" />
              21.96° N, 70.80° E • GONDAL
            </span>
            <span className="opacity-40">•</span>
            <span>ESTD. 1979</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Typography */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg-alt)] border border-[var(--border-subtle)] text-[11px] font-bold tracking-[0.15em] text-[var(--accent-primary)] uppercase">
              <span>FOUNDED ON EXCELLENCE & MORAL RIGOR</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-[var(--text-primary)] tracking-[-0.025em] leading-[1.08]">
                St. Mary’s School
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-[var(--accent-primary)] font-normal tracking-[-0.01em]">
                Gondal, Gujarat
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl">
              A sanctuary for curious minds since 1979. We cultivate academic mastery, moral responsibility, and leadership across foundational kindergarten through higher secondary board curriculum.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--text-primary)] hover:opacity-90 text-white font-bold text-sm shadow-md transition-all group active:scale-[0.98]"
              >
                <span>Explore Academics</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent-secondary)] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] text-[var(--text-primary)] font-bold text-sm border border-[var(--border-strong)] shadow-xs transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Admissions 2025–26</span>
              </button>

              <button
                onClick={() => onNavigate('campus')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Campus Masterplan</span>
              </button>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">GSEB Affiliated</div>
                <div className="text-[11px] text-[var(--text-muted)]">State Board Accredited</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">English Medium</div>
                <div className="text-[11px] text-[var(--text-muted)]">Co-Educational K–12</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">45+ Years</div>
                <div className="text-[11px] text-[var(--text-muted)]">Unbroken Heritage</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Photographic Portal */}
          <div 
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-3 sm:p-4 shadow-xl transition-all">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)] px-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-alt)] border border-[var(--border-subtle)] p-0.5 flex items-center justify-center">
                    <img 
                      src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                      alt="St. Mary's School Crest" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] leading-none">
                      CAMPUS ARCHIVE
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                      FIG. {activePhoto.id} / 04 • {activePhoto.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-alt)] px-2.5 py-1 rounded border border-[var(--border-subtle)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                  <span>{activePhoto.name}</span>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-[var(--border-subtle)]">
                <img
                  key={activePhoto.id}
                  src={activePhoto.image}
                  alt={activePhoto.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded border border-white/15">
                  {activePhoto.spec}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-sm font-bold tracking-tight text-white mb-0.5 flex items-center gap-2">
                    <span>{activePhoto.name}</span>
                    <span className="text-xs font-normal text-amber-300 font-mono">[{activePhoto.category}]</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                    {activePhoto.caption}
                  </p>
                </div>
              </div>

              <div className="mt-3.5 pt-3 border-t border-[var(--border-subtle)]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {campusPerspectives.map((item, idx) => {
                    const isCurrent = activeTab === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(idx)}
                        className={`text-left p-2 rounded-lg transition-all border ${
                          isCurrent
                            ? 'bg-[var(--bg-alt)] border-[var(--accent-primary)] shadow-xs'
                            : 'bg-transparent border-transparent hover:bg-[var(--bg-alt)] hover:border-[var(--border-subtle)]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] mb-0.5">
                          <span>{item.id}</span>
                          {isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                          )}
                        </div>
                        <div className={`text-xs font-bold truncate ${
                          isCurrent ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                        }`}>
                          {item.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Ledger */}
        <div className="mt-14 pt-8 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[var(--border-subtle)]">
            <div className="lg:pr-8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">1979</div>
              <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider mt-1">Founding Year</div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Over 45 continuous years of academic and moral formation.</p>
            </div>
            <div className="lg:px-8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[var(--accent-primary)] tracking-tight">100%</div>
              <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1">GSEB Board Result</div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Consistent distinction and pass records in state board exams.</p>
            </div>
            <div className="lg:px-8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">KG to 12</div>
              <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider mt-1">Complete Pedagogy</div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">From early childhood education to higher secondary streams.</p>
            </div>
            <div className="lg:pl-8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">Gondal</div>
              <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider mt-1">Historic Campus</div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Premier English-medium institution serving Saurashtra.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
