import React, { useEffect, useRef } from 'react';
import { ArrowRight, Quote, Shield, Star, BookOpen, GraduationCap } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import Hero from '../components/Hero';
import StatsRibbon from '../components/StatsRibbon';
import HorizontalShowcase from '../components/HorizontalShowcase';
import PhotoMosaic from '../components/PhotoMosaic';
import TimelineNews from '../components/TimelineNews';

/* ------------------------------------------------------------------
   Lightweight IntersectionObserver hook for scroll-reveal animations.
   Elements with .reveal-on-scroll, .reveal-from-left, .reveal-from-right
   get the class "revealed" when they scroll into view.
   ------------------------------------------------------------------ */
function useScrollReveal(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = containerRef.current.querySelectorAll(
      '.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-scale'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function HomePage({ onNavigate, onOpenInquiry, onSelectNews }) {
  const { home } = fullSchoolData;
  const pageRef = useRef(null);
  useScrollReveal(pageRef);

  const houses = [
    {
      name: "St. Peter's House",
      color: 'Red',
      colorHex: '#DC2626',
      bgClass: 'hover:bg-red-50',
      borderClass: 'hover:border-red-300',
      iconColor: 'group-hover:text-red-600',
      badgeClass: 'bg-red-50 text-red-800 border-red-200',
      motto: 'Stand Firm in Truth and Fortitude',
      values: ['Perseverance', 'Courage', 'Loyalty'],
    },
    {
      name: "St. Paul's House",
      color: 'Blue',
      colorHex: '#2563EB',
      bgClass: 'hover:bg-blue-50',
      borderClass: 'hover:border-blue-300',
      iconColor: 'group-hover:text-blue-600',
      badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
      motto: 'Transform Mind & Character Through Knowledge',
      values: ['Intellect', 'Leadership', 'Debate'],
    },
    {
      name: "St. John's House",
      color: 'Green',
      colorHex: '#059669',
      bgClass: 'hover:bg-emerald-50',
      borderClass: 'hover:border-emerald-300',
      iconColor: 'group-hover:text-emerald-600',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      motto: 'Serve Others with Humility and Joy',
      values: ['Service', 'Ecology', 'Arts'],
    },
    {
      name: "St. Thomas' House",
      color: 'Gold',
      colorHex: '#D97706',
      bgClass: 'hover:bg-amber-50',
      borderClass: 'hover:border-amber-300',
      iconColor: 'group-hover:text-amber-600',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      motto: 'Walk by Conviction, Excel with Purpose',
      values: ['Teamwork', 'Sports', 'Resilience'],
    },
  ];

  return (
    <div ref={pageRef}>
      
      {/* ━━━━━━ 1. CINEMATIC HERO ━━━━━━ */}
      <Hero onNavigate={onNavigate} onOpenInquiry={onOpenInquiry} />

      {/* ━━━━━━ 2. STATS RIBBON ━━━━━━ */}
      <StatsRibbon />

      {/* ━━━━━━ 3. OUR STORY — Split-Screen Editorial ━━━━━━ */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Photo with parallax-style overlap */}
            <div className="reveal-from-left relative" style={{ transitionDelay: '100ms' }}>
              <div className="rounded-3xl overflow-hidden shadow-lift">
                <img
                  src="/assets/school-photo.jpg"
                  alt="St. Mary's School Campus"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />
              </div>
              {/* Overlapping small photo */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-48 rounded-2xl overflow-hidden shadow-card border-4 border-white reveal-scale" style={{ transitionDelay: '400ms' }}>
                <img
                  src="/assets/kg-building.jpg"
                  alt="Kindergarten Wing"
                  className="w-full h-28 sm:h-36 object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border-2 border-gold-300/30 -z-10" />
            </div>

            {/* Right: Editorial text */}
            <div className="space-y-6 reveal-from-right" style={{ transitionDelay: '200ms' }}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-600">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-950 tracking-tight leading-tight mt-2">
                  {home.aboutSection.heading}
                </h2>
              </div>

              {/* Decorative line */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200" />

              <p className="text-base sm:text-lg text-navy-600 leading-relaxed font-light">
                <span className="font-serif text-4xl font-bold text-navy-950 float-left mr-2 mt-1 leading-none">W</span>
                {home.aboutSection.paragraphs[0].substring(1)}
              </p>

              <p className="text-sm sm:text-base text-navy-500 leading-relaxed">
                {home.aboutSection.paragraphs[1]}
              </p>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-950 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all group"
              >
                <span>{home.aboutSection.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 4. PRINCIPAL'S QUOTE MONUMENT ━━━━━━ */}
      <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(201,148,74,0.08) 0%, transparent 60%)'
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Large decorative quote mark */}
          <div className="reveal-on-scroll">
            <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-gold-500/30 mx-auto mb-6" />
          </div>

          {/* Quote */}
          <blockquote className="reveal-on-scroll font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-relaxed tracking-tight" style={{ transitionDelay: '150ms' }}>
            "{home.principalSection.quote}"
          </blockquote>

          {/* Decorative line */}
          <div className="reveal-on-scroll w-16 h-[2px] bg-gold-500 mx-auto mt-8 mb-8" style={{ transitionDelay: '250ms' }} />

          {/* Author */}
          <div className="reveal-on-scroll flex items-center justify-center gap-4" style={{ transitionDelay: '350ms' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gold-500/40 shadow-lg">
              <img
                src="/assets/site_images/fr_rojantk-1024x730.jpg"
                alt="Fr. Rojant - Principal"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <div className="font-serif text-lg font-bold text-white">
                {home.principalSection.author}
              </div>
              <div className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                {home.principalSection.role}
              </div>
              <div className="text-[11px] text-navy-300">
                St. Mary's School, Gondal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 5. WHY ST. MARY'S — Horizontal Scroll ━━━━━━ */}
      <HorizontalShowcase onNavigate={onNavigate} onOpenInquiry={onOpenInquiry} />

      {/* ━━━━━━ 6. CURRICULUM — Stacked Panels ━━━━━━ */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-navy-400">
              Comprehensive Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              {home.curriculumSection.title}
            </h2>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed">
              {home.curriculumSection.description}
            </p>
          </div>

          {/* Stacked Panels */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {home.curriculumSection.levels.map((lvl, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll rounded-3xl overflow-hidden shadow-card border border-mist-200 group cursor-pointer`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onClick={() => onNavigate('academics')}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                  {/* Photo Side */}
                  <div className={`md:col-span-5 relative h-56 md:h-auto overflow-hidden ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <img
                      src={lvl.image}
                      alt={lvl.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent md:bg-gradient-to-t md:from-navy-950/50 md:via-transparent md:to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                      Academic Wing {idx + 1}
                    </span>
                  </div>

                  {/* Text Side */}
                  <div className={`md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">Gujarat Board</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                      {lvl.title}
                    </h3>
                    <div className="mt-3 px-4 py-3 rounded-xl bg-mist-50 border border-mist-200">
                      <div className="text-sm font-bold text-navy-700 whitespace-pre-line leading-relaxed">
                        {lvl.grades}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-xs font-bold text-gold-600 group-hover:text-gold-700 transition-colors">
                        {home.curriculumSection.ctaText}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ 7. CAMPUS LIFE PHOTOS ━━━━━━ */}
      <section className="py-16 sm:py-20 bg-[var(--bg-alt)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {home.principalSection.images.map((src, i) => (
              <div
                key={i}
                className="reveal-scale rounded-2xl overflow-hidden shadow-soft group photo-gleam aspect-[4/3]"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <img
                  src={src}
                  alt={`Campus Life ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ 8. ACTIVITIES — Photo Mosaic ━━━━━━ */}
      <PhotoMosaic onNavigate={onNavigate} />

      {/* ━━━━━━ 9. HOUSE SYSTEM — Color Reveal Cards ━━━━━━ */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="reveal-on-scroll text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-600">
              Character Formation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-2">
              The Four{' '}
              <span className="font-hand text-gold-500 text-4xl sm:text-5xl lg:text-6xl">Pillars</span>
            </h2>
            <p className="text-navy-500 text-sm sm:text-base mt-3">
              Every student belongs to a house that fosters healthy competition, camaraderie, and collective pride.
            </p>
          </div>

          {/* House Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {houses.map((house, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll group rounded-2xl border-2 border-mist-200 ${house.borderClass} ${house.bgClass} p-6 transition-all duration-300 cursor-pointer card-hover-lift`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Shield Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white shadow-sm border border-mist-200 flex items-center justify-center text-navy-300 ${house.iconColor} transition-colors mb-4`}>
                  <Shield className="w-6 h-6" />
                </div>

                {/* House Badge */}
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${house.badgeClass} inline-block mb-3`}>
                  {house.color} House
                </span>

                {/* Name & Motto */}
                <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
                  {house.name}
                </h3>
                <p className="text-xs italic text-navy-500 mb-4 bg-white/60 p-2.5 rounded-xl border border-mist-100">
                  "{house.motto}"
                </p>

                {/* Values */}
                <div className="space-y-1.5 pt-3 border-t border-mist-100">
                  {house.values.map((v, vIdx) => (
                    <div key={vIdx} className="flex items-center gap-1.5 text-[11px] text-navy-600">
                      <Star className="w-3 h-3 text-gold-500 flex-shrink-0" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ 10. NEWS — Editorial Timeline ━━━━━━ */}
      <TimelineNews onNavigate={onNavigate} onSelectNews={onSelectNews} />

      {/* ━━━━━━ 11. ADMISSIONS CTA BANNER ━━━━━━ */}
      <section className="py-16 sm:py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-400">
              Now Accepting Applications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3">
              Begin Your Journey at{' '}
              <span className="font-hand text-gold-400 text-4xl sm:text-5xl lg:text-6xl">St. Mary's</span>
            </h2>
            <p className="text-navy-300 text-sm sm:text-base mt-4 max-w-md mx-auto">
              Admissions open for Nursery to Standard 12 for the academic year 2025-2026.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold text-sm shadow-lg shadow-gold-500/25 hover:shadow-xl hover:scale-[1.02] transition-all active:scale-[0.98]"
              >
                Apply Now →
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-sm border border-white/15 hover:bg-white/20 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
