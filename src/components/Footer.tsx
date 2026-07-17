import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030305] pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-6 text-white">MintisLab</h2>
            <p className="text-gray-400 font-light mb-8">
              A agência consultoria pioneira em unir a ciência empírica do design comportamental 
              à mais pura excelência em engenharia e design.
            </p>
            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
              Iniciar um projeto
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Social</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter (X)</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Agência</span>
              <a href="#metodologia" className="text-gray-400 hover:text-white transition-colors">Metodologia</a>
              <a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Casos</a>
              <a href="#analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} MintisLab Behavioral Design. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
