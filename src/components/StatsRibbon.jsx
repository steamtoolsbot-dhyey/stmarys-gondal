import React, { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericTarget = parseInt(target);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }
    
    const step = Math.ceil(numericTarget / (duration / 30));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
      {typeof count === 'number' ? count : target}{suffix}
    </span>
  );
}

export default function StatsRibbon() {
  const stats = [
    { value: 45, suffix: '+', label: 'Years of Legacy', sub: 'Est. 1979' },
    { value: 100, suffix: '%', label: 'Board Pass Rate', sub: 'Consistent Record' },
    { value: 50, suffix: '+', label: 'Faculty Members', sub: 'Qualified & Caring' },
    { value: 1500, suffix: '+', label: 'Proud Alumni', sub: 'Worldwide' },
    { value: 4, suffix: '', label: 'House System', sub: 'Character Formation' },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-navy-950 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm font-bold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-navy-300 font-medium">
                {stat.sub}
              </div>
              {/* Decorative separator */}
              <div className="mt-4 mx-auto w-8 h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
