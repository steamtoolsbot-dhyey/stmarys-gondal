import React, { useState } from 'react';
import { Shield, Trophy, Sparkles, Award, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HouseSystemShowcase() {
  const [activeHouse, setActiveHouse] = useState(0);

  const houses = [
    {
      name: 'St. Peter\'s House',
      colorName: 'Courage & Valor (Ruby Red)',
      borderAccent: 'border-red-400',
      badgeBg: 'bg-red-50 text-red-900 border-red-200',
      iconColor: 'text-red-700',
      bgGlow: 'from-red-500/10 to-transparent',
      motto: 'Stand Firm in Truth and Fortitude',
      symbol: 'The Rock of Integrity',
      values: ['Unyielding perseverance', 'Loyalty to community', 'Courage in adversity', 'Physical stamina']
    },
    {
      name: 'St. Paul\'s House',
      colorName: 'Wisdom & Light (Sapphire Blue)',
      borderAccent: 'border-blue-400',
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      iconColor: 'text-blue-700',
      bgGlow: 'from-blue-500/10 to-transparent',
      motto: 'Transform Mind & Character Through Knowledge',
      symbol: 'The Torch of Enlightenment',
      values: ['Intellectual rigor', 'Eloquent speech & debate', 'Ethical leadership', 'Scholarly curiosity']
    },
    {
      name: 'St. John\'s House',
      colorName: 'Love & Service (Emerald Green)',
      borderAccent: 'border-emerald-400',
      badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      iconColor: 'text-emerald-700',
      bgGlow: 'from-emerald-500/10 to-transparent',
      motto: 'Serve Others with Humility and Joy',
      symbol: 'The Shield of Compassion',
      values: ['Social altruism', 'Ecological responsibility', 'Peer camaraderie', 'Creative arts & music']
    },
    {
      name: 'St. Thomas\' House',
      colorName: 'Dedication & Faith (Imperial Gold)',
      borderAccent: 'border-amber-400',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      iconColor: 'text-amber-700',
      bgGlow: 'from-amber-500/10 to-transparent',
      motto: 'Walk by Conviction, Excel with Purpose',
      symbol: 'The Golden Laurel of Victory',
      values: ['Strategic teamwork', 'Sportsmanship on the field', 'Moral resilience', 'Civic pride']
    }
  ];

  return (
    <div className="my-14 rounded-3xl bg-white border border-sand-200 shadow-soft p-6 sm:p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-6 border-b border-sand-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5 text-gold-700" />
            <span>House System & Character Formation</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
            The Four Pillars of Camaraderie
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            Every student at St. Mary's belongs to a house that fosters healthy inter-house sports, debates, science exhibitions, and collective pride.
          </p>
        </div>

        {/* House Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {houses.map((h, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHouse(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeHouse === idx
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-sand-100 text-slate-700 hover:bg-sand-200'
              }`}
            >
              {h.name.split('\'s')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 4 House Display Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {houses.map((house, idx) => {
          const isSelected = activeHouse === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveHouse(idx)}
              className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? `bg-white shadow-card ${house.borderAccent} border-2 scale-[1.02]`
                  : 'bg-sand-50/70 border-sand-200 hover:bg-white hover:border-sand-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center border border-sand-200 ${house.iconColor}`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${house.badgeBg}`}>
                    House {idx + 1}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-navy-950 mb-1">
                  {house.name}
                </h4>

                <p className="text-[11px] font-bold text-slate-500 mb-3">
                  {house.colorName}
                </p>

                <p className="text-xs italic text-slate-600 mb-4 bg-white/60 p-2.5 rounded-xl border border-sand-100">
                  "{house.motto}"
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-sand-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Virtues:</div>
                {house.values.map((v, vIdx) => (
                  <div key={vIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                    <Star className="w-3 h-3 text-gold-500 flex-shrink-0" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
