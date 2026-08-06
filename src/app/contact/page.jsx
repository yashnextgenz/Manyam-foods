import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';

const contactCards = [
  { icon: Phone, title: 'Phone', value: '+91 9177418031', href: 'tel:+919177418031', color: 'from-primary to-primary-dark', desc: 'Mon-Sat, 9AM-6PM' },
  { icon: Mail, title: 'Email', value: 'manyamfoods45@gmail.com', href: 'mailto:manyamfoods45@gmail.com', color: 'from-primary to-primary-dark', desc: 'We reply within 24hrs' },
  { icon: MapPin, title: 'Address', value: 'Vagalla, Varipalli, Kalikiri, Chittoor, AP 517234', href: 'https://maps.google.com/?q=13.63,78.16', color: 'from-primary to-primary-dark', desc: 'View on Google Maps' },
];

const businessHours = [
  { day: 'Monday – Saturday', time: '9:00 AM – 6:00 PM', isOpen: true },
  { day: 'Sunday', time: 'Closed', isOpen: false },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', hoverFrom: 'hover:from-primary', hoverTo: 'hover:to-primary-dark', hoverShadow: 'hover:shadow-blue-500/30' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/manyamwater?utm_source=qr&igsh=azIwMGdrYmJmMms2', hoverFrom: 'hover:from-primary', hoverTo: 'hover:to-primary-dark', hoverShadow: 'hover:shadow-pink-500/30' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919177418031', hoverFrom: 'hover:from-primary', hoverTo: 'hover:to-primary-dark', hoverShadow: 'hover:shadow-[#25D366]/30' },
];

const faqItems = [
  { question: 'What sizes of packaged drinking water do you offer?', answer: 'We offer a comprehensive range including 250ml pouches, 500ml bottles, 1 litre bottles, 2 litre bottles, 5 litre cans, and 20 litre jars to suit every need from personal use to bulk institutional supply.' },
  { question: 'Are your products FSSAI certified?', answer: 'Yes, all our products are FSSAI certified. We maintain stringent quality control processes and our manufacturing facility meets all regulatory standards for food safety and quality assurance.' },
  { question: 'Do you offer bulk order discounts?', answer: 'Yes, we offer competitive pricing for bulk orders. Whether you need water for events, corporate supply, or institutional use, we have flexible pricing options. Contact us for a custom quote.' },
  { question: 'What is your delivery area?', answer: 'We primarily serve Andhra Pradesh and neighboring regions through our distribution network. We are continuously expanding our reach. Contact us to check availability in your area.' },
  { question: 'Can I become a distribution partner?', answer: 'We welcome new distribution partners! We offer attractive margins, marketing support, and territory-based partnerships. Reach out to us through the enquiry form or call us directly.' },
  { question: 'Do you offer private label manufacturing?', answer: 'Yes, we offer private-label manufacturing services for businesses looking to create their own branded packaged water. We provide end-to-end support from production to packaging.' },
];

export const metadata = {
  title: 'Contact Us - Manyam Foods | Get In Touch',
  description: 'Contact Manyam Foods Private Limited for bulk orders, distribution partnerships, or general inquiries. Located in Kalikiri, Chittoor, Andhra Pradesh.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch With Us"
        subtitle="We would love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions."
        height="medium"
        backgroundImage="/images/contact-hero-bg.png"
      />

      {/* ========== CONTACT INFO CARDS ========== */}
      <section className="py-12 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 80}>
                <a
                  href={card.href}
                  target={card.title === 'Address' ? '_blank' : undefined}
                  rel={card.title === 'Address' ? 'noopener noreferrer' : undefined}
                  className="group block glass-card glow-border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-dark-text dark:text-dark-text-light text-xs uppercase tracking-wider">{card.title}</h3>
                      <p className="text-sm text-primary font-semibold mt-1 leading-snug">{card.value}</p>
                      <p className="text-xs text-medium-text dark:text-dark-text-muted mt-1">{card.desc}</p>
                    </div>
                    {card.title === 'Address' && (
                      <ExternalLink className="w-4 h-4 text-medium-text dark:text-dark-text-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    )}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM + SIDEBAR ========== */}
      <section className="section-padding bg-light-green/20 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary-light rounded-full" aria-hidden="true" />
                  <h2 className="text-xl md:text-2xl font-bold text-dark-text dark:text-dark-text-light">Send Us an Enquiry</h2>
                </div>
                <p className="text-medium-text dark:text-dark-text-muted text-sm mt-1 mb-6 ml-11">Fill out the form below and our team will get back to you shortly.</p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                {/* Business Hours */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm">Business Hours</h3>
                  </div>
                  <div className="space-y-0">
                    {businessHours.map((item, i) => (
                      <div key={item.day} className={`flex justify-between items-center text-sm py-3 ${i < businessHours.length - 1 ? 'border-b border-light-gray/30 dark:border-white/10' : ''}`}>
                        <span className="text-dark-text dark:text-dark-text-light font-medium">{item.day}</span>
                        <span className={`font-semibold text-xs px-2.5 py-1 rounded-full ${item.isOpen ? 'bg-primary/10 text-primary' : 'bg-red-50 dark:bg-red-950/50 text-red-500'}`}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-12 h-12 bg-gradient-to-br from-light-gray/80 to-light-gray dark:from-white/10 dark:to-white/5 ${social.hoverFrom} ${social.hoverTo} rounded-xl flex items-center justify-center text-medium-text dark:text-dark-text-muted hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverShadow}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

           

                {/* Quick links */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'View Products', href: '/products' },
                      { label: 'Our Services', href: '/services' },
                      { label: 'About Us', href: '/about' },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between py-2 text-sm text-medium-text dark:text-dark-text-muted hover:text-primary transition-colors duration-300 group/qlink"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/qlink:opacity-100 group-hover/qlink:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== GOOGLE MAPS ========== */}
      <section className="bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollReveal>
            <SectionHeading
              title="Our Location"
              subtitle="Visit our manufacturing facility in Kalikiri, Chittoor District, Andhra Pradesh."
              tag="LOCATION"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-light-gray/30 dark:border-white/10 relative group">
              {/* Map pin overlay on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40" style={{animation:'bounce-slow 2s ease-in-out infinite'}}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d78.16!3d13.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzguMCJOIDc4JzA5JzQwLjAiTiA4M8KwMDknNTcuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manyam Foods Location - Kalikiri, Chittoor, AP"
                className="w-full group-hover:brightness-90 transition-all duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section-padding bg-light-green/20 dark:bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our products and services."
              tag="FAQ"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <FAQ items={faqItems} />
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <p className="text-center mt-8 text-sm text-medium-text dark:text-dark-text-muted">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="tel:+919177418031" className="text-primary font-semibold link-underline">Call us directly</a>
              {' or '}
              <Link href="/" className="text-primary font-semibold link-underline">browse our products</Link>
              {'.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}
