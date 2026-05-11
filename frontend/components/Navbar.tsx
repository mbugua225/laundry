import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#050505]/80 backdrop-blur-lg z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
              <span className="text-[#00a2ff] drop-shadow-[0_0_10px_rgba(0,162,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,162,255,1)] transition-all">
                Phonix
              </span>
              <span className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,1)] transition-all">
                Laundry
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-all text-lg font-bold px-4 py-2 border border-transparent hover:border-white/20 rounded-lg hover:bg-white/5">
              Services & Pricing
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-all text-lg font-bold px-4 py-2 border border-transparent hover:border-white/20 rounded-lg hover:bg-white/5">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex">
            <Link href="/#book" className="bg-primary-blue-dark text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-blue transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 border border-blue-400/30">
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
