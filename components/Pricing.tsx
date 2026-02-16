import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Check, BookOpen, Zap, Crown, Home, Plane, Repeat, Clock, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const handleWhatsApp = (product: string) => {
    const message = encodeURIComponent(`Hola KANTO, me interesa ${product}.`);
    window.open(`https://wa.me/524411009528?text=${message}`, '_blank');
  };

  return (
    <section id="programas" className="py-24 relative overflow-hidden scroll-mt-32">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Invierte en su <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400">
              Futuro y Felicidad
            </span>
          </h2>
          <p className="text-zinc-400">
            Opciones diseñadas para cada estilo de vida. Desde aprendizaje autodidacta hasta inmersión total.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          
          {/* COL 1: PERSONALIZED 1-on-1 (ENHANCED) */}
          <div className="relative group flex flex-col h-full">
            {/* Subtle Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-lime/20 to-emerald-900/20 rounded-[2rem] blur-sm group-hover:blur transition duration-500"></div>
            
            <div className="relative bg-zinc-900 rounded-[2rem] p-6 md:p-8 border border-brand-lime/10 h-full flex flex-col overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-50"></div>

              <div className="mb-6 relative">
                <div className="flex justify-between items-start">
                   <div className="inline-block px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[10px] font-bold uppercase tracking-wider mb-4">
                    El más popular
                  </div>
                  <Zap className="text-brand-lime drop-shadow-[0_0_8px_rgba(190,242,100,0.5)]" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Programa 1 a 1
                </h3>
                <p className="text-zinc-400 text-sm font-medium">Acelerador de resultados en tu hogar.</p>
              </div>

              <div className="mb-6 p-5 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-white/5 relative overflow-hidden group-hover:border-brand-lime/20 transition-colors">
                <div className="flex items-end gap-2 mb-1 relative z-10">
                  <span className="text-sm text-red-400 line-through font-medium">$4,500</span>
                </div>
                <div className="flex items-baseline gap-1 relative z-10">
                  <span className="text-4xl font-display font-bold text-white tracking-tighter">$3,850</span>
                  <span className="text-zinc-500 text-xs font-medium">/ mes</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <FeatureItem text="4 Visitas a Domicilio" highlight />
                <FeatureItem text="100% Personalizado a ti" />
                <FeatureItem text="Graduación flexible (sin plazos)" />
                <FeatureItem text="Soporte VIP WhatsApp" />
              </div>

              <Button fullWidth onClick={() => handleWhatsApp('el Programa Personalizado 1 a 1')}>
                Aplicar Ahora
              </Button>
            </div>
          </div>

          {/* COL 2: BOARD & TRAIN (VIP) */}
          <div className="relative group flex flex-col h-full lg:scale-105 lg:-mt-4 lg:mb-4 z-10">
            {/* Purple Glow for VIP */}
            <div className="absolute -inset-1 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-zinc-900 rounded-[2rem] p-6 md:p-8 border border-purple-500/30 h-full flex flex-col shadow-2xl shadow-purple-900/20">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                    <Crown size={12} /> Experiencia VIP
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    Board & Train
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium">Residencia Educativa 24/7.</p>
                </div>
              </div>

              <div className="mb-8 p-5 bg-gradient-to-br from-zinc-900 to-purple-900/20 rounded-2xl border border-purple-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10 text-purple-500">
                   <Home size={50} />
                </div>
                <div className="flex items-end gap-2 mb-1 relative z-10">
                  <span className="text-sm text-zinc-500 line-through font-medium">$9,000</span>
                </div>
                <div className="flex items-baseline gap-1 relative z-10">
                  <span className="text-5xl font-display font-bold text-white tracking-tighter">$8,000</span>
                  <span className="text-purple-300 text-xs font-medium">/ mes</span>
                </div>
                <p className="text-[10px] text-purple-400 mt-2 font-bold uppercase tracking-wide">
                  Todo incluido • Cupo Limitado
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <FeatureItem text="Inmersión Total 24/7" highlight color="purple" />
                <FeatureItem text="Ideal para viajes o agendas llenas" icon={Plane} />
                <FeatureItem text="Tu perro vive con el entrenador" icon={Home} />
                <FeatureItem text="Transferencia de mando al finalizar" icon={Repeat} />
                <FeatureItem text="Reportes de avance diarios" />
              </div>

              <Button fullWidth className="bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/10" onClick={() => handleWhatsApp('el Programa Board & Train')}>
                Reservar Cupo
              </Button>
              <p className="text-center text-[10px] text-zinc-500 mt-4">
                Nos adaptamos a las necesidades de tu perro.
              </p>
            </div>
          </div>

          {/* COL 3: DIGITAL (ENHANCED - COMING SOON) */}
          <div className="relative group flex flex-col h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500/20 to-blue-900/20 rounded-[2rem] blur-sm transition duration-500"></div>
            
            <div className="relative bg-zinc-900 rounded-[2rem] p-6 md:p-8 border border-cyan-500/20 h-full flex flex-col overflow-hidden">
              {/* Digital Grid Pattern Background */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ 
                  backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
              }}></div>

              <div className="mb-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                    <Clock size={12} /> Próximamente
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Manual Digital
                </h3>
                <p className="text-zinc-400 text-sm font-medium">La guía definitiva en tu bolsillo.</p>
              </div>

              <div className="mb-6 p-4 bg-zinc-950/80 backdrop-blur-sm rounded-2xl border border-cyan-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-20 text-cyan-500">
                   <BookOpen size={40} />
                </div>
                 <div className="flex items-end gap-2 mb-1 relative z-10">
                  <span className="text-sm text-red-400 line-through font-medium">$2,500</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">Precio Regular</span>
                </div>
                <div className="flex items-baseline gap-1 relative z-10">
                  <span className="text-4xl font-display font-bold text-white tracking-tighter">$2,000</span>
                  <span className="text-cyan-500 text-xs font-medium">MXN</span>
                </div>
                 <p className="text-[10px] text-cyan-400 mt-2 font-bold uppercase tracking-wide flex items-center gap-1">
                  <Sparkles size={10} /> Lanzamiento Especial
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow relative z-10">
                <FeatureItem text="Manual PDF Completo" color="cyan" />
                <FeatureItem text="Videoteca de ejercicios" color="cyan" />
                <FeatureItem text="Acceso de por vida" color="cyan" />
                <FeatureItem text="Asesoría vía Chat" color="cyan" />
              </div>

              <Button variant="outline" fullWidth className="relative z-10 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30" onClick={() => handleWhatsApp('la lista de espera del Manual Online')}>
                Unirme a Lista de Espera
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

const FeatureItem = ({ text, highlight = false, color = 'lime', icon: Icon }: { text: string, highlight?: boolean, color?: 'lime' | 'purple' | 'cyan', icon?: any }) => {
  let bgColor = 'bg-white/5';
  let checkColor = 'text-brand-lime';
  let highlightText = 'text-white';

  if (color === 'purple') {
    bgColor = 'bg-purple-500 text-white';
    checkColor = 'text-purple-400';
  } else if (color === 'cyan') {
     checkColor = 'text-cyan-400';
  } else {
     bgColor = 'bg-brand-lime text-brand-dark';
     checkColor = 'text-brand-lime';
  }

  // Override specific highlight bg
  const iconBg = highlight ? bgColor : 'bg-zinc-800 border border-white/5';

  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {Icon ? (
          <Icon size={12} className={highlight ? 'text-inherit' : checkColor} />
        ) : (
          <Check size={12} className={highlight ? 'text-inherit' : checkColor} strokeWidth={3} />
        )}
      </div>
      <span className={`text-sm font-medium ${highlight ? highlightText : 'text-zinc-400'}`}>{text}</span>
    </div>
  );
};
