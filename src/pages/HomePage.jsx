import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Quote, 
  Shield, 
  Star, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import Hero from '../components/Hero';
import StatsRibbon from '../components/StatsRibbon';
import ChronicleSection from '../components/chronicle/ChronicleSection';
import ChronicleCard from '../components/chronicle/ChronicleCard';
import PhotoMosaic from '../components/PhotoMosaic';
import TimelineNews from '../components/TimelineNews';

export default function HomePage({ onNavigate, onOpenInquiry, onSelectNews }) {
  const { home } = fullSchoolData;

  const houses = [
    {
      name: "St. Peter's House",
      color: 'Red',
      colorHex: '#DC2626',
      latinMotto: 'In Fide et Fortitudine',
      motto: 'Stand Firm in Truth and Fortitude',
      crestAccent: 'from-red-500/20 to-amber-500/10',
      borderAccent: 'group-hover:border-red-400/50',
      badgeClass: 'bg-red-50 text-red-800 border-red-200',
      iconClass: 'text-red-600 bg-red-50',
      values: ['Perseverance', 'Courage', 'Loyalty'],
      patron: 'Saint Peter the Apostle',
      history: 'Exemplifying unwavering resilience and fortitude in character.'
    },
    {
      name: "St. Paul's House",
      color: 'Blue',
      colorHex: '#2563EB',
      latinMotto: 'Mentem et Mores Transformare',
      motto: 'Transform Mind & Character Through Knowledge',
      crestAccent: 'from-blue-500/20 to-cyan-500/10',
      borderAccent: 'group-hover:border-blue-400/50',
      badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
      iconClass: 'text-blue-600 bg-blue-50',
      values: ['Intellect', 'Leadership', 'Debate'],
      patron: 'Saint Paul the Scholar',
      history: 'Fostering deep scholastic intellect, eloquence, and visionary leadership.'
    },
    {
      name: "St. John's House",
      color: 'Green',
      colorHex: '#059669',
      latinMotto: 'In Caritate et Humilitate Servire',
      motto: 'Serve Others with Humility and Joy',
      crestAccent: 'from-emerald-500/20 to-teal-500/10',
      borderAccent: 'group-hover:border-emerald-400/50',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconClass: 'text-emerald-600 bg-emerald-50',
      values: ['Service', 'Ecology', 'Arts'],
      patron: 'Saint John the Beloved',
      history: 'Dedicated to community welfare, environmental stewardship, and fine arts.'
    },
    {
      name: "St. Thomas' House",
      color: 'Gold',
      colorHex: '#D97706',
      latinMotto: 'Fide Ambulare, Proposito Excellere',
      motto: 'Walk by Conviction, Excel with Purpose',
      crestAccent: 'from-amber-500/20 to-yellow-500/10',
      borderAccent: 'group-hover:border-amber-400/50',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      iconClass: 'text-amber-600 bg-amber-50',
      values: ['Teamwork', 'Sports', 'Resilience'],
      patron: 'Saint Thomas the Apostle',
      history: 'Inspiring championship sportsmanship, athletic integrity, and purposeful action.'
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* ━━━━━━ CHAPTER 01: THE ACADEMIC MONUMENT (HERO) ━━━━━━ */}
      <Hero onNavigate={onNavigate} onOpenInquiry={onOpenInquiry} />

      {/* ━━━━━━ MILESTONES RIBBON ━━━━━━ */}
      <StatsRibbon />

      {/* ━━━━━━ CHAPTER 02: OUR GENESIS & SACRED LEGACY ━━━━━━ */}
      <ChronicleSection
        id="story"
        chapterNumber="02"
        category="OUR SACRED GENESIS"
        title="45 Years of Unbroken Educational Distinction"
        subtitle="Founded in 1979 under the Diocese of Rajkot, cultivating leaders grounded in faith, wisdom, and selfless service."
        theme="ivory"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Offset Archival Photography */}
          <div className="lg:col-span-6 relative">
            {/* Primary Main Heritage Campus Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-lift border-2 border-white">
              <img
                src="/assets/school-photo.jpg"
                alt="St. Mary's School Heritage Campus"
                className="w-full h-[360px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 font-bold px-2 py-0.5 rounded bg-black/40 border border-white/15">
                  Plate 01 • Main Pavilion
                </span>
                <div className="font-serif text-lg font-bold mt-1">
                  The Central Heritage Quadrangle
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Photo (Kindergarten Pavilion) */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-hero border-4 border-white hidden sm:block">
              <img
                src="/assets/kg-building.jpg"
                alt="Kindergarten Wing"
                className="w-full h-32 sm:h-40 object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/20" />
            </div>

            {/* Decorative Architectural Charter Accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border-2 border-gold-400/30 -z-10" />
            <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-full border border-gold-400/20 -z-10" />
          </div>

          {/* Right: Editorial Typography & Milestones */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-50 border border-gold-200/60 text-[11px] font-bold tracking-widest text-gold-700 uppercase">
              <span>ESTD. 1979 • DIOCESE OF RAJKOT</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
              {home.aboutSection.heading}
            </h3>

            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300" />

            <p className="text-base sm:text-lg text-navy-700 leading-relaxed font-light">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 float-left mr-2.5 mt-0.5 leading-none">W</span>
              {home.aboutSection.paragraphs[0].substring(1)}
            </p>

            <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
              {home.aboutSection.paragraphs[1]}
            </p>

            {/* Historical Milestone Checklist */}
            <div className="grid grid-cols-2 gap-3.5 pt-2 border-t border-gold-200/40 text-xs text-navy-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>GSEB State Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>English Medium K–12</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>Over 1,500 Global Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>Holistic Moral Education</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-navy-950 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>{home.aboutSection.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 03: THE PRINCIPAL'S MONUMENTAL EPISTLE ━━━━━━ */}
      <ChronicleSection
        id="principal"
        chapterNumber="03"
        category="LEADERSHIP & VISION"
        title="The Principal's Epistle"
        subtitle="An inspiring vision for young minds preparing to shape an interconnected global society."
        theme="midnight"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <ChronicleCard theme="midnight" className="p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Gilded Quote Icon */}
            <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-gold-400/25 mx-auto mb-6" />

            {/* Inspirational Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
              &ldquo;{home.principalSection.quote}&rdquo;
            </blockquote>

            {/* Decorative Gold Divider */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-8" />

            {/* Author Identification */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold-400/60 shadow-lg p-0.5 bg-gradient-to-b from-gold-300 to-gold-600">
                <img
                  src="/assets/site_images/fr_rojantk-1024x730.jpg"
                  alt="Fr. Rojant - Principal"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="font-serif text-xl font-bold text-white tracking-wide">
                  {home.principalSection.author}
                </div>
                <div className="text-xs font-bold text-gold-400 uppercase tracking-widest mt-0.5">
                  {home.principalSection.role}
                </div>
                <div className="text-xs text-navy-300 font-mono mt-0.5">
                  St. Mary&apos;s School, Gondal • Diocese of Rajkot
                </div>
              </div>
            </div>

            {/* Sign-off flourish */}
            <div className="mt-8 font-hand text-2xl text-gold-300/80">
              ~ In Service of Knowledge & Truth ~
            </div>
          </ChronicleCard>

        </div>
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 04: THE FOUR HOUSES HERALDRY ━━━━━━ */}
      <ChronicleSection
        id="houses"
        chapterNumber="04"
        category="HERALDRY & CHARACTER"
        title="The Four Cardinal Houses"
        subtitle="Instilling healthy camaraderie, fraternal unity, moral fortitude, and purposeful excellence in every scholar."
        theme="ivory"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, idx) => (
            <ChronicleCard
              key={idx}
              theme="ivory"
              enableTilt={true}
              className={`group border-2 transition-all duration-300 ${house.borderAccent}`}
            >
              <div>
                {/* Shield Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${house.iconClass} transition-transform duration-300 group-hover:scale-110`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${house.badgeClass}`}>
                    {house.color} House
                  </span>
                </div>

                {/* House Name & Latin Motto */}
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-1 group-hover:text-gold-700 transition-colors">
                  {house.name}
                </h3>
                
                <div className="text-[11px] font-mono text-gold-700 font-semibold mb-2">
                  {house.latinMotto}
                </div>

                {/* English Motto Box */}
                <p className="text-xs italic text-navy-600 mb-4 bg-mist-50/80 p-3 rounded-xl border border-mist-200/60">
                  &ldquo;{house.motto}&rdquo;
                </p>

                {/* House History / Patron */}
                <p className="text-[11px] text-navy-500 mb-4 line-clamp-2 leading-relaxed">
                  {house.history}
                </p>
              </div>

              {/* Core Values Dock */}
              <div className="space-y-1.5 pt-3 border-t border-mist-200">
                <div className="text-[10px] font-mono uppercase tracking-widest text-navy-400 font-bold mb-1">
                  Cardinal Virtues
                </div>
                {house.values.map((v, vIdx) => (
                  <div key={vIdx} className="flex items-center gap-2 text-xs text-navy-700 font-medium">
                    <Star className="w-3 h-3 text-gold-500 flex-shrink-0" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </ChronicleCard>
          ))}
        </div>
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 05: SCHOLASTIC CURRICULUM DOSSIERS ━━━━━━ */}
      <ChronicleSection
        id="academics"
        chapterNumber="05"
        category="SCHOLASTIC PEDAGOGY"
        title="From Foundational to Higher Secondary"
        subtitle="A comprehensive Gujarat State Board (GSEB) curriculum blending intellectual rigor, modern STEM laboratories, and moral formation."
        theme="parchment"
      >
        <div className="space-y-6 max-w-5xl mx-auto">
          {home.curriculumSection.levels.map((lvl, idx) => (
            <ChronicleCard
              key={idx}
              theme="ivory"
              enableTilt={false}
              onClick={() => onNavigate('academics')}
              className="p-0 overflow-hidden group hover:border-gold-500/50"
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
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                    Scholastic Wing {idx + 1}
                  </span>
                </div>

                {/* Content Side */}
                <div className={`md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-wider">
                      Gujarat State Board (GSEB)
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {lvl.title}
                  </h3>

                  <div className="mt-3 px-4 py-3 rounded-xl bg-mist-50 border border-mist-200">
                    <div className="text-sm font-semibold text-navy-700 whitespace-pre-line leading-relaxed">
                      {lvl.grades}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gold-600 group-hover:text-gold-700 transition-colors">
                    <span>Explore Detailed Syllabus & Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </ChronicleCard>
          ))}
        </div>
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 06: LIVING CAMPUS SANCTUARY ━━━━━━ */}
      <ChronicleSection
        id="campus"
        chapterNumber="06"
        category="CAMPUS SANCTUARY"
        title="Five Acres of Holistic Educational Infrastructure"
        subtitle="Equipped with science laboratories, digital smart classrooms, championship sports grounds, and spacious assembly quadrangle."
        theme="midnight"
      >
        <PhotoMosaic onNavigate={onNavigate} />
        
        {/* Quick Facilities Bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="font-serif text-2xl font-bold text-gold-300">5 Acres</div>
            <div className="text-xs text-white/60 mt-1">Lush Green Campus</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="font-serif text-2xl font-bold text-gold-300">3 Science Labs</div>
            <div className="text-xs text-white/60 mt-1">Physics, Chemistry, Bio</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="font-serif text-2xl font-bold text-gold-300">Skating Rink</div>
            <div className="text-xs text-white/60 mt-1">Regulation Athletic Court</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="font-serif text-2xl font-bold text-gold-300">Audio-Visual Hall</div>
            <div className="text-xs text-white/60 mt-1">Digital Smart Learning</div>
          </div>
        </div>
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 07: CHRONICLES & NOTICES ━━━━━━ */}
      <ChronicleSection
        id="news"
        chapterNumber="07"
        category="CHRONICLES & NOTICES"
        title="School News, Triumphs & Announcements"
        subtitle="Stay abreast of academic laurels, cultural festivals, sports tournaments, and diocesan communiqués."
        theme="ivory"
      >
        <TimelineNews onNavigate={onNavigate} onSelectNews={onSelectNews} />
      </ChronicleSection>

      {/* ━━━━━━ CHAPTER 08: THE GRAND ADMISSIONS CHARTER ━━━━━━ */}
      <ChronicleSection
        id="admissions"
        chapterNumber="08"
        category="THE ADMISSIONS CHARTER"
        title="Begin Your Journey at St. Mary's School"
        subtitle="Admissions open for Nursery through Standard 12 for the academic session 2025–2026. Limited seats allocated on merit and interview."
        theme="midnight"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ChronicleCard theme="midnight" className="p-8 sm:p-12 text-center relative overflow-hidden border-gold-400/40">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Session 2025–2026 Registration Open</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Invest in a Lifetime of Character & Purpose
            </h3>

            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed">
              We welcome children into a nurturing community where they are encouraged to question thoughtfully, lead compassionately, and excel relentlessly.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 text-navy-950 font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(201,148,74,0.3)] hover:shadow-[0_15px_40px_rgba(201,148,74,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Apply for Admission 2025–26</span>
                <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.08] backdrop-blur-md hover:bg-white/[0.14] text-white font-semibold text-sm sm:text-base border border-white/20 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-gold-300" />
                <span>Contact Admissions Office</span>
              </button>
            </div>

            {/* Location & Office Hours */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Station Road, Gondal, Gujarat 360311</span>
              </div>
              <div>•</div>
              <div>Mon–Sat: 8:00 AM – 2:00 PM</div>
            </div>

          </ChronicleCard>
        </div>
      </ChronicleSection>

    </div>
  );
}
