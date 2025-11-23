
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import BookingPage from './pages/BookingPage';
import ResourcesPage from './pages/ResourcesPage';
import PrayerWallPage from './pages/PrayerWallPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-purple-50 font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/prayer-wall" element={<PrayerWallPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
