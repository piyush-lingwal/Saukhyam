'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

const FALLBACK = '/images/blog/kumbhCover.jpg';

type BlogImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

/** Blog images with fallback when a remote or missing asset fails to load */
export default function BlogImage({ src, alt, onError, ...rest }: BlogImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (currentSrc !== FALLBACK) setCurrentSrc(FALLBACK);
        onError?.(e);
      }}
    />
  );
}
