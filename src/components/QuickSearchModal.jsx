import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Users, Building, Calendar, Phone, Sparkles } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';

export default function QuickSearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle ESC and Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex]);

  // Search items database
  const searchItems = [
    { title: 'Home Page', category: 'Pages', id: 'home', icon: BookOpen, desc: 'Overview, hero, motto & admissions' },
    { title: 'About St. Mary\'s', category: 'Pages', id: 'about', icon: BookOpen, desc: 'Vision, mission & Catholic ethos' },
    { title: 'School History & Heritage', category: 'Pages', id: 'history', icon: BookOpen, desc: 'Established in 1979 in Gondal' },
    { title: 'School Management', category: 'Pages', id: 'management', icon: Users, desc: 'Diocese of Rajkot Leadership' },
    { title: 'Teaching Faculty & Staff', category: 'Pages', id: 'staff', icon: Users, desc: 'Experienced teachers, Mr. Jadeja, Mrs. Shah' },
    { title: 'Campus & Infrastructure', category: 'Pages', id: 'campus', icon: Building, desc: 'Classrooms, labs, library, sports' },
    { title: 'Why St. Mary\'s (S.M.S)', category: 'Pages', id: 'why-sms', icon: Sparkles, desc: '100% pass rate & holistic excellence' },
    { title: 'Academic Curriculum', category: 'Pages', id: 'academics', icon: BookOpen, desc: 'KG, Primary, Secondary & Higher Secondary' },
    { title: 'Co-Curricular Activities', category: 'Pages', id: 'activities', icon: Calendar, desc: 'Sports, skating, scouts & cultural events' },
    { title: 'Photo Gallery', category: 'Pages', id: 'gallery', icon: Building, desc: 'Campus life, sports day & celebrations' },
    { title: 'Contact & Location', category: 'Pages', id: 'contact', icon: Phone, desc: 'Gundala Road, NH 27, Gondal' },
    { title: 'News & Announcements', category: 'Pages', id: 'news', icon: Calendar, desc: 'Circulars, exam updates & notices' },
    { title: 'Science Laboratories', category: 'Facility', id: 'campus', icon: Building, desc: 'Modern Physics, Chemistry & Biology Labs' },
    { title: 'Computer Lab', category: 'Facility', id: 'campus', icon: Building, desc: 'High-speed ICT workstations' },
    { title: 'Sports & Skating Complex', category: 'Facility', id: 'activities', icon: Building, desc: 'Dedicated skating rink & basketball arena' },
    { title: 'Admission Inquiry Form', category: 'Admission', id: 'inquiry', icon: Sparkles, desc: 'Apply for 2025-26 academic session' },
  ];

  const results = query.trim() === ''
    ? searchItems.slice(0, 7)
    : searchItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item) => {
    onClose();
    if (item.id === 'inquiry') {
      window.dispatchEvent(new CustomEvent('open-inquiry-modal'));
    } else {
      onNavigate(item.id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-navy-950/60 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-sand-300/80 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="relative flex items-center border-b border-sand-200 px-4 py-3.5 bg-sand-50/50">
          <Search className="w-5 h-5 text-gold-600 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, staff, campus facilities, admissions... (Type or use ↑↓)"
            className="w-full bg-transparent text-sm sm:text-base font-medium text-navy-950 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 bg-sand-200/60 rounded-md border border-sand-300/60 hover:bg-sand-300"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-sand-100">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left flex items-center justify-between p-3 rounded-xl transition-all ${
                    isSelected 
                      ? 'bg-navy-900 text-white shadow-sm' 
                      : 'hover:bg-sand-100/70 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-navy-800 text-gold-400' : 'bg-sand-200 text-navy-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-navy-950'}`}>
                          {item.title}
                        </span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-navy-800 text-gold-300' : 'bg-sand-200/80 text-slate-600'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className={`text-xs truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform ${
                    isSelected ? 'text-gold-400 translate-x-1' : 'text-slate-300'
                  }`} />
                </button>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "Staff", "Labs", "Admissions", or "History"</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-sand-50 border-t border-sand-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>St. Mary's School Gondal Portal</span>
          <div className="flex items-center gap-3">
            <span>Navigate <kbd className="px-1 py-0.5 bg-white border border-sand-300 rounded">↑</kbd> <kbd className="px-1 py-0.5 bg-white border border-sand-300 rounded">↓</kbd></span>
            <span>Select <kbd className="px-1 py-0.5 bg-white border border-sand-300 rounded">↵</kbd></span>
          </div>
        </div>
      </div>
    </div>
  );
}
