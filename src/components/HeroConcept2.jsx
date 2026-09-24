import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  Compass, 
  ChevronRight, 
  Award, 
  GraduationCap, 
  Trophy, 
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';

export default function HeroConcept2({ onNavigate, onOpenInquiry }) {
  // Interactive ledger items that synchronize text and photography
  const [activeLedgerIndex, setActiveLedgerIndex] = useState(0);

  const archivePlates = [
    {
      title: "Senior Academic Complex",
      plateNo: "PLATE 01",
      year: "ESTD. 1979",
      src: "/assets/home-page-main.jpg",
      subSrc: "/assets/school-photo.jpg",
      tag: "Heritage Architecture",
      caption: "The central scholastic pavilion with natural cross-ventilation, expansive assembly grounds, and dedicated administrative wing.",
      highlight: "GSEB English Medium • Kindergarten to Higher Secondary"
    },
    {
      title: "Foundational K–G Wing",
      plateNo: "PLATE 02",
      year: "FOUNDATIONAL",
      src: "/assets/kg-building.jpg",
      subSrc: "/assets/prim-building.jpg",
      tag: "Early Learning Center",
      caption: "Spacious classrooms designed for active inquiry, play-based foundational numeracy, and secure enclosed courtyards.",
      highlight: "Nursery, LKG, UKG & Primary Education"
    },
    {
      title: "Sports & Athletics Arena",
      plateNo: "PLATE 03",
      year: "CO-CURRICULAR",
      src: "/assets/basketball2.jpg",
      subSrc: "/assets/home-page-main.jpg",
      tag: "Outdoor Sports Complex",
      caption: "Championship basketball facility, professional roller-skating rink, and all-weather athletics grounds promoting teamwork.",
      highlight: "Physical Education, Skating Rink & House Leagues"
    }
  ];

  const current = archivePlates[activeLedgerIndex];

  return (
    <section 
      id="hero"
      className="relative bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)] overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Archival Texture: Refined Hairline Pinstripe */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(15, 23, 42, 0.03) 0px, rgba(15, 23, 42, 0.03) 1px, transparent 1px, transparent 28px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-16 lg:pt-16 lg:pb-20">
        
        {/* Top Editorial Monogram & Registry Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 mb-10 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-primary)] font-bold tracking-normal font-sans text-sm">
              S.M.S. GONDAL
            </span>
            <span className="opacity-40">/</span>
            <span>DIOCESE OF RAJKOT</span>
            <span className="opacity-40">/</span>
            <span className="hidden sm:inline-block">REG. NO. 1979</span>
          </div>

          <div className="flex items-center gap-3 font-semibold">
            <span className="inline-flex items-center gap-1.5 text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ADMISSIONS OPEN 2025–26
            </span>
            <span className="opacity-40">•</span>
            <span>ENGLISH MEDIUM</span>
          </div>
        </div>

        {/* 58 / 42 Asymmetrical Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Editorial Typography & Interactive Ledger */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Editorial Headline Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase">
                <span>ESTABLISHED MCMLXXIX</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                <span>FOUR DECADES OF PEDAGOGY</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.04]">
                St. Mary’s
                <span className="block italic font-normal text-[var(--accent-primary)] text-4xl sm:text-5xl lg:text-[3.75rem] mt-1">
                  High School Gondal
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl pt-2">
                Under the pastoral patronage of the Diocese of Rajkot, we nurture students through disciplined scholarship, compassionate moral formation, and the skills needed to lead in an evolving world.
              </p>
            </div>

            {/* Interactive Prospectus Ledger (Clicking updates the photographic archive on the right) */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center justify-between">
                <span>CAMPUS LEDGER & PROSPECTUS DIRECTORY</span>
                <span>CLICK TO VIEW ARCHIVE</span>
              </div>

              <div className="border border-[var(--border-strong)] rounded-2xl overflow-hidden divide-y divide-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm">
                {archivePlates.map((item, idx) => {
                  const isActive = activeLedgerIndex === idx;
                  return (
                    <div
                      key={item.plateNo}
                      onClick={() => setActiveLedgerIndex(idx)}
                      className={`p-4 sm:p-5 transition-all cursor-pointer flex items-center justify-between group ${
                        isActive 
                          ? 'bg-[var(--bg-alt)] border-l-4 border-l-[var(--accent-primary)]' 
                          : 'hover:bg-[var(--bg-alt)]/60'
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-semibold">
                            {item.plateNo}
                          </span>
                          <span className="text-xs font-bold text-[var(--accent-primary)] tracking-wide uppercase">
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-serif group-hover:text-[var(--accent-primary)] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {item.highlight}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive 
                            ? 'bg-[var(--text-primary)] text-white' 
                            : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:border-[var(--text-primary)]'
                        }`}>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* High-Tactile CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--text-primary)] hover:opacity-95 text-white font-bold text-sm shadow-md transition-all group active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[var(--accent-secondary)]" />
                <span>Admissions Portal 2025–26</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] text-[var(--text-primary)] font-bold text-sm border border-[var(--border-strong)] shadow-xs transition-all active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Academic Curriculum</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Dual-Aspect Archival Window */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Main Archival Photographic Frame */}
            <div className="relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-3 sm:p-4 shadow-xl transition-all">
              
              {/* Archival Stamp Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                  <span>ARCHIVAL DOCUMENTATION</span>
                </div>
                <div className="font-mono text-[11px] text-[var(--accent-primary)] font-bold">
                  {current.plateNo}
                </div>
              </div>

              {/* Main Photo with Film Tonality */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-[var(--border-subtle)] group">
                <img 
                  key={current.src}
                  src={current.src} 
                  alt={current.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 animate-fadeIn"
                />

                {/* Subtle dark film gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Official Crest Medallion (Top-Right) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2.5">
                  <img 
                    src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                    alt="St. Mary's School Crest" 
                    className="w-9 h-9 object-contain"
                  />
                  <div className="pr-1 text-left hidden sm:block">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold leading-tight">Official Seal</div>
                    <div className="text-xs font-extrabold text-navy-950 leading-tight">St. Mary's</div>
                  </div>
                </div>

                {/* Overlapping Secondary Vignette Card (Bottom-Left) */}
                <div 
                  onClick={() => setActiveLedgerIndex((prev) => (prev + 1) % archivePlates.length)}
                  className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white cursor-pointer hover:bg-slate-900 transition-all group/sub"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1">
                    <span>{current.tag}</span>
                    <span className="flex items-center gap-1 text-slate-300 group-hover/sub:text-white">
                      <span>Next Specimen</span>
                      <ChevronRight className="w-3 h-3 group-hover/sub:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white font-serif mb-1">
                    {current.title}
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-sans">
                    {current.caption}
                  </p>
                </div>

              </div>

              {/* Archival Metadata Footer Strip */}
              <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>CAMPUS SURVEY // GONDAL</span>
                <span>LAT 21.96° N, 70.80° E</span>
              </div>

            </div>

            {/* Quick Stats Seal Behind Frame */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border-subtle)] shadow-2xs">
                <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">1979</div>
                <div className="text-[10px] uppercase font-bold text-[var(--accent-primary)] mt-0.5">Founding</div>
              </div>
              <div className="bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border-subtle)] shadow-2xs">
                <div className="font-serif text-2xl font-bold text-[var(--accent-primary)]">100%</div>
                <div className="text-[10px] uppercase font-bold text-[var(--text-primary)] mt-0.5">GSEB Results</div>
              </div>
              <div className="bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border-subtle)] shadow-2xs">
                <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">15+</div>
                <div className="text-[10px] uppercase font-bold text-[var(--accent-primary)] mt-0.5">Acres Campus</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
