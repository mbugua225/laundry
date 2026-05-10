import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[var(--surface-dark)] border-t border-[var(--surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Visit Us at Kimbo</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Conveniently located in Ruiru to serve all your laundry needs. Drop by or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="h-[400px] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            {/* Embed Google Map iframe of Kimbo, Ruiru */}
            <iframe
              title="Phonix Laundry Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.516086782801!2d36.95379625!3d-1.14175395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4700f1eb72db%3A0xcb13b1928004fce5!2sKimbo%2C%20Ruiru!5e0!3m2!1sen!2ske!4v1714000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info and Form */}
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-blue-dark/30 p-3 rounded-full text-primary-blue-light mr-4 border border-blue-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Our Location</h4>
                  <p className="text-gray-400">Kimbo, Ruiru, Kenya</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-blue-dark/30 p-3 rounded-full text-primary-blue-light mr-4 border border-blue-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Call Us</h4>
                  <p className="text-gray-400">0729729347</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white placeholder-gray-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-primary-blue-light transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

