import React, { useState } from 'react';
import { Calendar, CheckCircle2, Sparkles, GraduationCap, ArrowRight, RotateCcw } from 'lucide-react';
import { fireConfetti } from '../lib/confetti';

export default function EligibilityChecker({ onOpenInquiry }) {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState('');
  const [stream, setStream] = useState('general');
  const [result, setResult] = useState(null);

  const ageOptions = [
    { label: '3 to 4 Years', value: 'nursery', grade: 'Nursery / Playgroup', desc: 'Foundational play, motor coordination & social acclimation' },
    { label: '4 to 5 Years', value: 'lkg', grade: 'Lower Kindergarten (L.K.G)', desc: 'Phonics, basic numbers, sensory activities & creative arts' },
    { label: '5 to 6 Years', value: 'hkg', grade: 'Higher Kindergarten (H.K.G)', desc: 'Early reading, bilingual exposure & foundational logic' },
    { label: '6 to 10 Years', value: 'primary', grade: 'Primary School (Std 1 - 5)', desc: 'Holistic foundational curriculum, STEM basics, environmental studies' },
    { label: '11 to 14 Years', value: 'middle', grade: 'Secondary School (Std 6 - 8)', desc: 'Laboratory exposure, languages, mathematics & sporting discipline' },
    { label: '14 to 16 Years', value: 'high', grade: 'High School (Std 9 - 10)', desc: 'Rigorous GSEB SSC Board preparation, career orientation & science labs' },
    { label: '16+ Years', value: 'higher_sec', grade: 'Higher Secondary (Std 11 - 12)', desc: 'Science & Commerce streams with competitive coaching guidance' },
  ];

  const handleSelectAge = (opt) => {
    setAgeGroup(opt.value);
    setResult(opt);
    setStep(2);
    fireConfetti({ count: 60 });
  };

  const handleReset = () => {
    setStep(1);
    setAgeGroup('');
    setResult(null);
  };

  return (
    <div className="rounded-3xl bg-white border border-sand-200/90 shadow-card p-6 sm:p-8 my-8 relative overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-sand-100">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-gold-700">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-navy-950">
              Admission Grade Eligibility Checker
            </h4>
            <p className="text-xs text-slate-500">
              Find the appropriate admission standard for your child in 1 click
            </p>
          </div>
        </div>

        {step === 2 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600 bg-sand-100 hover:bg-sand-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {step === 1 ? (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
            Select Your Child's Current Age Group:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ageOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelectAge(opt)}
                className="text-left p-4 rounded-2xl border border-sand-200 bg-sand-50/50 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-sm text-navy-950 group-hover:text-gold-300">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="text-xs font-semibold text-gold-700 group-hover:text-white/90">
                  {opt.grade}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        result && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/60 to-sand-100 border border-gold-300/80 animate-slide-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-600 text-navy-950 font-bold inline-block mb-2">
                  Recommended Admission Grade
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  {result.grade}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  {result.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Admissions Open for Academic Session 2025-26</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all text-center"
                >
                  Apply For {result.grade}
                </button>
                <a
                  href="tel:02825297026"
                  className="px-6 py-2 rounded-xl bg-white hover:bg-sand-100 text-navy-900 border border-sand-300 text-xs font-semibold shadow-xs transition-all text-center"
                >
                  Speak with Admissions Counselor
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
