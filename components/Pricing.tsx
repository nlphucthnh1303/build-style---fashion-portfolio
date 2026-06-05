import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    price: 299,
    features: ['Clothes available in all standard sizes', 'Seasonal collections (spring/summer)', 'Fabric and style options include casual', 'Custom sketches and 3 fittings']
  },
  {
    name: 'Business Plan',
    price: 499,
    features: ['Clothes available in all standard sizes', 'Custom sketches with revisions', 'Fabric and style options include formal', 'Custom sketches and 3 fittings', 'High-quality alterations to ensure perfect fit']
  },
  {
    name: 'Enterprise Plan',
    price: 699,
    features: ['Clothes available in all standard sizes', 'Sourcing of sustainable luxury fabrics', 'Accessory matching (veils, belts)', 'Custom sketches and Accord fittings', 'Optional customization for brides']
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              My Pricing <span className="font-serif italic text-lime-400">plan</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Choose my pricing plan whatever suits your pricing and budget and also ensure your planning.
            </p>
          </div>
          
          <div className="flex items-center bg-zinc-900 rounded-full p-1 border border-white/10">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-lime-400 text-black' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${index === 1 ? 'bg-zinc-900/50 border-lime-400/50' : 'bg-black border-zinc-800 hover:border-zinc-600'}`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${isAnnual ? (plan.price * 10) : plan.price}</span>
                  <span className="text-gray-500 ml-2">/{isAnnual ? 'year' : 'monthly'}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Choose your available featured plan</p>
              </div>

              <div className="mb-8">
                 <Button className={`w-full ${index === 1 ? 'bg-lime-400 text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`} variant={index === 1 ? 'primary' : 'text'}>
                   {index === 1 ? 'Get Started' : 'Get Started'}
                 </Button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-medium">Features Included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <div className="mr-3 mt-0.5 min-w-[16px]">
                        <div className="h-4 w-4 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                          <Check size={10} className="text-lime-400" />
                        </div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;