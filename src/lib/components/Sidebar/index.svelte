<script>
	export let activePage;
</script>

<div class="left">
	<div class="content">
		<div class="upgrade">
			<a
				class="button"
				href="/subscription"
				data-ajax="true"
				data-ajax-get-file="subscription"
				data-ajax-get-page="subscription">Get Premium SSL</a
			>
		</div>

		<ul class="nav">
			<li class="getting_started">
				<a
					class="icon"
					href="/dashboard"
					data-ajax="true"
					data-ajax-get-file="dashboard"
					data-ajax-get-page="dashboard">Dashboard</a
				>
			</li>

			<li class="certificates">
				<a
					class="icon"
					href="/certificates"
					data-ajax="true"
					data-ajax-get-file="certificates"
					data-ajax-get-page="certificates"
					data-ajax-get-parameters="&amp;status=issued">Certificates</a
				>
			</li>

			<li class="developer">
				<a
					class="icon"
					href="/developer"
					data-ajax="true"
					data-ajax-get-file="developer"
					data-ajax-get-page="developer">Developer</a
				>
			</li>
		</ul>
	</div>
</div>
