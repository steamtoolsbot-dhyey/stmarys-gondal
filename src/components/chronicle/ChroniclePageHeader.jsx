import React from 'react';
import { ChevronRight, Home, MapPin } from 'lucide-react';

/**
 * ChroniclePageHeader — Standardized subpage hero header
 * @param {string} chapterNumber - Roman numeral or chapter (e.g. "CHAPTER IV")
 * @param {string} title - Page title (e.g. "Academics & Curricula")
 * @param {string} subtitle - Descriptive ethos sentence
 * @param {string} currentPage - Current route ID for breadcrumbs
 * @param {function} onNavigate - Navigation callback
 */
export default function ChroniclePageHeader({
  chapterNumber,
  title,
  subtitle,
  currentPage,
  onNavigate
}) {
  return (
    <div className="relative bg-gradient-to-b from-[#060B14] via-[#0B172E] to-[#08101E] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      
      {/* Background Ambience */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full pointer-events-none opacity-20 blur-[100px] -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 92, 0.4) 0%, transparent 70%)'
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

      {/* Subtle Diocesan Crest Watermark */}
      <div className="absolute right-6 -bottom-10 w-64 h-64 opacity-[0.04] pointer-events-none -z-10 hidden sm:block">
        <img
          src="/assets/SCHOOLLOGOCOLOUR-full.png"
          alt="Watermark"
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6" aria-label="Breadcrumb">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-gold-300 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span className="text-gold-300 uppercase font-semibold">
            {currentPage ? currentPage.replace('-', ' ') : title}
          </span>
        </nav>

        {/* Chapter Tag */}
        {chapterNumber && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-4">
            <span>{chapterNumber}</span>
            <span className="opacity-40">•</span>
            <span>DIOCESE OF RAJKOT</span>
          </div>
        )}

        {/* Main Illuminated Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          <span className="bg-gradient-to-b from-white via-[#F6EBD9] to-[#D4A85C] bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}
