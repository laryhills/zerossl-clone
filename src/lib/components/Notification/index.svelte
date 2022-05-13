<div class="notification-wrapper">
	<div id="notification_banners">
		<!-- <script type="text/javascript">
			$.ajax({
				type: 'POST',
				url: '/ajax/public_ajax_handler.php?type=retrieve_notification_banners',
				success: function (data) {
					if (data.success === 1) {
						const banners = JSON.parse(data.message);
						if (banners !== null) {
							banners.forEach((banner) => {
								const classToAdd = banner.label_names.includes('alert_success')
									? 'success'
									: 'info';
								$('#notification_banners').append(
									$('<div>')
										.addClass('alert')
										.addClass(classToAdd)
										.append(
											$(
												'<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'
											)
										)
										.append(banner.body)
								);
							});
						}
					}
				}
			});
		</script> -->
	</div>
</div>
