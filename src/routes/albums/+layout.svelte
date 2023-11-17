<script>
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import Lenis from '@studio-freight/lenis';

	let position;

	onNavigate((navigation) => {
		//@ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			//@ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	
</script>

<div class="">
	<slot />
</div>
