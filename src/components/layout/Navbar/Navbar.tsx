'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingBag, Menu, X, Search, Heart, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Our Story', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Science', href: '/science' },
  { label: 'Awards', href: '/impact' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [pathname]);

  // Focus input when search bar opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    }
  }, [isSearchOpen]);

  // Close search bar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
      handleSearchClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isSearchOpen ? styles.searchActive : ''}`}>
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

          {/* Desktop Nav Links - hidden when search is open */}
          <div className={`${styles.navLinks} ${isSearchOpen ? styles.navLinksHidden : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Inline Search Bar - expands when open */}
          {isSearchOpen && (
            <form
              className={styles.searchBar}
              onSubmit={handleSearchSubmit}
              role="search"
              aria-label="Search products"
            >
              <Search size={18} className={styles.searchBarIcon} aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, e.g. banana fiber pad…"
                className={styles.searchBarInput}
                aria-label="Search products"
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  type="submit"
                  className={styles.searchBarSubmit}
                  aria-label="Go to search results"
                >
                  <ArrowRight size={16} />
                </button>
              )}
              <button
                type="button"
                className={styles.searchBarClose}
                onClick={handleSearchClose}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </form>
          )}

          {/* Right Actions */}
          <div className={styles.navActions}>
            <button
              className={`${styles.actionBtn} ${isSearchOpen ? styles.actionBtnActive : ''}`}
              onClick={isSearchOpen ? handleSearchClose : handleSearchOpen}
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button className={styles.actionBtn} onClick={openCart} aria-label="Open cart">
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
          <Link
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setIsMobileOpen(false)}
          >
            {item.label}
          </Link>
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
