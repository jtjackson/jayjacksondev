import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  return rss({
    title: 'Jay Jackson - Blog',
    description: 'Thoughts on software engineering, accessibility, cloud native technologies, and life in tech.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: [post.data.category, ...post.data.tags],
      })),
    customData: `<language>en-us</language>`,
  });
}
