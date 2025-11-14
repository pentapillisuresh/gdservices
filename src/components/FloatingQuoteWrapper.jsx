// components/FloatingQuoteWrapper.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import QuoteButton from './QuoteButton';

const FloatingQuoteWrapper = () => {
  const location = useLocation();
  
  // Don't show quote button on first screen
  if (location.pathname === '/first') {
    return null;
  }

  return <QuoteButton />;
};

export default FloatingQuoteWrapper;