import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactPills() {
  return (
    <section className="bg-[var(--surface-dark)] py-12 border-b border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-6 transform -translate-y-16 lg:-translate-y-24 relative z-30">
          
          <div className="border-l-4 border-primary-blue pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              To Request Our Pick & Drop Services,<br className="hidden md:block"/> Contact us via:
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a href="tel:0729729347" className="group flex items-center justify-center gap-3 bg-primary-blue-dark hover:bg-primary-blue text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] border border-sky-400/30">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Call 0729729347</span>
            </a>
            <a href="https://wa.me/254729729347" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] border border-green-400/30">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.741 10.564 10.564 0 5.824-4.74 10.564-10.564 10.564z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
