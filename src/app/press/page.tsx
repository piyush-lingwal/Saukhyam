import Link from 'next/link';
import { Camera, ExternalLink, Film, Handshake, Newspaper, Trophy } from 'lucide-react';
import { pressItems } from '@/data/content';
import styles from './page.module.css';

const mediaHighlights = [
  {
    title: 'Press Releases',
    description: 'Official announcements, milestones, and program updates from Saukhyam Foundation.',
    href: '/contact',
    cta: 'View Updates',
    icon: Newspaper,
  },
  {
    title: 'Media Coverage',
    description: 'Stories and mentions from national and regional publications covering Saukhyam impact.',
    href: '#featured-articles',
    cta: 'Explore Coverage',
    icon: ExternalLink,
  },
  {
    title: 'Awards & Recognition',
    description: 'Recognition from institutions and platforms for innovation and social impact.',
    href: '/impact',
    cta: 'See Awards',
    icon: Trophy,
  },
  {
    title: 'Gallery',
    description: 'Images from grassroots outreach, health camps, and community engagement events.',
    href: '/programs',
    cta: 'Open Gallery',
    icon: Camera,
  },
  {
    title: 'Videos & Interviews',
    description: 'Voices from beneficiaries, volunteers, and partners shaping menstrual health access.',
    href: 'https://www.youtube.com/channel/UCP_eM9o-i-HWixf-OB5lHpg',
    cta: 'Watch Stories',
    icon: Film,
  },
  {
    title: 'Partner Collaborations',
    description: 'Joint initiatives with institutions, communities, and mission-aligned organizations.',
    href: '/contact',
    cta: 'Collaborate With Us',
    icon: Handshake,
  },
];

export default function PressPage() {
  const getArticleUrl = (title: string, publication: string, url: string) => {
    if (url && url !== '#') return url;
    const query = encodeURIComponent(`${title} ${publication} Saukhyam`);
    return `https://www.google.com/search?q=${query}`;
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.kicker}>Know Us</span>
          <h1 className={styles.title}>Press &amp; Media</h1>
          <p className={styles.subtitle}>
            Stories of dignity, innovation, and grassroots change through Saukhyam&apos;s menstrual health mission.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.primaryBtn}>Connect With Our Team</Link>
            <a href="#featured-articles" className={styles.secondaryBtn}>Read Media Features</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore Press Resources</h2>
          <div className={styles.grid}>
            {mediaHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.card}>
                  <div className={styles.iconWrap}><Icon size={18} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className={styles.cardLink}>{item.cta}</a>
                  ) : (
                    <Link href={item.href} className={styles.cardLink}>{item.cta}</Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="featured-articles" className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <div className={styles.articleGrid}>
            {pressItems.slice(0, 6).map((item) => (
              <a
                key={item.id}
                href={getArticleUrl(item.title, item.publication, item.url)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleCard}
              >
                <span>{item.publication}</span>
                <h3>{item.title}</h3>
                <strong>Read Full Article</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
