import React from 'react';
import { NewsItem } from '../types';
import { PlayCircle } from 'lucide-react';

const MOCK_NEWS: NewsItem[] = [
  { id: '1', title: 'Exportaciones No Tradicionales a Reino Unido Crecen 15%', category: 'Economía', date: '12 de 2024', excerpt: 'Las exportaciones no tradicionales alcanzaron cifras récord este último trimestre gracias a los nuevos acuerdos agroindustriales.', image: 'https://picsum.photos/seed/ship/400/250' },
  { id: '2', title: 'BPCC Organiza Foro sobre Inversión y Tecnología', category: 'Negocios', date: '3 de 2024', excerpt: 'Líderes del sector tech se reunieron para discutir el futuro de la inversión extranjera en el Hub de Lima.', image: 'https://picsum.photos/seed/conf/400/250' },
  { id: '3', title: 'Nuevas Oportunidades en el Sector Fintech', category: 'Eventos', date: '12 de 2024', excerpt: 'El ecosistema fintech peruano atrae la mirada de inversores británicos en busca de innovación en pagos digitales.', image: 'https://picsum.photos/seed/tech/400/250' },
  { id: '4', title: 'Desayuno Empresarial: Retos del 2024', category: 'Eventos', date: '17 de 2024', excerpt: 'Análisis económico y político presentado por expertos durante nuestro tradicional desayuno de inicio de año.', image: 'https://picsum.photos/seed/break/400/250' },
];

const News: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-gray-50 py-12 border-b border-gray-200 mb-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h1 className="text-3xl font-bold text-slate-900 text-blue-900">Noticias / Actualidad</h1>
             <p className="text-gray-600 mt-2">Mantente informado con las últimas novedades y eventos de la comunidad empresarial peruano-británica.</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_NEWS.map(item => (
                   <div key={item.id} className="group cursor-pointer">
                      <div className="overflow-hidden rounded-lg mb-4">
                         <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wide">{item.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-blue-900 transition-colors">{item.title}</h3>
                      <p className="text-xs text-gray-400 mb-3">{item.category} • {item.date}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                   </div>
                ))}
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
             
             {/* Videos Widget */}
             <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-900 pl-3">Últimos videos de Facebook</h3>
                <div className="space-y-4">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer">
                         <div className="relative w-32 h-20 flex-shrink-0">
                            <img src={`https://picsum.photos/seed/video${i}/200/150`} className="w-full h-full object-cover rounded" alt="Video thumb" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition">
                               <PlayCircle className="text-white opacity-80" size={24} />
                            </div>
                         </div>
                         <div>
                            <h4 className="text-sm font-semibold text-slate-800 leading-tight group-hover:text-blue-900">Highlights del Evento Anual BPCC</h4>
                            <span className="text-xs text-gray-400 block mt-1">May 11, 2024</span>
                         </div>
                      </div>
                   ))}
                </div>
                <a href="#" className="text-xs text-blue-600 mt-4 block hover:underline">Ver nuestro canal de videos &gt;</a>
             </div>

             {/* Newsletter Widget */}
             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Recibe nuestras novedades en tu correo</h3>
                <p className="text-xs text-gray-500 mb-4">Suscríbete a nuestro boletín semanal.</p>
                <div className="flex gap-2">
                   <input type="email" placeholder="Enter su email" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-900" />
                   <button className="bg-red-700 text-white text-sm font-bold px-4 py-2 rounded hover:bg-red-800 transition">Suscríbete</button>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

export default News;
