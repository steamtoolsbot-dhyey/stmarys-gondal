import React, { useState } from 'react';
import { MapPin, Sparkles, Building, Activity, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function CampusHotspotMap({ onOpenInquiry }) {
  const [selectedHotspot, setSelectedHotspot] = useState(0);

  const hotspots = [
    {
      id: 'senior-wing',
      title: 'Senior Academic Complex',
      category: 'Academic Wing',
      coords: { top: '32%', left: '28%' },
      image: '/assets/school-photo.jpg',
      specs: ['High School & Higher Secondary', 'Smart Digital Boards in every room', 'Natural cross-ventilation', 'Capacity: 1200+ students'],
      description: 'The primary academic block housing Classes 9 to 12, faculty preparation rooms, administrative offices, and examination halls.'
    },
    {
      id: 'kg-wing',
      title: 'Kindergarten & Primary Wing',
      category: 'Foundational Block',
      coords: { top: '24%', left: '72%' },
      image: '/assets/kg-building.jpg',
      specs: ['Playgroup to Grade 5', 'Child-safe ergonomic furniture', 'Activity learning centers', 'Dedicated shaded courtyard'],
      description: 'A vibrant, colorful and safe environment specifically architected for early childhood development, sensorial play, and foundational literacy.'
    },
    {
      id: 'sports-complex',
      title: 'Skating Rink & Basketball Arena',
      category: 'Sports Infrastructure',
      coords: { top: '68%', left: '42%' },
      image: '/assets/basketball2.jpg',
      specs: ['Standard concrete skating circuit', 'Full-court basketball with floodlights', 'Volleyball & badminton areas', 'Annual Sports Meet arena'],
      description: 'Our pride: professional sporting facilities where St. Mary\'s students train and secure state and district championship trophies every year.'
    },
    {
      id: 'science-labs',
      title: 'Advanced Science Laboratories',
      category: 'Research & Labs',
      coords: { top: '52%', left: '60%' },
      image: '/assets/school-photo.jpg',
      specs: ['Physics, Chemistry & Biology wings', 'Full safety compliance & fume extraction', 'Precision optical instruments', 'Direct teacher supervision'],
      description: 'Hands-on experiential learning where students engage in practical scientific experimentation from Class 8 onward.'
    }
  ];

  const current = hotspots[selectedHotspot];

  return (
    <div className="my-12 rounded-3xl bg-white border border-sand-200 shadow-card overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-sand-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-gold-600" />
            <span>Interactive Campus Architecture</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
            Explore St. Mary's Campus Hotspots
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Click any pin on the map or select a facility below to inspect campus infrastructure.
          </p>
        </div>

        {/* Hotspot category buttons */}
        <div className="flex flex-wrap gap-2">
          {hotspots.map((spot, idx) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedHotspot === idx
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-sand-100 text-slate-700 hover:bg-sand-200'
              }`}
            >
              {spot.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Layout & Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Interactive Campus Canvas */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-sand-100 via-amber-50/40 to-sand-200/80 border-2 border-dashed border-sand-300 p-4 overflow-hidden shadow-inner flex items-center justify-center">
            
            {/* Campus ground paths background grid */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
            
            {/* Architectural Campus Blueprint Lines */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-16 border-y-2 border-sand-300/60 pointer-events-none rounded-lg bg-sand-200/30 flex items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Main Central Walkway & Assembly Quadrangle
              </span>
            </div>

            {/* Hotspot Pins */}
            {hotspots.map((spot, idx) => {
              const isSelected = selectedHotspot === idx;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(idx)}
                  style={{ top: spot.coords.top, left: spot.coords.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                  }`}
                  aria-label={spot.title}
                >
                  <div className="relative">
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-gold-400/40 animate-ping"></span>
                    )}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-colors ${
                      isSelected ? 'bg-gold-500 text-navy-950 font-bold' : 'bg-navy-900 text-white'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Tooltip on pin */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-md transition-opacity pointer-events-none ${
                    isSelected 
                      ? 'bg-navy-950 text-white opacity-100' 
                      : 'bg-white text-navy-950 opacity-0 group-hover:opacity-100 border border-sand-200'
                  }`}>
                    {spot.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hotspot Details Card */}
        <div className="lg:col-span-5 bg-sand-50/70 rounded-2xl p-6 border border-sand-200">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 shadow-sm border border-white">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-600 text-navy-950 shadow-sm">
                {current.category}
              </span>
            </div>
          </div>

          <h4 className="font-serif text-xl font-bold text-navy-950 mb-1">
            {current.title}
          </h4>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {current.description}
          </p>

          <div className="space-y-1.5 mb-5">
            {current.specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenInquiry}
            className="w-full py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-sm transition-all text-center"
          >
            Book Guided Campus Tour
          </button>
        </div>

      </div>
    </div>
  );
}
