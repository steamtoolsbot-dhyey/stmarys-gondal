import React, { useRef, useState, useCallback } from 'react';

/**
 * ChronicleCard — Reusable tactile card with hardware-accelerated 3D tilt, specular glare,
 * and decorative brass charter brackets.
 * @param {boolean} enableTilt - Whether to enable cursor tilt (default true)
 * @param {boolean} showBrackets - Decorative corner brass charter brackets
 * @param {string} theme - "midnight" | "ivory" | "parchment"
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Card content
 */
export default function ChronicleCard({
  enableTilt = true,
  showBrackets = true,
  theme = 'ivory',
  className = '',
  onClick,
  children
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false
  });

  const handleMouseMove = useCallback((e) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      glareX,
      glareY,
      glareOpacity: 0.35,
      isHovered: true
    });
  }, [enableTilt]);

  const handleMouseLeave = useCallback(() => {
    if (!enableTilt) return;
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false
    });
  }, [enableTilt]);

  const isDark = theme === 'midnight';

  return (
    <div
      style={{ perspective: enableTilt ? '1000px' : 'none' }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-hidden ${
          onClick ? 'cursor-pointer' : ''
        } ${
          isDark
            ? 'bg-[#0B172E] text-white border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-gold-400/40 hover:shadow-[0_20px_45px_rgba(212,168,92,0.15)]'
            : theme === 'parchment'
              ? 'bg-[#F7F4EE] text-[#0B1426] border border-[#E5DCCE] shadow-soft hover:shadow-card hover:border-gold-400/50'
              : 'bg-white text-[#0B1426] border border-[#E5E0D6] shadow-soft hover:shadow-lift hover:border-gold-400/50'
        } ${className}`}
        style={{
          transformStyle: enableTilt ? 'preserve-3d' : 'flat',
          transform: enableTilt
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${tilt.isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'}`
            : 'none',
          transition: tilt.isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Dynamic Specular Glare Overlay */}
        {enableTilt && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 250px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, ${isDark ? '0.18' : '0.45'}) 0%, transparent 80%)`,
              opacity: tilt.glareOpacity,
            }}
            aria-hidden="true"
          />
        )}

        {/* Decorative Brass Charter Corner Brackets */}
        {showBrackets && (
          <>
            <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-gold-400/40 pointer-events-none rounded-tl-sm" />
            <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-gold-400/40 pointer-events-none rounded-tr-sm" />
            <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-gold-400/40 pointer-events-none rounded-bl-sm" />
            <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-gold-400/40 pointer-events-none rounded-br-sm" />
          </>
        )}

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
