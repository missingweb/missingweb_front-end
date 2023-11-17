import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { searchClient } from '../lib/util/meilisearch.js';

function createCollection(value) {
	const { subscribe, set, get, update } = writable(value);
	const index = searchClient.index('albums');

	async function meilisearch(value) {
		if (browser) {
			return await index.search(value.search, {
				attributesToSearchOn: value.attributes
			});
		}
	}

	async function newSearch(search) {
		let searchString = search;
		let attrString = ['Title', 'artist'];
		update((s) => ({
			...s,
			search: search
		}));
		let collection = await meilisearch({ search: searchString, attributes: [...attrString] });
		let final = update((s) => ({
			...s,
			collection: [...(collection?.hits ?? '')]
		}));
		return final;
	}

	function addAttribute(attribute) {
		update((s) => s.attributes.push(attribute));
	}

	function reset() {
		set({
			search: '',
			attributes: ['Title', 'artist'],
			collection: []
		});
	}

	return { subscribe, newSearch, reset };
}

export const collection = createCollection({
	search: '',
	attributes: ['Title', 'artist'],
	collection: []
});
