// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstScreen from './components/FirstScreen';
import HomePage from './components/HomePage';
import BankingService from './components/BankingService';
import InsuranceService from './components/InsuranceService';
import EducationService from './components/EducationService';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import FloatingQuoteWrapper from './components/FloatingQuoteWrapper';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen overflow-x-hidden">
        {/* Navbar shown on all pages except FirstScreen */}
        <Routes>
          <Route path="/first" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>
        
        <Routes>
          <Route path="/" element={<Navigate to="/first" replace />} />
          <Route path="/first" element={<FirstScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/banking" element={<BankingService />} />
          <Route path="/insurance" element={<InsuranceService />} />
          <Route path="/education" element={<EducationService />} />
          <Route path="*" element={<Navigate to="/first" replace />} />
        </Routes>

        {/* Footer shown on all pages except FirstScreen */}
        <Routes>
          <Route path="/first" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>

        {/* Floating Quote Button - shown on all pages except FirstScreen */}
        <FloatingQuoteWrapper />
      </div>
    </Router>
  );
}

export default App;