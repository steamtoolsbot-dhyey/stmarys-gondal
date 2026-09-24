import React from 'react';
import { Star, ChevronRight, GraduationCap, Laptop, Users, HeartHandshake } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import EligibilityChecker from '../components/EligibilityChecker';

export default function WhySmsPage({ onNavigate, onOpenInquiry }) {
  const { whySmsPage } = fullSchoolData;

  const icons = [
    <GraduationCap className="w-6 h-6 text-gold-600" />,
    <Laptop className="w-6 h-6 text-navy-600" />,
    <Users className="w-6 h-6 text-emerald-600" />,
    <HeartHandshake className="w-6 h-6 text-amber-600" />
  ];

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Why S.M.S</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Our Distinction
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {whySmsPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {whySmsPage.subtitle}
          </p>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-sand-100/90 rounded-3xl p-6 sm:p-8 border border-sand-200 mb-12 max-w-4xl">
            <p className="text-base sm:text-lg text-navy-950 leading-relaxed font-medium">
              {whySmsPage.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Pillars - Staggered Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whySmsPage.pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 100}>
              <div
                className="bg-white rounded-3xl p-8 border border-sand-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                    {icons[idx]}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Grade Eligibility Checker */}
        <EligibilityChecker onOpenInquiry={onOpenInquiry} />

      </div>
    </div>
  );
}
