import React from 'react';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const team: TeamMember[] = [
    { name: 'Alejandro Morales', role: 'Presidente', image: 'https://picsum.photos/seed/p1/200/200' },
    { name: 'Sofia Williams', role: 'Vicepresidenta', image: 'https://picsum.photos/seed/p2/200/200' },
    { name: 'Carlos Gutierrez', role: 'Director', image: 'https://picsum.photos/seed/p3/200/200' },
    { name: 'Laura Sanchez', role: 'Gerente General', image: 'https://picsum.photos/seed/p4/200/200' },
    { name: 'Diego Fernandez', role: 'Gerente Comercial', image: 'https://picsum.photos/seed/p5/200/200' },
    { name: 'Mariana Gomez', role: 'Gerente de Marketing', image: 'https://picsum.photos/seed/p6/200/200' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gray-900 text-white h-64 flex items-center justify-center">
        <img src="https://picsum.photos/seed/london/1600/400" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="London skyline" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">Nosotros</h1>
          <p className="text-gray-300">Construyendo puentes entre Perú y el Reino Unido desde 1990.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Fomentar el comercio, la inversión y las relaciones culturales entre Perú y el Reino Unido, creando oportunidades de crecimiento para nuestros socios y contribuyendo al desarrollo sostenible de ambas naciones.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-900">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              Ser la organización líder y referente en la promoción de negocios y la colaboración estratégica entre Perú y el Reino Unido, reconocida por su excelencia y valor agregado.
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Historia y Hitos</h2>
           <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { year: '1990', title: 'Fundación', desc: 'Nace la BPCC en Lima.' },
                  { year: '2000', title: 'Expansión', desc: 'Apertura de Oficina en Londres.' },
                  { year: '2010', title: 'Consolidación', desc: '100 Socios Corporativos.' },
                  { year: '2020', title: 'Digitalización', desc: 'Lanzamiento de Plataforma.' },
                  { year: '2024', title: 'Futuro', desc: 'Expansión de servicios.' }
                ].map((milestone, i) => (
                  <div key={i} className="relative flex flex-col items-center text-center group">
                     <div className="w-4 h-4 bg-red-600 rounded-full mb-4 z-10 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                     <span className="text-xl font-bold text-blue-900 mb-1">{milestone.year}</span>
                     <h4 className="font-semibold text-slate-800 text-sm">{milestone.title}</h4>
                     <p className="text-xs text-gray-500 mt-1 max-w-[120px]">{milestone.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Governance / Team */}
        <div className="mb-20">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Gobernanza</h2>
             <p className="text-gray-500 mt-2">Nuestro equipo de liderazgo</p>
           </div>
           
           <h3 className="text-xl font-bold text-slate-800 mb-8 border-b pb-2">Junta Directiva & Equipo de Gestión</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                   <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                   <p className="text-xs text-red-600 font-medium">{member.role}</p>
                </div>
              ))}
           </div>
        </div>
        
        {/* Strategic Allies */}
        <div className="bg-gray-50 p-10 rounded-xl">
           <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Vinculaciones & Aliados</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">Embajada UK</div>
              <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">Dept Trade</div>
              <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">CONFIEP</div>
              <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">Cámara Lima</div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
