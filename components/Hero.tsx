import React from 'react';
import { Instagram, Facebook, Dribbble } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight mb-8">
            <span className="text-white block">Fashion Here &</span>
            <span className="font-serif italic text-lime-400 block ml-8 md:ml-32">always.</span>
          </h1>
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-end">
          
          {/* Left Text */}
          <div className="md:col-span-4 space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Whether you choose to order or buy Build.Style offers flexible ways to get the style you love, and you can also customize your choice.
            </p>
            <a href="#pricing">
              <Button>Get Started</Button>
            </a>

            <div className="mt-12 p-4 bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-white/5 max-w-xs hidden md:block">
               <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 mb-3 group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Video thumb" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center pl-1">
                      <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-black border-b-4 border-b-transparent"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
             <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fashion Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>

          {/* Right Text & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between h-full items-end text-right">
             <div className="hidden md:flex flex-col gap-6 items-end mb-12">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"><Instagram size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"><Dribbble size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"><Facebook size={18}/></a>
             </div>
             
             <div className="max-w-xs text-right">
               <p className="text-gray-500 text-sm leading-relaxed">
                 Fashion is very important. It is life enhancing and like everything that gives pleasure it is well a great dress can make you what is beautiful about life.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;