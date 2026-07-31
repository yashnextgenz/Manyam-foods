import { Factory, ShieldCheck, Sparkles, Truck, Target, Eye, Heart, Users, Award, TrendingUp, Globe, Briefcase, CheckCircle, ArrowRight, TestTubes, FlaskConical, Droplets, Shield, Activity, Beaker, FileDown } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import QualityBar from '@/components/QualityBar';
import Button from '@/components/Button';

const coreValues = [
  { icon: ShieldCheck, title: 'Quality Excellence', description: 'We never compromise on quality. Every bottle undergoes rigorous multi-stage purification and testing.' },
  { icon: Heart, title: 'Customer First', description: 'Our customers are at the heart of everything we do. We build lasting relationships through reliable service.' },
  { icon: Target, title: 'Innovation', description: 'We continuously invest in modern purification systems and automated bottling technology.' },
  { icon: Globe, title: 'Sustainability', description: 'We are committed to sustainable business practices that support healthier communities.' },
];

const team = [
  { name: 'Venkatramana Arem Reddy', role: 'Director', initials: 'VR', description: 'Providing strategic leadership and driving the company\'s growth in the packaged drinking water industry with focus on business development and operational excellence.' },
  { name: 'Manyam Deva Mallikarjuna Reddy', role: 'Director', initials: 'MR', description: 'Overseeing business operations and strategic expansion, committed to maintaining high product quality and enhancing operational efficiency.' },
];

const timeline = [
  { year: 'Foundation', title: 'Company Established', description: 'Manyam Foods Private Limited was founded with a vision to provide safe, pure drinking water to communities across Andhra Pradesh.', icon: '🏗️' },
  { year: 'FSSAI Certification', title: 'Quality Certification', description: 'Obtained FSSAI certification, meeting all regulatory standards for food safety and quality assurance.', icon: '📋' },
  { year: 'Manufacturing', title: 'Advanced Facility', description: 'Set up state-of-the-art manufacturing unit with RO, UV, and ozonization purification technology.', icon: '🏭' },
  { year: 'Growth', title: 'Market Expansion', description: 'Expanded distribution network across retail, wholesale, HoReCa, corporate and institutional segments.', icon: '📈' },
];

const certifications = [
  'FSSAI Licensed',
  'BIS Standard',
  'ISO Certified Facility',
  'Multi-Stage RO Purification',
  'UV Sterilization',
  'Ozonization Treatment',
];

const stats = [
  { value: '5', suffix: '+', label: 'Product Variants' },
  { value: '100', suffix: '%', label: 'FSSAI Certified' },
  { value: '500', suffix: '+', label: 'Satisfied Clients' },
  { value: '3', suffix: '+', label: 'Integrated Entities' },
];

const waterQualityParams = [
  { icon: TestTubes, name: 'TDS (Total Dissolved Solids)', value: '45 mg/L', range: '<500 mg/L', fill: 9 },
  { icon: FlaskConical, name: 'pH Level', value: '7.2', range: '6.5-8.5', fill: 58 },
  { icon: Droplets, name: 'Turbidity', value: '0.3 NTU', range: '<5 NTU', fill: 6 },
  { icon: Shield, name: 'Chlorides', value: '12 mg/L', range: '<250 mg/L', fill: 5 },
  { icon: Activity, name: 'Total Hardness', value: '85 mg/L', range: '<300 mg/L', fill: 28 },
  { icon: Beaker, name: 'Fluoride', value: '0.4 mg/L', range: '1.0-1.5 mg/L', fill: 40 },
];

export const metadata = {
  title: 'About Us - Manyam Foods | Our Story, Mission & Vision',
  description: 'Learn about Manyam Foods Private Limited - our mission to deliver safe, pure drinking water, our values, team, and commitment to quality and sustainability.',
};

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <Hero
        title="About Us"
        subtitle="A Trusted Packaged Drinking Water Manufacturer Committed to Purity & Quality"
        ctaText="Contact Us"
        ctaHref="/contact"
        height="medium"
        backgroundImage="/images/about-hero-bg.png"
      />

      {/* ========== COMPANY INTRODUCTION ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Who We Are</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-text dark:text-dark-text-light leading-tight">
                Delivering Safe & Pure Hydration for Every Consumer
              </h2>
              <p className="text-medium-text dark:text-dark-text-muted mt-4 leading-relaxed">
                Manyam Foods Private Limited is a trusted manufacturer and supplier of premium packaged drinking water, dedicated to delivering safe, pure, and hygienically processed drinking water for households, businesses, and institutions.
              </p>
              <p className="text-medium-text dark:text-dark-text-muted mt-3 leading-relaxed">
                We combine advanced purification technology, strict quality control, and efficient operations to ensure every bottle meets the highest standards of safety and customer satisfaction.
              </p>
              <p className="text-medium-text dark:text-dark-text-muted mt-3 leading-relaxed">
                Driven by a vision to make safe drinking water accessible to all, we continue to strengthen our manufacturing capabilities, expand our distribution network, and build lasting relationships with distributors, retailers, corporate clients, and consumers.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-light-green dark:to-primary/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-100" />
                    <div className="relative text-center p-8">
                    
                         </div>
                  </div>
                </div>
             </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS BADGES ========== */}
      <section className="py-8 bg-light-green/40 dark:bg-primary/10 border-y border-light-green dark:border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {certifications.map((cert, i) => (
              <div key={cert} className="flex items-center gap-2.5 bg-white/60 dark:bg-white/5 backdrop-blur-sm text-sm text-dark-text/80 dark:text-dark-text-light/80 font-medium px-4 py-2 rounded-full border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MISSION, VISION, VALUES ========== */}
      <section className="section-padding bg-light-green/20 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Mission */}
              <div className="glass-card glow-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/15">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mt-5 text-dark-text dark:text-dark-text-light">Our Mission</h3>
                <p className="text-medium-text dark:text-dark-text-muted text-sm mt-3 leading-relaxed">
                  To manufacture and supply premium packaged drinking water through advanced purification technology and stringent quality standards, ensuring safe, hygienic, and affordable drinking water while strengthening our distribution network.
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" aria-hidden="true" />
                </div>
              </div>

              {/* Vision */}
              <div className="glass-card glow-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/15">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mt-5 text-dark-text dark:text-dark-text-light">Our Vision</h3>
                <p className="text-medium-text dark:text-dark-text-muted text-sm mt-3 leading-relaxed">
                  To make safe drinking water accessible to all by creating a scalable packaged drinking water brand through continuous improvement, expanding market reach, and delivering trusted hydration solutions.
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" aria-hidden="true" />
                </div>
              </div>

              {/* Quality */}
              <div className="glass-card glow-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/15">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mt-5 text-dark-text dark:text-dark-text-light">Quality Promise</h3>
                <p className="text-medium-text dark:text-dark-text-muted text-sm mt-3 leading-relaxed">
                  Pure, Safe, Trusted Quality — every bottle undergoes multi-stage purification including RO, UV, and ozonization meeting the highest FSSAI standards.
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" aria-hidden="true" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide everything we do at Manyam Foods."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMPANY STORY / TIMELINE ========== */}
      <section className="section-padding bg-light-green/30 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Journey"
              subtitle="From a vision to a trusted brand — our path to delivering pure hydration."
            />
          </ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - animated gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2" aria-hidden="true">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-primary to-transparent" style={{animation:'float-slow 4s ease-in-out infinite'}} />
            </div>

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal key={index} direction={isEven ? 'left' : 'right'} delay={index * 100}>
                    <div className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                      {/* Content */}
                      <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="glass-card glow-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500">
                          <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                            <span className="text-xl" aria-hidden="true">{item.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-primary-light px-3 py-1 rounded-full badge-shine shadow-sm">{item.year}</span>
                          </div>
                          <h3 className="text-lg font-bold text-dark-text dark:text-dark-text-light">{item.title}</h3>
                          <p className="text-medium-text dark:text-dark-text-muted text-sm mt-2 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Dot - gradient circle with hover pulse */}
                      <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-primary/25 md:-translate-x-1/2 ring-4 ring-light-green/30 dark:ring-primary/20 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-500">
                        <span className="text-white font-bold text-xs">{index + 1}</span>
                        <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WATER QUALITY STANDARDS ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Water Quality Standards"
              subtitle="Every batch undergoes rigorous testing to meet and exceed national drinking water standards."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterQualityParams.map((param, index) => (
              <ScrollReveal key={param.name} delay={index * 100}>
                <div className="glass-card rounded-2xl p-5 border border-light-gray/20 dark:border-white/5 hover-glow transition-all duration-500">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <param.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-text dark:text-dark-text-light text-sm">{param.name}</h3>
                      <p className="text-primary font-semibold text-lg mt-0.5">{param.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-medium-text dark:text-dark-text-muted mb-2">
                    <span>Current Value</span>
                    <span>BIS Standard: {param.range}</span>
                  </div>
                  <QualityBar value={param.fill} delay={index * 100} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>




      {/* ========== TEAM ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Leadership"
              subtitle="Meet the people driving Manyam Foods towards excellence in packaged drinking water."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
  <ScrollReveal key={member.name} delay={index * 150}>
    <div className="glass-card rounded-2xl overflow-hidden border border-light-gray/20 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Avatar */}
      <div className="h-44 bg-primary flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {member.initials}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-dark-text dark:text-dark-text-light">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-primary">
          {member.role}
        </p>

        <p className="mt-4 text-sm leading-6 text-medium-text dark:text-dark-text-muted">
          {member.description}
        </p>
      </div>
    </div>
  </ScrollReveal>
))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding bg-light-green/30 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Why Choose Manyam Foods"
              subtitle="Strategically positioned to meet India's growing demand for safe and pure drinking water."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[TrendingUp, Globe, Award, Sparkles].map((Icon, index) => {
              const cards = [
                { title: 'Growing Market Presence', description: 'Increasing health awareness and urbanization driving sustained demand for safe, hygienic packaged drinking water.' },
                { title: 'Expanding Distribution', description: 'Strong network of distributors, retailers, wholesalers, and institutional partners enabling wider market coverage.' },
                { title: 'Quality Excellence', description: 'Advanced purification technology, strict quality control, and hygienic manufacturing ensuring consistent product quality.' },
                { title: 'Scalable Model', description: 'Diversified product portfolio from 250ml to 20L with multi-channel distribution for sustainable growth.' },
              ];
              return (
                <ScrollReveal key={cards[index].title} delay={index * 100}>
                  <FeatureCard icon={Icon} title={cards[index].title} description={cards[index].description} index={index} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

   
    </>
  );
}
