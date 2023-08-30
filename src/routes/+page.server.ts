import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ fetch }) => {
	const res = await fetch('/api/images');
	const response = await res.json();
	return { images: response.data };
};
