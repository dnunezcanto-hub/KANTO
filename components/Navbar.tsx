import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/524411009528?text=Hola%20KANTO,%20me%20interesa%20agendar%20una%20evaluación%20gratuita.', '_blank');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensate for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Programas', id: 'programas' },
    { name: 'Método', id: 'metodo' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400 cursor-pointer">
              KANTO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" onClick={handleWhatsApp}>Reservar Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-brand-lime transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-brand-dark transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-2xl font-display font-bold text-white hover:text-brand-lime transition-colors border-b border-white/5 pb-4"
            >
              {link.name}
            </a>
          ))}
          <Button fullWidth onClick={() => { setIsOpen(false); handleWhatsApp(); }}>
            Agendar Evaluación
          </Button>
        </div>
      </div>
    </nav>
  );
};