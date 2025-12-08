import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

// Import Pages (Defined in same file for simplicity in this artifact, but normally separated)
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import News from './pages/News';
import Membership from './pages/Membership';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Socios', path: '/members' },
    { name: 'Eventos', path: '/events' },
    { name: 'Noticias', path: '/news' },
    { name: 'Membresías', path: '/membership' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-gray-100 py-1 px-4 text-xs text-right border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 text-gray-600">
          <span className="flex items-center gap-1 cursor-pointer hover:text-blue-900"><Globe size={14} /> English</span>
          <span className="font-bold text-blue-900">Español</span>
          <Search size={14} className="cursor-pointer" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://via.placeholder.com/50x50/1e3a8a/ffffff?text=BPCC" alt="BPCC Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900 leading-none tracking-tight">BPCC</span>
                <span className="text-[10px] text-red-600 font-semibold uppercase tracking-wider">Cámara de Comercio Peruano Británica</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-red-600 border-b-2 border-red-600 py-1' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   isActive(link.path) ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>+51 1 202 686 005</p>
              <p>+44 202 502 3332</p>
              <p>info@bpcc.org.pe</p>
              <p>www.bpcc.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <div className="space-y-2 text-slate-300 text-sm flex flex-col">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <Link to="/about" className="hover:text-white">Nosotros</Link>
              <Link to="/events" className="hover:text-white">Eventos</Link>
              <Link to="/news" className="hover:text-white">Noticias</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"><Twitter size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"><Instagram size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="text-3xl font-bold text-white tracking-tighter">BPCC</span>
               <div className="h-8 w-px bg-slate-600"></div>
               <p className="text-xs text-slate-400 max-w-[150px]">Cámara de Comercio Peruano Británica</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 BPCC Comercio Peruano Británico. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
