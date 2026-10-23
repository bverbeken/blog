import { getCollection } from 'astro:content';

const WORDS_PER_MINUTE = 230;
const CODE_BLOCK = /```[\s\S]*?```/g;
const IMAGE = /!\[[^\]]*\]\([^)]*\)/g;
const LINK_KEEPING_ITS_TEXT = /\[([^\]]*)\]\([^)]*\)/g;
const HTML_TAG = /<[^>]+>/g;

export async function getPosts() {
	const visibleInThisBuild = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
	const posts = await getCollection('blog', visibleInThisBuild);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(body = '') {
	const text = body
		.replace(CODE_BLOCK, ' ')
		.replace(IMAGE, ' ')
		.replace(LINK_KEEPING_ITS_TEXT, '$1')
		.replace(HTML_TAG, ' ');
	const words = text.split(/\s+/).filter((w) => /\w/.test(w)).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
