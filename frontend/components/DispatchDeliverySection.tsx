import React from 'react';
import Image from 'next/image';
import { Truck, Mail } from 'lucide-react';

export default function DispatchDeliverySection() {
  return (
    <section className="bg-[var(--surface-dark)] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Soft glow behind the bag */}
            <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-[100px] -z-10" />
            <Image
              src="/images/bag.png"
              alt="Premium Laundry Bag"
              width={600}
              height={600}
              className="object-contain hover:-translate-y-2 transition-transform duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Dispatch and <span className="text-primary-blue-light">Delivery</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Our dispatch and delivery system has been crafted from over 52 years of observing and learning customer patterns and mapping out routes to make garment delivery as seamlessly quick as possible. We boast a variety of delivery channels including vans, outriders and even on-foot delivery personnel for short distances.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#1e3a8a] flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:bg-primary-blue transition-colors duration-300">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Convenience anywhere</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    We deliver to any location of your convenience within the area that we cover be it your office, business or home.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#1e3a8a] flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:bg-primary-blue transition-colors duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Get email or sms notifications</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    As with garment collection, you will get an SMS notification or receive a call to alert you about the delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
