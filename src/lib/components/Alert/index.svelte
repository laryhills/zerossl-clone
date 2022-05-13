<!-- /* GENERAL ERROR INFO SUCCESS MESSAGE */
function generalInfo(showHide, type, message, specificAlertsContainerSelector) {
    "use strict";

	var alertsContainer;

	// if <aside> exists already, use existing one
	if ($('body').find(specificAlertsContainerSelector).length) {
	    alertsContainer = $('body').find(specificAlertsContainerSelector);
	} else if ($('body').find('aside.alerts:not(.ignore)').length) {
	    alertsContainer = $('body').find('aside.alerts:not(.ignore)');
	} else {
	// else shout
	alert(message);
	return false;
	}

	// if popup, use popup <aside>
	if ($('body').find('.popup .window .content').length > 0) {
	    alertsContainer = $('body').find('.popup aside.alerts');
	}

	if (showHide === 'hide') {
	    alertsContainer.find('.alert:not(.static)').remove();
	} else if (showHide && type && message) {
	    alertsContainer.html('<p class="alert '+type+'">'+message+'</p>');
	}

} -->
<script>
	export let type = '';
	export let message = '';
	// generalInfo('show', 'error', 'There were errors. Please try again.');
</script>

<!-- generalInfo('show', 'error', 'There were errors. Please try again.'); -->

<div>
	<p class={`alert ${type}`}>{message}</p>
</div>

<style>
	/* ALERTS */
	.alert {
		border-radius: 3px;
		display: block;
		overflow: hidden;
		padding: 11px 12px 13px 42px;
		font-weight: 600;
		position: relative;
		margin-bottom: 15px;
		text-align: left !important;
	}
	/* .alert > a {
		text-decoration: underline;
		color: inherit;
	} */
	.alert:first-of-type {
		margin-top: 0;
	}
	.alert.info {
		background: #e0e6f8;
		color: #2a407d;
	}
	.alert.error {
		background: #fce3e4;
		color: #de2102;
	}
	.alert.success {
		background: #d7f3e9;
		color: #267d5d;
	}
	.alert:before {
		content: '';
		padding: 3px 5px;
		font-size: x-large;
		font-weight: 600;
		position: absolute;
		left: 12px;
		top: 11px;
		background: url(/images/alert_icon_success.svg);
		width: 20px;
		height: 20px;
	}
	.alert.error:before {
		background: url(/images/alert_icon_error.svg);
	}
	.alert.info:before {
		background: url(/images/alert_icon_info.svg);
	}
</style>
