import { motion } from 'motion/react';

const methodologies = [
  {
    id: '01',
    title: "Modelo de Fogg (FBM)",
    description: "Comportamento = Motivação × Habilidade × Gatilho. Estruturamos experiências minimizando a fricção cognitiva e mapeando gatilhos contextuais precisamente no ápice da motivação.",
    formula: "B = MAP",
    color: "from-indigo-500/20 to-blue-500/5",
    border: "group-hover:border-indigo-500/50",
    textHover: "group-hover:text-indigo-400"
  },
  {
    id: '02',
    title: "Framework EAST",
    description: "Da Behavioural Insights Team (BIT). Desenhamos intervenções que são Easy (Fáceis), Attractive (Atraentes), Social (Sociais) e Timely (Oportunas) para gerar adoção em larga escala.",
    formula: "EAST",
    color: "from-purple-500/20 to-fuchsia-500/5",
    border: "group-hover:border-purple-500/50",
    textHover: "group-hover:text-purple-400"
  },
  {
    id: '03',
    title: "Economia Comportamental",
    description: "Mapeamos vieses cognitivos—ancoragem, aversão à perda, prova social—para construir arquiteturas de escolha éticas (Nudges) que fluem com, e não contra, a natureza humana.",
    formula: "NUDGE",
    color: "from-teal-500/20 to-emerald-500/5",
    border: "group-hover:border-teal-500/50",
    textHover: "group-hover:text-teal-400"
  }
];

export default function Methodology() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10 w-full" id="metodologia">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">Núcleo Estratégico</h2>
        <h3 className="text-4xl md:text-6xl font-display font-medium max-w-3xl leading-tight">
          A arquitetura da escolha encontra a <span className="text-gradient">fluidez digital.</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {methodologies.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:bg-white/[0.04] ${item.border}`}
          >
            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-display font-light text-white/20 group-hover:text-white/40 transition-colors">
                  {item.id}
                </span>
                <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 transition-colors ${item.textHover}`}>
                  {item.formula}
                </span>
              </div>
              
              <h4 className="text-2xl font-display font-medium mb-4">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
