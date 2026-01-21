# Portfolio Builder

A modern, SEO-friendly portfolio site with automated CI/CD deployment.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Builder)

## ✨ Features

- **Static Site Generation** - Lightning-fast pages with Astro
- **Dark Mode** - Automatic and manual theme switching
- **SEO Optimized** - Meta tags, Open Graph, sitemap, and RSS feed
- **Responsive Design** - Mobile-first, works on all devices
- **Markdown Content** - Write projects and blog posts in markdown
- **Automated Deployment** - Push to main → live site in minutes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── content/         # Markdown content
│   │   ├── posts/       # Blog posts
│   │   └── projects/    # Project showcases
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # TailwindCSS configuration
└── netlify.toml         # Netlify deployment config
```

## ✍️ Adding Content

### New Project

Create a new file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Short description of the project."
pubDate: 2025-01-01
image: "/images/project.png"
tags: ["React", "Node.js"]
demoUrl: "https://demo.example.com"
repoUrl: "https://github.com/user/repo"
featured: true
---

Your project content here...
```

### New Blog Post

Create a new file in `src/content/posts/`:

```markdown
---
title: "Post Title"
description: "What the post is about."
pubDate: 2025-01-01
tags: ["Tutorial", "JavaScript"]
readingTime: "5 min read"
---

Your blog content here...
```

## 🔧 Configuration

### Site Settings

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Personalization

1. Update navigation links in `src/components/Navigation.astro`
2. Update footer links and social profiles in `src/components/Footer.astro`
3. Update about page content in `src/pages/about.astro`
4. Replace placeholder images in `public/images/`

## 🚢 Deployment

### Automatic (GitHub Actions)

1. Add secrets to your GitHub repo:
   - `NETLIFY_AUTH_TOKEN` - From Netlify account settings
   - `NETLIFY_SITE_ID` - From Netlify site settings
   - `SLACK_WEBHOOK_URL` (optional) - For notifications

2. Push to `main` branch → automatic deploy!

### Manual

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📄 License

MIT © Your Name
