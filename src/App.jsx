import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';
import InquiryModal from './components/InquiryModal';
import NewsModal from './components/NewsModal';
import BackToTop from './components/BackToTop';
import QuickSearchModal from './components/QuickSearchModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import ManagementPage from './pages/ManagementPage';
import StaffPage from './pages/StaffPage';
import CampusPage from './pages/CampusPage';
import WhySmsPage from './pages/WhySmsPage';
import AcademicsPage from './pages/AcademicsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // Global Ctrl+K / Cmd+K Search & custom modal events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    const handleOpenInquiry = () => setIsInquiryOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-inquiry-modal', handleOpenInquiry);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-inquiry-modal', handleOpenInquiry);
    };
  }, []);

  // Clean up any custom cursor artifacts to guarantee normal cursor
  useEffect(() => {
    document.body.style.cursor = '';
    const el = document.getElementById('custom-cursor-hide');
    if (el) el.remove();
  }, []);

  // Sync with browser URL hash (e.g. #about, #history, #gallery)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((pageId) => {
    if (pageId === currentPage) return;
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'history':
        return <HistoryPage onNavigate={navigateTo} />;
      case 'management':
        return <ManagementPage onNavigate={navigateTo} />;
      case 'staff':
        return <StaffPage onNavigate={navigateTo} />;
      case 'campus':
        return <CampusPage onNavigate={navigateTo} onOpenInquiry={() => setIsInquiryOpen(true)} />;
      case 'why-sms':
        return <WhySmsPage onNavigate={navigateTo} onOpenInquiry={() => setIsInquiryOpen(true)} />;
      case 'academics':
        return <AcademicsPage onNavigate={navigateTo} onOpenInquiry={() => setIsInquiryOpen(true)} />;
      case 'activities':
        return <ActivitiesPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'news':
        return <NewsPage onNavigate={navigateTo} onSelectNews={(item) => setSelectedNews(item)} />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenInquiry={() => setIsInquiryOpen(true)}
            onSelectNews={(item) => setSelectedNews(item)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased relative">
      {/* Fixed Navbar — transparent over hero, solid on scroll */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Active Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <ContactFooter
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Admission Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* News Detail Modal */}
      {selectedNews && (
        <NewsModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      )}

      {/* Quick Search Modal (Ctrl + K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}
