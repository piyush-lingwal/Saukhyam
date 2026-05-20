'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MediaPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/impact#press');
  }, [router]);

  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <p>Redirecting to Press &amp; Media...</p>
      <p>
        If you are not redirected, <Link href="/impact#press">click here</Link>.
      </p>
    </main>
  );
}
