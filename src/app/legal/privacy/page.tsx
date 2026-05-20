import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saukhyam Foundation',
  description:
    'Read Saukhyam Foundation privacy policy to understand how we collect, use, and protect your personal information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body:
      'We may collect personal information such as your name, email address, phone number, shipping address, and order details when you interact with our website, place an order, or contact our support team.',
  },
  {
    title: '2. How We Use Your Information',
    body:
      'Your information is used to process orders, provide support, improve our services, communicate important updates, and share relevant program or impact information where consent is provided.',
  },
  {
    title: '3. Payment and Transaction Security',
    body:
      'Payments are handled through secure third-party providers. We do not store full payment card data on our servers. Security measures are applied to protect your transaction details.',
  },
  {
    title: '4. Data Sharing and Disclosure',
    body:
      'We do not sell personal data. Information may be shared only with trusted partners involved in order fulfillment, analytics, or legal compliance, and only to the extent required.',
  },
  {
    title: '5. Cookies and Analytics',
    body:
      'We use cookies and analytics tools to improve website performance, measure engagement, and optimize user experience. You may manage cookie preferences through your browser settings.',
  },
  {
    title: '6. Data Retention',
    body:
      'We retain personal information only for as long as necessary to fulfill operational, legal, and compliance obligations, after which data is securely deleted or anonymized.',
  },
  {
    title: '7. Your Rights',
    body:
      'You may request access, correction, or deletion of personal information by contacting us. We will respond to valid requests in accordance with applicable privacy laws.',
  },
  {
    title: '8. Contact for Privacy Concerns',
    body:
      'For privacy-related questions, write to us at info@saukhyampads.org. We are committed to handling concerns with transparency, care, and accountability.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Privacy Policy</span>
          </div>
          <span className={styles.badge}>
            <ShieldCheck size={16} aria-hidden="true" />
            Legal Information
          </span>
          <h1>Privacy Policy</h1>
          <p>
            We value trust and dignity. This policy explains how Saukhyam Foundation collects,
            uses, and protects your personal information.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.card}>
            <p className={styles.updated}>Last updated: May 20, 2026</p>
            <div className={styles.sections}>
              {sections.map((item) => (
                <article key={item.title} className={styles.section}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
