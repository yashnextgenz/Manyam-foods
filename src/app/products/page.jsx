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
  { id: 1, name: '500ml Bottle', category: 'Packaged Water', description: 'Ultra-convenient single-serve pouch perfect for events, travel, and quick hydration needs. Lightweight and easy to carry.',image: '/images/pro500ml.jpeg'  },
  { id: 2, name: '1 Litre Bottle', category: 'Packaged Water', description: 'The perfect everyday size for home, office, and personal hydration. Our most popular format.', image: '/images/pro1l.jpeg' },
  { id: 4, name: '2 Litre Bottle', category: 'Packaged Water', description: 'Great for families, small gatherings, and extended hydration needs throughout the day.', image: '/images/pro2l.jpeg' },
 { id: 6, name: '20 Litre Jar', category: 'Packaged Water', description: 'Bulk water solution for offices, restaurants, hotels, and institutions. The most economical choice for large-scale use.',image: '/images/pro20l.jpeg' },
{ id: 8, name: 'Goli Soda', category: 'Beverages', description: 'Zesty lemon-flavored goli soda combining traditional charm with refreshing citrus taste.' ,image: '/images/golisoda3.png' },
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

 

     

      {/* ========== PRODUCT MODAL ========== */}
      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
