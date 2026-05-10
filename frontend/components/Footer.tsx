import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-[var(--surface-border)] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-blue opacity-5 blur-[100px] pointer-events-none rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-primary-blue-light">Phonix</span>Laundry
            </h3>
            <p className="text-gray-400 max-w-sm">
              Premium laundry services in Kimbo, Ruiru. Experience the best in garment care with our convenient pickup and delivery or walk-in options.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-white transition-colors">Book Now</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="mr-3 text-primary-blue-light">📍</span> Kimbo, Ruiru
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary-blue-light">📞</span> 0729729347
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary-blue-light">📧</span> info@phonixlaundry.co.ke
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Phonix Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

