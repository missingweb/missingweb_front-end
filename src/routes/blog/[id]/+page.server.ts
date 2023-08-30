import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ params, fetch }) => {
	const res = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*`);
	if (res.status === 400) {
		const error = new Error(`The post with ID ${params.id} was not found`);
		return { status: 404, error };
	} else {
		const response = await res.json();
		return { post: response.data.attributes };
	}
};
