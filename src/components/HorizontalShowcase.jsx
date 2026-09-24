import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Trophy, Compass, BookOpen, Activity, Users, ArrowUpRight } from 'lucide-react';

export default function HorizontalShowcase({ onNavigate, onOpenInquiry }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = [
    {
      id: 'academics',
      icon: Trophy,
      accent: 'from-gold-400/20 to-gold-500/5',
      accentBorder: 'border-gold-300/50',
      iconBg: 'bg-gold-50 text-gold-700',
      title: '100% Board Pass Rate',
      subtitle: 'Consistent state-level top rankers across SSC & HSC examinations for 45+ years.',
      metrics: [{ label: 'Pass Rate', value: '100%' }, { label: 'Legacy', value: '45+ Yrs' }],
      page: 'academics',
    },
    {
      id: 'values',
      icon: Compass,
      accent: 'from-navy-400/15 to-navy-500/5',
      accentBorder: 'border-navy-300/40',
      iconBg: 'bg-navy-50 text-navy-700',
      title: 'Moral Integrity & Compassion',
      subtitle: 'Rooted in Catholic educational traditions of love, humility, and selfless service under the Diocese of Rajkot.',
      metrics: [{ label: 'Affiliation', value: 'Diocese' }, { label: 'Approach', value: 'Holistic' }],
      page: 'about',
    },
    {
      id: 'labs',
      icon: BookOpen,
      accent: 'from-emerald-400/15 to-emerald-500/5',
      accentBorder: 'border-emerald-300/40',
      iconBg: 'bg-emerald-50 text-emerald-700',
      title: 'Advanced Science & Digital Labs',
      subtitle: 'Fully equipped Physics, Chemistry, Biology labs and modern ICT workstations for hands-on learning.',
      metrics: [{ label: 'Laboratories', value: '4 Major' }, { label: 'Digital', value: 'Modern' }],
      page: 'campus',
    },
    {
      id: 'sports',
      icon: Activity,
      accent: 'from-terra-400/15 to-terra-500/5',
      accentBorder: 'border-terra-400/30',
      iconBg: 'bg-red-50 text-terra-600',
      title: 'Skating, Karate & Sports Complex',
      subtitle: 'Championship basketball court, professional skating rink, karate ring, and full athletic grounds.',
      metrics: [{ label: 'Skating Rink', value: 'Standard' }, { label: 'Trophies', value: '120+' }],
      page: 'activities',
    },
    {
      id: 'faculty',
      icon: Users,
      accent: 'from-purple-400/15 to-purple-500/5',
      accentBorder: 'border-purple-300/40',
      iconBg: 'bg-purple-50 text-purple-700',
      title: 'Empathetic & Qualified Educators',
      subtitle: 'Caring teachers with decades of pedagogical mastery nurturing every child with individual attention.',
      metrics: [{ label: 'Staff', value: '50+' }, { label: 'Avg Exp', value: '12+ Yrs' }],
      page: 'staff',
    },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-24 bg-[var(--bg-canvas)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-600">
              Institutional Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-2">
              Why Families Choose{' '}
              <span className="font-hand text-gold-500 text-4xl sm:text-5xl lg:text-6xl">Us</span>
            </h2>
          </div>
          
          {/* Scroll Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-navy-200 text-navy-700 hover:bg-navy-950 hover:text-white hover:border-navy-950'
                  : 'border-mist-200 text-mist-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-navy-200 text-navy-700 hover:bg-navy-950 hover:text-white hover:border-navy-950'
                  : 'border-mist-200 text-mist-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="horizontal-scroll-container -mx-4 px-4"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`horizontal-scroll-card w-[300px] sm:w-[340px] rounded-2xl bg-white border ${item.accentBorder} p-6 sm:p-7 flex flex-col justify-between card-hover-lift group cursor-pointer`}
                onClick={() => onNavigate(item.page)}
              >
                {/* Top */}
                <div>
                  <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 tracking-tight leading-snug mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Metrics */}
                <div className="pt-5 mt-5 border-t border-mist-200 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="font-serif text-lg font-bold text-navy-950">{m.value}</div>
                        <div className="text-[10px] text-navy-400 font-medium uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('why-sms')}
            className="px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-800 text-white font-bold text-sm shadow-sm transition-all"
          >
            Read Complete Institutional Ethos
          </button>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 rounded-full bg-white hover:bg-mist-100 text-navy-950 font-bold text-sm border border-mist-300 shadow-xs transition-all"
          >
            Inquire for 2025-26 Admissions
          </button>
        </div>
      </div>
    </section>
  );
}
