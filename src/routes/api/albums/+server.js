import { PRIVATE_CMS_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET() {
	const myHeaders = new Headers();
	let authToken = PRIVATE_CMS_KEY;
	myHeaders.append('Authorization', `Bearer ${authToken}`);
	let content;
	await fetch('http://localhost:8055/items/albums?fields=*,*.*', {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error('Something went wrong');
			}
		})
		.then((resJson) => {
			content = resJson;
		})
		.catch((error) => {
			console.log('ERROR: ', error);
		});
	return json(content);
}
