<script>
	import SideGallery from '$lib/components/sideGallery.svelte';
</script>

<div class="grid grid-cols-4 gap-[2rem] h-screen w-full">
	<div class="col-span-3">
		<slot />
	</div>
	<div class="col-span-1 overflow-scroll">
		<SideGallery />
	</div>
</div>
