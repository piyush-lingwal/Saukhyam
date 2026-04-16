# Saukhyam Blog — Content & Design Standards

> Preliminary standards so that future automation (CMS import, AI authoring,
> bulk publishing) can produce posts that render consistently inside the
> existing `/blog/[slug]` template without ad-hoc design fixes.

All new blog posts must conform to the schema in
`src/data/content.ts` (the `BlogPost` interface and `BlogBlock` union).
The block-based schema is the single source of truth — do not introduce
HTML strings or custom renderers outside of it.

---

## 1. Data schema (TypeScript)

```ts
interface BlogPost {
  id: string;              // unique, stable (e.g. "b4")
  slug: string;            // kebab-case, 3–6 words, URL-safe
  title: string;           // 45–65 chars
  titleHi: string;         // Hindi translation (required)
  excerpt: string;         // 140–180 chars, used in cards & OG
  excerptHi: string;       // Hindi translation (required)
  image: string;           // cover image path (see §3)
  coverAlt?: string;       // accessible description of cover
  date: string;            // ISO "YYYY-MM-DD"
  readTime: string;        // "N min read"
  category: 'community' | 'science' | 'sustainability' | 'stories';
  author: string;          // full display name
  authorRole: string;      // short role/title
  authorBio?: string;      // 1–2 sentence bio (recommended)
  tags: string[];          // 2–4 short tags, Title Case
  featured?: boolean;      // at most one featured post at a time
  content: BlogBlock[];    // see §2
}
```

---

## 2. Content blocks (`BlogBlock`)

Each article is an **ordered array of blocks**. The renderer in
`src/app/blog/[slug]/page.tsx` handles each block type — do not extend the
renderer without also extending the type union.

| Block | Shape | Usage rules |
|---|---|---|
| `paragraph` | `{ type: 'paragraph', text }` | 40–120 words. First paragraph in the article renders with a drop-cap automatically — treat it as the lede. |
| `heading` (level 2) | `{ type: 'heading', level: 2, text }` | Main section divider. 2–6 per article. 3–8 words. Sentence case. |
| `heading` (level 3) | `{ type: 'heading', level: 3, text }` | Subsection inside an H2. Never skip levels (no H3 without a preceding H2). |
| `image` | `{ type: 'image', src, alt, caption? }` | Use after the section it illustrates, not before. Alt text is mandatory; caption is optional but recommended. |
| `quote` | `{ type: 'quote', text, attribution? }` | Pull-quote. Use sparingly — max 2 per post. Text should be under 240 chars. |
| `list` | `{ type: 'list', style: 'bullet' \| 'number', items }` | 3–7 items, each ≤ 100 chars. Use `number` for ordered steps, `bullet` for stats/options. |
| `callout` | `{ type: 'callout', variant: 'info' \| 'success' \| 'warning', title?, text }` | Short (≤ 50 words). For sidenotes, results, or warnings. Max 2 per post. |

### Recommended article skeleton

```
paragraph (lede, hooks the reader)
paragraph (context)
heading (level 2) — first section
paragraph × 1–3
quote | image | list | callout (max one of these per section)
heading (level 2) — second section
paragraph × 1–3
heading (level 3) — optional subsection
paragraph × 1–2
callout (takeaway)
heading (level 2) — closing section
paragraph × 1–2 (with a next-step invitation)
```

---

## 3. Image standards

| Slot | Aspect ratio | Pixel size | Format | Max file size |
|---|---|---|---|---|
| **Cover / hero** (`image`) | 16:9 | 1600 × 900 | `.webp` preferred, `.jpg` fallback | 300 KB |
| **Inline image** (`image` block) | 16:9 (default) or 3:2 | 1200 × 675 (or 1200 × 800) | `.webp` | 200 KB |
| **Portrait-style inline** | 4:5 | 1000 × 1250 | `.webp` | 220 KB |
| **Author avatar** | — | not used — the page renders the author's initial in a green gradient disc | — | — |

### File-path convention

All blog images live under `public/Blog_Images/<slug>/`:

```
public/Blog_Images/breaking-taboos-sonbhadra/
  ├── cover.webp          ← referenced as post.image
  ├── 01-workshop.webp    ← referenced by an inline image block
  └── 02-sakhis.webp
```

Reference them in TS as absolute paths from the public root:

```ts
image: '/Blog_Images/breaking-taboos-sonbhadra/cover.webp'
```

### Alt-text rules

- Always describe the subject and the action, not the feeling.
- Keep under 120 chars.
- Do not start with "Image of" or "Photo of".

---

## 4. Copy guidelines

| Field | Target length | Notes |
|---|---|---|
| `title` | 45–65 chars | Declarative or active. Title Case. No trailing punctuation. |
| `excerpt` | 140–180 chars | Second sentence should invite the reader in. Ends with a period. |
| `paragraph` (lede) | 40–80 words | Gets the drop-cap. Establishes place, voice, or question. |
| `paragraph` (body) | 40–120 words | One idea per paragraph. |
| `heading` level 2 | 3–8 words | Written as a signpost, not a spoiler. |
| `quote` | ≤ 240 chars | Prefer direct speech. Attribution: name, age/role, place. |
| Tags | 2–4 tags | Title Case, short (1–3 words each). Reuse existing tags where possible. |

### Voice & tone

- Warm, plain, confident. Avoid marketing hype.
- Write the way Anju or a community ambassador would speak.
- Prefer "women" / "girls" / "people who menstruate" over clinical terms.
- Hindi translations (`titleHi`, `excerptHi`) are required for every post.

---

## 5. Categories

| Key | Display label | Use for |
|---|---|---|
| `community` | Community | Field visits, outreach, village stories |
| `science` | Science | Banana fiber research, health data, studies |
| `sustainability` | Sustainability | Environmental impact, zero-waste, climate angle |
| `stories` | Personal Stories | First-person switches, testimonial-driven posts |

Each category has an assigned colour in `page.tsx`:
`community` green · `science` blue · `sustainability` teal · `stories` amber.

To add a new category, update **both**:
1. The `category` union in `content.ts`
2. The `CATEGORY_COLORS` and `CATEGORY_LABELS` maps in both
   `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`.

---

## 6. `featured` flag

- **At most one** post may have `featured: true` at any time — the home of the
  blog listing reserves the top hero card for it.
- If two are set, the first match in `blogPosts` wins; the others render in the grid.
- When publishing a new featured post, remove `featured: true` from the previous one.

---

## 7. Adding a new post (manual workflow)

1. Add images to `public/Blog_Images/<slug>/`.
2. Append a new `BlogPost` object at the **top** of `blogPosts` in
   `src/data/content.ts` (newest-first).
3. Fill every required field; optional fields (`authorBio`, `coverAlt`,
   `featured`) should be used unless there is a reason not to.
4. Build content from the block skeleton in §2.
5. Run `npm run lint` — the schema is fully typed so missing fields will
   surface immediately.
6. Visit `/blog/<slug>` locally to verify rendering.

---

## 8. Design tokens used by the blog template

All styling pulls from the site's design tokens (see
`src/styles/variables.css`). Do **not** hard-code colors in new blog
components — use:

- Greens: `--green-50` through `--green-950`
- Fonts: `--font-heading` (Outfit), `--font-body` (Inter)
- Radii, shadows, spacing: `--radius-*`, `--shadow-*`, `--space-*`

This keeps the blog visually consistent with the rest of the Saukhyam site
and guarantees that a future dark-mode rollout (tokens already present under
`[data-theme="dark"]`) will flip automatically.

---

## 9. Automation-readiness checklist

When an automated pipeline publishes a post, it must:

- [ ] Produce a valid `BlogPost` object (type-check passes)
- [ ] Fit copy within the length ranges in §4
- [ ] Upload images at the exact sizes/formats in §3
- [ ] Use only existing block types from §2 (no HTML, no raw Markdown)
- [ ] Include Hindi translations for title and excerpt
- [ ] Leave `featured` unset unless explicitly promoting the post
- [ ] Place the new post at the top of the `blogPosts` array

Any post that satisfies this checklist will render correctly inside the
existing `/blog/[slug]` template without requiring design work.
