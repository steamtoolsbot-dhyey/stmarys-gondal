import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, GraduationCap, Search } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';

export default function Navbar({ currentPage, onNavigate, onOpenInquiry, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Delayed close with 300ms buffer so user can easily move between pill and dropdown
  const handleDropdownEnter = (idx) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(idx);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const isHeroPage = currentPage === 'home';
  const useTransparent = isHeroPage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useTransparent ? 'py-4 sm:py-5' : 'py-2 sm:py-2.5'
      } ${
        useTransparent ? 'navbar-transparent' : 'navbar-solid'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left flex-shrink-0"
        >
          <div className={`relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-full p-1 transition-all duration-300 group-hover:scale-105 ${
            useTransparent
              ? 'bg-white/20 backdrop-blur-md ring-1 ring-white/30'
              : 'bg-white shadow-sm ring-2 ring-gold-400/40'
          }`}>
            <img
              src="/assets/SCHOOLLOGOCOLOUR-full.png"
              alt="St. Mary's School Crest"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              useTransparent ? 'text-white' : 'text-navy-950'
            }`}>
              St. Mary's
            </span>
            <p className={`text-[11px] font-medium tracking-wide flex items-center gap-1.5 transition-colors ${
              useTransparent ? 'text-white/70' : 'text-navy-400'
            }`}>
              <span>Since 1979</span>
              <span className={`w-1 h-1 rounded-full ${useTransparent ? 'bg-gold-400' : 'bg-gold-500'}`} />
              <span className={useTransparent ? 'text-gold-300 font-semibold' : 'text-gold-600 font-semibold'}>Gondal</span>
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full border backdrop-blur-md transition-all duration-500 ${
          useTransparent
            ? 'bg-white/10 border-white/15'
            : 'bg-mist-100/60 border-mist-200/60'
        }`}>
          {fullSchoolData.navigation.map((item, idx) => {
            if (item.children) {
              const isGroupActive = item.children.some(c => c.id === currentPage);
              return (
                <div
                  key={idx}
                  className="relative py-0.5"
                  onMouseEnter={() => handleDropdownEnter(idx)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                    className={`whitespace-nowrap flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      isGroupActive
                        ? useTransparent
                          ? 'text-navy-950 bg-white shadow-xs'
                          : 'text-white bg-navy-950 shadow-xs'
                        : useTransparent
                          ? 'text-white/80 hover:text-white hover:bg-white/15'
                          : 'text-navy-600 hover:text-navy-950 hover:bg-white/80'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === idx ? 'rotate-180' : ''
                    } ${
                      isGroupActive
                        ? useTransparent ? 'text-gold-500' : 'text-gold-400'
                        : useTransparent ? 'text-white/40' : 'text-navy-300'
                    }`} />
                  </button>

                  {/* Dropdown with invisible hover-bridge so moving mouse never drops hover */}
                  <div
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 ${
                      activeDropdown === idx
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {/* Hit bridge covering any gap between button and menu */}
                    <div className="absolute -top-3 left-0 right-0 h-4 pointer-events-auto" />
                    <div className="w-56 p-1.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-mist-200/90">
                      {item.children.map((sub, sIdx) => {
                        const isSubActive = currentPage === sub.id;
                        return (
                          <button
                            key={sIdx}
                            onClick={() => handleNavClick(sub.id)}
                            className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                              isSubActive
                                ? 'bg-gold-50 text-gold-800 font-bold pl-4 border-l-2 border-gold-500'
                                : 'text-navy-700 hover:bg-mist-100/80 hover:text-navy-950 hover:pl-4'
                            }`}
                          >
                            <span className="whitespace-nowrap">{sub.label}</span>
                            {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = currentPage === item.id;
            return (
              <button
                key={idx}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? useTransparent
                      ? 'text-navy-950 bg-white shadow-xs'
                      : 'text-white bg-navy-950 shadow-xs'
                    : useTransparent
                      ? 'text-white/80 hover:text-white hover:bg-white/15'
                      : 'text-navy-600 hover:text-navy-950 hover:bg-white/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-2xs transition-all ${
                useTransparent
                  ? 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border-white/15'
                  : 'text-navy-600 hover:text-navy-950 bg-mist-100/80 hover:bg-mist-200/70 border-mist-200/80'
              }`}
              title="Quick Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 opacity-60" />
              <kbd className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md border shadow-2xs ${
                useTransparent
                  ? 'bg-white/10 text-white/60 border-white/15'
                  : 'bg-white text-navy-400 border-mist-200'
              }`}>⌘K</kbd>
            </button>
          )}

          <button
            onClick={onOpenInquiry}
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md shadow-gold-500/20 transition-all duration-200 active:scale-95 group overflow-hidden"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            <GraduationCap className="w-4 h-4 text-navy-800 group-hover:scale-110 transition-transform" />
            <span>Admissions</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full border ${
                useTransparent
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-navy-700 border-mist-200 hover:bg-mist-100'
              }`}
              aria-label="Search portal"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onOpenInquiry}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-navy-950 bg-gold-400 shadow-xs"
          >
            Admissions
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full border ${
              useTransparent
                ? 'text-white border-white/20 hover:bg-white/10'
                : 'text-navy-700 border-mist-200 hover:bg-mist-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[62px] bg-white/95 backdrop-blur-2xl border-b border-mist-200 shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-slide-up">
          <div className="flex flex-col gap-3">
            {fullSchoolData.navigation.map((item, idx) => (
              <div key={idx} className="border-b border-mist-100 pb-2">
                {item.children ? (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-navy-300 mb-1">
                      {item.label}
                    </div>
                    <div className="pl-3 flex flex-col gap-2">
                      {item.children.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleNavClick(sub.id)}
                          className={`text-left text-sm py-1 font-semibold ${
                            currentPage === sub.id ? 'text-gold-600 font-bold' : 'text-navy-700'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left text-sm py-1.5 font-semibold ${
                      currentPage === item.id ? 'text-gold-600 font-bold' : 'text-navy-800'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-sm shadow-md"
              >
                <GraduationCap className="w-4 h-4" />
                Admission Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
