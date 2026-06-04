'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import styles from '@/app/blog/[slug]/page.module.css';

const SAMPLE_COMMENTS = [
  { id: '1', name: 'Riya M.', date: '2 days ago', text: 'This story moved me. Sharing with my college group.' },
  { id: '2', name: 'Dr. Kavitha', date: '1 week ago', text: 'Well-researched and compassionate. Thank you for the science section.' },
];

export default function BlogComments() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(SAMPLE_COMMENTS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setComments([
      { id: String(Date.now()), name: name.trim(), date: 'Just now', text: comment.trim() },
      ...comments,
    ]);
    setName('');
    setComment('');
  };

  return (
    <motion.section
      className={styles.comments}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className={styles.commentsTitle}>
        <MessageCircle size={20} /> Comments ({comments.length})
      </h3>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.commentInput}
          required
        />
        <textarea
          placeholder="Share your thoughts…"
          value={comment}
          onChange={e => setComment(e.target.value)}
          className={styles.commentTextarea}
          rows={3}
          required
        />
        <button type="submit" className={styles.commentSubmit}>
          Post comment <Send size={14} />
        </button>
      </form>

      <ul className={styles.commentList}>
        {comments.map(c => (
          <li key={c.id} className={styles.commentItem}>
            <div className={styles.commentAvatar}>{c.name.charAt(0)}</div>
            <div>
              <div className={styles.commentMeta}>
                <strong>{c.name}</strong> · <span>{c.date}</span>
              </div>
              <p className={styles.commentText}>{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
