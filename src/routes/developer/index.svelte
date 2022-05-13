<script>
	import Content from '../../lib/components/Content/index.svelte';
	import Modal from 'svelte-simple-modal';

	let showModal = false;
</script>

{#if showModal}
	<div class="popup_backdrop" style="display: block;" />
	<div class="popup" style="display: block;">
		<div class="window">
			<div class="content confirmation" style="display: block;">
				<header style="">
					<h1 style="">Are you sure?</h1>
					<a data-action="close_popup" class="close" />
				</header>
				<div class="body" style="">
					<form name="confirm_reset_access_key" id="confirm_reset_access_key">
						<div class="form_row" style="">
							<aside class="alerts" />
							<p>
								Are you sure about resetting your API key? Your previous key will be deleted and
								this action cannot be undone. Please click below to proceed.
							</p>
						</div>
						<div class="form_row">
							<button type="submit" form="confirm_reset_access_key" class="button"
								>Reset API Key</button
							>
							<a
								title="Cancel"
								href="#"
								on:click={(e) => {
									e.preventDefault();
									showModal = false;
								}}
								data-action="close_popup">Cancel</a
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}
<!-- <Modal><Content /></Modal> -->
<!-- svelte-ignore a11y-missing-attribute -->
<main>
	<div class="right">
		<div class="content">
			<section class="title_section">
				<h2>Developer</h2>
			</section>

			<section class="default">
				<aside class="alerts" />

				<div class="form_row" style="margin-bottom: 30px">
					<span class="heading">ZeroSSL API Key</span>

					<p>
						Required to connect to our REST API. Also required in
						<a
							title="Supported ACME Clients"
							href="https://zerossl.com/features/acme#clients"
							target="_blank"
							class="link_out">supported ACME clients</a
						>
					</p>

					<div class="access_key">
						<span>092587cd3cc7816586878fd71082bcaf</span>
						<a
							data-action="reset_access_key"
							herf="#"
							on:click={(e) => {
								e.preventDefault();
								showModal = true;
							}}>Reset Key</a
						>
					</div>
				</div>

				<div class="form_row">
					<span class="heading">API Documentation</span>

					<p>
						For an extensive API documentation with integration guides and code examples for all
						major programming languages, please navigate to the ZeroSSL API documentation using the
						button below.
					</p>

					<a
						title="ZeroSSL API Documentation"
						target="_blank"
						class="button go_to_api_docs"
						href="https://zerossl.com/documentation/api">API Documentation</a
					>
				</div>
			</section>

			<section class="default">
				<aside class="alerts" />

				<div class="form_row">
					<span class="heading">EAB Credentials for ACME Clients</span>

					<p>
						If you are using an ACME client that is not integrated with ZeroSSL, you can still
						generate EAB (External Account Binding) credentials here to connect it to your ZeroSSL
						account. To generate your credentials, click the button below.
					</p>

					<a
						title="Generate EAB Credentials"
						data-action="generate_eab_credentials"
						class="button generate_eab"
						href="javascript:void(0)">Generate</a
					>

					<a
						title="ZeroSSL ACME Documentation"
						target="_blank"
						class="go_to_acme_docs"
						href="https://zerossl.com/documentation/acme">ACME Documentation</a
					>
				</div>
			</section>
		</div>
	</div>
</main>
