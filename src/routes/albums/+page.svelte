<script>
	// @ts-nocheck
	// import { searchClient } from '../../lib/client/meilisearch.js';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { collection } from '../../stores/collection.js';
	import LightParallax from '../../lib/components/lightParallax.svelte';

	export let data;
	let options = { duration: 500, easing: sineInOut };

	function printCollection(collection) {
		console.log('ALBUMS COLLECTION: ', collection);
	}

	$: printCollection($collection);
</script>

<div class="m-[2rem] grid grid-cols-4 gap-[2rem]">
	{#each $collection.collection as album (album.id)}
		<a
			transition:fly={{ ...options, x: 80 }}
			animate:flip={{ duration: 400 }}
			href="/albums/{album.id}"
		>
			<div class="flex flex-col h-full gap-[1rem] p-[1rem] outline outline-[1px] rounded-[1.5rem]">
				<div
					class="w-full outline outline-[1px] rounded-[1.5rem] overflow-hidden scrollbar h-[15rem]"
				>
					<LightParallax
						albumCover={album.cover}
						img="http://localhost:8055/assets/{album.cover}"
						customStyleClass="--album"
						customStyleValue="image-{album.cover}"
					/>
				</div>

				<div>
					<strong>{album.artist}</strong>
					<p>{album.Title}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.album {
		view-transition-name: var(--album);
	}
	::view-transition-old(image-1),
	::view-transition-new(image-1) {
		animation-duration: 2s;
	}
	/* Old stuff going out */
</style>
