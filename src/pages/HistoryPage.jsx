import React from 'react';
import { History, ChevronRight, Calendar, Camera } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import ChroniclePageHeader from '../components/chronicle/ChroniclePageHeader';
import ChronicleCard from '../components/chronicle/ChronicleCard';

export default function HistoryPage({ onNavigate }) {
  const { historyPage } = fullSchoolData;

  return (
    <div className="bg-[#FDFCFA] text-[#0B1426] min-h-screen">
      
      {/* ── Standard Chronicle Header ── */}
      <ChroniclePageHeader
        chapterNumber="CHRONICLES OF 1979"
        title={historyPage.title}
        subtitle={historyPage.subtitle}
        currentPage="history"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Narrative Section */}
        <div className="max-w-4xl space-y-6 text-[#3D4A5C] text-base sm:text-lg leading-relaxed mb-20">
          {historyPage.paragraphs.map((p, idx) => (
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
        </div>

        {/* Archival Photo Gallery */}
        <div className="pt-10 border-t border-[#E5E0D6]">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-2 mb-8">
              <Camera className="w-5 h-5 text-gold-600" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                Archival Photographic Records
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyPage.images.map((item, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={(idx % 4) * 70}>
                <ChronicleCard theme="parchment" enableTilt={true} className="p-0 overflow-hidden group">
                  <div className="h-52 overflow-hidden bg-navy-950 relative">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/50 text-gold-300 border border-white/20">
                      {item.year || '1979 ARCHIVE'}
                    </span>
                  </div>
                  <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                    <p className="text-xs font-medium text-navy-800 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </ChronicleCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
