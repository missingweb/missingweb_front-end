<script>
	import { onMount } from 'svelte';
	import { pageScroll } from '../../stores/pageScroll';

	let parallaxImg;
	let pImg_top = 0;
	export let img;
	export let customStyleClass;
	export let customStyleValue;
	export let albumCover;

	function recordDifference(pagescroll) {
		if (!parallaxImg) return;

		pImg_top = parallaxImg.getBoundingClientRect().top;
		console.log('RECORDING: ', pImg_top);
	}

	onMount(() => {
		recordDifference('');
	});

	//		style:--album="image-{albumCover}"
	$: recordDifference($pageScroll);
</script>

<div bind:this={parallaxImg} class="block w-full h-full object-cover relative">
	<img
		class="absolute left-0 w-[125%] h-[125%] object-cover album z-[0]"
		src={img}
		alt=""
		style="top:{(pImg_top - pImg_top * 1.75) / 6 + 20}px"
		style:--album="image-{albumCover}"
	/>
</div>
