import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/524411009528?text=Hola%20KANTO,%20quiero%20agendar%20mi%20evaluación.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-brand-dark/90 backdrop-blur-lg border-t border-white/10 z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <Button fullWidth className="shadow-lg shadow-brand-lime/20" onClick={handleWhatsApp}>
        Agendar Evaluación
      </Button>
    </div>
  );
};