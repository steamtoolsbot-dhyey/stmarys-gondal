import React from 'react';
import { BookOpen, CheckCircle, Award, Shield, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import ChroniclePageHeader from '../components/chronicle/ChroniclePageHeader';
import ChronicleCard from '../components/chronicle/ChronicleCard';

export default function AboutPage({ onNavigate }) {
  const { aboutPage } = fullSchoolData;

  return (
    <div className="bg-[#FDFCFA] text-[#0B1426] min-h-screen">
      
      {/* ── Standard Chronicle Header ── */}
      <ChroniclePageHeader
        chapterNumber="CHAPTER I"
        title={aboutPage.title}
        subtitle={aboutPage.subtitle}
        currentPage="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-[#3D4A5C] text-base sm:text-lg leading-relaxed">
            {aboutPage.paragraphs.map((p, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E0D6] shadow-soft">
                  <p className="font-light leading-relaxed">
                    {idx === 0 && (
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 float-left mr-3 leading-none">
                        {p.charAt(0)}
                      </span>
                    )}
                    {idx === 0 ? p.substring(1) : p}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* School Core Aims */}
            <div className="mt-12 pt-8 border-t border-[#E5E0D6] space-y-6">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-50 border border-gold-200/60 text-xs font-mono font-bold tracking-widest text-gold-700 uppercase mb-2">
                  <span>SACRED MISSION</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  Core Institutional Aims & Ethos
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutPage.aims.map((aim, idx) => (
                  <ScrollReveal key={idx} animation="pop" delay={idx * 60}>
                    <ChronicleCard theme="ivory" enableTilt={false} className="p-5">
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold-200/50">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-navy-950 leading-relaxed">
                          {aim}
                        </span>
                      </div>
                    </ChronicleCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Credentials & Crest (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <ChronicleCard theme="parchment" enableTilt={true} className="p-6 sm:p-8 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white p-2 border border-gold-300/40 shadow-md mb-4 flex items-center justify-center">
                <img
                  src="/assets/SCHOOLLOGOCOLOUR-full.png"
                  alt="St. Mary's School Crest"
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="font-serif text-xl font-bold text-navy-950">
                St. Mary&apos;s School
              </h4>
              <div className="text-xs font-mono text-gold-700 font-semibold mt-1">
                Estd. 1979 • Diocese of Rajkot
              </div>

              <div className="w-12 h-[1.5px] bg-gold-400 mx-auto my-4" />

              <p className="text-xs text-navy-600 leading-relaxed">
                An institution of the Catholic Diocese of Rajkot, administered in accordance with Christian principles of truth, integrity, and universal brotherhood.
              </p>

              <div className="mt-6 pt-4 border-t border-[#E5DCCE] space-y-2.5 text-left text-xs text-navy-700">
                <div className="flex items-center justify-between">
                  <span className="text-navy-400 font-mono">Affiliation:</span>
                  <span className="font-bold">Gujarat State Board</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy-400 font-mono">Medium:</span>
                  <span className="font-bold">English Medium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy-400 font-mono">Level:</span>
                  <span className="font-bold">Kindergarten to 12th</span>
                </div>
              </div>
            </ChronicleCard>

            {/* Quick Action */}
            <div className="p-6 rounded-2xl bg-[#0B172E] text-white border border-white/10 text-center space-y-4">
              <h5 className="font-serif text-lg font-bold">
                Experience St. Mary&apos;s
              </h5>
              <p className="text-xs text-white/70 leading-relaxed">
                Tour our five-acre lush campus, laboratories, and sports facilities in person.
              </p>
              <button
                onClick={() => onNavigate('campus')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs shadow-md transition-all"
              >
                <span>View Campus Masterplan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
