import { TITLE, DESCRIPTION } from "astro:env/client";
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const articles = await getCollection('articles');
    const kilobits = await getCollection('kilobits');
    const posts = [...articles, ...kilobits].sort((a, b) => {
        return new Date(b.data.publishDate) - new Date(a.data.publishDate);
    }).map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        collection: post.collection,
        link: post.collection === 'articles' ? `/articles/${post.id}` : `/kilobits/${post.id}`,
        customData: `<language>en-us</language>`,
    }));

    console.log({ posts });
    return rss({
        title: TITLE,
        description: DESCRIPTION,
        site: 'https://stephen.codes',
        items: posts,
        customData: `<language>en-us</language>`,
    });
}
