<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		console.log('DATA: ', data);
	});
</script>

<button class="btn font-extrabold hover:text-blue-800" on:click={() => goto('/albums')}>
	go back
</button>
<div class="w-[30rem]">
	<h1 class="uppercase">{data.album.Title}</h1>
	<img
		class="w-full album"
		src="http://localhost:8055/assets/{data.album.cover}"
		alt=""
		style:--album="image-{data.album.cover}"
	/>
	<p>{data.album.Title}</p>
</div>

<style>
	.album {
		view-transition-name: var(--album);
	}
	::view-transition-old(image-1),
	::view-transition-new(image-1) {
		animation-duration: 2s;
	}
</style>
