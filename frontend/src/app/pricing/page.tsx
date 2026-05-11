import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const pricingData = [
  { name: 'Standard Laundry', price: 'Ksh 70', unit: 'per kg', description: 'Wash, dry, and fold.' },
  { name: 'Ironing', price: 'Ksh 100', unit: 'per garment', description: 'Professional pressing.' },
  { name: 'Duvets', price: 'Ksh 500', unit: 'each', description: 'Deep cleaning for all sizes.' },
  { name: 'Shoes', price: 'Ksh 100', unit: 'per pair', description: 'Sneaker and casual shoe cleaning.' },
  { name: 'Carpets & Sofa Seats', price: 'Custom', unit: '', description: 'Based on size. Contact for Quote.' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-20 w-full">
        <div 
          className="w-full h-[40vh] md:h-[50vh] relative bg-fixed bg-center bg-cover flex items-center justify-center border-b border-[var(--surface-border)]"
          style={{ backgroundImage: 'url(/images/bag.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              Services & <span className="text-primary-blue-light drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Transparent pricing for crystal clean results. Choose the service that fits your needs.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((item, index) => (
            <div 
              key={index} 
              className="bg-surface-dark border border-surface-border rounded-3xl p-8 hover:border-primary-blue-light/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] group"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-6 min-h-[48px]">{item.description}</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-primary-blue-light group-hover:text-primary-blue transition-colors">
                  {item.price}
                </span>
                {item.unit && <span className="text-gray-500 font-medium">{item.unit}</span>}
              </div>
              
              <a href="/#book" className="block w-full text-center bg-surface-border hover:bg-primary-blue-dark text-white py-3 rounded-xl font-bold transition-colors">
                Book Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary-blue-dark/10 border border-primary-blue/20 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom quote?</h2>
          <p className="text-gray-300 mb-6">
            For large events, commercial laundry, or items not listed above, please reach out to us directly.
          </p>
          <a href="/#contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Contact Us
          </a>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
