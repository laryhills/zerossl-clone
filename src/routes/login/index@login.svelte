<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/index.svelte';
	import Alert from '$lib/components/Alert/index.svelte';
	import { USER_DETAILS } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	onMount(() => {
		USER_DETAILS.set(null);
	});

	let loading = false;
	let email = '';
	let password = '';
	let error = { message: '', password: false, email: false };

	const reset = () => {
		email = '';
		password = '';
		error = { message: '', password: false, email: false };
	};

	const login = async () => {
		loading = true;
		error = { message: '', password: false, email: false };
		if (email === '' && password === '') {
			error.message = 'Please enter your email and password';
			error.email = true;
			error.password = true;
			loading = false;
			return;
		}
		if (email === '') {
			error.email = true;
			error.message = 'Please enter your email';
			loading = false;
			return;
		}
		if (password === '') {
			error.password = true;
			error.message = 'Please enter your password';
			loading = false;
			return;
		}
		await USER_DETAILS.set({ email: email });
		goto('/certificates');
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<div>
	<Header user={$USER_DETAILS} />
	<!-- end template -->

	<section class="preapp">
		<div class="container">
			<h2>Log in to your account</h2>

			<form id="login" name="login" on:submit|preventDefault={login}>
				<fieldset>
					{#if (error.email || error.password) && error.message}
						<aside class="alerts" />
						<Alert type="error" message={error.message} />
					{/if}
					<!-- <aside class="alerts">
							<p class="alert info">
								Session timed out, please log back in. In case this keeps happening, please read <a
									title="Troubleshoot issues logging in to your account"
									href="https://help.zerossl.com/hc/en-us/articles/360060119293-Logging-In"
									target="_blank">this help article</a
								> or contact support.
							</p>
						</aside>
						<aside class="alerts">
							<p class="alert error">Login failed. Incorrect email or password.</p>
						</aside> -->

					<a
						class="label_link"
						href="#forgot"
						on:click={(e) => {
							e.preventDefault();
						}}>Forgot Password</a
					>

					<div class="form_row">
						<label for="email">Enter Credentials</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							class:error={error.email}
							on:keyup={() => (error.email = false)}
							bind:value={email}
						/>
					</div>

					<div class="form_row">
						<input
							type="password"
							name="login[password]"
							placeholder="Password"
							autocomplete="current-password"
							class:error={error.password}
							on:keyup={() => (error.password = false)}
							bind:value={password}
						/>
					</div>

					<div class="form_row">
						<button class="button" class:loading type="submit" form="login"> Log In </button>

						<p class="no_account_yet">
							<span>No account yet?</span>
							<a
								title="Create ZeroSSL Account"
								href="#login"
								on:click={(e) => {
									e.preventDefault();
								}}>Get started for free</a
							>
						</p>
					</div>
				</fieldset>
			</form>
		</div>
	</section>
</div>
<!-- start template -->
