import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';

const Membership: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    sector: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por su interés. Nos pondremos en contacto pronto.");
    setFormData({ company: '', contact: '', email: '', sector: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white pb-20">
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Haz que tu empresa forme parte de BritCham Perú</h1>
          <p className="text-blue-100 text-lg">Accede a una red exclusiva de negocios, eventos de alto nivel y oportunidades de crecimiento internacional. Únete a la comunidad empresarial líder entre Perú y el Reino Unido.</p>
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition shadow-lg">
             Solicitar Afiliación
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
         <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Nuestros Planes de Membresía</h2>
         
         {/* Pricing Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Standard */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition relative bg-white">
               <div className="bg-gray-200 text-gray-700 font-bold text-center py-2 rounded mb-6">Membresía Standard</div>
               <p className="text-sm text-gray-500 text-center mb-6 h-10">Para empresas en crecimiento que buscan networking.</p>
               <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0"/> Acceso a eventos de networking</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0"/> Listado en el directorio de socios</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0"/> Boletín mensual de oportunidades</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0"/> Descuentos básicos</li>
               </ul>
               <button className="w-full border-2 border-blue-900 text-blue-900 font-bold py-2 rounded hover:bg-blue-900 hover:text-white transition">Ser socio</button>
            </div>

            {/* Premium */}
            <div className="border border-blue-200 rounded-xl p-6 shadow-lg transform md:-translate-y-4 relative bg-blue-50">
               <div className="bg-blue-900 text-white font-bold text-center py-2 rounded mb-6">Membresía Premium</div>
               <p className="text-sm text-gray-600 text-center mb-6 h-10">Impulsa tu presencia y conexiones estratégicas.</p>
               <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Check size={16} className="text-blue-900 mt-0.5 flex-shrink-0"/> <strong>Todo lo de Standard</strong></li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-blue-900 mt-0.5 flex-shrink-0"/> Visibilidad destacada en eventos</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-blue-900 mt-0.5 flex-shrink-0"/> Acceso a comités especializados</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-blue-900 mt-0.5 flex-shrink-0"/> Descuentos en formación</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-blue-900 mt-0.5 flex-shrink-0"/> Presentación en eventos BPCC</li>
               </ul>
               <button className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-blue-800 transition">Ser socio</button>
            </div>

            {/* Patron */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition relative bg-white">
               <div className="bg-gray-800 text-white font-bold text-center py-2 rounded mb-6">Membresía Patron</div>
               <p className="text-sm text-gray-500 text-center mb-6 h-10">Liderazgo y acceso estratégico exclusivo.</p>
               <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><Check size={16} className="text-gray-800 mt-0.5 flex-shrink-0"/> <strong>Todo lo de Premium</strong></li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-gray-800 mt-0.5 flex-shrink-0"/> Mesa de diálogo exclusiva con autoridades</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-gray-800 mt-0.5 flex-shrink-0"/> Reuniones privadas con líderes de industria</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-gray-800 mt-0.5 flex-shrink-0"/> Branding prioritario en eventos</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-gray-800 mt-0.5 flex-shrink-0"/> Asesoría personalizada</li>
               </ul>
               <button className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition">Ser socio</button>
            </div>
         </div>

         {/* Testimonials */}
         <div className="bg-gray-50 p-10 rounded-xl mb-20">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Historias de Éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { name: 'Ana Torres', role: 'CEO, Torres Logistics', quote: 'Ser socio de BritCham Perú ha transformado nuestras operaciones internacionales. Las conexiones y la visibilidad son invaluables.' },
                  { name: 'Carlos Ramírez', role: 'Gerente General, Andina Mining', quote: 'Gracias a BritCham, establecimos alianzas estratégicas con empresas británicas que han potenciado nuestro crecimiento.' },
                  { name: 'Laura & Pedro', role: 'Fundadores, TechNova', quote: 'La mentoría y el networking nos abrieron puertas en el mercado de innovación del Reino Unido.' },
               ].map((story, i) => (
                  <div key={i} className="bg-white p-6 rounded shadow border border-gray-100 flex flex-col">
                     <div className="flex items-center gap-4 mb-4">
                        <img src={`https://picsum.photos/seed/person${i}/100/100`} alt={story.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                           <h4 className="font-bold text-slate-900 text-sm">{story.name}</h4>
                           <p className="text-xs text-gray-500">{story.role}</p>
                        </div>
                     </div>
                     <p className="text-sm text-gray-600 italic">"{story.quote}"</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Form */}
         <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Solicita tu Membresía</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Empresa</label>
                     <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Persona de Contacto</label>
                     <input type="text" name="contact" required value={formData.contact} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                     <select name="sector" required value={formData.sector} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none">
                        <option value="">Seleccionar...</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Tecnologia">Tecnología</option>
                        <option value="Mineria">Minería</option>
                        <option value="Logistica">Logística</option>
                        <option value="Otro">Otro</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                     <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" />
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje Opcional</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"></textarea>
               </div>
               
               <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" required className="rounded text-blue-900 focus:ring-blue-900" />
                  <span>Acepto la <a href="#" className="text-blue-900 underline">Política de Privacidad</a> y el tratamiento de mis datos personales.</span>
               </div>

               <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-md transition flex items-center justify-center gap-2">
                  <Send size={18} /> Enviar Solicitud
               </button>
               <p className="text-xs text-gray-500 text-center mt-4">Nota: El proceso de afiliación está sujeto a aprobación por la Junta Directiva.</p>
            </form>
         </div>

      </div>
    </div>
  );
};

export default Membership;
