import React from 'react';
import Image from 'next/image';

export default function ConvenienceSection() {
  return (
    <section className="bg-[var(--surface-dark)] py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-blue opacity-5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent rounded-full blur-[80px] -z-10" />
            <Image
              src="/images/scooter.png"
              alt="Delivery Scooter"
              width={600}
              height={600}
              className="object-contain hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Convenience at your <span className="text-primary-blue-light">doorstep</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Ever been pressed for time and you still needed your favorite suit or dress cleaned? It can be a daunting and stressful task. With our pick and drop plan, we collect and deliver your garments at a place which is best convenient for you. You can learn more about this process in the steps outlined below.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
