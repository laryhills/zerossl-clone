<script context="module">
	export const load = async ({ session }) => {
		// console.log(session)
		// if (!session.owner) {
		//   return {
		//     status: '301',
		//     redirect: '/owner',
		//   }
		// }
		// const user = session.owner
		// if (user) {
		//   return {
		//     status: '301',
		//     redirect: '/owner',
		//   }
		// } else {
		return {
			status: '301',
			redirect: '/login'
		};
		// }
		//   const user = get(OWNER_DETAILS)
		//   console.log(user)
		//   if (user) return {}
	};
</script>

<script>
	import { onMount } from 'svelte';
	onMount(() => {});
</script>
