import { TITLE, DESCRIPTION } from "astro:env/client";
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const articles = await getCollection('articles');

    return rss({
        title: TITLE,
        description: DESCRIPTION,
        site: 'https://stephen.codes',
        items: articles.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishDate,
            description: post.data.description,
            link: `/articles/${post.slug}`
        })),
        customData: `<language>en-us</language>`,
    });
}