import { PUBLIC_SEARCH_KEY, PUBLIC_SEARCH_URL } from '$env/static/public';
import { MeiliSearch } from 'meilisearch';

export const searchClient = new MeiliSearch({
	host: PUBLIC_SEARCH_URL, // Host
	apiKey: PUBLIC_SEARCH_KEY // API key
});
