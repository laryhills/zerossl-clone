<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/index.svelte';
	import Alert from '$lib/components/Alert/index.svelte';
	import { USER_DETAILS } from '$lib/stores/user';

	let loading = false;
	onMount(() => {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 2000);
	});
</script>

<svelte:head>
	<title>Certificates</title>
</svelte:head>
<section class="list">
	<ul>
		{#if loading}
			<li class="loading" />
		{:else}
			<li class="no_results">
				No Results
				<a
					href="/certificate/new"
					data-ajax="true"
					data-ajax-get-file="order"
					data-ajax-get-page="order">Create Certificate</a
				>
			</li>
		{/if}
	</ul>
</section>
