import React from 'react';
import { Building2, ChevronRight, CheckCircle2, Shield, Wifi, BookOpen, HeartPulse, Palette } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';
import CampusHotspotMap from '../components/CampusHotspotMap';
import ChroniclePageHeader from '../components/chronicle/ChroniclePageHeader';
import ChronicleCard from '../components/chronicle/ChronicleCard';

export default function CampusPage({ onNavigate, onOpenInquiry }) {
  const { campusPage } = fullSchoolData;

  return (
    <div className="bg-[#FDFCFA] text-[#0B1426] min-h-screen">
      
      {/* ── Standard Chronicle Header ── */}
      <ChroniclePageHeader
        chapterNumber="CHAPTER III"
        title={campusPage.title}
        subtitle={campusPage.overview}
        currentPage="campus"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {campusPage.facilities.map((fac, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 50}>
              <ChronicleCard theme="ivory" enableTilt={true} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm border border-gold-400/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-bold text-navy-950">
                      {fac.title}
                    </h3>
                    <p className="text-sm text-[#3D4A5C] leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </ChronicleCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Campus Hotspot Explorer */}
        <div className="pt-8 border-t border-[#E5E0D6]">
          <CampusHotspotMap onOpenInquiry={onOpenInquiry} />
        </div>

      </div>
    </div>
  );
}
