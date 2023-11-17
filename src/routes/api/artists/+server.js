import { PRIVATE_CMS_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET({cookies}){
	let authToken = PRIVATE_CMS_KEY;
	const myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${authToken}`);
	const res = await fetch('http://localhost:8055/items/artists', {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	});
	const content = await res.json();
	return json(content);
}
