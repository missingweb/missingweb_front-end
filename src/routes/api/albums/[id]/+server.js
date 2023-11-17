// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PRIVATE_CMS_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET({ params, cookies }) {
	const myHeaders = new Headers();
	let authToken = PRIVATE_CMS_KEY;
	myHeaders.append('Authorization', `Bearer ${authToken}`);
	const res = await fetch(`http://localhost:8055/items/albums/${params.id}`, {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	});
	const content = await res.json();
	return json(content);
}
