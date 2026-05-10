import React from 'react';
import Image from 'next/image';
import { Globe, RefreshCw, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Place order from anywhere',
    description: 'Our submission platform is call based so customers can submit order through a phone call to any of our branches.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: 'Easy re-orders',
    description: 'We store your contact and order history to make it easier to handle your future subscription renewals and orders.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: 'Get SMS notifications',
    description: 'Once your collection order is processed, you will receive a confirmation text message or email depending on the order channel used.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden border-t border-[var(--surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <p className="text-primary-blue-light font-bold tracking-widest uppercase text-sm mb-2">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Submitting a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">collection request</span>
              </h2>
              <p className="text-gray-400 text-lg font-light">
                Submitting a collection request is just a call away. You can also <span className="text-white font-medium">locate any of our branches</span> for more assistance.
              </p>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line connecting icons */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-blue via-blue-800 to-transparent -z-10" />
              
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-blue-dark flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-primary-blue transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-primary-blue/10 rounded-[100px] rotate-12 blur-[60px] -z-10" />
            <Image
              src="/images/phone.png"
              alt="Phone App Interface"
              width={450}
              height={600}
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
