import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { CheckCircle2, Star, MapPin, CalendarClock, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/524411009528?text=Hola%20KANTO,%20quisiera%20reservar%20mi%20demo%20gratis.', '_blank');
  };

  const openGoogleReviews = () => {
    window.open('https://www.google.com/maps/place/Kanto+Adiestramiento+Canino/@20.7381383,-99.9372613,65m/data=!3m1!1e3!4m8!3m7!1s0x85d37f636f0eaad3:0x3a2f9cbfd51e4e24!8m2!3d20.7382393!4d-99.9374379!9m1!1b1!16s%2Fg%2F11yhs52snm?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const scrollToPrograms = () => {
    const element = document.getElementById('programas');
    if (element) {
      const offset = 80;
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
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-brand-lime/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-brand-lime/10 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-float">
            <span className="flex h-2 w-2 rounded-full bg-brand-lime"></span>
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Nuevo en Querétaro</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8">
            Adiestramiento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400">
              que sí funciona
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Sin jaulas. Sin traslados. Resultados reales en tu propio hogar.
            Resolvemos los problemas donde ocurren.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Button size="lg" className="w-full sm:w-auto" onClick={handleWhatsApp}>
              Reservar Demo Gratis
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToPrograms}>
              Ver Programas
            </Button>
          </div>

          {/* Featured Review Card */}
          <div className="mb-16 w-full max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
             <div className="relative group cursor-pointer" onClick={openGoogleReviews}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-lime/20 to-emerald-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col gap-3 text-left hover:bg-zinc-900/90 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">R</div>
                       <div>
                         <p className="font-bold text-white text-sm">Renata Barona</p>
                         <div className="flex text-yellow-400 text-xs gap-0.5">
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                         </div>
                       </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6 opacity-80" />
                  </div>
                  <p className="text-zinc-300 text-sm italic">
                    "Increíble experiencia para mi perro, nos ayudo mucho a que mi cachorro aprendiera las cosas básicas para ser feliz!!"
                  </p>
                  <div className="flex items-center text-xs text-brand-lime font-medium gap-1 mt-1 group-hover:underline">
                    Ver más reseñas en Google <ExternalLink size={12} />
                  </div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl border-t border-white/10 pt-8">
            <FeatureItem icon={MapPin} title="A Domicilio" desc="Cobertura total en Qro" />
            <FeatureItem icon={Star} title="Clase Gratis" desc="Evaluación sin costo" />
            <FeatureItem icon={CalendarClock} title="Horarios Flexibles" desc="Lunes a Domingo" />
          </div>
        </div>
      </Container>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
    <div className="p-2 rounded-lg bg-brand-lime/10 mb-3">
      <Icon className="w-5 h-5 text-brand-lime" />
    </div>
    <h3 className="font-display font-bold text-white mb-1">{title}</h3>
    <p className="text-sm text-zinc-500">{desc}</p>
  </div>
);