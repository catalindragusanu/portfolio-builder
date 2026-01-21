import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: process.env.SITE_URL || 'https://myportfolio.com',
    integrations: [
        tailwind(),
        mdx(),
        sitemap()
    ],
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    },
    vite: {
        resolve: {
            alias: {
                'astro/jsx/server.js': 'astro/jsx-runtime'
            }
        }
    }
});
