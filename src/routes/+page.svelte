<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-2',
	});

	const items = [
		{
			id: 'item-1',
			title: 'What is it?',
			description:
				'A collection of accessible & unstyled component builders for Svelte applications.',
			disabled: false
		},
		{
			id: 'item-2',
			title: 'Can I customize it?',
			description: 'Totally, it is 100% stylable and overridable.'
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!'
		}
	];

	let className = '';
	export { className as class };
</script>

<div class="mx-auto w-[18rem] max-w-full rounded-xl bg-lime-200 shadow-lg sm:w-[25rem]" {...$root}>
	{#each items as { id, title, description, disabled }, i}
		{@const props = { value: id, disabled }}
		<div
			class="overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl"
			use:melt={$item(props)}
		>
			<h2 class="flex">
				<button
					class="flex flex-1 cursor-pointer items-center justify-between bg-white px-5 py-5 text-base font-medium leading-none text-black transition-colors hover:bg-neutral-100 focus:!ring-0 focus-visible:text-magnum-800 border-t border-t-neutral-300 data-[disabled]:cursor-not-allowed data-[disabled]:text-neutral-400"
					use:melt={$trigger(props)}
				>
					{title}
				</button>
			</h2>
			{#if $isSelected(id)}
				<div
					class="content overflow-hidden bg-neutral-100 text-sm text-neutral-600"
					use:melt={$content(props)}
					transition:slide
				>
					<div class="px-5 py-5">
						{description}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
