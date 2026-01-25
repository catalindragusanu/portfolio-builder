---
title: "Building a Modern Portfolio Site with Astro and Netlify"
description: "A walkthrough of creating a fast, SEO-optimized portfolio with automated deployment and dark mode support."
pubDate: 2025-01-01
tags: ["Astro", "TailwindCSS", "SEO", "Web Development"]
readingTime: "5 min read"
---

## Why Build a Custom Portfolio?

Template sites are convenient, but they all look the same. A custom portfolio lets you:
- Demonstrate your actual development skills
- Stand out from other candidates
- Have complete control over content and design
- Practice modern web development techniques

## Choosing the Stack

### Astro: The Content-First Framework

Astro's island architecture makes it perfect for portfolios:

```astro
---
// Only this component ships JavaScript
import InteractiveDemo from './InteractiveDemo.tsx';
const projects = await getCollection('projects');
---

<h1>My Projects</h1>
{projects.map(p => <ProjectCard project={p} />)}

<!-- This component hydrates on the client -->
<InteractiveDemo client:visible />
```

Benefits:
- Zero JavaScript by default
- Partial hydration for interactive components
- Markdown content collections
- Built-in image optimization

### TailwindCSS: Utility-First Styling

Tailwind speeds up development without sacrificing customization:

```html
<article class="glass-card p-6 hover-lift transition-all">
  <h2 class="text-xl font-bold text-gradient">Project Title</h2>
  <p class="text-slate-600 dark:text-slate-400">Description</p>
</article>
```

Custom utilities like `glass-card` and `text-gradient` create a consistent design system.

### Netlify: Seamless Deployment

Netlify provides:
- Automatic builds on git push
- Preview deploys for branches
- Free SSL certificates
- Global CDN distribution
- Instant rollbacks

## Key Features

### Dark Mode

System preference detection with manual toggle:

```javascript
const theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.classList.toggle('dark', theme === 'dark');
```

### Content Collections

Astro's content collections provide type-safe content management:

```typescript
// src/content/config.ts
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});
```

### SEO Optimization

Every page includes:
- Meta descriptions
- Open Graph tags for social sharing
- Canonical URLs
- Structured data (JSON-LD)
- Auto-generated sitemap
- RSS feed

```astro
<head>
  <title>{title} | Portfolio</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <link rel="canonical" href={canonicalUrl} />
</head>
```

## The Build Process

### GitHub Actions Workflow

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
```

### Performance Results

Lighthouse scores:
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

The static site loads in under 1 second on most connections.

## Lessons Learned

1. **Start simple, iterate** - Get a basic version deployed first, then add features
2. **Content is king** - Fancy designs mean nothing without good projects to show
3. **Mobile-first works** - Designing for small screens first leads to cleaner layouts
4. **Automate everything** - CI/CD removes friction from updates

## Tips for Your Own Portfolio

1. **Show, don't just tell** - Include live demos and screenshots
2. **Keep it updated** - Stale portfolios hurt more than help
3. **Focus on quality over quantity** - 3 great projects beat 10 mediocre ones
4. **Make contact easy** - Clear CTAs and working contact forms
5. **Test on real devices** - Emulators miss real-world issues

## Conclusion

A portfolio is more than a resume—it's proof of your skills. Building it yourself demonstrates:
- Frontend development ability
- Understanding of modern tooling
- Attention to performance and UX
- CI/CD and DevOps knowledge

The best portfolio is one that evolves with your career. With automated deployment, keeping it current becomes effortless.

---

*View the [live site](https://catalindragusanu.netlify.app) or check out the [source code on GitHub](https://github.com/catalindragusanu/Portfolio-Builder)!*
