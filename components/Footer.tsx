import React from 'react';
import { Container } from './ui/Container';
import { Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensación para el header fijo
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

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16 pb-32 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400">
                KANTO
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              Transformando la relación entre humanos y perros en Querétaro. 
              Adiestramiento moderno, ético y efectivo.
            </p>
            <div className="flex gap-4">
              <SocialLink 
                href="https://www.facebook.com/profile.php?id=61571554559295&locale=es_LA" 
                icon={Facebook} 
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Enlaces</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a href="#programas" onClick={(e) => handleScrollTo(e, 'programas')} className="hover:text-brand-lime transition-colors cursor-pointer">
                  Programas
                </a>
              </li>
              <li>
                <a href="#metodo" onClick={(e) => handleScrollTo(e, 'metodo')} className="hover:text-brand-lime transition-colors cursor-pointer">
                  Método
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="hover:text-brand-lime transition-colors cursor-pointer">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>Querétaro, México</li>
              <li>
                <a href="tel:+524411009528" className="hover:text-brand-lime transition-colors font-medium">
                  441 100 9528
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Kanto Adiestramiento. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ para perros felices.</p>
        </div>
      </Container>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-lime hover:border-brand-lime/50 transition-all hover:scale-110"
  >
    <Icon size={18} />
  </a>
);