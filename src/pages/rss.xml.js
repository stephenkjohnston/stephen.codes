import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const articles = await getCollection('articles');

    return rss({
        title: 'Stephen Johnston - Front-End Engineer by trade, Mainframe Developer in training.',
        description: "I'm Stephen, a front-end engineer. I write about COBOL and front-end tech, crafting quality software that's functional and beautiful.",
        site: 'https://stephen.codes',
        items: articles.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.excerpt,
            link: `/articles/${post.slug}`
        })),
        customData: `<language>en-us</language>`,
    });
}