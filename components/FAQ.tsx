import React, { useState } from 'react';
import { Container } from './ui/Container';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FaqItem } from '../../types';

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "¿A partir de qué edad puedo empezar?",
      answer: "Recomendamos comenzar cuanto antes. Desde los 2 meses de edad podemos empezar con 'Puppy Training' para prevenir problemas futuros, aunque nuestros programas principales son ideales a partir de los 4 meses."
    },
    {
      question: "¿Qué métodos de adiestramiento usan?",
      answer: "Utilizamos adiestramiento en positivo y cognitivo-emocional. No usamos castigos físicos, collares de choques ni intimidación. Nos enfocamos en construir comunicación y reforzar buenas conductas."
    },
    {
      question: "¿Qué pasa si llueve el día de la clase?",
      answer: "Al ser servicio a domicilio, podemos trabajar dentro de casa en ejercicios de calma y obediencia básica. Si el clima es extremo, reagendamos la sesión sin costo adicional."
    },
    {
      question: "¿Necesito estar presente en las sesiones?",
      answer: "¡Sí! El entrenamiento es tanto para el perro como para el dueño. Nuestro objetivo es enseñarte a ti a manejar a tu perro para que los resultados se mantengan de por vida."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-950 scroll-mt-32">
      <Container className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} item={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="text-lg font-bold text-zinc-200">{item.question}</span>
        <span className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-lime text-brand-dark' : 'text-zinc-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};