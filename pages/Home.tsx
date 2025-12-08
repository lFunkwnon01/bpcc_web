import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Briefcase, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://picsum.photos/seed/business/1920/1080" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conectamos negocios entre Perú y el Reino Unido.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Promovemos el intercambio comercial y las relaciones bilaterales para impulsar tu crecimiento en ambos mercados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition shadow-lg">
                Conoce qué hacemos
              </Link>
              <Link to="/events" className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-medium py-3 px-8 rounded-md transition">
                Ver próximos eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Qué es BPCC</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Networking Global</h3>
              <p className="text-gray-600 leading-relaxed">
                Facilitamos conexiones valiosas y oportunidades de colaboración a nivel internacional.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Asesoría Comercial</h3>
              <p className="text-gray-600 leading-relaxed">
                Brindamos soporte especializado para potenciar tus relaciones comerciales bilaterales.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Relaciones Gubernamentales</h3>
              <p className="text-gray-600 leading-relaxed">
                Articulamos diálogos estratégicos con entidades públicas y tomadores de decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Impacto BritCham</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '122', label: 'Socios', desc: 'Empresas líderes en diversos sectores' },
              { number: '450', label: 'Representantes', desc: 'Ejecutivos de alto nivel conectados' },
              { number: '40', label: 'Eventos al año', desc: 'Seminarios, networking y foros' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition">
                <div className="text-5xl font-extrabold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-xl font-bold text-slate-800 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Nuestra actividad en redes</h2>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fake Social Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                 <div className="bg-[#3b5998] text-white p-3 flex items-center gap-2 text-sm font-semibold">
                    <span className="w-6 h-6 bg-white text-[#3b5998] rounded flex items-center justify-center font-bold">f</span> Facebook
                 </div>
                 <div className="h-48 bg-gray-200 relative">
                    <img src="https://picsum.photos/seed/conf1/400/300" alt="Post" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                       Excelente oportunidad de Networking en nuestro último desayuno empresarial. Gracias a todos los asistentes por fortalecer los lazos comerciales...
                    </p>
                    <a href="#" className="text-blue-600 text-xs mt-2 block hover:underline">... see more</a>
                 </div>
              </div>

               {/* Fake Social Card 2 */}
               <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                 <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 flex items-center gap-2 text-sm font-semibold">
                    <span className="w-6 h-6 bg-white text-purple-600 rounded flex items-center justify-center font-bold">In</span> Instagram
                 </div>
                 <div className="h-48 bg-gray-200 p-8 flex items-center justify-center">
                    <img src="https://picsum.photos/seed/product/200/200" alt="Product" className="h-32 shadow-lg" />
                 </div>
                 <div className="p-4 flex justify-between items-center">
                    <div className="flex gap-2">
                       <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                       <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                 </div>
              </div>

               {/* Fake Social Card 3 */}
               <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                 <div className="bg-[#0077b5] text-white p-3 flex items-center gap-2 text-sm font-semibold">
                    <span className="w-6 h-6 bg-white text-[#0077b5] rounded flex items-center justify-center font-bold">in</span> LinkedIn
                 </div>
                 <div className="h-48 bg-gray-200 relative">
                   <img src="https://picsum.photos/seed/team/400/300" alt="Post" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                       El equipo de comercio internacional se reunió con representantes clave para discutir las nuevas regulaciones de exportación...
                    </p>
                    <a href="#" className="text-blue-600 text-xs mt-2 block hover:underline">... see more</a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Próximos eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer">
                     <div className="relative h-48 overflow-hidden">
                        <img src={`https://picsum.photos/seed/event${i}/600/400`} alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4 bg-white p-2 rounded text-center shadow">
                           <span className="block text-xs font-bold text-gray-500 uppercase">Feb</span>
                           <span className="block text-xl font-bold text-blue-900">{10 + i * 5}</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-blue-900 text-white text-xs px-2 py-1 rounded">
                           Presencial
                        </div>
                     </div>
                     <div className="p-5">
                        <h3 className="font-bold text-lg mb-2 text-slate-800">Webinar: Oportunidades Post-Brexit para exportadores</h3>
                        <p className="text-sm text-gray-500 mb-4">Feb {10 + i * 5}, 2024</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="mt-8 text-center">
               <Link to="/events" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">Ver todos los eventos <ChevronRight size={20}/></Link>
            </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-12 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-semibold text-gray-500 mb-8">Algunas empresas que confían en BPCC</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {['HSBC', 'Glencore', 'Shell', 'British Council', 'Deloitte', 'PWC', 'BBVA'].map((brand) => (
                  <span key={brand} className="text-xl md:text-2xl font-bold text-gray-400 font-serif">{brand}</span>
               ))}
            </div>
         </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">¿Por qué afiliarse?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
               {[
                  { title: "Acceso a Red de Contactos", desc: "Accede a numerosos contactos clave." },
                  { title: "Visibilidad y Posicionamiento", desc: "Resalta tu marca con presencia destacada." },
                  { title: "Información Estratégica", desc: "Datos de mercado exclusivos para socios." },
                  { title: "Descuentos Exclusivos", desc: "Ahorra en eventos y servicios asociados." },
               ].map((item, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                     <h3 className="font-bold mb-2">{item.title}</h3>
                     <p className="text-sm text-blue-100">{item.desc}</p>
                  </div>
               ))}
            </div>
            <Link to="/membership" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg inline-flex items-center gap-2">
               Quiero ser socio <ArrowRight size={18}/>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;
