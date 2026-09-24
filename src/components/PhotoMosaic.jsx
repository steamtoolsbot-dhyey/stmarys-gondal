import React, { useState } from 'react';

export default function PhotoMosaic({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const activities = [
    {
      title: 'Basketball',
      image: '/assets/site_images/gallery-4.jpg',
      className: 'masonry-tall',
    },
    {
      title: 'Karate',
      image: '/assets/site_images/karate.jpg',
      className: '',
    },
    {
      title: 'Skating',
      image: '/assets/site_images/gallery-14.jpg',
      className: '',
    },
    {
      title: 'Dance & Performance',
      image: '/assets/site_images/gallery-35.jpg',
      className: 'masonry-wide',
    },
    {
      title: 'Cricket',
      image: '/assets/site_images/cricket.jpg',
      className: '',
    },
    {
      title: 'Art & Craft',
      image: '/assets/site_images/gallery-20.jpg',
      className: 'masonry-tall',
    },
    {
      title: 'Football',
      image: '/assets/site_images/football-300x214.jpg',
      className: '',
    },
    {
      title: 'Campus Sports',
      image: '/assets/basketball2.jpg',
      className: 'masonry-wide',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[var(--bg-canvas)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-terra-500">
              Beyond Academics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-2">
              Life at{' '}
              <span className="font-hand text-terra-500 text-4xl sm:text-5xl lg:text-6xl">St. Mary's</span>
            </h2>
            <p className="text-navy-500 text-sm sm:text-base mt-2 max-w-lg">
              Sports, arts, skating, karate — our students discover their passions beyond the classroom.
            </p>
          </div>
          <button
            onClick={() => onNavigate('activities')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 text-white text-xs font-bold hover:bg-navy-800 transition-all self-start sm:self-auto"
          >
            All Activities →
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className={`${act.className} relative rounded-2xl overflow-hidden cursor-pointer group photo-gleam`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onNavigate('activities')}
            >
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent transition-opacity duration-300 ${
                hoveredIdx === idx ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Title */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${
                hoveredIdx === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <h3 className="font-serif text-lg font-bold">{act.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
