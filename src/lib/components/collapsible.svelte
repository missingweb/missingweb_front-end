<script>
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import Carot from '../../lib/components/EpDCaret.svelte';
	import Close from '../../lib/components/EpClose.svelte';

	export let slots;

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
</script>

<div use:melt={$root} class="mx-auto w-[18rem] max-w-full sm:w-[25rem]">
	<div class="flex items-center justify-left my-[1rem]">
		<button
			use:melt={$trigger}
			class="relative h-6 w-6 place-items-center rounded-md text-sm
              text-magnum-800 shadow hover:opacity-75 data-[disabled]:cursor-not-allowed
              data-[disabled]:opacity-75"
			aria-label="Toggle"
		>
			<div class="abs-center">
				{#if $open}
					<!-- <Close /> -->
					<h3 class="h3 text-white">^</h3>
				{:else}
					<!-- <Carot /> -->
					<h3 class="h3 text-white">v</h3>
				{/if}
			</div>
		</button>
	</div>

	{#if $open}
		<div use:melt={$content} transition:slide>
			<div class="flex flex-col gap-2 pb-[1rem]">
				<slot name="slot-1"></slot>
				<slot name="slot-2"></slot>
				<slot name="slot-3"></slot>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.abs-center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
