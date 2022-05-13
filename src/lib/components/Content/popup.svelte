<script>
	export let message = 'Hi';
</script>

<!-- <p>🎉 {message} 🍾</p> -->

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
					Are you sure about resetting your API key? Your previous key will be deleted and this
					action cannot be undone. Please click below to proceed.
				</p>
				{message}
			</div>
			<div class="form_row">
				<button type="submit" form="confirm_reset_access_key" class="button">Reset API Key</button>
				<a title="Cancel" href="javascript:void(0)" data-action="close_popup">Cancel</a>
			</div>
		</form>
	</div>
</div>
