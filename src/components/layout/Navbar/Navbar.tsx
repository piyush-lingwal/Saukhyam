'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ShoppingBag, Menu, X, ChevronDown, Search,
  Users, Trophy, Heart,
  Building2, Sparkles, HandHeart, Globe,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Our Story', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Science', href: '/science' },
  {
    label: 'Impact',
    href: '/impact',
    children: [
      { label: 'Awards & Recognition', href: '/impact', icon: Trophy },
      { label: 'Press & Media', href: '/impact#press', icon: Building2 },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Heal', href: '/programs/heal', icon: Sparkles },
      { label: 'Reach', href: '/programs/reach', icon: Globe },
      { label: 'Care', href: '/programs/care', icon: HandHeart },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Saukhyam Reusable Pads"
              width={180}
              height={42}
              className={styles.logoImg}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className={styles.dropdown}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive(item.href) ? styles.active : ''}`}
                  >
                    {item.label}
                    <ChevronDown className={styles.dropdownIcon} />
                  </Link>
                  <div className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                        <div className={styles.dropdownItemIcon}>
                          <child.icon size={16} />
                        </div>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className={styles.navActions}>
            <button className={styles.actionBtn} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles.actionBtn} onClick={openCart} aria-label="Cart">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>
            <Link href="/products" className={styles.shopBtn}>
              <Heart size={16} />
              Switch Now
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileOpen ? styles.open : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={() => setIsMobileOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Saukhyam Reusable Pads"
              width={150}
              height={35}
              className={styles.logoImg}
            />
          </Link>
          <button
            className={styles.actionBtn}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {navItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => setExpandedMobile(
                    expandedMobile === item.label ? null : item.label
                  )}
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    style={{
                      transform: expandedMobile === item.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>
                {expandedMobile === item.label && (
                  <div className={styles.mobileSubLinks}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <child.icon size={16} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <Link
          href="/products"
          className={styles.mobileShopBtn}
          onClick={() => setIsMobileOpen(false)}
        >
          <ShoppingBag size={20} />
          Switch Now
        </Link>
      </div>
    </>
  );
}
