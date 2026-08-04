import { Droplets, Beaker, Truck, Package, Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import Image from "next/image";
const services = [
  {
    icon: Droplets,
    title: 'Packaged Drinking Water',
    description: 'Premium packaged drinking water manufactured through advanced RO, UV, and ozonization purification technology. Available in multiple sizes from 250ml pouches to 20L jars.',
    features: ['250ml, 500ml, 1L, 2L, 5L bottles', '20L water jars for institutions', 'FSSAI certified production', 'Multi-stage purification process'],
  },
  {
    icon: Beaker,
    title: 'Traditional Goli Soda',
    description: 'Authentic traditional goli soda with the classic marble stopper, offering a refreshing carbonated experience. Available in original, lemon, and mixed fruit flavors.',
    features: ['Original classic flavor', 'Lemon and fruit variants', 'Traditional marble stopper', 'Natural ingredients'],
  },
  {
    icon: Truck,
    title: 'Bulk Orders & Supply',
    description: 'Reliable bulk water supply for events, corporate offices, hotels, restaurants, hospitals, and educational institutions. Flexible ordering with timely delivery.',
    features: ['Event and party supply', 'Corporate and institutional orders', 'Flexible delivery schedules', 'Competitive bulk pricing'],
  },
  {
    icon: Package,
    title: 'Private Label Manufacturing',
    description: 'We offer private-label manufacturing services for businesses looking to create their own branded packaged water. Full support from production to packaging.',
    features: ['Custom branding and labeling', 'Flexible order quantities', 'Quality assurance guaranteed', 'End-to-end production support'],
  },
  {
    icon: Building2,
    title: 'Corporate & HoReCa Supply',
    description: 'Dedicated supply solutions for hotels, restaurants, cafes, corporate offices, and government organizations with reliable delivery and consistent quality.',
    features: ['Hotels and restaurant supply', 'Corporate office delivery', 'Government organization contracts', 'Recurring supply agreements'],
  },
  {
    icon: Users,
    title: 'Distribution Partnerships',
    description: 'Join our growing distribution network. We offer attractive partnership terms for distributors and retailers looking to supply premium packaged drinking water.',
    features: ['Attractive dealer margins', 'Territory-based partnerships', 'Marketing support provided', 'Reliable product availability'],
  },
];

const processSteps = [
  { step: '01', title: 'Water Sourcing', description: 'We source water from verified, clean groundwater sources and subject it to initial quality testing.' },
  { step: '02', title: 'Multi-Stage Purification', description: 'Water passes through RO, UV treatment, and ozonization to ensure maximum purity and safety.' },
  { step: '03', title: 'Quality Testing', description: 'Every batch undergoes rigorous lab testing to meet FSSAI standards before production.' },
  { step: '04', title: 'Bottling & Packaging', description: 'Automated bottling lines ensure hygienic packaging in sanitized, food-grade bottles.' },
  { step: '05', title: 'Distribution', description: 'Finished products are stored and distributed through our reliable supply chain network.' },
];

const benefits = [
  'Advanced RO, UV & Ozonization purification',
  'FSSAI certified manufacturing facility',
  'Stringent quality control at every stage',
  'Wide product range from 250ml to 20L',
  'Reliable and timely distribution',
  'Competitive pricing for all order sizes',
  'Dedicated customer support team',
  'Private label manufacturing available',
];

export const metadata = {
  title: 'Services - Manyam Foods | Water Supply, Bulk Orders & Private Label',
  description: 'Explore Manyam Foods services: packaged drinking water supply, goli soda, bulk orders, private label manufacturing, and corporate/HoReCa supply solutions.',
};

export default function ServicesPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <Hero
        title="Our Services"
        subtitle="Quality Beverages & B2B Solutions — Comprehensive hydration and supply services for every need."
        ctaText="Get A Quote"
        ctaHref="/contact"
        height="medium"
        backgroundImage="/images/services-hero-bg.png"
      />

      {/* ========== SERVICES GRID ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What We Offer"
              subtitle="From packaged drinking water to distribution partnerships, we provide end-to-end hydration solutions."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 80}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ========== DETAILED: GOLI SODA ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="glass-card shimmer-sweep rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
                <div className="aspect-[4/3] bg-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                  <Image
    src="/images/golisoda.jpeg"
    alt="Goli Soda"
    width={400}
    height={400}
    className="mx-auto rounded-lg object-contain"
  />
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Traditional Beverage</p>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-text dark:text-dark-text-light leading-tight">
                Traditional Goli Soda
              </h2>
              <p className="text-medium-text dark:text-dark-text-muted mt-4 leading-relaxed">
                Experience the nostalgia of traditional Indian goli soda with our premium range. Made with quality ingredients and the iconic marble stopper that makes every sip a delightful experience.
              </p>
              <ul className="mt-4 space-y-2">
                {['Classic Original Flavor', 'Refreshing Lemon Variant', 'Mixed Fruit Delight', 'Traditional Marble Stopper'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-dark-text dark:text-dark-text-light">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ANIMATED PROCESS FLOW ========== */}
      <section className="section-padding bg-light-green/40 dark:bg-primary/10 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 pattern-dots pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeading
              title="Our Purification Process"
              subtitle="Every drop goes through a rigorous 5-step purification and quality assurance process."
              tag="PROCESS"
            />
          </ScrollReveal>

          {/* Desktop: horizontal connected timeline */}
          <div className="hidden lg:block">
            <div className="relative flex justify-between">
              {/* Connector line behind all steps */}
              <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" aria-hidden="true" />
              {/* Animated flowing dot on the line */}
              <div className="absolute top-7 left-[10%] h-0.5 w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animation: 'gradient-shift 3s ease infinite' }} aria-hidden="true" />

              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 150}>
                  <div className="relative flex-1 text-center group">
                    {/* Step circle */}
                    <div className="relative inline-block">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 relative z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 scale-0 group-hover:scale-125 transition-transform duration-500" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-dark-text dark:text-dark-text-light mt-4 text-sm">{step.title}</h3>
                    <p className="text-medium-text dark:text-dark-text-muted text-xs mt-2 leading-relaxed max-w-[160px] mx-auto">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-6 relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/15 to-primary/30" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 100}>
                <div className="flex gap-4 items-start relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/15 z-10">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm">{step.title}</h3>
                    <p className="text-medium-text dark:text-dark-text-muted text-xs mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <SectionHeading title="Why Choose Us" subtitle="Businesses and consumers trust Manyam Foods for reliability and quality." centered={false} />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit} delay={index * 60}>
                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-light-green/30 dark:hover:bg-primary/5 transition-colors duration-300 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-dark-text dark:text-dark-text-light leading-relaxed">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

   
  
    </>
  );
}
