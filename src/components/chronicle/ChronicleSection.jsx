import React, { useEffect, useRef, useState } from 'react';

/**
 * ChronicleSection — Standardized chapter container for the Living Academic Chronicle
 * @param {string} chapterNumber - e.g. "02" or "II"
 * @param {string} category - e.g. "OUR GENESIS" or "ACADEMIC HERALDRY"
 * @param {string} title - Section main heading
 * @param {string} subtitle - Descriptive ethos sentence
 * @param {string} theme - "midnight" (dark navy) | "ivory" (warm light) | "parchment" (archival beige)
 * @param {string} className - Additional custom classes
 * @param {React.ReactNode} children - Content inside the section
 */
export default function ChronicleSection({
  chapterNumber,
  category,
  title,
  subtitle,
  theme = 'ivory',
  className = '',
  id,
  children
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'midnight';

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-[#060B14] text-white' 
          : theme === 'parchment'
            ? 'bg-[#F7F4EE] text-[#0B1426]'
            : 'bg-[#FDFCFA] text-[#0B1426]'
      } ${className}`}
    >
      {/* Subtle architectural dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'white' : '#0B1426'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Decorative vertical charter margins (desktop only) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] hidden lg:block" aria-hidden="true">
        <div className={`absolute left-10 top-0 bottom-0 w-[1px] ${isDark ? 'bg-white' : 'bg-black'}`} />
        <div className={`absolute right-10 top-0 bottom-0 w-[1px] ${isDark ? 'bg-white' : 'bg-black'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standardized Chronicle Header */}
        {(chapterNumber || category || title) && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            
            {/* Chapter Pill & Label */}
            {(chapterNumber || category) && (
              <div 
                className={`inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase transition-all duration-700 ${
                  isDark
                    ? 'bg-white/[0.06] text-gold-300 border border-white/10'
                    : 'bg-gold-50 text-gold-700 border border-gold-200/60 shadow-xs'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
              >
                {chapterNumber && (
                  <span className="font-bold">
                    CHAPTER {chapterNumber}
                  </span>
                )}
                {chapterNumber && category && <span className="opacity-30">•</span>}
                {category && <span>{category}</span>}
              </div>
            )}

            {/* Main Title */}
            {title && (
              <h2
                className={`mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight transition-all duration-700 delay-100 ${
                  isDark 
                    ? 'text-white drop-shadow-[0_2px_12px_rgba(212,168,92,0.15)]' 
                    : 'text-[#0B1426]'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {title}
              </h2>
            )}

            {/* Scroll-Driven Golden Foil Line */}
            <div className="flex items-center justify-center gap-3 my-5">
              <div 
                className="h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-gold-500 transition-all duration-1000 ease-out"
                style={{ width: isVisible ? '90px' : '0px' }}
              />
              <div 
                className={`w-2 h-2 rounded-full border border-gold-400 rotate-45 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              />
              <div 
                className="h-[1.5px] bg-gradient-to-l from-transparent via-gold-400 to-gold-500 transition-all duration-1000 ease-out"
                style={{ width: isVisible ? '90px' : '0px' }}
              />
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p
                className={`text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                  isDark ? 'text-white/70' : 'text-[#3D4A5C]'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {subtitle}
              </p>
            )}

          </div>
        )}

        {/* Section Body Content */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {children}
        </div>

      </div>
    </section>
  );
}
