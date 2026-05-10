'use client';
import React from 'react';

export default function PaymentSection() {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#25D366]/30 mt-6 shadow-[0_8px_30px_rgba(37,211,102,0.1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366] opacity-5 rounded-full blur-[40px] pointer-events-none" />
      
      <div className="flex items-center mb-6 relative z-10">
        <div className="bg-[#25D366] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-[0_0_15px_rgba(37,211,102,0.4)]">
          M
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">Lipa na M-Pesa</h3>
      </div>
      
      <div className="space-y-4 relative z-10">
        <div className="bg-[#111] p-6 rounded-lg border border-gray-800 shadow-inner">
          <p className="text-gray-400 mb-3">1. Go to M-Pesa menu and select <strong className="text-white">Send Money</strong></p>
          <p className="text-gray-400 mb-2">2. Enter Phone Number:</p>
          <div className="text-3xl font-black text-[#25D366] tracking-wider bg-black/50 py-3 px-6 rounded-lg inline-block border border-[#25D366]/20 mb-3 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
            0729729347
          </div>
          <p className="text-gray-400 mb-2">3. Enter the total amount based on your laundry weight (Ksh 70 per kg).</p>
          <p className="text-gray-400">4. Enter your PIN and Confirm.</p>
        </div>
        <p className="text-sm text-gray-500 italic text-center">
          Payment verification will be done upon collection/delivery.
        </p>
      </div>
    </div>
  );
}

