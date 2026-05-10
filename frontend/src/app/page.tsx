import Navbar from '../../components/Navbar';
import HeroCarousel from '../../components/HeroCarousel';
import ContactPills from '../../components/ContactPills';
import ConvenienceSection from '../../components/ConvenienceSection';
import HowItWorksSection from '../../components/HowItWorksSection';
import DispatchDeliverySection from '../../components/DispatchDeliverySection';
import BookingForm from '../../components/BookingForm';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroCarousel />
      <ContactPills />
      <ConvenienceSection />
      <HowItWorksSection />
      <DispatchDeliverySection />
      
      <section className="py-24 bg-[var(--surface-dark)] relative border-t border-[var(--surface-border)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-mamba.png')] opacity-20 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BookingForm />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

