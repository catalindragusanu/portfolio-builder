import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts', ({ data }) => !data.draft);
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );

    return rss({
        title: 'Portfolio Blog',
        description: 'Articles on web development, DevOps, and software engineering.',
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
