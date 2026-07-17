import { motion } from 'motion/react';
import { BarChart3, Fingerprint, RefreshCcw } from 'lucide-react';

export default function DataDriven() {
  return (
    <section className="py-32 w-full relative z-10 bg-[#050510] overflow-hidden" id="analytics">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 mb-6">
            <BarChart3 className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-medium mb-6">
            Inteligência Comportamental<br/><span className="text-gray-500">Baseada em Dados</span>
          </h3>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            Não basta adivinhar. O desenvolvimento das nossas soluções integra-se nativamente a ferramentas 
            avançadas de Data Analytics, permitindo testes A/B estruturados e modelagem 
            preditiva do comportamento do usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-10 h-full"
          >
            <Fingerprint className="w-10 h-10 text-purple-400 mb-8" />
            <h4 className="text-2xl font-display font-medium mb-4">Mapeamento de Impressões Digitais</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Rastreamento profundo do caminho de decisão. Através de data tracking, identificamos exatamente onde os usuários sentem fricção (Modelo FBM) e onde as arquiteturas de escolha (Nudges) são mais eficazes.
            </p>
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Heatmaps e Scroll Tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Análise de Funil de Fricção
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Atribuição Comportamental
              </li>
            </ul>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-10 h-full"
          >
            <RefreshCcw className="w-10 h-10 text-blue-400 mb-8" />
            <h4 className="text-2xl font-display font-medium mb-4">Otimização Contínua (Loop)</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Conectamos as pontas da ciência comportamental com telemetria em tempo real. Cada iteração do produto torna-se mais inteligente e persuasiva através da avaliação heurística iterativa.
            </p>
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Testes A/B Multivariados
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Telemetria de Engajamento
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Refinamento de Gatilhos (Triggers)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
