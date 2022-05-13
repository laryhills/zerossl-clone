<script>
	import { isMobileMenuOpen, isProfileMenuOpen } from '$lib/stores/ui';
	import { onMount } from 'svelte';

	onMount(() => {
		isMobileMenuOpen.set(false);
		isProfileMenuOpen.set(false);
	});
</script>

<slot />
