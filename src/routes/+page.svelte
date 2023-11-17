<script>
	import Accordion from '$lib/components/accordion.svelte';
	import Avatar from '$lib/components/avatar.svelte';
	import Checkbox from '$lib/components/checkbox.svelte';
	import Collapsible from '$lib/components/collapsible.svelte';

	let accordionItems = [
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
			description: 'Totally, it is 100% stylable and overridable.',
			disabled: false
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!',
			disabled: true
		}
	];
</script>

<div class="grid grid-cols-4 items-center gap-5 p-[5rem]">
	<Accordion items={accordionItems} />
	<Avatar initials={'DW'} />
	<form class="max-w[10rem]">
		<div class="flex justify-start items-start flex-col gap-2">
			<Checkbox label={'Accept Terms and Conditions'} />
			<Checkbox label={'Another Thing'} />
			<Checkbox label={'And Yet Another'} />
		</div>
	</form>
	<Collapsible />
</div>
