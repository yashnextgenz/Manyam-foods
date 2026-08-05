'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Send, CheckCircle, ArrowRight, ChevronUp } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
];

const serviceLinks = [
  { href: '/services#packaged-water', label: 'Packaged Drinking Water' },
  { href: '/services#bulk-orders', label: 'Bulk Orders' },
  { href: '/services#private-label', label: 'Private Label Manufacturing' },
  { href: '/services#corporate-supply', label: 'Corporate Supply' },
  { href: '/services#distribution', label: 'Distribution Partnership' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook', color: 'hover:bg-primary' },
  { href: 'https://www.instagram.com/manyamwater?utm_source=qr&igsh=azIwMGdrYmJmMms2', icon: Instagram, label: 'Instagram', color: 'hover:bg-prmiary' },
  { href: 'https://wa.me/919441116552', icon: MessageCircle, label: 'WhatsApp', color: 'hover:bg-primary' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate API call for demo - replace with actual API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      // const res = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.error || 'Subscription failed');
      
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-primary-dark text-white relative overflow-hidden">
      {/* Animated gradient overlay */}
 
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-primary-dark to-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-priamry-dark to-primary-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Manyam Foods</span>
                <span className="block text-[10px] text-gray-400 tracking-wider uppercase">Private Limited</span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Trusted manufacturer and supplier of premium packaged drinking water. 
              FSSAI certified, 100% hygienic, delivering pure quality you can trust.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:-translate-y-1`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5 text-gray-400">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/link"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5 text-gray-400">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/link"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5 text-gray-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400  transition-colors" />
                <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                            Door No. 8-11,Vagalla, Varipalli, Pathegada,<br />
                Kalikiri,Annamayya District,<br />
 Andhra Pradesh – 517234,India



       


                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 flex-shrink-0 text-gray-400 transition-colors" />
                <a href="tel:+919441116552" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91 9441116552
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 flex-shrink-0 text-gray-400  transition-colors" />
                <a href="mailto:manyamfoods45@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                 manyamfoods45@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

    
      </div>

      {/* Bottom Bar */}
  <div className="relative border-t border-white/5 ">
  <div className="absolute top-0 left-1/4 right-1/4 h-px " />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">

      {/* Left */}
      <p className="text-xs text-gray-400 text-center md:text-left">
        &copy; {new Date().getFullYear()} Manyam Foods Private Limited. All rights reserved.
      </p>

   
   

      {/* Right (Empty to keep center aligned) */}
      <div />
    </div>
  </div>
</div>
    </footer>
  );
}