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
        </div>
      ))}

      {/* Hero Content aligned to the screenshot style */}
      <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 z-10 pt-[25%] md:pt-[20%]">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase flex flex-col md:flex-row gap-4 items-center">
          <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">Phonix</span>
          <span 
            className="text-primary-blue-light pr-2" 
            style={{ textShadow: '0 0 20px rgba(56,189,248,1), 0 0 40px rgba(56,189,248,0.8), 0 4px 8px rgba(0,0,0,1)' }}
          >
            Laundry
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-100 max-w-3xl font-bold tracking-wide shadow-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mt-6">
          Crystal Clean Laundry. Freshness You Can Feel.
        </p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 z-10 pt-[75%] md:pt-[60%]">
        <div className="bg-primary-blue-dark/90 text-white px-8 py-3 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(2,132,199,0.8)] border border-primary-blue-light/50 hover:bg-primary-blue transition-colors cursor-pointer animate-bounce backdrop-blur-sm mb-4">
          Clothes Starting at only Ksh 70 per kg
        </div>
        <div className="bg-green-600/90 text-white px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(22,163,74,0.8)] border border-green-400/50 hover:bg-green-500 transition-colors cursor-pointer backdrop-blur-sm animate-pulse">
          Duvets Starting at only Ksh 500
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
