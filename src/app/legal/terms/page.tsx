import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Scale } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Saukhyam Foundation',
  description:
    'Review the Terms & Conditions for using Saukhyam Foundation website, donations, programs, products, and community participation.',
};

const termsSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body:
      'These Terms & Conditions govern your use of Saukhyam Foundation website, products, programs, and digital resources. They are designed to protect visitors, donors, volunteers, partners, beneficiaries, and the foundation while upholding our humanitarian values.',
  },
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body:
      'By accessing or using this website, you agree to these Terms & Conditions and related policies, including our Privacy Policy. If you do not agree, please discontinue use of this website and associated services.',
  },
  {
    id: 'usage-rules',
    title: 'Website Usage Rules',
    body:
      'You agree to use this website only for lawful purposes and in ways that do not disrupt website security, content integrity, or user experience. Unauthorized attempts to access restricted systems, abuse forms, or misuse website content are prohibited.',
  },
  {
    id: 'donations-refunds',
    title: 'Donations & Refund Policy',
    body:
      'Donations made to Saukhyam Foundation are generally treated as voluntary contributions toward social impact programs. Refund requests are reviewed on a case-by-case basis in exceptional circumstances and subject to applicable financial, legal, and payment gateway limitations.',
  },
  {
    id: 'volunteer-partner',
    title: 'Volunteer & Partner Responsibilities',
    body:
      'Volunteers, collaborators, and institutional partners are expected to uphold dignity, inclusivity, transparency, and child/women safety standards in all interactions. Misrepresentation, harassment, and policy violations may result in suspension of participation or collaboration.',
  },
  {
    id: 'ip-rights',
    title: 'Intellectual Property Rights',
    body:
      'All website materials including logos, text, graphics, program content, design assets, and communication resources are the intellectual property of Saukhyam Foundation or licensed contributors unless otherwise stated. Unauthorized commercial use is not permitted.',
  },
  {
    id: 'content-usage',
    title: 'Content Usage Policy',
    body:
      'You may reference Saukhyam content for educational or awareness purposes with proper attribution and without modification that alters context. Republishing, scraping, bulk reproduction, or commercial redistribution requires prior written consent.',
  },
  {
    id: 'user-conduct',
    title: 'User Conduct Guidelines',
    body:
      'Users must not post or transmit harmful, discriminatory, defamatory, abusive, or misleading material through forms, comments, or communication channels. We reserve the right to moderate submissions and block abusive behavior.',
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body:
      'Saukhyam Foundation strives for accuracy and continuity but does not guarantee uninterrupted website operation or error-free content at all times. To the extent permitted by law, we are not liable for indirect or consequential losses arising from website use.',
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    body:
      'This website may include links to third-party websites for information, partnerships, media references, or payment facilitation. Saukhyam Foundation is not responsible for third-party content, terms, or practices.',
  },
  {
    id: 'products-services',
    title: 'Product & Service Information',
    body:
      'Product descriptions, pricing, availability, and service information are provided in good faith and may be updated without prior notice. Any medical or wellness-related information is educational and not a substitute for professional medical advice.',
  },
  {
    id: 'privacy-reference',
    title: 'Privacy & Data Protection References',
    body:
      'Your use of this website is also subject to our Privacy Policy, which explains data collection, storage, usage, and protection practices. We encourage all users to read it carefully before sharing personal details.',
  },
  {
    id: 'ethical-practices',
    title: 'NGO Ethical Practices',
    body:
      'Saukhyam Foundation follows dignity-first, non-discriminatory, and impact-oriented practices. We are committed to ethical representation of beneficiaries, responsible storytelling, and accountable use of support received through donations, partnerships, and programs.',
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body:
      'These Terms & Conditions are governed by applicable laws of India. Any disputes arising from website usage or associated services shall be subject to jurisdiction as per relevant legal provisions.',
  },
  {
    id: 'updates',
    title: 'Updates to Terms',
    body:
      'We may update these Terms & Conditions periodically to reflect legal requirements, operational changes, or improved transparency practices. Updates become effective upon publishing on this page.',
  },
  {
    id: 'contact',
    title: 'Contact Information',
    body:
      'For questions regarding these terms, please contact us at info@saukhyampads.org or through our Contact page. We are committed to responding with clarity, respect, and care.',
  },
];

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Terms &amp; Conditions</span>
          </div>
          <span className={styles.badge}>
            <Scale size={16} aria-hidden="true" />
            Legal & Governance
          </span>
          <h1>Terms &amp; Conditions</h1>
          <p>
            These terms explain how to use our website and services responsibly while preserving
            trust, dignity, and transparency across the Saukhyam community.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.toc} aria-label="Table of contents">
              <p className={styles.tocTitle}>On this page</p>
              <nav>
                {termsSections.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>

            <article className={styles.card}>
              <p className={styles.updated}>Last updated: May 20, 2026</p>
              <div className={styles.sections}>
                {termsSections.map((item, index) => (
                  <section id={item.id} key={item.id} className={styles.section}>
                    <h2>{index + 1}. {item.title}</h2>
                    <p>{item.body}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
