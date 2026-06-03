'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import prog from '@/app/programs/program.module.css';

export default function NewsletterCTA({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <div className={prog.stepCard} style={{ padding: compact ? 'var(--space-6)' : 'var(--space-8)', height: '100%' }}>
      <span className={prog.stepNumber}>Press digest</span>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginTop: 'var(--space-2)' }}>
        Stay in the story loop
      </h3>
      <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
        Monthly highlights: press features, programme launches, and impact milestones.
      </p>

      {sent ? (
        <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }} role="status">
          Thank you. Updates will go to {email}.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <label className="sr-only" htmlFor="newsroom-email">
            Email
          </label>
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--sand-400)' }} aria-hidden />
            <input
              id="newsroom-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@publication.com"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                fontSize: 'var(--text-sm)',
              }}
            />
          </div>
          <button type="submit" className={prog.outlineBtn} style={{ justifyContent: 'center' }}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
