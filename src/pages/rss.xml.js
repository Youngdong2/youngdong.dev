import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description ?? '',
      link: `/posts/${p.id}/`,
    })),
    customData: '<language>ko</language>',
  });
}
