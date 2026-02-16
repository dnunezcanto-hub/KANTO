import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { Heart, Brain, MessageCircle, Repeat, Sparkles, ArrowRight } from 'lucide-react';

interface PyramidLevel {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  accentColor: string; // CSS class for border/shadow
  widthDesktop: string;
  widthMobile: string;
}

export const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLevel, setActiveLevel] = useState<number>(4); // Default to Top level (Result) or Bottom? Let's default to top for impact, or 1 for logic. Let's do 4 (Constancia)
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const levels: PyramidLevel[] = [
    {
      id: 4,
      title: "Constancia",
      subtitle: "Nivel 04",
      description: "La cima del éxito. La repetición y la disciplina amorosa convierten las acciones en hábitos inquebrantables.",
      icon: Repeat,
      accentColor: "bg-purple-500 shadow-purple-500/50",
      widthDesktop: "md:w-[40%]",
      widthMobile: "w-[85%]"
    },
    {
      id: 3,
      title: "Comunicación",
      subtitle: "Nivel 03",
      description: "El canal. Marcadores claros y lenguaje corporal para que tu perro entienda exactamente qué esperas de él.",
      icon: MessageCircle,
      accentColor: "bg-blue-500 shadow-blue-500/50",
      widthDesktop: "md:w-[55%]",
      widthMobile: "w-[90%]"
    },
    {
      id: 2,
      title: "Motivación",
      subtitle: "Nivel 02",
      description: "El motor. Uso estratégico de comida, juego y afecto. Tu perro obedecerá porque quiere, no porque teme.",
      icon: Brain,
      accentColor: "bg-teal-400 shadow-teal-400/50",
      widthDesktop: "md:w-[70%]",
      widthMobile: "w-[95%]"
    },
    {
      id: 1,
      title: "Necesidades",
      subtitle: "Nivel 01",
      description: "La base sólida. Salud física, descanso y enriquecimiento. Sin cubrir esto, ningún adiestramiento funciona.",
      icon: Heart,
      accentColor: "bg-brand-lime shadow-brand-lime/50",
      widthDesktop: "md:w-[85%]",
      widthMobile: "w-full"
    }
  ];

  return (
    <section 
      id="metodo" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden scroll-mt-20 bg-zinc-950"
    >
      <Container>
        <div className="mb-16 md:text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            La Jerarquía del <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400">
              Éxito Canino
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Haz click en cada nivel para descubrir cómo construimos el comportamiento.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col items-center pb-12">
          
          {/* RESULT (TOP) */}
          <div 
            className={`
              relative z-20 mb-8 transition-all duration-1000 transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
            `}
          >
             <div className="relative group">
               <div className="absolute inset-0 bg-brand-lime/20 rounded-full blur-xl group-hover:bg-brand-lime/30 transition-all duration-500"></div>
               <div className="relative bg-zinc-900 border border-brand-lime text-brand-lime px-8 py-3 rounded-full flex items-center gap-3 shadow-[0_0_20px_-5px_rgba(190,242,100,0.3)]">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-display font-bold text-lg tracking-wide">
                    RUTINA SANA & VIDA FELIZ
                  </span>
               </div>
               {/* Connector Line */}
               <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-px bg-gradient-to-b from-brand-lime/50 to-transparent"></div>
             </div>
          </div>

          {/* PYRAMID LEVELS */}
          <div className="w-full flex flex-col items-center gap-3 relative z-10">
            {levels.map((level, index) => {
              const isActive = activeLevel === level.id;
              
              return (
                <div
                  key={level.id}
                  className={`
                    relative transition-all duration-500 ease-out cursor-pointer
                    ${level.widthMobile} ${level.widthDesktop}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  `}
                  style={{ transitionDelay: `${(levels.length - index) * 150}ms` }}
                  onClick={() => setActiveLevel(level.id)}
                  onMouseEnter={() => setActiveLevel(level.id)}
                >
                  <div 
                    className={`
                      relative overflow-hidden rounded-xl md:rounded-2xl border transition-all duration-300
                      ${isActive 
                        ? 'bg-zinc-900 border-white/10 shadow-lg scale-[1.02]' 
                        : 'bg-zinc-950 border-white/5 opacity-80 hover:opacity-100 hover:border-white/20'
                      }
                    `}
                  >
                    {/* Colored Accent Bar (Left) */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 md:w-2 ${level.accentColor} transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}></div>

                    <div className="p-4 md:p-6 flex flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`
                            p-2.5 md:p-3 rounded-xl bg-zinc-950/50 border border-white/5 
                            transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-zinc-600'}
                          `}>
                            <level.icon size={24} />
                          </div>
                          
                          <div>
                            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-zinc-500 block mb-0.5">
                              {level.subtitle}
                            </span>
                            <h3 className={`text-lg md:text-2xl font-display font-bold transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                              {level.title}
                            </h3>
                          </div>
                        </div>

                        {/* Arrow indicator (Rotate when active) */}
                        <ArrowRight 
                          className={`
                            text-zinc-600 transition-all duration-500
                            ${isActive ? 'rotate-90 text-brand-lime opacity-100' : 'opacity-50'}
                          `} 
                          size={20} 
                        />
                      </div>

                      {/* Content Accordion */}
                      <div 
                        className={`
                          overflow-hidden transition-all duration-500 ease-in-out
                          ${isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
                        `}
                      >
                         <p className="text-sm md:text-base text-zinc-400 leading-relaxed pl-[3.5rem] md:pl-[4.5rem]">
                           {level.description}
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};