<script>
	import '../app.css';
	import { collection } from '../stores/collection';
	import Collapsible from '../lib/components/collapsible.svelte';
	import { browser } from '$app/environment';
	import { createTagsInput } from '@melt-ui/svelte';
	import { pageScroll } from '../stores/pageScroll';
	import Lenis from '@studio-freight/lenis';

	let searchValue = '';

	let tags = {
		andTags: [],
		orTags: [],
		notTags: []
	};

	if (browser) {
		const lenis = new Lenis();
		lenis.on('scroll', (e) => {
			console.log('SCROLL STUUFF: ', e);
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}

	async function albumSearch(value) {
		// await collection.meilisearch(value);
		await collection.newSearch(value);
		console.log('COLLECTION: ', $collection);
		console.log('Search Value: ', value);
	}

	function createTag() {
		console.log('CREATING TAG');
		tags.andTags.push(searchValue);
		searchValue = '';
	}

	function printScrollPosition(e) {
		console.log('SCROLL TOP: ', e.currentTarget.scrollTop);
		pageScroll.set(e.currentTarget.scrollTop);
	}

	$: albumSearch(searchValue);
</script>

<div class="relative grid grid-rows-16 w-[100vw] h-[100vh] overflow-hidden">
	<nav
		class="h-full row-span-1 w-full border-b-[1px] flex justify-between items-center border-white"
	>
		<div class="block p-[2rem]">
			<h1 class="h1 tracking-[-3px] font-extralight">
				<span class="font-extrabold">365</span>PROJECT
			</h1>
		</div>
	</nav>
	<div
		on:scroll={printScrollPosition}
		data-lenis-prevent
		class="row-span-14 grid-cols-14 overflow-scroll scrollbar-hide relative"
	>
		<div class="w-full row-span-1 fixed flex pointer-events-none z-[1]">
			<div
				class="bg-black shrink-1 border-l-[1px] border-b-[1px] ml-auto pointer-events-auto px-[5rem] pt-[1rem]"
			>
				<form class="flex" on:submit={createTag}>
					<input
						bind:value={searchValue}
						class="text-white w-full border-[0] bg-transparent border-[#212427] uppercase focus:outline-none focus:border-white focus:border-b-2 focus:ring-0 outline-none placeholder-gray-400"
						type="text"
						placeholder="FIND AN ALBUM"
					/>
					<Collapsible slots="3">
						<h1 slot="slot-1">HELLO</h1>
						<h1 slot="slot-2">FUNKY</h1>
						<h1 slot="slot-3">WORLD</h1>
					</Collapsible>
				</form>
			</div>
		</div>
		<div class="flex flex-row row-span-13 justify-center">
			<div class="max-w-[76rem] w-full h-full">
				<!-- <div class="block overflow-scroll scrollbar-hide max-w-[76rem] bg-green-500 w-full">
			
				</div> -->
				<slot />
			</div>
		</div>
	</div>
	<div
		class=" scrollbar-hide row-span-1 border-t-[1px] flex justify-between items-center border-white"
	></div>
</div>

<style>
	html.lenis {
		height: auto;
	}

	.lenis.lenis-smooth {
		scroll-behavior: auto;
	}

	.lenis.lenis-smooth [data-lenis-prevent] {
		overscroll-behavior: contain;
	}

	.lenis.lenis-stopped {
		overflow: hidden;
	}

	.lenis.lenis-scrolling iframe {
		pointer-events: none;
	}
</style>
