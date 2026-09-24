import React, { useState } from 'react';
import { 
  Trophy, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Activity, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight,
  X,
  Users
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function BentoGridSection({ onNavigate, onOpenInquiry }) {
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, cardIndex: null });

  const handleMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      cardIndex: idx
    });
  };

  const bentoItems = [
    {
      id: 'academics',
      colSpan: 'lg:col-span-8',
      badge: 'Academic Distinction',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      title: '100% Board Pass Rate with Merit Scholars',
      subtitle: 'Consistent state-level top rankers and 45+ years of rigorous English medium GSEB curriculum.',
      icon: Trophy,
      metrics: [
        { label: 'Board Pass Rate', value: '100%' },
        { label: 'Legacy of Distinction', value: '45+ Yrs' },
        { label: 'Distinction Achievers', value: '88%' }
      ],
      details: 'St. Mary\'s School Gondal has maintained an exceptional 100% pass record in SSC and HSC examinations. Our student-centric academic philosophy balances rigorous STEM instruction, languages, and moral ethics under the guidance of highly qualified faculty.'
    },
    {
      id: 'character',
      colSpan: 'lg:col-span-4',
      badge: 'Diocesan Values',
      badgeColor: 'bg-navy-100 text-navy-900 border-navy-300',
      title: 'Moral Integrity & Compassion',
      subtitle: 'Rooted in Catholic educational traditions of love, humility, and selfless service.',
      icon: Compass,
      metrics: [
        { label: 'Affiliation', value: 'Diocese' },
        { label: 'Character', value: 'Holistic' }
      ],
      details: 'Guided by the Diocese of Rajkot, we instill deep ethical values and civic responsibility. Every student is nurtured to become a conscientious leader dedicated to truth, integrity, and social justice.'
    },
    {
      id: 'labs',
      colSpan: 'lg:col-span-4',
      badge: 'Modern Infrastructure',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      title: 'Advanced Science & Digital Labs',
      subtitle: 'Equipped Physics, Chemistry, Biology, and ICT workstations for hands-on experimentation.',
      icon: BookOpen,
      metrics: [
        { label: 'Laboratories', value: '4 Major' },
        { label: 'Digital Labs', value: 'Modern' }
      ],
      details: 'Our fully compliant modern science laboratories allow students to practically verify theoretical principles. The modern computer lab features high-speed internet and structured coding modules.'
    },
    {
      id: 'sports',
      colSpan: 'lg:col-span-4',
      badge: 'Co-Curricular Arena',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      title: 'Dedicated Skating & Sports Complex',
      subtitle: 'Championship basketball court, dedicated professional skating rink, and athletic track.',
      icon: Activity,
      metrics: [
        { label: 'Skating Rink', value: 'Standard' },
        { label: 'District Trophies', value: '120+' }
      ],
      details: 'From inter-school basketball tournaments to state-level roller skating championships, our physical education wing cultivates endurance, sportsmanship, and teamwork.'
    },
    {
      id: 'faculty',
      colSpan: 'lg:col-span-4',
      badge: 'Dedicated Mentors',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
      title: 'Empathetic & Qualified Educators',
      subtitle: 'Caring teachers with decades of pedagogical mastery nurturing every child individually.',
      icon: Users,
      metrics: [
        { label: 'Staff Count', value: '50+' },
        { label: 'Avg Experience', value: '12+ Yrs' }
      ],
      details: 'Our educators believe that teaching is a sacred vocation. Teachers like Mr. Dushyantsinh Jadeja, Mrs. Pooja Shah, and their peers provide tailored attention to help every learner flourish.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sand-50/60 to-white relative overflow-hidden border-b border-sand-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-300/80 text-gold-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span>Institutional Excellence</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
              Why Families Entrust Us With <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600">
                Their Children's Future
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              A harmonious blend of academic rigour, moral values, and modern sporting infrastructure in the heart of Gondal.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = mousePos.cardIndex === idx;

            return (
              <div
                key={item.id}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => setMousePos({ x: 0, y: 0, cardIndex: null })}
                className={`${item.colSpan} relative rounded-3xl bg-white border border-sand-200/90 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col justify-between group p-6 sm:p-8 cursor-pointer`}
                onClick={() => setActiveModalItem(item)}
              >
                {/* Dynamic Cursor Spotlight Radial Glow */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 139, 22, 0.12), transparent 80%)`
                    }}
                  />
                )}

                {/* Card Top */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-sand-100 flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 tracking-tight leading-snug group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Card Bottom Metrics */}
                <div className="relative z-10 pt-6 mt-6 border-t border-sand-100 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="font-serif text-lg font-bold text-navy-950">{m.value}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-bold text-gold-700 group-hover:text-gold-800 transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('why-sms')}
            className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-sm transition-all"
          >
            Read Complete Institutional Ethos
          </button>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 rounded-xl bg-white hover:bg-sand-100 text-navy-950 font-bold text-sm border border-sand-300 shadow-xs transition-all"
          >
            Inquire for 2025-26 Admissions
          </button>
        </div>
      </div>

      {/* Modal Detail Sheet */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-sand-300 relative animate-slide-up">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-sand-100 text-slate-500 hover:text-navy-950"
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3 ${activeModalItem.badgeColor}`}>
              {activeModalItem.badge}
            </span>

            <h3 className="font-serif text-2xl font-bold text-navy-950">
              {activeModalItem.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {activeModalItem.details}
            </p>

            <div className="grid grid-cols-2 gap-3 my-6 p-4 rounded-2xl bg-sand-50 border border-sand-200">
              {activeModalItem.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-serif text-xl font-bold text-navy-950">{m.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  onNavigate(activeModalItem.id === 'character' ? 'about' : activeModalItem.id);
                }}
                className="flex-1 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors text-center"
              >
                Go to Dedicated Page
              </button>
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenInquiry();
                }}
                className="py-3 px-5 rounded-xl bg-gold-500 text-navy-950 font-bold text-sm hover:bg-gold-400 transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
