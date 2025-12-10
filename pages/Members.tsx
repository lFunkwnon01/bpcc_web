import React, { useState } from 'react';
import { Member } from '../types';
import { Search, MapPin, Tag } from 'lucide-react';

const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'AECOM', sector: 'Ingeniería / Consultoría', country: 'Internacional', type: 'Premium', logo: '/AECOM.png', description: 'Empresa multinacional líder en servicios profesionales de diseño, ingeniería, consultoría y gestión de infraestructuras.' },
  { id: '2', name: 'Belmond', sector: 'Hospitalidad / Turismo', country: 'Internacional', type: 'Premium', logo: '/Belmond_Logo.png', description: 'Marca de lujo global que ofrece experiencias de viaje exclusivas a través de hoteles emblemáticos, trenes legendarios, cruceros fluviales y campamentos de safari.' },
  { id: '3', name: 'Berninzon & Benavides', sector: 'Legal', country: 'Perú', type: 'Corporativa', logo: '/berninzon_benavides.png', description: 'Prestigioso estudio jurídico peruano fundado en 1999, especializado en asesoría empresarial integral para empresas nacionales e inversionistas extranjeros.' },
  { id: '4', name: 'Cambridge', sector: 'Educación', country: 'Reino Unido', type: 'Premium', logo: '/cambridge.png', description: 'Cambridge English ofrece certificaciones y recursos líderes a nivel mundial para enseñar y evaluar el inglés, con exámenes como IELTS, Linguaskill y certificaciones (FCE, CAE, CPE).' },
  { id: '5', name: 'Crowne Plaza', sector: 'Hospitalidad / Turismo', country: 'Internacional', type: 'Premium', logo: '/crowne_logo.png', description: 'Marca de IHG Hotels & Resorts enfocada en viajes de negocios y ocio, con hoteles en centros urbanos y cerca de aeropuertos.' },
  { id: '6', name: 'ERA Group', sector: 'Consultoría', country: 'Internacional', type: 'Corporativa', logo: '/era_group_logo.jpg', description: 'Compañía pionera en asesoramiento estratégico empresarial y optimización de costes desde 1992.' },
  { id: '7', name: 'G4S', sector: 'Seguridad', country: 'Internacional', type: 'Premium', logo: '/G4S_logo.png', description: 'Empresa global líder en servicios y soluciones de seguridad.' },
  { id: '8', name: 'JW Marriott', sector: 'Hospitalidad / Turismo', country: 'Internacional', type: 'Premium', logo: '/jw_marriot_logo.png', description: 'Marca de hoteles de lujo de Marriott International que ofrece estancias enfocadas en el bienestar integral.' },
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
              <option value="Ingeniería">Ingeniería / Consultoría</option>
              <option value="Hospitalidad">Hospitalidad / Turismo</option>
              <option value="Legal">Legal</option>
              <option value="Educación">Educación</option>
              <option value="Consultoría">Consultoría</option>
              <option value="Seguridad">Seguridad</option>
            </select>
          </div>
          <div className="flex-1">
            <select className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none">
              <option value="">Todos los Países</option>
              <option value="Perú">Perú</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Internacional">Internacional</option>
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
