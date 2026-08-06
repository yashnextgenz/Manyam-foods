'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Droplets, GlassWater, Sparkles, CheckCircle, Minus, Plus, ShoppingCart, Package, Ruler, Truck } from 'lucide-react';

const categoryMeta = {
  'Packaged Water': { icon: Droplets, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/50' },
  'Beverages': { icon: GlassWater, color: 'from-orange-400 to-amber-500', bg: 'bg-orange-50 dark:bg-orange-950/50' },
  'New Products': { icon: Sparkles, color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50 dark:bg-purple-950/50' },
};

const productDetails = {
  '250ml Pouch': { sizes: ['250ml'], features: ['Ultra-convenient single serve', 'Lightweight & portable', 'Perfect for events & travel', 'Recyclable packaging'], minOrder: '100 units' },
  '500ml Bottle': { sizes: ['500ml'], features: ['Personal daily hydration', 'Compact & convenient', 'Leak-proof cap design', 'Ideal for meetings & outdoor'], minOrder: '50 units' },
  '1 Litre Bottle': { sizes: ['1L'], features: ['Most popular format', 'Home & office staple', 'Easy-to-pour design', 'FSSAI certified purity'], minOrder: '24 bottles' },
  '2 Litre Bottle': { sizes: ['2L'], features: ['Great for families', 'Perfect for gatherings', 'Extended hydration', 'Cost-effective choice'], minOrder: '12 bottles' },
  '5 Litre Can': { sizes: ['5L'], features: ['Home water supply', 'Small office use', 'Commercial establishments', 'Easy-pour spout'], minOrder: '6 cans' },
  '20 Litre Jar': { sizes: ['20L'], features: ['Bulk institutional supply', 'Water dispenser compatible', 'Most economical per litre', 'Offices, hotels, restaurants'], minOrder: '5 jars' },
  'Traditional Goli Soda': { sizes: ['200ml'], features: ['Classic marble stopper', 'Authentic traditional taste', 'Natural ingredients', 'Nostalgic experience'], minOrder: '50 units' },
  'Lemon Goli Soda': { sizes: ['200ml'], features: ['Refreshing citrus flavor', 'Marble stopper closure', 'Natural lemon extract', 'Summer favorite'], minOrder: '50 units' },
  'Mixed Fruit Soda': { sizes: ['200ml'], features: ['Perfect fruit balance', 'Fizzy & refreshing', 'Natural fruit flavors', 'Great for parties'], minOrder: '50 units' },
  '500ml Bottle': { sizes: ['500ml'], features: ['Personal daily hydration', 'Compact & convenient', 'Leak-proof cap design'], minOrder: '24 bottles' },
  '1 Litre Bottle': { sizes: ['1L'], features: ['Most popular format', 'Home & office staple'], minOrder: '24 bottles' },
  '2 Litre Bottle': { sizes: ['2L'], features: ['Great for families', 'Perfect for gatherings'], minOrder: '12 bottles' },
  'Soft Soda': { sizes: ['200ml', '300ml'], features: ['Traditional goli soda', 'Authentic taste', 'Refreshing & natural'], minOrder: '50 units' },
  'Upcoming Drinks': { sizes: ['TBD'], features: ['New flavors in development', 'Premium ingredients', 'Coming soon'], minOrder: 'TBD' },
};

export default function ProductModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !product) return null;

  const details = productDetails[product.name] || { sizes: [], features: [], minOrder: 'N/A' };
  const meta = categoryMeta[product.category] || categoryMeta['Packaged Water'];
  const Icon = meta.icon;

  const handleClose = () => {
    onClose();
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={product.name}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md" onClick={handleClose} />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-black/50 max-w-lg w-full max-h-[90vh] overflow-y-auto scrollbar-thin animate-fade-in border border-light-gray/20 dark:border-white/10">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-dark-text dark:text-dark-text-light hover:text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-110"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Area */}
        <div className={`aspect-[16/9] bg-gradient-to-br ${meta.color} flex items-center justify-center relative overflow-hidden rounded-t-3xl`}>
          {/* Animated background shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full" style={{animation:'float 5s ease-in-out infinite'}} aria-hidden="true" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border border-white/10 rounded-full" style={{animation:'float 7s ease-in-out infinite 1.5s'}} aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="relative flex flex-col items-center">
            <div className="w-24 h-24 bg-white/25 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
              <Icon className="w-12 h-12 text-white" style={{filter:'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'}} />
            </div>
            <span className="mt-3 text-white font-bold text-xs uppercase tracking-widest bg-white/15 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">{product.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-dark-text dark:text-dark-text-light">{product.name}</h2>
          <p className="text-medium-text dark:text-dark-text-muted mt-2 text-sm leading-relaxed">{product.description}</p>

          {/* Features with enhanced styling */}
          <div className="mt-6">
            <h3 className="text-xs font-bold text-dark-text dark:text-dark-text-light uppercase tracking-wider mb-3 flex items-center gap-2">
              <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary-light rounded-full" aria-hidden="true" />
              Key Features
            </h3>
            <ul className="space-y-2.5">
              {details.features.map((f, i) => (
                <li key={f} className="flex items-start gap-3 text-sm text-dark-text dark:text-dark-text-light">
                  <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Grid with icons */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="glass-card rounded-xl p-3 text-center hover:-translate-y-0.5 transition-all duration-300">
              <Package className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <p className="text-[10px] font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Sizes</p>
              <p className="text-xs font-bold text-dark-text dark:text-dark-text-light mt-0.5">{details.sizes.join(', ')}</p>
            </div>
            <div className="glass-card rounded-xl p-3 text-center hover:-translate-y-0.5 transition-all duration-300">
              <Ruler className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <p className="text-[10px] font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Min. Order</p>
              <p className="text-xs font-bold text-dark-text dark:text-dark-text-light mt-0.5">{details.minOrder}</p>
            </div>
            <div className="glass-card rounded-xl p-3 text-center hover:-translate-y-0.5 transition-all duration-300">
              <Truck className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <p className="text-[10px] font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Delivery</p>
              <p className="text-xs font-bold text-dark-text dark:text-dark-text-light mt-0.5">AP State</p>
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-light-gray dark:border-white/15 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 flex items-center justify-center text-medium-text dark:text-dark-text-muted hover:text-white hover:bg-primary transition-all duration-200"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-14 h-11 flex items-center justify-center font-bold text-dark-text dark:text-dark-text-light border-x border-light-gray dark:border-white/15 tabular-nums text-base">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 flex items-center justify-center text-medium-text dark:text-dark-text-muted hover:text-white hover:bg-primary transition-all duration-200"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <a
              href={`https://wa.me/919177418031?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.category}). Quantity: ${quantity}. Please share pricing details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl px-6 py-3 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-sm btn-shimmer overflow-hidden"
            >
              <ShoppingCart className="w-4 h-4" />
              Enquire Now
            </a>
          </div>

          <p className="text-xs text-medium-text/50 dark:text-dark-text-muted/40 mt-3 text-center">You&apos;ll be redirected to WhatsApp to complete your enquiry.</p>
        </div>
      </div>
    </div>
  );
}
