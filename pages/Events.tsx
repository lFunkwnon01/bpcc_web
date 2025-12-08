import React from 'react';
import { Calendar, Clock, MapPin, Video, Users } from 'lucide-react';
import { Event } from '../types';

const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Networking Empresarial: Oportunidades Perú-Reino Unido', date: '2024-10-15', time: '09:00 AM', type: 'Networking', modality: 'Presencial', image: 'https://picsum.photos/seed/ev1/400/250', location: 'Swissôtel Lima', isMembersOnly: true },
  { id: '2', title: 'Webinar: Tendencias de Comercio Internacional 2024', date: '2024-10-22', time: '16:00 PM', type: 'Webinar', modality: 'Virtual', image: 'https://picsum.photos/seed/ev2/400/250', location: 'Zoom' },
  { id: '3', title: 'Desayuno de Trabajo: Innovación y Sostenibilidad', date: '2024-11-05', time: '08:30 AM', type: 'Desayuno', modality: 'Presencial', image: 'https://picsum.photos/seed/ev3/400/250', location: 'Country Club Lima Hotel', isMembersOnly: true },
  { id: '4', title: 'Seminario Anual de Energía y Minería', date: '2024-11-12', time: '09:00 - 17:00', type: 'Seminario', modality: 'Híbrido', image: 'https://picsum.photos/seed/ev4/400/250', location: 'Centro de Convenciones de Lima' },
];

const Events: React.FC = () => {
  const featuredEvent = MOCK_EVENTS[3]; // Picking the last one as featured

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Eventos y actividades</h1>
            <p className="text-blue-200 max-w-2xl mx-auto">Conecta, aprende y crece con nuestra exclusiva red de contactos y expertos. Descubre nuestros próximos eventos.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
         {/* Filters Bar */}
         <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-end md:items-center">
            <div className="flex-1 w-full">
               <label className="text-xs font-semibold text-gray-500 mb-1 block">Tipo de evento</label>
               <select className="w-full border-gray-300 border rounded p-2 text-sm"><option>Todos</option></select>
            </div>
            <div className="flex-1 w-full">
               <label className="text-xs font-semibold text-gray-500 mb-1 block">Modalidad</label>
               <select className="w-full border-gray-300 border rounded p-2 text-sm"><option>Todas</option><option>Presencial</option><option>Virtual</option></select>
            </div>
            <div className="flex-1 w-full">
               <label className="text-xs font-semibold text-gray-500 mb-1 block">Fecha</label>
               <input type="date" className="w-full border-gray-300 border rounded p-2 text-sm" />
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-sm h-[38px] w-full md:w-auto">Filtrar</button>
         </div>

         {/* Main Content Split */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            
            {/* List of Events */}
            <div className="lg:col-span-2 space-y-6">
               <h2 className="text-xl font-bold text-slate-800">Próximos eventos</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {MOCK_EVENTS.map(event => (
                     <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition group">
                        <div className="relative h-48 overflow-hidden">
                           <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           {event.isMembersOnly && (
                              <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Solo socios</span>
                           )}
                           <span className={`absolute bottom-2 left-2 text-[10px] font-bold px-2 py-1 rounded uppercase ${event.modality === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                              {event.modality}
                           </span>
                        </div>
                        <div className="p-4">
                           <div className="text-xs font-bold text-gray-500 mb-1 uppercase flex items-center gap-1">
                              <Calendar size={12}/> {event.date} | {event.time}
                           </div>
                           <h3 className="font-bold text-slate-900 leading-tight mb-2 h-12 overflow-hidden">{event.title}</h3>
                           <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                              <MapPin size={12} /> {event.location}
                           </div>
                           <button className="w-full border border-gray-300 rounded py-2 text-sm font-medium hover:bg-gray-50 text-gray-700">Ver detalles</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Featured Event / Sidebar */}
            <div className="lg:col-span-1">
               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 sticky top-24">
                  <div className="relative h-48 rounded mb-4 overflow-hidden">
                      <img src={featuredEvent.image} className="w-full h-full object-cover" alt="Featured" />
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">Evento Destacado</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{featuredEvent.title}</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                     <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-900"/> 12 NOV | 09:00 - 17:00</div>
                     <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-900"/> Centro de Convenciones de Lima</div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mb-6">
                     <p className="text-sm text-gray-600 mb-4">Un encuentro clave para discutir el futuro del sector energético y minero, con líderes de la industria y autoridades.</p>
                     
                     <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                           <strong className="block text-slate-900 mb-1">Agenda</strong>
                           <ul className="space-y-1 text-gray-500 list-disc list-inside">
                              <li>09:00 Registro</li>
                              <li>10:30 Panel 1</li>
                              <li>13:00 Almuerzo</li>
                           </ul>
                        </div>
                        <div>
                           <strong className="block text-slate-900 mb-1">Beneficios</strong>
                           <ul className="space-y-1 text-gray-500 list-disc list-inside">
                              <li>Conexiones estratégicas</li>
                              <li>Visibilidad de marca</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  
                  <button className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition">Inscribirme ahora</button>
               </div>
            </div>

         </div>
      </div>
      
      <div className="bg-blue-900 text-white text-center py-12 mt-20">
         <h2 className="text-2xl font-bold mb-2">Únete a la BPCC</h2>
         <p className="text-blue-200 mb-6 max-w-2xl mx-auto">Conviértete en socio para acceder a todos nuestros eventos exclusivos, ampliar tu red de contactos y potenciar tu negocio.</p>
         <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold transition">Quiero ser socio</button>
      </div>

    </div>
  );
};

export default Events;
