import type { BlogBlock, BlogPost } from '@/types/blog';
import { BLOG_IMAGE_POOL, resolvePostImages } from './blogImagePool';

export { BLOG_IMAGE_POOL, POST_BLOG_IMAGES, resolvePostImages } from './blogImagePool';

/** Unique image paths only (for listings / rotation) */
export const BLOG_EDITORIAL_IMAGES = [
  ...new Set(Object.values(BLOG_IMAGE_POOL).map((a) => a.path)),
];

export function applyLinkedInPostMedia(post: BlogPost): BlogPost {
  const assets = resolvePostImages(post.id);
  if (!assets) return post;

  const content = [...post.content];

  if (assets.inline && assets.inline.path !== assets.cover.path) {
    const imageBlock: BlogBlock = {
      type: 'image',
      src: assets.inline.path,
      alt: assets.inline.alt,
      caption: 'Photo from Saukhyam Foundation outreach and programmes.',
    };
    const existingIdx = content.findIndex((b) => b.type === 'image');
    if (existingIdx >= 0) {
      content[existingIdx] = imageBlock;
    } else {
      const insertAfter = content.findIndex((b) => b.type === 'heading' && b.level === 2);
      const at = insertAfter >= 0 ? insertAfter + 1 : Math.min(2, content.length);
      content.splice(at, 0, imageBlock);
    }
  } else {
    const existingIdx = content.findIndex((b) => b.type === 'image');
    if (existingIdx >= 0) content.splice(existingIdx, 1);
  }

  return {
    ...post,
    image: assets.cover.path,
    coverAlt: assets.cover.alt,
    content,
  };
}
