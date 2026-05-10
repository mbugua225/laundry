import React from 'react';

const services = [
  {
    title: 'Wash & Fold',
    description: 'Everyday laundry expertly washed, dried, and neatly folded, ready for your closet.',
    icon: '👕',
  },
  {
    title: 'Dry Cleaning',
    description: 'Premium care for your delicate garments, suits, and special fabrics.',
    icon: '👔',
  },
  {
    title: 'Ironing Services',
    description: 'Crisp, professional ironing to keep you looking sharp and presentable.',
    icon: '✨',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle everything from everyday wear to delicate fabrics with the utmost care and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
