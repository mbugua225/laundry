'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/bike.jpg',
  '/images/car.jpg',
  '/images/van.jpg',
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
      <div className="absolute bottom-16 left-4 md:left-12 z-10 text-left w-full max-w-4xl pr-4">
        <p className="text-2xl md:text-4xl text-white font-black tracking-wide shadow-black drop-shadow-[0_4px_8px_rgba(0,0,0,1)] mb-6">
          Crystal Clean Laundry. Freshness You Can Feel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors cursor-pointer">
            Clothes Starting at only Ksh 70 per kg
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors cursor-pointer">
            Duvets Starting at only Ksh 500
          </div>
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
