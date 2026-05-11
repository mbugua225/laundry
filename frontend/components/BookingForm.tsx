'use client';
import React, { useState } from 'react';
import axios from 'axios';
import LocationPicker from './LocationPicker';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    frequency: 'Once',
    logistics: 'Pickup & Delivery',
    customerType: 'Domestic (One Person/Family)',
  });
  const [location, setLocation] = useState({ lat: 0, lng: 0, address: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await axios.post('/api/bookings', {
        ...formData,
        location,
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#111] p-8 rounded-2xl shadow-2xl text-center border border-gray-800">
        <div className="w-16 h-16 bg-green-900/50 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
        <p className="text-gray-400 mb-6">Thank you for choosing Phonix Laundry. We will contact you shortly to confirm your collection.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-2 bg-primary-blue text-white rounded-full font-medium hover:bg-primary-blue-light transition-colors"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div id="book" className="bg-[#111] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue opacity-5 rounded-full blur-[50px] pointer-events-none" />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Schedule a Service</h2>
        <div className="bg-primary-blue/20 border border-primary-blue/50 text-primary-blue-light px-4 py-2 rounded-lg font-bold">
          Ksh 70 / kg
        </div>
      </div>
      
      {status === 'error' && (
        <div className="bg-red-900/30 border border-red-500/30 text-red-400 p-4 rounded-md mb-6 text-sm relative z-10">
          There was an error submitting your booking. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white placeholder-gray-600 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white placeholder-gray-600 transition-colors"
              placeholder="07XX XXX XXX"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Customer Type</label>
            <select
              name="customerType"
              value={formData.customerType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white transition-colors"
            >
              <option value="Domestic (One Person/Family)">Domestic (One Person/Family)</option>
              <option value="Schools or Events">Schools or Events</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Service Frequency</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white transition-colors"
            >
              <option value="Once">Just Once</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Logistics</label>
          <select
            name="logistics"
            value={formData.logistics}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white transition-colors"
          >
            <option value="Pickup & Delivery">Pickup & Delivery</option>
            <option value="Walk-in">Walk-in (Drop off)</option>
          </select>
        </div>

        {formData.logistics === 'Pickup & Delivery' && (
          <LocationPicker onLocationSelect={setLocation} />
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-md transition-all transform hover:-translate-y-0.5 ${
            status === 'submitting' ? 'bg-gray-700 cursor-not-allowed' : 'bg-primary-blue hover:bg-primary-blue-light hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]'
          }`}
        >
          {status === 'submitting' ? 'Processing...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
}


