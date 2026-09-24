import React from 'react';
import { MapPin, Phone, Clock, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { fullSchoolData } from '../data/fullSchoolData';

export default function ContactFooter({ onNavigate, onOpenInquiry }) {
  const { meta } = fullSchoolData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { label: "Home", id: "home" },
    { label: "History", id: "history" },
    { label: "About", id: "about" },
    { label: "Management", id: "management" },
    { label: "Staff", id: "staff" }
  ];

  const usefulLinks = [
    { label: "News and Updates", id: "news" },
    { label: "Academics", id: "academics" },
    { label: "Activities", id: "activities" },
    { label: "Contact", id: "contact" },
    { label: "Our Campus", id: "campus" }
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 relative pt-16 pb-12 overflow-hidden">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      
      {/* Background watermark crest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.02] pointer-events-none">
        <img 
          src="/assets/SCHOOLLOGOCOLOUR-full.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="bg-navy-900/60 rounded-2xl p-6 border border-navy-800/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                Campus Location
              </div>
              <h4 className="text-white font-bold text-sm mb-1">
                {meta.name}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                {meta.address.line} <br />
                {meta.address.townPincode} <br />
                {meta.address.state}
              </p>
              <a
                href={meta.address.mapQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 hover:text-gold-300 mt-2 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Phones */}
          <div className="bg-navy-900/60 rounded-2xl p-6 border border-navy-800/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                Direct Telephones
              </div>
              <div className="space-y-1.5 mt-2">
                {meta.phones.map((phone, pIdx) => (
                  <div key={pIdx} className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{phone.label}:</span>
                    <a
                      href={`tel:${phone.tel}`}
                      className="text-white font-bold hover:text-gold-400 transition-colors"
                    >
                      {phone.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Office Hours */}
          <div className="bg-navy-900/60 rounded-2xl p-6 border border-navy-800/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                Office Hours
              </div>
              <h4 className="text-white font-bold text-sm mb-1">
                Monday – Saturday
              </h4>
              <p className="text-slate-400 text-xs mb-3">
                {meta.hours}
              </p>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold transition-all shadow-sm"
              >
                Request Callback
              </button>
            </div>
          </div>

        </div>

        {/* Footer Navigation & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/60">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                alt="St. Mary's School Logo" 
                className="w-11 h-11 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  {meta.title}
                </span>
                <span className="text-xs font-medium text-gold-400 tracking-wider">
                  Since 1979 • Gujarat State Board
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {meta.tagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.facebook.com/stmaryschoolgondal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-navy-900/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/st.marysschoolgondal1979/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-navy-900/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E4405F] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@st.marysschoolgondaloffici8240"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-navy-900/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-500 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-500 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-1 flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-slate-400 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 leading-relaxed">
          <p>{meta.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
