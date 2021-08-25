import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './Navigation';
import Footer from './Footer';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Projects';
import Contact from './pages/Contact';
import './assets/css/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};
