// components/FloatingQuoteWrapper.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import QuoteButton from './QuoteButton';
import Whatsapp from '../pages/Whatsapp';
import Call from '../pages/Call';

const FloatingQuoteWrapper = () => {
  const location = useLocation();
  
  // Don't show floating elements on first screen
  if (location.pathname === '/first') {
    return null;
  }

  return (
    <>
      <QuoteButton />
      <Whatsapp />
      <Call />
    </>
  );
};

export default FloatingQuoteWrapper;