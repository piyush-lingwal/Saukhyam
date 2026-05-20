import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, PackageOpen } from 'lucide-react';
import styles from './page.module.css';

const PAGE_DESCRIPTION =
  'Saukhyam Foundation returns, exchanges, and refund guidance for purchases, donations, and community materials—transparent, humane, and easy to understand.';

const SITE_ORIGIN = 'https://saukhyampads.org';

export const metadata: Metadata = {
  title: 'Returns & Refunds | Saukhyam Foundation',
  description: PAGE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}/legal/returns` },
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'eligibility', title: 'Return Eligibility' },
  { id: 'refund-conditions', title: 'Refund Conditions' },
  { id: 'damaged', title: 'Damaged or Incorrect Items' },
  { id: 'donations', title: 'Donation Refund Guidelines' },
  { id: 'exchange', title: 'Exchange Policy' },
  { id: 'how-to-return', title: 'Return Request Process' },
  { id: 'shipping', title: 'Shipping & Pickup' },
  { id: 'timeline', title: 'Refund Timeline' },
  { id: 'non-returnable', title: 'Non-Returnable Items' },
  { id: 'sustainability-hygiene', title: 'Sustainability & Hygiene' },
  { id: 'ethical-commitment', title: 'Our Ethical Commitment' },
  { id: 'contact', title: 'Contact Support' },
  { id: 'updates', title: 'Policy Updates' },
] as const;

const faqItems = [
  {
    q: 'Can I return reusable pads if I change my mind?',
    a:
      'Opened inner packaging or visibly used menstrual products cannot be returned for hygiene reasons. Unused items in original sealed packaging may be eligible within the window described in Return Eligibility. We are happy to help you choose the right product before purchase—please reach out.',
  },
  {
    q: 'What if my order arrived damaged?',
    a:
      'Contact us promptly with photos of the outer carton and damaged items. We will arrange a replacement or refund according to availability and this policy—our priority is to make it right with minimal stress for you.',
  },
  {
    q: 'Are donations refundable?',
    a:
      'Voluntary donations are generally final once processed so they can reach programs quickly. In rare cases—such as duplicate charges or clear processing errors—we will review and remedy in line with Payment & Donation Guidelines.',
  },
  {
    q: 'Do awareness kits from community programmes follow the same rules?',
    a:
      'Materials distributed free or at nominal cost through field programmes often cannot be exchanged through the retail returns process; local coordinators may advise on swaps or replacements where appropriate and fair.',
  },
] as const;

export default function ReturnsRefundPage() {
  /** FAQ schema for SEO (rich results eligibility where supported). */
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  /** Breadcrumb structured data */
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Returns & Refunds',
        item: `${SITE_ORIGIN}/legal/returns`,
      },
    ],
  };

  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Returns & Refund Policy | Saukhyam Foundation',
    description: PAGE_DESCRIPTION,
    isPartOf: { '@type': 'WebSite', name: 'Saukhyam Foundation', url: `${SITE_ORIGIN}/` },
    dateModified: '2026-05-20',
  };

  return (
    <>
      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageStructuredData, breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        {/* Skip targets are announced for keyboard users */}
        <a href="#main-content" className={styles.skipLink}>
          Skip to main content
        </a>

        <header className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <ol className={styles.breadcrumbList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page">Returns &amp; Refunds</li>
              </ol>
            </nav>

            <p className={styles.heroEyebrow}>
              <span className={styles.badge}>
                <PackageOpen size={16} aria-hidden="true" />
                Purchases &amp; Support
              </span>
            </p>

            <h1 id="returns-heading">Returns &amp; Refund Policy</h1>
            <p className={styles.introLead}>
              We want every interaction—with our products, programmes, or support channels—to feel
              fair, clear, and kind. This page explains how returns and refunds work, with special
              care for dignity, hygiene, sustainability, and the realities of NGO operations.
            </p>

            <div className={styles.heroCtas} role="group" aria-label="Helpful links">
              <Link href="/contact" className={styles.primaryCta}>
                Start a return or question
              </Link>
              <Link href="/legal/terms" className={styles.secondaryCta}>
                Terms &amp; Conditions
              </Link>
              <Link href="/legal/privacy" className={styles.secondaryCta}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.content} aria-label="Returns and refund policy details">
          <div className="container">
            <div className={styles.layout}>
              <aside className={styles.tocOuter}>
                <div className={styles.toc}>
                  <p id="toc-label" className={styles.tocTitle}>
                    On this page
                  </p>
                  <nav className={styles.tocNav} aria-labelledby="toc-label">
                    {tocItems.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                        {item.title}
                      </a>
                    ))}
                    <a href="#faq" className={styles.tocLink}>
                      FAQ
                    </a>
                  </nav>
                </div>
              </aside>

              <div className={styles.articleColumn}>
                <article className={styles.card} aria-labelledby="policy-updated-heading">
                  <p className={styles.updated} id="policy-updated-heading">
                    Last updated:{' '}
                    <time dateTime="2026-05-20">May 20, 2026</time>
                  </p>

                  <div className={styles.prose}>
                    <section id="introduction" className={styles.section} aria-labelledby="h-intro">
                      <h2 id="h-intro">Introduction</h2>
                      <p>
                        Saukhyam Foundation serves people through reusable menstrual health products,
                        donations, awareness materials, training resources, and community initiatives.
                        This policy balances your rights as a customer or supporter with our duty to
                        use every rupee responsibly, protect beneficiaries’ dignity, and keep products
                        safe.
                      </p>
                    </section>

                    <section id="eligibility" className={styles.section} aria-labelledby="h-elig">
                      <h2 id="h-elig">Return Eligibility</h2>
                      <p>
                        Purchases made through our authorised channels may be eligible for return or
                        exchange when items are unused, in original sealed packaging where applicable,
                        and returned within the timeframe stated at checkout or on your order confirmation
                        (typically within a limited window such as 7–14 days from delivery, unless Indian
                        consumer rules or promotions specify otherwise).
                      </p>
                      <p>
                        To be eligible, you will usually need proof of purchase (order ID, receipt, or
                        confirmation email). Customised bulk or institutional orders may have separate
                        terms agreed at the time of sale.
                      </p>
                    </section>

                    <section id="refund-conditions" className={styles.section} aria-labelledby="h-ref">
                      <h2 id="h-ref">Refund Conditions</h2>
                      <p>
                        Once we verify that returned goods meet hygiene and packaging requirements,
                        refunds are issued to the original payment method where possible. If that is not
                        technically feasible (for example certain wallets or gateways), we will offer an
                        alternative that is transparent and mutually acceptable.
                      </p>
                      <p>
                        Partial refunds may apply if only part of a bundle is eligible, or if
                        promotional shipping was subsidised—we will explain any adjustment clearly before
                        finalising it.
                      </p>
                    </section>

                    <section id="damaged" className={styles.section} aria-labelledby="h-dmg">
                      <h2 id="h-dmg">Damaged or Incorrect Product Handling</h2>
                      <p>
                        If you receive the wrong item, a manufacturing defect we can reasonably attribute
                        before use, or damage caused in transit, please contact us quickly with photos and
                        your order details. We prioritise replacements when stock allows; otherwise a
                        refund or credit may be offered. We handle these cases with empathy—no blame,
                        just problem-solving.
                      </p>
                    </section>

                    <section id="donations" className={styles.section} aria-labelledby="h-don">
                      <h2 id="h-don">Donation Refund Guidelines</h2>
                      <p>
                        Donations support programmes and urgent community needs; they are generally treated
                        as irrevocable gifts once settled. Exceptions we may honour include duplicate
                        accidental charges, demonstrable gateway errors, or other situations where
                        reversing the transaction is ethically necessary and legally permitted.
                      </p>
                      <p>
                        Donation acknowledgement and tax documentation, where offered, depend on local
                        regulations and our reporting capacity—thank you for your patience as we process
                        these carefully.
                      </p>
                    </section>

                    <section id="exchange" className={styles.section} aria-labelledby="h-ex">
                      <h2 id="h-ex">Exchange Policy</h2>
                      <p>
                        We may exchange products for another size or pack when inventory and hygiene rules
                        allow—for example swapping an unused sealed pack for a different variant.
                        Awareness literature or low-cost informational kits exchanged through outreach may
                        be handled separately by programme teams.
                      </p>
                    </section>

                    <section id="how-to-return" className={styles.section} aria-labelledby="h-how">
                      <h2 id="h-how">Return Request Process</h2>
                      <ol className={styles.numbered}>
                        <li>
                          Email or message us via the{' '}
                          <Link href="/contact" className={styles.inlineLink}>
                            Contact
                          </Link>{' '}
                          page with your order number and a short explanation.
                        </li>
                        <li>We will confirm eligibility and send return instructions.</li>
                        <li>
                          Pack items securely using outer packaging where possible; include any forms we
                          provide.
                        </li>
                        <li>
                          Ship or hand over as instructed. Retain tracking or proof until your case is
                          closed.
                        </li>
                      </ol>
                    </section>

                    <section id="shipping" className={styles.section} aria-labelledby="h-ship">
                      <h2 id="h-ship">Shipping &amp; Pickup Information</h2>
                      <p>
                        Unless we state otherwise for a defective or incorrectly fulfilled order, return
                        shipping costs may be your responsibility. For approved quality issues, we may
                        provide a prepaid label or reimburse reasonable postage after review, consistent
                        with our operational capacity as a nonprofit.
                      </p>
                      <p>
                        Pickup options, if available in your area, will be coordinated case by case.
                      </p>
                    </section>

                    <section id="timeline" className={styles.section} aria-labelledby="h-time">
                      <h2 id="h-time">Refund Processing Timeline</h2>
                      <p>
                        After we receive and inspect eligible returns, most refunds are initiated within a
                        few business days, though banks and payment partners may take additional time to
                        show the amount on your statement. We will keep you informed if there are delays
                        outside our control.
                      </p>
                    </section>

                    <section id="non-returnable" className={styles.section} aria-labelledby="h-nr">
                      <h2 id="h-nr">Non-Returnable Items</h2>
                      <p>Typically non-returnable (subject to mandatory law):</p>
                      <ul className={styles.bullet}>
                        <li>Opened sanitary or intimate-use products whose hygiene seal is broken</li>
                        <li>Clearly used washable pads or liners</li>
                        <li>Free or donor-funded distribution packs already given to beneficiaries</li>
                        <li>
                          Printed awareness materials customised for events or locales (unless misprinted)
                        </li>
                        <li>Digital downloads or licences once accessed</li>
                        <li>Items explicitly marked final sale</li>
                      </ul>
                    </section>

                    <section
                      id="sustainability-hygiene"
                      className={styles.section}
                      aria-labelledby="h-sus"
                    >
                      <h2 id="h-sus">Sustainability &amp; Hygiene Considerations</h2>
                      <p>
                        Reusable pads are designed for long-term use and planetary kindness. Returned
                        goods must not pose a hygiene risk—this protects warehouse staff, volunteers, and
                        future customers while honouring menstrual dignity.
                      </p>
                      <p>
                        We encourage gentle care and repair where possible before return; damaged goods
                        from normal wear after months of use generally fall outside product return scope
                        but we can advise on care guides or replacement inserts when available.
                      </p>
                    </section>

                    <section id="ethical-commitment" className={styles.section} aria-labelledby="h-eth">
                      <h2 id="h-eth">NGO Ethical Commitment</h2>
                      <p>
                        Ayurarogya Saukhyam Foundation stewards funds and goodwill with accountability. We
                        avoid exploitative narratives, honour consent in storytelling about programmes, and
                        apply this policy evenly—whether you are a first-time shopper, donor, volunteer,
                        or community partner—without discrimination.
                      </p>
                    </section>

                    <section id="contact" className={styles.section} aria-labelledby="h-cont">
                      <h2 id="h-cont">Contact Support Information</h2>
                      <p>
                        We are here to help with calm, respectful support. Reach us at{' '}
                        <a href="mailto:info@saukhyampads.org" className={styles.inlineLink}>
                          info@saukhyampads.org
                        </a>{' '}
                        or{' '}
                        <a href="tel:+916282103073" className={styles.inlineLink}>
                          +91 628 210 3073
                        </a>
                        . For order-specific issues, include your order number so we can respond faster.
                      </p>
                    </section>

                    <section id="updates" className={styles.section} aria-labelledby="h-up">
                      <h2 id="h-up">Policy Updates</h2>
                      <p>
                        We may revise this Returns &amp; Refund Policy to reflect legal updates, courier
                        changes, programme growth, or improved clarity. The “Last updated” date at the top
                        will change when we do—and your continued trust matters more than fine print.
                      </p>
                    </section>
                  </div>
                </article>

                <footer className={styles.relatedStrip} aria-label="Related legal pages">
                  <p className={styles.relatedLabel}>Related</p>
                  <div className={styles.relatedLinks}>
                    <Link href="/legal/terms" className={styles.relatedLink}>
                      Terms &amp; Conditions
                    </Link>
                    <span className={styles.relatedDot} aria-hidden="true">
                      ·
                    </span>
                    <Link href="/legal/privacy" className={styles.relatedLink}>
                      Privacy Policy
                    </Link>
                    <span className={styles.relatedDot} aria-hidden="true">
                      ·
                    </span>
                    <Link href="/contact" className={styles.relatedLink}>
                      Contact
                    </Link>
                  </div>
                </footer>

                <section id="faq" className={styles.faqWrap} aria-labelledby="faq-heading">
                  <div className={styles.faqCard}>
                    <h2 id="faq-heading" className={styles.faqTitle}>
                      Frequently asked questions
                    </h2>
                    <p className={styles.faqSubtitle}>
                      Quick answers about returns, refunds, and how we balance care with practicality.
                    </p>
                    <div className={styles.faqList}>
                      {faqItems.map((item) => (
                        <details key={item.q} className={styles.faqItem} name="returns-faq">
                          <summary className={styles.faqSummary}>{item.q}</summary>
                          <div className={styles.faqAnswer}>{item.a}</div>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
