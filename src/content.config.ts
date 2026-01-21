import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        demoUrl: z.string().url().optional(),
        repoUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
    }),
});

const postsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        readingTime: z.string().optional(),
    }),
});

// Experience/Work history collection
const experienceCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/experience" }),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        companyUrl: z.string().url().optional(),
        location: z.string().optional(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(), // undefined = current position
        current: z.boolean().default(false),
        technologies: z.array(z.string()).default([]),
        order: z.number().default(0), // for custom sorting
    }),
});

// Skills collection
const skillsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/skills" }),
    schema: z.object({
        name: z.string(),
        category: z.enum(['frontend', 'backend', 'devops', 'tools', 'languages', 'other']),
        level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).default('intermediate'),
        icon: z.string().optional(), // icon name or emoji
        yearsOfExperience: z.number().optional(),
        order: z.number().default(0),
    }),
});

// Testimonials collection
const testimonialsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/testimonials" }),
    schema: z.object({
        name: z.string(),
        role: z.string(),
        company: z.string(),
        companyUrl: z.string().url().optional(),
        avatar: z.string().optional(),
        quote: z.string(),
        featured: z.boolean().default(false),
        order: z.number().default(0),
    }),
});

export const collections = {
    projects: projectsCollection,
    posts: postsCollection,
    experience: experienceCollection,
    skills: skillsCollection,
    testimonials: testimonialsCollection,
};

