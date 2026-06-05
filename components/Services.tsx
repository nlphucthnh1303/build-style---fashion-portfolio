import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: 1, title: 'Patternmaking' },
  { 
    id: 2, 
    title: 'Merchandising', 
    hasProfileImage: true, 
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150' 
  },
  { id: 3, title: 'Cloth Construction' },
  { 
    id: 4, 
    title: 'Fashion Illustration', 
    hasProfileImage: true, 
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150' 
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-bold">
            Services <span className="font-serif italic text-lime-400">I provide</span>
          </h2>
          <button className="hidden md:flex items-center space-x-2 text-lime-400 border border-lime-400/30 rounded-full px-6 py-2 hover:bg-lime-400 hover:text-black transition-all mt-6 md:mt-0">
            <span>View all</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Intro Text / About Me embedded */}
        <div id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 scroll-mt-32">
          <div className="md:col-span-5">
             <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Designer working" />
             </div>
          </div>
          <div className="md:col-span-7 flex items-center">
            <div className="space-y-6">
               <p className="text-2xl md:text-3xl text-gray-200 leading-snug">
                "With five years of experience as a dedicated fashion designer, I've honed my craft in bold ideas into wearable art. My journey began with a passion for textiles and aesthetics."
               </p>
               <p className="text-gray-500 font-serif italic text-xl">
                 — Albert Cooper
               </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group py-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between cursor-pointer hover:bg-zinc-900/30 transition-colors px-4"
            >
              <div className="flex items-center space-x-6">
                <div className="h-2 w-2 rounded-full bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-3xl md:text-5xl font-medium text-white group-hover:text-lime-400 transition-colors flex items-center gap-4">
                  {service.title}
                  {service.hasProfileImage && service.imageUrl && (
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 ml-4 hidden md:block">
                      <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover grayscale" />
                    </div>
                  )}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all transform group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;