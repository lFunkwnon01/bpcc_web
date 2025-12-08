import React, { useState } from 'react';
import { Member } from '../types';
import { Search, MapPin, Tag } from 'lucide-react';

const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'Tecnología Global', sector: 'Tecnología / TI', country: 'Perú / Reino Unido', type: 'Premium', logo: 'https://via.placeholder.com/100?text=TG', description: 'Líderes en soluciones tecnológicas para el sector corporativo.' },
  { id: '2', name: 'Finanzas Andinas', sector: 'Banca / Finanzas', country: 'Perú', type: 'Corporativa', logo: 'https://via.placeholder.com/100?text=FA', description: 'Servicios financieros integrales.' },
  { id: '3', name: 'Consultoría UK-PE', sector: 'Servicios', country: 'Reino Unido', type: 'Asociado', logo: 'https://via.placeholder.com/100?text=CUP', description: 'Consultoría estratégica transfronteriza.' },
  { id: '4', name: 'Mining Solutions', sector: 'Minería', country: 'Perú / Reino Unido', type: 'Premium', logo: 'https://via.placeholder.com/100?text=MS', description: 'Expertos en ingeniería minera.' },
  { id: '5', name: 'Legal Partners', sector: 'Legal', country: 'Perú', type: 'Corporativa', logo: 'https://via.placeholder.com/100?text=LP', description: 'Asesoría legal corporativa.' },
  { id: '6', name: 'AgroExport', sector: 'Agricultura', country: 'Perú', type: 'Asociado', logo: 'https://via.placeholder.com/100?text=AE', description: 'Exportación de productos agrícolas.' },
  { id: '7', name: 'British School', sector: 'Educación', country: 'Reino Unido', type: 'Corporativa', logo: 'https://via.placeholder.com/100?text=BS', description: 'Educación británica de primer nivel.' },
  { id: '8', name: 'Logistics Pro', sector: 'Logística', country: 'Perú / Reino Unido', type: 'Asociado', logo: 'https://via.placeholder.com/100?text=Log', description: 'Soluciones logísticas integrales.' },
];

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  const filteredMembers = MOCK_MEMBERS.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === '' || member.sector.includes(selectedSector);
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-3xl font-bold text-slate-900 mb-4">Empresas que ya forman parte de BritCham Perú</h1>
           <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestra red de socios estratégicos y conoce a las organizaciones que impulsan el comercio entre Perú y Reino Unido.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4">
           <div className="flex-1">
             <select 
               className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none"
               value={selectedSector}
               onChange={(e) => setSelectedSector(e.target.value)}
             >
                <option value="">Todos los Sectores</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Banca">Finanzas</option>
                <option value="Minería">Minería</option>
                <option value="Legal">Legal</option>
                <option value="Servicios">Servicios</option>
             </select>
           </div>
           <div className="flex-1">
             <select className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none">
                <option value="">Todos los Países</option>
                <option value="Perú">Perú</option>
                <option value="Reino Unido">Reino Unido</option>
             </select>
           </div>
           <div className="flex-1">
             <select className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none">
                <option value="">Tipo de Membresía</option>
                <option value="Premium">Premium</option>
                <option value="Corporativa">Corporativa</option>
                <option value="Asociado">Asociado</option>
             </select>
           </div>
           <div className="flex-1 relative">
             <input 
              type="text" 
              placeholder="Buscar empresa..." 
              className="w-full border border-gray-300 rounded-md p-2.5 pl-10 text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
             <Search className="absolute left-3 top-3 text-gray-400" size={18} />
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map(member => (
            <div key={member.id} className={`bg-white rounded-lg p-6 shadow-sm border transition hover:shadow-md ${member.type === 'Premium' ? 'border-l-4 border-l-blue-900' : 'border-gray-200'}`}>
              <div className="flex items-center gap-4 mb-4">
                 <img src={member.logo} alt={member.name} className="w-12 h-12 rounded bg-gray-100 object-cover" />
                 <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{member.name}</h3>
                    {member.type === 'Premium' && <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold">Premium</span>}
                 </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                   <Tag size={14} className="text-gray-400" />
                   <span>{member.sector}</span>
                </div>
                <div className="flex items-center gap-2">
                   <MapPin size={14} className="text-gray-400" />
                   <span>{member.country}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">{member.description}</p>
              <button className="w-full border border-gray-300 text-gray-700 text-sm font-medium py-2 rounded hover:bg-gray-50 transition">Ver perfil</button>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center text-white shadow-lg">
           <h3 className="text-xl font-bold mb-2">¿Quieres ver tu logo aquí?</h3>
           <p className="mb-6 opacity-90">Únete a la red empresarial más importante entre Perú y Reino Unido.</p>
           <a href="#/membership" className="inline-block bg-white text-red-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">Conoce cómo ser socio</a>
        </div>
      </div>
    </div>
  );
};

export default Members;
