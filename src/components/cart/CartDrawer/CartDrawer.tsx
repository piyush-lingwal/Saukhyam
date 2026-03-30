'use client';

import Link from 'next/link';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShoppingBag size={20} />
            Your Cart
            <span className={styles.itemCount}>({totalItems})</span>
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items or Empty */}
        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <Leaf size={36} />
            </div>
            <h3 className={styles.emptyTitle}>Your cart is empty</h3>
            <p className={styles.emptyText}>
              Add some eco-friendly goodness to your cart!
            </p>
            <Link href="/products" className={styles.checkoutBtn} onClick={closeCart}>
              Browse Products
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.product.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    {item.product.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        loading="lazy"
                      />
                    ) : (
                      <Leaf size={28} className={styles.itemPlaceholder} />
                    )}
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.product.name}</span>
                    <span className={styles.itemPrice}>₹{item.product.price}</span>
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControl}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
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
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.subtotalRow}>
                <span className={styles.subtotalLabel}>Subtotal</span>
                <span className={styles.subtotalValue}>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <p className={styles.shippingNote}>Shipping calculated at checkout</p>
              <Link href="/checkout" className={styles.checkoutBtn} onClick={closeCart}>
                Proceed to Checkout
                <ArrowRight size={18} />
              </Link>
              <button className={styles.continueLink} onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
