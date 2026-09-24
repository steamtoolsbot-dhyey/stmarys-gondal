import React from 'react';
import { Building2, ChevronRight, CheckCircle2, Shield, Wifi, BookOpen, HeartPulse, Palette } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import CampusHotspotMap from '../components/CampusHotspotMap';

export default function CampusPage({ onNavigate, onOpenInquiry }) {
  const { campusPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Campus Facilities</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Infrastructure & Environment
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {campusPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {campusPage.overview}
          </p>
        </ScrollReveal>

        {/* Facilities Grid - Staggered Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campusPage.facilities.map((fac, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 60}>
              <div
                className="bg-white rounded-2xl p-6 border border-sand-200 shadow-soft hover:shadow-card transition-all flex items-start gap-4 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-navy-950">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Campus Hotspot Explorer */}
        <CampusHotspotMap onOpenInquiry={onOpenInquiry} />

      </div>
    </div>
  );
}
