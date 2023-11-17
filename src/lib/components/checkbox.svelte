<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';
	import Check from '../components/EpCheck.svelte';
	import Minus from '../components/EpMinus.svelte';

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: 'indeterminate'
	});

	export let label: string;
</script>

<form>
	<div class="flex items-center justify-center">
		<button
			use:melt={$root}
			class="flex appearance-none items-center justify-center rounded-lg
              bg-white text-magnum-600 shadow square-7 hover:opacity-75"
			id="checkbox"
		>
			{#if $isIndeterminate}
				<Minus class="square-5" />
			{:else if $isChecked}
				<Check class="square-5" />
			{/if}
			<input use:melt={$input} />
		</button>
		<label class="pl-4 font-medium text-magnum-900" for="checkbox">
			{label}
		</label>
	</div>
</form>
