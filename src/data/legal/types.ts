export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: { type: 'ul' | 'ol'; items: string[] };
};

export type LegalTocItem = { id: string; title: string };
