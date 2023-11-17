<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('PAGE: ', $page);
	});
</script>

<div class="w-full h-full flex flex-col bg-black">
	<!-- {#each $page.data.album.data as album}
		{#if album.id != $page.params.id}
			<p class="text-white">{album.id}</p>
			<p class="text-white">{$page.params.id}</p>
			<img src="http://localhost:1337{album.attributes.albumCover.data.attributes.url}" alt="" />
		{/if}
	{/each} -->
</div>
