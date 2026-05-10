import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#050505]/80 backdrop-blur-lg z-50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-1">
              <span className="text-white drop-shadow-md group-hover:text-gray-200 transition-colors">Phonix</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue-light to-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] transition-all">
                Laundry
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-primary-blue-light transition-colors font-medium">Services</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary-blue-light transition-colors font-medium">Pricing</Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary-blue-light transition-colors font-medium">Contact</Link>
          </div>
          <div className="hidden md:flex">
            <Link href="#book" className="bg-primary-blue-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-blue transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] transform hover:-translate-y-0.5 border border-blue-500/30">
              Book Now
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-primary-blue-light focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
