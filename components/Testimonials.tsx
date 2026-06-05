import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-right w-full">
            Clients <span className="font-serif italic text-lime-400">feedback</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-end mb-8 text-right text-gray-400 max-w-lg ml-auto">
             <p>I have my clients worldwide, Look what they says about my professional work ways and clear your thoughts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Image 1 */}
          <div className="h-[400px] md:h-[500px] bg-zinc-900 rounded-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Client 1" />
          </div>

           {/* Image 2 */}
          <div className="h-[400px] md:h-[500px] bg-zinc-900 rounded-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Client 2" />
          </div>

          {/* Testimonial Card */}
          <div className="h-auto md:h-[500px] bg-zinc-900 rounded-xl p-8 flex flex-col justify-between relative border border-white/5">
            <div className="absolute top-8 left-8">
               <Quote className="text-lime-400 w-12 h-12 fill-lime-400/20" />
            </div>
            
            <div className="mt-16">
               <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                 "Working with Build.Style was an absolute dream. From our first consultation to the final fitting, every detail of my wedding gown was perfect. They listened carefully to my vision and transformed it into a reality of all my expectation"
               </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-zinc-800 border-2 border-lime-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150" 
                  alt="Albertson Cooper" 
                  className="w-full h-full object-cover grayscale" 
                />
              </div>
              <h4 className="text-xl font-medium text-white">Albertson Cooper</h4>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="p-3 rounded-full border border-white/20 text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="p-3 rounded-full bg-lime-400 text-black hover:bg-lime-300 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;