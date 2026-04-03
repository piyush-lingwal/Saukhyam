'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag, Leaf, Eye, Truck, Shield,
  RefreshCw, Heart, ChevronRight, PackageSearch,
  ShieldCheck, Droplets, Wind,
} from 'lucide-react';
import { products, type Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

type Category = 'all' | Product['category'];
type SortOption = 'default' | 'price-low' | 'price-high' | 'name';

const categoryLabels: Record<Category, string> = {
  all: 'All Products',
  starter: 'Starter Packs',
  daily: 'Daily Use',
  heavy: 'Heavy Flow',
  teen: 'Teen',
  value: 'Value Packs',
};

const trustItems = [
  { icon: ShieldCheck, label: 'Leak Proof', sub: 'PU barrier layer' },
  { icon: Heart,       label: 'Gentle on Skin', sub: '100% cotton surface' },
  { icon: Leaf,        label: 'Chemical Free', sub: 'Natural banana fiber' },
  { icon: Wind,        label: 'Dries Fast', sub: 'Breathable design' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ProductsPage() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredProducts = useMemo(() => {
    let filtered = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [activeCategory, sortBy]);

  const availableCategories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['all', ...Array.from(cats)] as Category[];
  }, []);

  return (
    <div className={styles.productsPage}>
      {/* ── Page Hero ── */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Products</span>
          </div>
          <h1 className={styles.heroTitle}>Our Products</h1>
          <p className={styles.heroSubtitle}>
            Handcrafted reusable pads made with banana fiber.<br />
            Chemical free, eco-friendly, and built to last 2-3 years.
          </p>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className={styles.trustBar}>
        <div className="container">
          <motion.div
            className={styles.trustGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {trustItems.map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <item.icon size={22} />
                </div>
                <div>
                  <div className={styles.trustLabel}>{item.label}</div>
                  <div className={styles.trustSub}>{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container">
        {/* Toolbar */}

        <div className={styles.toolbar}>
          <div className={styles.filterTabs}>
            {availableCategories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterTab} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <span className={styles.resultCount}>
              <strong>{filteredProducts.length}</strong> products
            </span>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            className={styles.productGrid}
            key={activeCategory + sortBy}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className={styles.productCard}>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}

                <Link href={`/products/${product.slug}`}>
                  <div className={styles.productImageWrap}>
                    {product.images[0] ? (
                      <img src={product.images[0]} alt={product.name} loading="lazy" />
                    ) : (
                      <Leaf size={48} className={styles.productPlaceholder} />
                    )}
                    <div className={styles.quickActions}>
                      <button className={styles.quickActionBtn} aria-label="Quick view">
                        <Eye size={16} />
                      </button>
                      <button className={styles.quickActionBtn} aria-label="Wishlist">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className={styles.productInfo}>
                  <div className={styles.productCategory}>
                    {categoryLabels[product.category]}
                  </div>
                  <Link href={`/products/${product.slug}`} className={styles.productName}>
                    {product.name}
                  </Link>
                  <div className={styles.productFeatures}>
                    {product.features.slice(0, 3).map(f => (
                      <span key={f} className={styles.featureTag}>{f}</span>
                    ))}
                  </div>
                  <div className={styles.productBottom}>
                    <div>
                      <span className={styles.productPrice}>₹{product.price}</span>
                      {product.comparePrice && (
                        <span className={styles.comparePrice}>₹{product.comparePrice}</span>
                      )}
                    </div>
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => addItem(product)}
                    >
                      <ShoppingBag size={16} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className={styles.emptyState}>
            <PackageSearch size={64} className={styles.emptyIcon} />
            <h3>No products found</h3>
            <p>Try adjusting your filters to find what you&apos;re looking for.</p>
          </div>
        )}

        {/* ── Benefits Banner ── */}
        <motion.div
          className={styles.benefitsBanner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Truck size={22} /></div>
            <div className={styles.benefitLabel}>Free Shipping</div>
            <div className={styles.benefitSub}>Orders above ₹500</div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Shield size={22} /></div>
            <div className={styles.benefitLabel}>Quality Assured</div>
            <div className={styles.benefitSub}>100% chemical free</div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.benefitItem}>
            <div className={styles.benefitIcon}><RefreshCw size={22} /></div>
            <div className={styles.benefitLabel}>Lasts 2-3 Years</div>
            <div className={styles.benefitSub}>Save ₹3,000+/year</div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Leaf size={22} /></div>
            <div className={styles.benefitLabel}>Eco-Friendly</div>
            <div className={styles.benefitSub}>Biodegradable Materials</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
