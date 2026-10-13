import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts are included in `npm run dev` only.
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Estimated reading time in whole minutes, at about 230 words per minute.
export function readingMinutes(body = '') {
	const text = body
		.replace(/```[\s\S]*?```/g, ' ') // code blocks
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: keep the text
		.replace(/<[^>]+>/g, ' '); // html tags
	const words = text.split(/\s+/).filter((w) => /\w/.test(w)).length;
	return Math.max(1, Math.round(words / 230));
}
