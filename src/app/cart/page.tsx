'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShoppingBag, Minus, Plus, Trash2, ArrowRight,
  Truck, Shield, Leaf, CreditCard, ShoppingCart,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className="container">
          <motion.div
            className={styles.emptyCart}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingCart size={80} className={styles.emptyIcon} />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added any products yet. Explore our handcrafted reusable pads and start your sustainable journey!</p>
            <Link href="/products" className={styles.shopNowBtn}>
              <ShoppingBag size={20} />
              Browse Products
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const shipping = totalPrice >= 500 ? 0 : 50;
  const finalTotal = totalPrice + shipping;

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Shopping Cart</h1>
        <p className={styles.itemCount}>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>

        <div className={styles.cartLayout}>
          {/* Cart Items */}
          <motion.div
            className={styles.cartItems}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {items.map((item) => (
              <motion.div key={item.product.id} variants={fadeInUp} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  {item.product.images[0] ? (
                    <Image src={item.product.images[0]} alt={item.product.name} width={120} height={120} />
                  ) : (
                    <Leaf size={32} style={{ color: 'var(--green-300)', margin: 'auto', display: 'block', paddingTop: '30px' }} />
                  )}
                </div>

                <div className={styles.itemDetails}>
                  <Link href={`/products/${item.product.slug}`} className={styles.itemName}>
                    {item.product.name}
                  </Link>
                  <div className={styles.itemPrice}>₹{item.product.price}</div>
                  <div className={styles.itemMeta}>
                    Subtotal: ₹{item.product.price * item.quantity}
                  </div>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <div className={styles.qtyValue}>{item.quantity}</div>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className={styles.summary}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.summaryTitle}>Order Summary</h3>

            <div className={styles.summaryRow}>
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span className={shipping === 0 ? styles.savings : ''}>
                {shipping === 0 ? 'FREE' : `₹${shipping}`}
              </span>
            </div>
            {shipping > 0 && (
              <div className={styles.summaryRow}>
                <span style={{ color: 'var(--color-primary)', fontSize: '0.75rem' }}>
                  Add ₹{500 - totalPrice} more for free shipping
                </span>
              </div>
            )}

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>

            <button className={styles.checkoutBtn}>
              <CreditCard size={20} />
              Proceed to Checkout
            </button>

            <Link href="/products" className={styles.continueLink}>
              Continue Shopping
              <ArrowRight size={16} />
            </Link>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <Truck size={14} />
                Free Ship 500+
              </div>
              <div className={styles.trustItem}>
                <Shield size={14} />
                Secure Payment
              </div>
              <div className={styles.trustItem}>
                <Leaf size={14} />
                Eco-Friendly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
