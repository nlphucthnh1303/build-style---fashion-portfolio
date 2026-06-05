import React from 'react';
import { ArrowRight } from 'lucide-react';

const BestSellers: React.FC = () => {
  const stats = [
    { label: 'Brand I Have Worked', value: '10+' },
    { label: 'Clients I Have Worked With', value: '200+' },
    { label: 'Outfit Have Been Made', value: '800+' },
    { label: 'Years of Experience', value: '5+' },
  ];

  return (
    <section id="projects" className="py-24 bg-black scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-white/10 pb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold">
            My Best <span className="font-serif italic text-lime-400">seller</span>
          </h2>
          <button className="flex items-center space-x-2 text-black bg-lime-400 rounded-full px-6 py-2 hover:bg-lime-300 transition-all">
            <span>View all</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Item 1 - Tall Portrait Left */}
          <div className="md:col-span-4 space-y-3 group">
            <div className="w-full h-[600px] overflow-hidden rounded-xl bg-zinc-900">
               <img 
                 src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                 alt="Men's Sweatshirt" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium text-white">Men's Sweatshirt</h3>
                <p className="text-gray-500 text-sm">Men's Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white">$58</p>
                <p className="text-gray-500 text-sm">3 Variant</p>
              </div>
            </div>
          </div>

          {/* Item 2 - Large Landscape Right */}
          <div className="md:col-span-8 space-y-3 group relative">
             <div className="w-full h-[600px] overflow-hidden rounded-xl bg-zinc-900 relative">
               <img 
                 src="https://plus.unsplash.com/premium_photo-1668485968642-30e3d15e9b9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-32 h-32 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                   View Now
                 </div>
               </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium text-white">Casual Customized Wear</h3>
                <p className="text-gray-500 text-sm">Women's Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white">$75</p>
                <p className="text-gray-500 text-sm">2 Variant</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          
          {/* Item 3 - Portrait */}
          <div className="md:col-span-4 space-y-3 group">
             <div className="w-full h-[500px] overflow-hidden rounded-xl bg-zinc-900">
               <img 
                 src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop" 
                 alt="Casual Cotton Shirt" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium text-white">Casual Cotton Shirt</h3>
                <p className="text-gray-500 text-sm">Men's Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white">$58</p>
                <p className="text-gray-500 text-sm">3 Variant</p>
              </div>
            </div>
          </div>
          

          {/* Item 4 - Portrait Offset */}
          <div className="md:col-span-4 space-y-3 group">
             <div className="w-full h-[500px] overflow-hidden rounded-xl bg-zinc-900">
               <img 
                 src="https://images.unsplash.com/photo-1667586680656-6b8e381cddb5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Casual Cotton Shirt" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
            </div>
           <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium text-white">Woolen Winter Sweater</h3>
                <p className="text-gray-500 text-sm">Women's Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white">$69</p>
                <p className="text-gray-500 text-sm">2 Variant</p>
              </div>
            </div>
          </div>
          
           {/* Item 5 - Landscape/Square */}
          <div className="md:col-span-4 space-y-3 group">
             <div className="w-full h-[500px] overflow-hidden rounded-xl bg-zinc-900">
               <img 
                 src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" 
                 alt="Woolen Fabric T-Shirt" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium text-white">Woolen Fabric T-Shirt</h3>
                <p className="text-gray-500 text-sm">Men's Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white">$37</p>
                <p className="text-gray-500 text-sm">1 Variant</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSellers;