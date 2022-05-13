<script>
	import '../app.css';
	import '$lib/assets/css/style.app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/index.svelte';
	import Sidebar from '$lib/components/Sidebar/index.svelte';
	import Notification from '$lib/components/Notification/index.svelte';
	import { USER_DETAILS } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let activePage = $page.url.pathname;

	$: if ($page.url.pathname) {
		activePage = $page.url.pathname;
	}

	onMount(() => {
		if (!$USER_DETAILS) {
			goto('/login');
		}
		// USER_DETAILS.set({ email: 'eddy@example.com' });
	});
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="css/style.app.css" /> -->
</svelte:head>
<!--<div>
 <Header user={$USER_DETAILS} />
	<slot />
</div> -->

{#if $USER_DETAILS && activePage !== '/login'}
	<div class="app">
		<Header user={$USER_DETAILS} {activePage} />
		<section class="main">
			<div class="container">
				<Sidebar {activePage} />
				<!-- <Notification /> -->
				<slot />
			</div>
		</section>
	</div>
{:else}
	<!-- show login only -->

	<slot />
{/if}

<!-- {#if activePage === '/login'}
	
{/if} -->
<style>
	/* <style global> */
	/* @import '../lib/assets/css/style.app.css'; */
	/* section.main {
	}
	section {
		overflow: visible;
	}
	section {
		width: 100%;
		overflow: hidden;
	}
	.container,
	section,
	section .container {
		margin-right: auto;
		margin-left: auto;
	}

	section.main > .container {
		overflow: hidden;
	}
	.container,
	section .container {
		padding-right: 15px;
		max-width: 1170px;
		padding-left: 15px;
		position: relative;
	}
	.container,
	section,
	section .container {
		margin-right: auto;
		margin-left: auto;
	} */
</style>
