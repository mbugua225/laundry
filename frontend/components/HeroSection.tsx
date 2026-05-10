import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with a subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 tracking-wide uppercase">
            Premium Care in Kimbo, Ruiru
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Fresh Laundry,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Delivered to Your Door.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the most convenient, reliable, and professional laundry service. Choose pickup & delivery or drop off at our Kimbo location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="#book" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.5)] transform hover:-translate-y-1"
            >
              Book Now
            </Link>
            <Link 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-800 font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm"
            >
              View Services
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200/60 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24h</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Eco</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
