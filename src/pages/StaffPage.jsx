import React, { useState } from 'react';
import { Users, ChevronRight, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

function StaffAvatar({ image, name, className = '' }) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !image || image.includes('blank.jpg')) {
    const initials = name
      .replace(/^(Mr\.|Mrs\.|Ms\.|Fr\.|Sr\.)\s+/i, '')
      .split(' ')
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('');

    return (
      <div className={`w-full h-full bg-gradient-to-br from-slate-100 via-amber-50 to-slate-200 flex flex-col items-center justify-center text-navy-950 p-2 select-none ${className}`}>
        <Users className="w-8 h-8 text-amber-600 mb-1 opacity-80" />
        <span className="text-xs font-bold tracking-wider text-navy-900 uppercase">
          {initials || 'SMS'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${className}`}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

export default function StaffPage({ onNavigate }) {
  const { staffPage } = fullSchoolData;
  const [selectedSection, setSelectedSection] = useState('All');

  const filteredSections = selectedSection === 'All'
    ? staffPage.sections
    : staffPage.sections.filter((s) => s.title === selectedSection);

  return (
    <div className="py-12 bg-[var(--bg-canvas)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Staff Directory</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent-border)] inline-block">
            Our Faculty & Staff
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {staffPage.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {staffPage.subtitle}
          </p>
        </ScrollReveal>

        {/* Section Filter Pills */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[var(--bg-alt)] rounded-2xl w-fit border border-[var(--border-subtle)]">
            <button
              onClick={() => setSelectedSection('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSection === 'All'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              All Sections ({staffPage.sections.reduce((acc, s) => acc + s.members.length, 0)})
            </button>
            {staffPage.sections.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSection(s.title)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedSection === s.title
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-navy-900'
                }`}
              >
                {s.title} ({s.members.length})
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Faculty Grouped Listings */}
        <div className="space-y-16">
          {filteredSections.map((sec, sIdx) => {
            const isLeadership = sec.title === 'Administrative Leadership';

            return (
              <div key={sIdx} className="space-y-6">
                <ScrollReveal animation="fade-up">
                  <div className="border-b border-[var(--border-subtle)] pb-3 flex items-center justify-between">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 flex items-center gap-2.5">
                      {isLeadership && <Award className="w-6 h-6 text-amber-600" />}
                      <span>{sec.title}</span>
                    </h2>
                    <span className="text-xs font-bold text-amber-800 bg-[var(--accent-light)] px-2.5 py-1 rounded-full border border-[var(--accent-border)]">
                      {sec.members.length} {sec.members.length === 1 ? 'Leader' : 'Members'}
                    </span>
                  </div>
                </ScrollReveal>

                {isLeadership ? (
                  /* =========================================================
                     FEATURED LEADERSHIP SPOTLIGHT:
                     Principal's Photo is Significantly Bigger at the Very Top!
                     ========================================================= */
                  <div className="space-y-12 pt-4 pb-8">
                    {/* 1. Principal - Prominent Apex Spotlight with 3D Tilt & Living Aura */}
                    {sec.members
                      .filter((m) => m.role.toLowerCase() === 'principal' || !m.role.toLowerCase().includes('vice'))
                      .map((principal, pIdx) => (
                        <ScrollReveal key={pIdx} animation="pop" delay={150} className="w-full max-w-2xl mx-auto">
                          <TiltCard maxTilt={6} scale={1.015} className="rounded-3xl">
                            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center group relative overflow-hidden">
                              
                              {/* Prestige Ribbon */}
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 via-amber-100/70 to-amber-50 text-amber-900 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-xs">
                                <Award className="w-4 h-4 text-amber-600" />
                                <span>Head of Institution • Office of the Principal</span>
                              </div>

                              {/* Prominent Super-Sized Principal Photo with Living Aura & Gleam */}
                              <div className="relative mb-6 living-aura rounded-3xl">
                                <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-[380px] md:h-[460px] rounded-3xl overflow-hidden bg-slate-100 border-4 border-white ring-4 ring-amber-400/50 shadow-2xl transition-transform duration-500 relative photo-gleam">
                                  <StaffAvatar
                                    image={principal.image}
                                    name={principal.name}
                                    className="object-top"
                                  />
                                  {/* Overlay Badge on Photo */}
                                  <div className="absolute bottom-3 left-3 right-3 bg-navy-950/80 backdrop-blur-md text-white py-2 px-3 rounded-2xl border border-white/20 text-center shadow-lg">
                                    <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300">
                                      Rev. Fr. Rojant K
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight">
                                {principal.name}
                              </h3>

                              <div className="mt-3 flex items-center justify-center gap-2">
                                <span className="text-xs sm:text-sm uppercase font-extrabold text-white tracking-widest px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 shadow-md inline-block">
                                  {principal.role} & Director
                                </span>
                              </div>

                              <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-lg leading-relaxed font-serif italic">
                                "Guiding every student towards intellectual excellence, moral integrity, and holistic formation with dedicated pastoral care."
                              </p>

                              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
                                <span className="flex items-center gap-1.5 font-bold text-navy-900">
                                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                                  St. Mary's School Gondal
                                </span>
                                <span>•</span>
                                <span>Rajkot Kelavani Samaj</span>
                                <span>•</span>
                                <span>Estd. 1968</span>
                              </div>
                            </div>
                          </TiltCard>
                        </ScrollReveal>
                      ))}

                    {/* 2. Vice Principal - Positioned Distinctly Beneath Principal */}
                    {sec.members
                      .filter((m) => m.role.toLowerCase().includes('vice'))
                      .map((vp, vpIdx) => (
                        <ScrollReveal key={vpIdx} animation="pop" delay={250} className="w-full max-w-md mx-auto">
                          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[var(--border-subtle)] shadow-soft hover:shadow-card transition-all text-center flex flex-col items-center group">
                            
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3.5 py-1 rounded-full bg-slate-100 mb-4 border border-slate-200">
                              Academic Administration
                            </div>

                            <div className="w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-slate-50 border-2 border-slate-200 shadow-md group-hover:scale-105 transition-transform duration-300 photo-gleam">
                              <StaffAvatar image={vp.image} name={vp.name} />
                            </div>

                            <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                              {vp.name}
                            </h4>

                            <span className="text-xs uppercase font-bold text-amber-800 tracking-wider mt-1 px-3.5 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent-border)]">
                              {vp.role}
                            </span>

                            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed max-w-xs">
                              Academic Coordination & Student Welfare
                            </p>
                          </div>
                        </ScrollReveal>
                      ))}
                  </div>
                ) : (
                  /* =========================================================
                     Standard Faculty Grid for Kindergarten, Primary, High School, etc.
                     ========================================================= */
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {sec.members.map((member, mIdx) => (
                      <ScrollReveal key={mIdx} animation="pop" delay={(mIdx % 6) * 60}>
                        <div
                          className="bg-white rounded-2xl p-4 border border-[var(--border-subtle)] text-center shadow-soft hover:shadow-card transition-all flex flex-col items-center group h-full"
                        >
                          <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden mb-3 bg-sand-100 border-2 border-sand-200/60 shadow-xs photo-gleam">
                            <StaffAvatar image={member.image} name={member.name} />
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-navy-950 leading-snug">
                            {member.name}
                          </h4>
                          <span className="text-[11px] text-slate-500 font-medium mt-1">
                            {member.role}
                          </span>
                          <span className="text-[10px] text-emerald-700 font-semibold mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                            <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
                            <span>Faculty</span>
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
