export const load = async ({ fetch, params }) => {
	const albumRes = await fetch(`/api/albums/${params.id}`);
	// const artistRes = await fetch('/api/artists');
	const albumResponse = await albumRes.json();
	// const artistResponse = await artistRes.json();
	return {
		album: albumResponse.data,
		// artists: artistResponse.data,
		params
	};
};
