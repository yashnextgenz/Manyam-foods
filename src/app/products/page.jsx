'use client';
import { useState } from 'react';
import { Droplets, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import CTA from '@/components/CTA';
import ProductModal from '@/components/ProductModal';
import ScrollReveal from '@/components/ScrollReveal';

const allProducts = [
  { id: 1, name: '250ml Pouch', category: 'Packaged Water', description: 'Ultra-convenient single-serve pouch perfect for events, travel, and quick hydration needs. Lightweight and easy to carry.' },
  { id: 2, name: '500ml Bottle', category: 'Packaged Water', description: 'Compact and convenient for on-the-go hydration. Ideal for personal use, meetings, and outdoor activities.', image: '/images/product-500ml.png' },
  { id: 3, name: '1 Litre Bottle', category: 'Packaged Water', description: 'The perfect everyday size for home, office, and personal hydration. Our most popular format.', image: '/images/product-1litre.png' },
  { id: 4, name: '2 Litre Bottle', category: 'Packaged Water', description: 'Great for families, small gatherings, and extended hydration needs throughout the day.', image: '/images/product-2litre.png' },
  { id: 5, name: '5 Litre Can', category: 'Packaged Water', description: 'Ideal for home use, small offices, and commercial establishments requiring reliable water supply.' },
  { id: 6, name: '20 Litre Jar', category: 'Packaged Water', description: 'Bulk water solution for offices, restaurants, hotels, and institutions. The most economical choice for large-scale use.' },
  { id: 7, name: 'Traditional Goli Soda', category: 'Beverages', description: 'Authentic traditional goli soda with classic marble stopper. Refreshing carbonated drink with natural flavors.' },
  { id: 8, name: 'Lemon Goli Soda', category: 'Beverages', description: 'Zesty lemon-flavored goli soda combining traditional charm with refreshing citrus taste.' },
  { id: 9, name: 'Mixed Fruit Soda', category: 'Beverages', description: 'Delightful mixed fruit flavored soda with a perfect balance of sweetness and fizz.' },
];

const categories = ['All', 'Packaged Water', 'Beverages'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <>
      {/* ========== HERO ========== */}
      <Hero
        title="Our Products"
        subtitle="Premium packaged drinking water from 250ml to 20L, plus traditional goli soda and refreshing beverages — pure quality you can trust."
        ctaText="Enquire Now"
        ctaHref="/contact"
        height="medium"
        backgroundImage="/images/products-hero-bg.png"
      />

      {/* ========== PRODUCTS SECTION ========== */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Explore Our Range"
              subtitle="Find the perfect hydration solution for your needs, from personal use to bulk institutional supply."
            />
          </ScrollReveal>

          {/* Search & Filter Bar */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-text dark:text-dark-text-muted" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-light-gray dark:border-white/15 rounded-lg text-sm text-dark-text dark:text-dark-text-light placeholder:text-medium-text/50 dark:placeholder:text-dark-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="text-sm font-medium">Filter</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-light-green dark:bg-primary/10 text-dark-text dark:text-dark-text-light hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {displayedProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 60}>
                    <ProductCard
                      name={product.name}
                      category={product.category}
                      description={product.description}
                      image={product.image}
                      onClick={setSelectedProduct}
                    />
                  </ScrollReveal>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Load More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Droplets className="w-16 h-16 text-light-gray dark:text-dark-text-muted/30 mx-auto" />
              <p className="text-medium-text dark:text-dark-text-muted mt-4 font-medium">No products found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); setVisibleCount(6); }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          <p className="text-center text-sm text-medium-text dark:text-dark-text-muted mt-8">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>
        </div>
      </section>

      {/* ========== PRODUCT COMPARISON TABLE ========== */}
      <section className="section-padding bg-light-green/20 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Product Comparison"
              subtitle="Compare specifications across our water product range to find the perfect fit for your needs."
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] glass-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Product</th>
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Size</th>
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Best For</th>
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Min. Order</th>
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Packaging</th>
                    <th className="text-xs font-bold uppercase tracking-wider px-5 py-4 text-left">Shelf Life</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: '250ml Pouch', size: '250ml', bestFor: 'Events & Travel', minOrder: '100 units', packaging: 'Flexible pouch', shelfLife: '6 months' },
                    { name: '500ml Bottle', size: '500ml', bestFor: 'Personal Use', minOrder: '50 units', packaging: 'PET bottle', shelfLife: '12 months' },
                    { name: '1 Litre Bottle', size: '1L', bestFor: 'Home & Office', minOrder: '24 bottles', packaging: 'PET bottle', shelfLife: '12 months' },
                    { name: '2 Litre Bottle', size: '2L', bestFor: 'Families', minOrder: '12 bottles', packaging: 'PET bottle', shelfLife: '12 months' },
                    { name: '5 Litre Can', size: '5L', bestFor: 'Small Offices', minOrder: '6 cans', packaging: 'HDPE can', shelfLife: '12 months' },
                    { name: '20 Litre Jar', size: '20L', bestFor: 'Institutions', minOrder: '5 jars', packaging: 'Polycarbonate', shelfLife: '12 months' },
                  ].map((row, index) => (
                    <tr
                      key={row.name}
                      className={`hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors ${index % 2 === 0 ? 'bg-white dark:bg-dark-bg' : 'bg-light-green/20 dark:bg-white/[0.02]'}`}
                    >
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light font-semibold text-primary">{row.name}</td>
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light">{row.size}</td>
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light">{row.bestFor}</td>
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light">{row.minOrder}</td>
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light">{row.packaging}</td>
                      <td className="px-5 py-3.5 text-sm text-dark-text dark:text-dark-text-light">{row.shelfLife}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTA
        title="Need Bulk Orders or Custom Solutions?"
        subtitle="We offer competitive pricing for bulk orders, private label manufacturing, and corporate supply solutions."
        ctaText="Request a Quote"
        ctaHref="/contact"
        variant="light"
      />

      {/* ========== PRODUCT MODAL ========== */}
      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
