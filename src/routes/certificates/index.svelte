<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/index.svelte';
	import Alert from '$lib/components/Alert/index.svelte';
	import { USER_DETAILS } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	onMount(() => {
		goto('/certificates/issued');
	});
</script>

<svelte:head>
	<title>Certificates</title>
</svelte:head>
