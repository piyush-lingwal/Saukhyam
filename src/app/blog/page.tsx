'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/content';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const categoryLabels: Record<string, string> = {
  community: 'Community',
  science: 'Science',
  sustainability: 'Sustainability',
  stories: 'Stories',
};

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog &amp; Stories
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Impact stories, health insights, and tales from the communities we serve across India.
          </motion.p>
        </div>
      </section>

      <div className="container">
        <motion.div
          className={styles.blogGrid}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {blogPosts.map(post => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
              variants={fadeInUp}
            >
              <div className={styles.blogImageWrap}>
                <BookOpen size={48} className={styles.blogImagePlaceholder} />
                <span className={styles.categoryTag}>{categoryLabels[post.category]}</span>
              </div>
              <div className={styles.blogInfo}>
                <div className={styles.blogMeta}>
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  <Clock size={12} />
                  {post.readTime}
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
