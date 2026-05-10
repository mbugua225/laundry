'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/a.jpg',
  '/images/b.jpg',
  '/images/c.jpg',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-black">
      {/* Carousel Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Hero slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Dark gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Hero Content aligned to the screenshot style */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pt-20">
        <div className="glass-panel px-12 py-8 rounded-3xl mb-8 transform hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(14,165,233,0.2)] border border-white/5 backdrop-blur-xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase flex flex-col md:flex-row gap-4 items-center">
            <span className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Phonix</span>
            <span 
              className="text-primary-blue-light pr-2" 
              style={{ textShadow: '0 0 20px rgba(56,189,248,0.8), 0 0 40px rgba(56,189,248,0.4), 0 4px 4px rgba(0,0,0,0.8)' }}
            >
              Laundry
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-3xl text-gray-100 max-w-3xl font-medium tracking-wide shadow-black drop-shadow-lg mb-8">
          Crystal Clean Laundry. Freshness You Can Feel.
        </p>
        <div className="bg-primary-blue-dark text-white px-8 py-4 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(2,132,199,0.8)] border border-primary-blue-light/50 hover:bg-primary-blue transition-colors cursor-pointer animate-bounce">
          Starting at only Ksh 70 per kg
        </div>
      </div>

      {/* White curve at the bottom to transition to the next section */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 V120 H1200 V0 C800,160 400,160 0,0 Z"
            className="fill-[var(--surface-dark)]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
