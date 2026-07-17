import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "NeuroBank Onboarding",
    client: "Setor Financeiro",
    description: "Redesenho completo do fluxo de abertura de conta aplicando o framework EAST. Reduzimos a carga cognitiva nos passos de documentação, resultando em 42% menos abandono de funil e maior sensação de segurança.",
    tags: ["Redução de Fricção", "EAST", "Aversão à Perda"],
    color: "bg-blue-900/40",
    accent: "bg-blue-500",
    gradient: "from-blue-600/30 to-transparent"
  },
  {
    id: 2,
    title: "Saúde Ativa",
    client: "HealthTech",
    description: "Construção de uma jornada de engajamento baseada no Modelo de Fogg para pacientes crônicos. O aplicativo sincroniza gatilhos de medicação exatamente no momento de pico de habilidade diária do paciente.",
    tags: ["Fogg Behavior Model", "Gatilhos Contextuais"],
    color: "bg-emerald-900/40",
    accent: "bg-emerald-500",
    gradient: "from-emerald-600/30 to-transparent"
  },
  {
    id: 3,
    title: "EcoChoice Platform",
    client: "E-Commerce",
    description: "Aplicação da arquitetura de escolha para guiar consumidores a fretes mais lentos e sustentáveis (Nudge verde), usando prova social e ancoragem sem remover a autonomia de decisão.",
    tags: ["Green Nudge", "Prova Social", "Ancoragem"],
    color: "bg-amber-900/40",
    accent: "bg-amber-500",
    gradient: "from-amber-600/30 to-transparent"
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 w-full bg-[#030308] relative z-10" id="projetos">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">Estudos de Caso</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium">Design em Ação</h3>
          </div>
          <p className="text-gray-400 font-light max-w-sm">
            Resultados mensuráveis projetados na interseção exata entre dados, psicologia e design de interface.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number, key?: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.3 1"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, opacity }}
      className="group flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden bg-white/[0.03] border border-white/5 relative"
    >
      <div className={`lg:w-1/2 p-2 relative min-h-[300px] lg:min-h-[500px] ${project.color}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
        {/* Placeholder for actual visual / model mapping */}
        <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-black/20 flex flex-col items-center justify-center overflow-hidden backdrop-blur-sm">
           <div className={`w-32 h-32 rounded-full ${project.accent} blur-[80px] absolute`} />
           <div className="grid grid-cols-6 gap-2 w-full h-full p-8 opacity-20">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="bg-white/50 rounded-full w-2 h-2 place-self-center" />
              ))}
           </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-mono text-white/50">{String((index + 1)).padStart(2, '0')}</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-sm font-mono tracking-widest uppercase text-white/70">{project.client}</span>
        </div>
        
        <h4 className="text-3xl lg:text-4xl font-display font-medium mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
          {project.title}
        </h4>
        
        <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
