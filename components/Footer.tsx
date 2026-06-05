import React from 'react';
import { Instagram, Facebook, Dribbble, Globe, Twitter } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-24 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* CTA Section */}
        <div className="text-center mb-20">
          <p className="text-gray-500 mb-4 text-sm tracking-wider uppercase">Connect with me</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10">
            Let's engage your <span className="font-serif italic text-lime-400">style.</span>
          </h2>
          
          <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 p-2 bg-zinc-900/50 rounded-full border border-zinc-800">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 bg-transparent border-none px-6 py-3 text-white focus:outline-none placeholder-gray-600"
            />
            <Button className="rounded-full">Get Started</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-zinc-900 pt-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
             <div className="text-2xl font-bold text-white tracking-tighter mb-6">
              <a href="#home">
                Build<span className="text-lime-400">.Style</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Whether you choose to order or buy build.style offers flexible ways to get the style you love.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="col-span-1">
             <h4 className="text-white font-medium mb-6">Build.Style</h4>
             <ul className="space-y-4 text-sm text-gray-500">
               <li><a href="#home" className="hover:text-lime-400 transition-colors">Home</a></li>
               <li><a href="#about" className="hover:text-lime-400 transition-colors">About</a></li>
               <li><a href="#services" className="hover:text-lime-400 transition-colors">Services</a></li>
               <li><a href="#projects" className="hover:text-lime-400 transition-colors">Projects</a></li>
               <li><a href="#pricing" className="hover:text-lime-400 transition-colors">Pricing</a></li>
             </ul>
          </div>

          {/* Links Col 2 */}
          <div className="col-span-1">
             <h4 className="text-white font-medium mb-6">Pages</h4>
             <ul className="space-y-4 text-sm text-gray-500">
               <li><a href="#" className="hover:text-lime-400 transition-colors">Service Single</a></li>
               <li><a href="#" className="hover:text-lime-400 transition-colors">Project Single</a></li>
               <li><a href="#" className="hover:text-lime-400 transition-colors">Pricing Single</a></li>
               <li><a href="#footer" className="hover:text-lime-400 transition-colors">Book a call</a></li>
               <li><a href="#footer" className="hover:text-lime-400 transition-colors">Contact</a></li>
               <li><a href="#" className="hover:text-lime-400 transition-colors">404</a></li>
             </ul>
          </div>

          {/* Social Icons Col (Right Aligned on desktop) */}
          <div className="col-span-1 flex flex-col md:items-end space-y-4">
             <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
               <Globe size={18}/>
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-lime-400 text-black border border-lime-400 flex items-center justify-center">
               <Dribbble size={18}/>
             </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
               <Instagram size={18}/>
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
               <Facebook size={18}/>
             </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">@2024 Build.Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;