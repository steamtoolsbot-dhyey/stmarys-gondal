import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, GraduationCap, X, ChevronUp } from 'lucide-react';

export default function QuickContactDock({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Quick contact and school assistance dock" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 items-end animate-slide-up mb-1">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/919484798898?text=Hello%20St.%20Mary%27s%20School%20Gondal%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <span>WhatsApp Desk</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Direct Office Call */}
          <a
            href="tel:02825297026"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-navy-900 text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <span>Call Office: 02825-297026</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Google Maps Directions */}
          <a
            href="https://maps.google.com/?q=St.+Mary's+School+Gundala+Road+Gondal+360311"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-amber-600 text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <span>Campus Directions</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Admission Inquiry */}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenInquiry();
            }}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-gold-600 text-navy-950 text-xs font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <span>Inquiry Form</span>
            <div className="w-6 h-6 rounded-full bg-navy-950/15 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Main Trigger Capsule */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 pl-4 pr-3.5 py-2.5 rounded-full bg-navy-900/90 hover:bg-navy-950 text-white shadow-xl backdrop-blur-md border border-white/20 transition-all active:scale-95"
        aria-label="Toggle Quick Contact Options"
      >
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? 'Close' : 'Quick Assist'}
        </span>
        <div className="w-7 h-7 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:rotate-12">
          {isOpen ? <X className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>
    </aside>
  );
}
