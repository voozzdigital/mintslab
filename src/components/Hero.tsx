import { motion, useScroll, useTransform } from 'motion/react';
import InteractiveCanvas from './InteractiveCanvas';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <InteractiveCanvas />
      
      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 tracking-wide uppercase"
        >
          Design de Comportamento
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6 relative"
        >
          MintisLab
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl text-center leading-relaxed"
        >
          Moldando decisões através da <span className="text-white font-medium">ciência</span> e da <span className="text-gradient font-medium">criatividade</span> para experiências transformadoras.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-indigo-400" />
        </motion.div>
      </motion.div>
      
      {/* Gradients to blend sections */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050510] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
