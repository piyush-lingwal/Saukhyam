'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ShoppingBag, Leaf, Star, ChevronRight, Minus, Plus,
  Truck, Shield, RefreshCw, CheckCircle2, Heart, Zap,
  ShieldCheck, Wind,
} from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';


const categoryLabels: Record<string, string> = {
  starter: 'Starter Packs',
  daily: 'Daily Use',
  heavy: 'Heavy Flow',
  teen: 'Teen',
  value: 'Value Packs',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className={styles.detailPage}>
        <div className="container">
          <div className={styles.notFound}>
            <Leaf size={64} style={{ color: 'var(--green-300)', marginBottom: 'var(--space-4)' }} />
            <h1>Product Not Found</h1>
            <p>The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Link href="/products" className={styles.backLink}>
              <ShoppingBag size={18} />
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className={styles.detailPage}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products">Products</Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className={styles.productLayout}>
          {/* Gallery */}
          <motion.div
            className={styles.gallery}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mainImage}>
              {product.badge && <span className={styles.imageBadge}>{product.badge}</span>}
              {product.images[0] ? (
                <img src={product.images[0]} alt={product.name} />
              ) : (
                <Leaf size={96} className={styles.imagePlaceholder} />
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            className={styles.details}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.category}>{categoryLabels[product.category]}</div>
              <h1 className={styles.productName}>{product.name}</h1>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.rating}>
              <div className={styles.ratingStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className={styles.ratingText}>4.8 / 5 (120+ reviews)</span>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.priceRow}>
              <span className={styles.currentPrice}>₹{product.price}</span>
              {product.comparePrice && (
                <>
                  <span className={styles.oldPrice}>₹{product.comparePrice}</span>
                  <span className={styles.saveBadge}>
                    Save {Math.round((1 - product.price / product.comparePrice) * 100)}%
                  </span>
                </>
              )}
            </motion.div>

            <motion.p variants={fadeInUp} className={styles.description}>
              {product.description}
            </motion.p>

            {/* Quantity + Add to Cart */}
            <motion.div variants={fadeInUp} className={styles.quantitySection}>
              <span className={styles.quantityLabel}>Quantity</span>
              <div className={styles.quantityControls}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <div className={styles.qtyValue}>{quantity}</div>
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.actionButtons}>
              <button className={styles.btnAddToCart} onClick={handleAddToCart}>
                <ShoppingBag size={20} />
                Add to Cart — ₹{product.price * quantity}
              </button>
              <Link href="/cart" className={styles.btnBuyNow}>
                <Zap size={20} />
                Buy Now
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className={styles.featuresGrid}>
              {product.features.map(f => (
                <div key={f} className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  {f}
                </div>
              ))}
            </motion.div>

            {/* What's Included */}
            <motion.div variants={fadeInUp} className={styles.includesSection}>
              <h3 className={styles.includesTitle}>What&apos;s Inside the Pack</h3>
              <div className={styles.includesList}>
                {product.includes.map(item => (
                  <div key={item} className={styles.includesItem}>
                    <CheckCircle2 size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <Truck size={16} />
                Free Shipping
              </div>
              <div className={styles.trustBadge}>
                <Shield size={16} />
                100% Chemical Free
              </div>
              <div className={styles.trustBadge}>
                <RefreshCw size={16} />
                Lasts 2-3 Years
              </div>
              <div className={styles.trustBadge}>
                <Heart size={16} />
                Handcrafted
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>You May Also Like</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(p => (
                <Link key={p.id} href={`/products/${p.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedCardImage}>
                    {p.images[0] ? (
                      <img src={p.images[0]} alt={p.name} loading="lazy" />
                    ) : (
                      <Leaf size={40} className={styles.imagePlaceholder} />
                    )}
                  </div>
                  <div className={styles.relatedCardInfo}>
                    <div className={styles.relatedCardName}>{p.name}</div>
                    <div className={styles.relatedCardPrice}>₹{p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
