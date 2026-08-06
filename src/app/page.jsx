import Link from 'next/link';
import { Droplets, Factory, ShieldCheck, Sparkles, Truck, Users, ArrowRight, Star, Award, BadgeCheck, Leaf, Recycle, Zap, HeartHandshake, Building2, UtensilsCrossed, Building, Heart, GraduationCap, PartyPopper, Store, Landmark, Calendar, ArrowUpRight, Clock } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import Marquee from '@/components/Marquee';
import FAQ from '@/components/FAQ';

const products = [
  {
    name: '500ml Bottle',
    category: 'Packaged Water',
    description: 'Compact and convenient for on-the-go hydration. Perfect for personal use.',
    image: '/images/pro500ml.jpeg'
  },
  {
    name: '1 Litre Bottle',
    category: 'Packaged Water',
    description: 'Ideal size for daily hydration needs at home and office.',
    image: '/images/pro1l.jpeg'
  },
  {
    name: '2 Litre Bottle',
    category: 'Packaged Water',
    description: 'Great for families, gatherings, and extended hydration needs.',
    image: '/images/pro2l.jpeg'
  },
  {
    name: '20 Litre Bottle',
    category: 'Packaged Water',
    description: 'Large-capacity drinking water bottle, ideal for homes, offices, schools, and commercial use.',
    image: '/images/pro20l.jpeg'
  },
  {
    name: 'Goli Soda',
    category: 'Beverages',
    description: 'Refreshing traditional marble-sealed soft drink available in a variety of delicious flavors.',
    image: '/images/golisoda3.png'
  }
];

const features = [
  { icon: Factory, title: 'Own Manufacturing Unit', description: 'State-of-the-art facility with advanced purification technology ensuring consistent quality in every bottle.' },
  { icon: ShieldCheck, title: 'FSSAI Certified', description: 'Fully certified by FSSAI meeting all regulatory standards for food safety and quality assurance.' },
  { icon: Sparkles, title: '100% Hygienic', description: 'Multi-stage purification with RO, UV, and ozonization for safe, pure drinking water.' },
  { icon: Truck, title: 'Wide Distribution', description: 'Strong distribution network ensuring timely delivery to retailers, institutions, and businesses.' },
];

const testimonials = [
  { name: 'Theja Kumar', role: 'Retail Distributor', quote: 'Manyam Foods has been our trusted supplier for over two years. The quality is consistently excellent and deliveries are always on time. Highly recommended for any business looking for reliable packaged water.' },
  { name: 'Sowjanya B', role: 'Hotel Manager', quote: 'We serve Manyam Foods water exclusively at our hotel. The purity and taste are unmatched, and our guests always appreciate the quality. Their customer service is exceptional.' },
  { name: 'Praveen Kumar', role: 'Corporate Client', quote: 'Switching to Manyam Foods for our corporate supply was the best decision. The bulk ordering process is seamless and the product quality speaks for itself. Truly a premium brand.' },
];

const stats = [
  { value: '5', suffix: '+', label: 'Product Variants' },
  { value: '100', prefix: '', suffix: '%', label: 'Quality Assured' },
  { value: '500', suffix: '+', label: 'Happy Clients' },
  { value: '3', suffix: '+', label: 'Integrated Entities' },
];

const blogPosts = [
  {
    title: 'FSSAI Updates Packaged Water Standards',
    date: 'Jul 15, 2026',
    readTime: '3 min read',
    description: 'New FSSAI regulations for 2026 bring enhanced safety protocols. Learn how Manyam Foods stays ahead of compliance requirements.',
  },
  {
    title: 'Expanding Distribution to New Regions',
    date: 'Jul 8, 2026',
    readTime: '2 min read',
    description: "We're excited to announce our expansion into 3 new districts in Andhra Pradesh, bringing pure drinking water to more communities.",
  },
  {
    title: 'The Science Behind RO Purification',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    description: 'Understanding how reverse osmosis technology works and why it\'s the gold standard for producing safe, clean drinking water at scale.',
  },
];

const faqItems = [
  { question: 'What purification methods do you use?', answer: 'We use a multi-stage purification process including Reverse Osmosis (RO), UV sterilization, and ozonization. Every batch is lab-tested to meet FSSAI and BIS drinking water standards, ensuring the highest quality and safety.' },
  { question: 'What packaging sizes are available?', answer: 'We offer a comprehensive range from 250ml pouches for personal use to 20-litre jars for institutional supply. Our most popular sizes include 500ml bottles, 1-litre bottles, and 2-litre bottles, all available in bulk quantities.' },
  { question: 'Do you offer bulk order discounts?', answer: 'Yes! We provide competitive pricing for bulk orders. Whether you need supply for a hotel, corporate office, event, or retail store, our dedicated team will work with you to create a custom pricing plan that fits your needs.' },
  { question: 'How can I become a distributor?', answer: 'We welcome distribution partnerships across Andhra Pradesh. Contact us through our enquiry form or call us directly at +91 9177418031. Our team will guide you through the partnership process, including territory allocation and pricing.' },
  { question: 'Is your water FSSAI certified?', answer: 'Absolutely. Manyam Foods Private Limited is fully FSSAI licensed and BIS compliant. Our manufacturing facility follows strict quality control protocols, and every product batch undergoes rigorous testing before distribution.' },
];

const partners = [
  { icon: Building2, name: 'Hotels & Resorts', description: 'Premium water supply for hospitality industry' },
  { icon: UtensilsCrossed, name: 'Restaurants & Cafes', description: 'Consistent quality for food service' },
  { icon: Building, name: 'Corporate Offices', description: 'Bulk supply for employee hydration' },
  { icon: Heart, name: 'Hospitals & Clinics', description: 'Safe, pure water for healthcare' },
  { icon: GraduationCap, name: 'Educational Institutions', description: 'Reliable water for schools and colleges' },
  { icon: PartyPopper, name: 'Event Management', description: 'Bulk water for events and functions' },
  { icon: Store, name: 'Retail Stores', description: 'Distribution for retail outlets' },
  { icon: Landmark, name: 'Government Offices', description: 'Trusted by government institutions' },
];

export const metadata = {
  title: 'Manyam Foods - Premium Packaged Drinking Water | Pure & Safe Hydration',
  description: 'Manyam Foods Private Limited delivers premium packaged drinking water through advanced RO, UV purification. FSSAI certified, 100% hygienic bottled water from 250ml to 20L.',
};

export default function HomePage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <Hero
        title="Refreshing Quality, Trusted Purity"
        subtitle="Manyam Foods Private Limited — Delivering safe, pure, and hygienically processed drinking water for households, businesses, and institutions through advanced purification technology."
        ctaText="Learn More"
        ctaHref="/about"
        backgroundImage="/images/hero-bg.png"
      />

      {/* ========== PRODUCTS OVERVIEW ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Products"
              subtitle="We offer a comprehensive range of packaged drinking water products from 250ml to 20L, providing affordable, high-quality hydration solutions."
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 80}>
                <ProductCard
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                  
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <Button variant="secondary" href="/products">
                View All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true"><span /></div>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding bg-light-green/40 dark:bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Why Choose Us"
              subtitle="We are committed to delivering the highest quality packaged drinking water through innovation, operational excellence, and customer-focused service."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      
   <section className="py-8 bg-primary/5 dark:bg-primary/10 overflow-hidden">
        <Marquee speed={20} className="py-4">
          <div className="flex items-center gap-12 px-6">
            {[
              { icon: ShieldCheck, label: 'FSSAI Certified' },
              { icon: BadgeCheck, label: 'ISO Standards' },
              { icon: Leaf, label: '100% Natural' },
              { icon: Recycle, label: 'Eco-Friendly Packaging' },
              { icon: Zap, label: 'Advanced RO Purification' },
              { icon: HeartHandshake, label: '500+ Happy Clients' },
              { icon: Award, label: 'Premium Quality' },
              { icon: Factory, label: 'Own Manufacturing' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-primary/70 dark:text-primary-light/60 whitespace-nowrap">
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
      {/* ========== TRUSTED BY ========== */}
      <section className="section-padding bg-light-green/20 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Trusted By Businesses Across Andhra Pradesh"
              subtitle="Delivering reliable hydration solutions to diverse industries and institutions."
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.name} delay={index * 80}>
                <div className="glass-card rounded-2xl p-5 border border-light-gray/20 dark:border-white/5 hover-glow transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3">
                    <partner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm">{partner.name}</h3>
                  <p className="text-medium-text dark:text-dark-text-muted text-xs mt-1 leading-relaxed">{partner.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LATEST UPDATES (Blog/News) ========== */}
      {/* <section className="section-padding bg-light-green/30 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Latest Updates"
              subtitle="Stay informed about our products, industry news, and company updates."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 120}>
                <div className="glass-card rounded-2xl overflow-hidden border border-light-gray/20 dark:border-white/5 hover:-translate-y-2 transition-all duration-500 hover-glow group cursor-pointer h-full flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-primary to-primary-light" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-medium-text dark:text-dark-text-muted mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-dark-text dark:text-dark-text-light leading-snug">{post.title}</h3>
                    <p className="text-sm text-medium-text dark:text-dark-text-muted mt-2 leading-relaxed line-clamp-2 flex-1">{post.description}</p>
                    <div className="mt-4 pt-3 border-t border-light-gray/10 dark:border-white/5">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Read More <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ========== TESTIMONIALS ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Testimonials"
              subtitle="Hear from our valued partners and customers who trust Manyam Foods for their hydration needs."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 120}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

     

      {/* ========== ABOUT PREVIEW ========== */}
      {/* <section className="section-padding bg-light-green/30 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">About Us</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-text dark:text-dark-text-light leading-tight">
                  A Trusted Packaged Drinking Water Manufacturer
                </h2>
                <p className="text-medium-text dark:text-dark-text-muted mt-4 leading-relaxed">
                  Manyam Foods Private Limited is a trusted manufacturer and supplier of premium packaged drinking water, dedicated to delivering safe, pure, and hygienically processed drinking water for households, businesses, and institutions.
                </p>
                <p className="text-medium-text dark:text-dark-text-muted mt-3 leading-relaxed">
                  We combine advanced purification technology, strict quality control, and efficient operations to ensure every bottle meets the highest standards of safety and customer satisfaction.
                </p>
                <div className="mt-6">
                  <Button variant="secondary" href="/about">
                    Learn More About Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-light-green dark:to-primary/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30" />
                    <div className="relative text-center p-8">
                      <div className="w-20 h-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Droplets className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-primary font-bold mt-4 text-lg">Our Manufacturing Facility</p>
                      <p className="text-medium-text/70 dark:text-dark-text-muted/60 text-sm mt-1">State-of-the-art purification plant in Kalikiri, AP</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-light-green dark:bg-primary/15 rounded-full" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section> */}


      {/* ========== CERTIFICATIONS MARQUEE ========== */}
   

      {/* ========== PROCESS SECTION ========== */}
    

      {/* ========== FAQ ========== */}
      {/* <section className="section-padding bg-light-green/20 dark:bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our products, services, and ordering process."
              tag="FAQ"
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <FAQ items={faqItems} />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-center mt-8 text-sm text-medium-text dark:text-dark-text-muted">
              Still have questions?{' '}
              <Link href="/contact" className="text-primary font-semibold link-underline hover:text-primary-dark transition-colors">
                Contact our team
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ========== CTA ========== */}
      {/* <CTA
        title="Ready to Experience Pure Hydration?"
        subtitle="Partner with Manyam Foods for premium packaged drinking water solutions. We welcome distributors, retailers, and institutional buyers."
        ctaText="Contact Us"
        ctaHref="/contact"
        variant="green"
      /> */}
    </>
  );
}
