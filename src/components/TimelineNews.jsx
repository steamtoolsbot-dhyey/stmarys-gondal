import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function TimelineNews({ onNavigate, onSelectNews }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const newsItems = [
    {
      title: 'Admissions open for academic Year 2025-2026',
      date: 'December 20, 2025',
      category: 'Admissions',
      excerpt: 'We are commencing Admission procedures for all grades for the academic year 2025-2026.',
    },
    {
      title: 'Staff Required',
      date: 'April 22, 2024',
      category: 'Careers',
      excerpt: 'Qualified Teachers Required for Primary and Kindergarten sections.',
    },
    {
      title: 'Award Ceremony KG Section',
      date: 'February 13, 2024',
      category: 'Ceremony & Awards',
      excerpt: 'Celebrating the cheerful participation and academic milestones of our kindergarten learners.',
    },
    {
      title: 'Rising Stars',
      date: 'February 13, 2024',
      category: 'Student Spotlight',
      excerpt: 'Heartiest congratulations on your amazing win! Your hard work and dedication have paid off.',
    },
    {
      title: 'Award Ceremony Afternoon Section',
      date: 'February 13, 2024',
      category: 'Ceremony & Awards',
      excerpt: 'Felicitating outstanding scholastic achievements and leadership contributions.',
    },
  ];

  const categoryColors = {
    'Admissions': 'bg-gold-50 text-gold-800 border-gold-200',
    'Careers': 'bg-navy-50 text-navy-700 border-navy-200',
    'Ceremony & Awards': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Student Spotlight': 'bg-purple-50 text-purple-800 border-purple-200',
  };

  return (
    <section className="py-20 sm:py-24 bg-[var(--bg-alt)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-navy-400">
            Official Circulars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-2">
            News & Updates
          </h2>
          <p className="text-navy-500 text-sm sm:text-base mt-3 max-w-md mx-auto">
            Stay informed with the latest from St. Mary's School Gondal.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-10 md:space-y-14">
            {newsItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const colorClass = categoryColors[item.category] || 'bg-mist-100 text-navy-700 border-mist-200';

              return (
                <div
                  key={idx}
                  className={`timeline-item reveal-on-scroll relative ${
                    isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot hidden md:block" style={{ top: '1.5rem' }} />

                  {/* Card */}
                  <div
                    className="bg-white rounded-2xl p-6 border border-mist-200 shadow-soft hover:shadow-card transition-all cursor-pointer group ml-10 md:ml-0"
                    onClick={() => onSelectNews?.(item)}
                  >
                    {/* Date & Category */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${colorClass}`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-navy-400 font-medium whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-navy-950 leading-snug group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                      {item.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="mt-4 pt-3 border-t border-mist-100">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 group-hover:text-gold-700 transition-colors">
                        <span>Read Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-0 top-6 w-3 h-3 rounded-full bg-gold-500 border-2 border-white shadow-sm" />
                </div>
              );
            })}
          </div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400 via-gold-300 to-mist-200" />
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('news')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-white font-bold text-sm hover:bg-navy-800 transition-all"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
