import React from 'react';
import { BookOpen, GraduationCap, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import ChroniclePageHeader from '../components/chronicle/ChroniclePageHeader';
import ChronicleCard from '../components/chronicle/ChronicleCard';

export default function AcademicsPage({ onNavigate, onOpenInquiry }) {
  const { academicsPage } = fullSchoolData;

  return (
    <div className="bg-[#FDFCFA] text-[#0B1426] min-h-screen">
      
      {/* ── Standard Chronicle Header ── */}
      <ChroniclePageHeader
        chapterNumber="CHAPTER II"
        title={academicsPage.title}
        subtitle={academicsPage.subtitle}
        currentPage="academics"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Overview Box */}
        <ScrollReveal animation="fade-up">
          <div className="bg-[#F7F4EE] rounded-3xl p-6 sm:p-10 border border-[#E5DCCE] mb-16 max-w-4xl shadow-soft">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-100/70 border border-gold-300/60 text-xs font-mono font-bold tracking-widest text-gold-800 uppercase mb-3">
              <span>SCHOLASTIC PHILOSOPHY</span>
            </div>
            <p className="text-base sm:text-lg text-navy-900 leading-relaxed font-light">
              {academicsPage.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Academic Divisions */}
        <div className="space-y-10 max-w-5xl">
          {academicsPage.sections.map((sec, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 120}>
              <ChronicleCard theme="ivory" enableTilt={false} className="p-0 overflow-hidden group hover:border-gold-500/50">
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                  
                  {/* Photo Side */}
                  <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden bg-navy-950">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                      Division {idx + 1}
                    </span>
                  </div>

                  {/* Content Side */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-gold-50 text-gold-800 text-xs font-mono font-bold uppercase tracking-wider border border-gold-200">
                        {sec.grades}
                      </span>
                      <span className="text-xs text-navy-400 font-mono">• GSEB Curriculum</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                      {sec.title}
                    </h3>

                    <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-mist-200">
                      <div className="text-xs font-semibold text-navy-500">
                        State Board Examination Prep
                      </div>
                      <button
                        onClick={onOpenInquiry}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900 transition-colors"
                      >
                        <span>Admission Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </ChronicleCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
