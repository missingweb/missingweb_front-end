import { PRIVATE_CMS_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(): Promise<Response> {
	const res = await fetch('http://localhost:1337/api/images', {
		headers: {
			Authentication: `Bearer ${PRIVATE_CMS_KEY}`
		}
	});
	const data = await res.json();
	return json(data);
}