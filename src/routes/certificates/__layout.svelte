<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/index.svelte';
	import { USER_DETAILS } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isMobileMenuOpen, isProfileMenuOpen } from '$lib/stores/ui';

	onMount(() => {
		isMobileMenuOpen.set(false);
		isProfileMenuOpen.set(false);
	});

	let activePage = $page.url.pathname;

	$: if ($page.url.pathname) {
		activePage = $page.url.pathname;
	}
</script>

<slot />

<main>
	<!-- <input type="hidden" name="google_analytics_id" value="UA-62924033-27" />

	<input type="hidden" name="is_product" value="zerossl" />
	<input type="hidden" name="current_file" value="certificates" />
	<input type="hidden" name="current_page" value="certificates" />
	<input type="hidden" name="current_type" value="" />
	<input type="hidden" name="current_id" value="" />
	<input type="hidden" name="html_title" value="Certificates" />

	<input type="hidden" name="additional_parameter[status]" value="issued" /><input
		type="hidden"
		name="current_additional_parameters"
		value="&status=issued"
	/>

	<input type="hidden" name="user[subscription_id]" value="477" />
	<input type="hidden" name="user[payment_frequency]" value="monthly" />
	<input type="hidden" name="user[origin]" value="" />
	<input type="hidden" name="user[origin_full]" value="" /> -->

	<div class="right">
		<div class="content">
			<section class="title_section">
				<h2>Certificates</h2>

				<div class="options">
					<div class="action">
						<a
							href="/certificate/new"
							data-ajax="true"
							data-ajax-get-file="order"
							data-ajax-get-page="order"
							class="button">New Certificate</a
						>
					</div>

					<div class="search">
						<form name="table_search">
							<input type="search" data-table="search" placeholder="Search + Hit Enter" value="" />
						</form>
					</div>
				</div>
			</section>

			<aside class="alerts" />

			<section class="tabs_section">
				<div class="tabs">
					<a
						href="/certificates/draft"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=draft"
						class="tab"
						class:selected={activePage.includes('draft')}>Draft</a
					>
					<a
						href="/certificates/expiring_soon"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=expiring_soon"
						class="tab"
						class:selected={activePage.includes('expiring_soon')}>Expiring Soon</a
					>
					<a
						href="/certificates/issued"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=issued"
						class="tab"
						class:selected={activePage.includes('issued')}>Issued</a
					>
					<!-- <a
						href="/certificates/pending_validation"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=pending_validation"
						class="tab"
						class:selected={activePage.includes('pending_validation')}>Pending Validation</a
					> -->
					<a
						href="/certificates/expired"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=expired"
						class="tab"
						class:selected={activePage.includes('expired')}>Expired</a
					>
					<a
						href="/certificates/cancelled"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-type=""
						data-ajax-get-parameters="&amp;status=cancelled,revoked"
						class="tab"
						class:selected={activePage.includes('cancelled')}>Cancelled</a
					>
				</div>
			</section>

			<slot />

			<!-- <div class="pagination_section" data-table="pagination"></div> -->

			<!-- <div class="pagination_section" data-table="pagination">
				<a
					href="/certificates/issued/search:/page:1"
					data-ajax="true"
					data-ajax-get-file="certificates"
					data-ajax-get-page="certificates"
					data-ajax-get-type=""
					data-ajax-get-parameters="&amp;status=issued&amp;search=search:&amp;pageno=page:1"
					class="paginate_button start disabled"
					tabindex="0"
				/><a
					href="/certificates/issued/search:/page:0"
					data-ajax="true"
					data-ajax-get-file="certificates"
					data-ajax-get-page="certificates"
					data-ajax-get-type=""
					data-ajax-get-parameters="&amp;status=issued&amp;search=search:&amp;pageno=page:0"
					class="paginate_button previous disabled"
					tabindex="0"
				/><a
					href="/certificates/issued/search:/page:2"
					data-ajax="true"
					data-ajax-get-file="certificates"
					data-ajax-get-page="certificates"
					data-ajax-get-type=""
					data-ajax-get-parameters="&amp;status=issued&amp;search=search:&amp;pageno=page:2"
					class="paginate_button next disabled"
					tabindex="0"
				/><a
					href="/certificates/issued/search:/page:0"
					data-ajax="true"
					data-ajax-get-file="certificates"
					data-ajax-get-page="certificates"
					data-ajax-get-type=""
					data-ajax-get-parameters="&amp;status=issued&amp;search=search:&amp;pageno=page:0"
					class="paginate_button end disabled"
					tabindex="0"
				/>
			</div>

			<span class="pagination_meta" /> -->

			<div class="clearfix" />
		</div>
	</div>
</main>
