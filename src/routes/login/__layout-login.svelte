<script>
	import '../../app.css';
	import '$lib/assets/css/style.preapp.css';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer/index.svelte';
</script>

<div class="login preapp">
	<slot />
	<Footer />
</div>
