$(document).ready(function() {

	if ($('body').hasClass('signup')) {
	generateRecaptchaToken();
	}

	initForge();

});

/* LOGIN */
$('body').on('submit', 'form[name="login"]', function(e) {
	"use strict";
	e.preventDefault();

	var button = $(this).find('button[type="submit"]');

	var emailInput = $('body').find('[name="login[email]"]');
	var passwordInput = $('body').find('[name="login[password]"]');
	var passwordValue = passwordInput.val();

	var error = false;

	if (!emailInput.val() || !isValidEmailAddress(emailInput.val())) {
	error = true;
	emailInput.addClass('error');
	} else {
	emailInput.removeClass('error');
	}

	if (!passwordInput.val()) {
	error = true;
	passwordInput.addClass('error');
	} else {
	passwordInput.removeClass('error');
	}

	if (error === true) {
	generalInfo('show', 'error', 'There were errors. Please try again.');
	return false;
	} else {
	generalInfo('hide');
	}

	button.addClass('loading');

	var	postData = {
		email_address: emailInput.val(),
		password: generateSHA256(passwordInput.val()),
	};

	var postDataJSON = JSON.stringify(postData);
	//console.log(postDataJSON);

	$.ajax({
		type: "POST",
		url: '/ajax/public_ajax_handler.php?type=sign_in',
		data: ({ postArray: postDataJSON }),
		dataType: "json",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
     		//alert(textStatus + ', ' + errorThrown);
  		},
		success: function(data){

			if (data.success === 1) {

				// store encryption key
				storeEncryptionKey(passwordValue);

				window.location.href = '/certificates';
				return false;

			}  else {

				button.removeClass('loading');

				if ($('body').attr('data-sslforfree') === 'true') {
				generalInfo('show', 'error', 'Login failed. Incorrect email or password.<br><br>Please note that log-ins from before May 18th no longer work. To keep using our product, please <a title="Sign Up" href="/signup">create a new account for free.</a>');
				} else {
				generalInfo('show', 'error', 'Login failed. Incorrect email or password.');
				}

				return false;

			}

		}

	});

});


/* FORGOT PASSWORD */
$('body').on('submit', 'form[name="forgot"]', function(e) {
	"use strict";
	e.preventDefault();

	var button = $(this).find('button[type="submit"]');

	var emailInput = $('body').find('[name="forgot[email]"]');

	var error = false;

	if (!emailInput.val() || !isValidEmailAddress(emailInput.val())) {
	error = true;
	emailInput.addClass('error');
	} else {
	emailInput.removeClass('error');
	}

	if (error === true) {
	generalInfo('show', 'error', 'Invalid account email. Please try again.');
	return false;
	} else {
	generalInfo('hide');
	}

	button.addClass('loading');

	var	postData = {
		email_address: emailInput.val(),
	};

	var postDataJSON = JSON.stringify(postData);
	//console.log(postDataJSON);

	$.ajax({
		type: "POST",
		url: '/ajax/public_ajax_handler.php?type=reset_password',
		data: ({ postArray: postDataJSON }),
		dataType: "json",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
     		//alert(textStatus + ', ' + errorThrown);
  		},
		success: function(data){

			if (data.success === 1) {

				button.removeClass('loading');

				generalInfo('show', 'success', 'An email with account recovery instructions has been sent to your email address.');
				return false;

			}  else {

				button.removeClass('loading');

				generalInfo('show', 'error', 'An error occurred. Please try again.');
				return false;

			}

		}

	});


});


/* FINALIZE RESET PASSWORD */
$('body').on('submit', 'form[name="reset"]', function(e) {
	"use strict";
	e.preventDefault();

	var button = $(this).find('button[type="submit"]');

	var newPasswordInput = $('body').find('[name="reset[new_password]"]');
	var newPasswordAgainInput = $('body').find('[name="reset[new_password_again]"]');

	/* product-based password error messages */
	var passwordErrorMessage = 'New password must contain: 8 characters or more, including lowercase, uppercase characters and a number.';

	if (isProduct === 'sslforfree') {
	passwordErrorMessage = 'Password must contain at least 6 characters';
	}

	// check password strength, custom error
	if (!newPasswordInput.val() || !passwordStrength(newPasswordInput.val())) {
	generalInfo('show', 'error', passwordErrorMessage);
	return false;
	} else {
	generalInfo('hide');
	newPasswordInput.removeClass('error');
	}

	if (!newPasswordAgainInput.val() || newPasswordInput.val() !== newPasswordAgainInput.val()) {
	newPasswordAgainInput.addClass('error');
	generalInfo('show', 'error', 'Your new passwords must match.');
	return false;
	} else {
	generalInfo('hide');
	newPasswordAgainInput.removeClass('error');
	}

	button.addClass('loading');

	var	postData = {
		new_password: generateSHA256(newPasswordInput.val()),
		new_password_again: generateSHA256(newPasswordAgainInput.val()),
		key: $('body').find('[name="key"]').val()
	};

	var postDataJSON = JSON.stringify(postData);
	//console.log(postDataJSON);

	$.ajax({
		type: "POST",
		url: '/ajax/public_ajax_handler.php?type=finalize_reset_password',
		data: ({ postArray: postDataJSON }),
		dataType: "json",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
     		//alert(textStatus + ', ' + errorThrown);
  		},
		success: function(data){

			if (data.success === 1) {

				// set cookie in client that invalidates all private keys on next login
				localStorage.setItem('inv_pk', 'true');

				window.location.href = '/login/recovered';
				return false;

			}  else {

				button.removeClass('loading');

				generalInfo('show', 'error', 'Error: Please try again or contact support.');
				return false;

			}

		}

	});


});


/* SIGNUP */
$('body').on('submit', 'form[name="signup"]', function(e) {
	"use strict";
	e.preventDefault();

	generateRecaptchaToken();

	var button = $(this).find('button[type="submit"]');

	var emailInput = $('body').find('[name="signup[email]"]');
	var passwordInput = $('body').find('[name="signup[password]"]');

	var passwordValue = passwordInput.val();

	var error = false;

	if (!emailInput.val() || !isValidEmailAddress(emailInput.val())) {
	error = true;
	emailInput.addClass('error');
	} else {
	emailInput.removeClass('error');
	}

	if (!passwordInput.val()) {
	error = true;
	passwordInput.addClass('error');
	} else {
	passwordInput.removeClass('error');
	}

	if (error === true) {
	generalInfo('show', 'error', 'There were errors. Please try again.');
	return false;
	} else {
	generalInfo('hide');
	}

	/* product-based password error messages */
	var passwordErrorMessage = 'Your password must contain 8 characters or more, including lowercase, uppercase characters and a number.';

	if (isProduct === 'sslforfree') {
	passwordErrorMessage = 'Password must contain at least 6 characters';
	}

	if (!passwordStrength(passwordInput.val())) {

		passwordInput.addClass('error');
		generalInfo('show', 'error', passwordErrorMessage);

		return false;

	} else {
	generalInfo('hide');
	passwordInput.removeClass('error');
	}

	button.addClass('loading');

	var domainToSecure = $('body').find('[name="signup[domain]"]').val();

	var	postData = {
		email_address: emailInput.val(),
		password: generateSHA256(passwordInput.val()),
		payment_frequency: 'monthly',
		domain: $('body').find('[name="signup[domain]"]').val(),
		plan_id: $('body').find('[name="signup[plan_id]"]').val(),
		token: $('body').find('[name="recaptcha_token"]').val(),
        origin: $('body').find('[name="signup[origin]"]').val(),
        origin_full: $('body').find('[name="signup[origin_full]"]').val(),
	};

	var postDataJSON = JSON.stringify(postData);
	//console.log(postDataJSON);

	$.ajax({
		type: "POST",
		url: '/ajax/public_ajax_handler.php?type=create_account',
		data: ({ postArray: postDataJSON }),
		dataType: "json",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
     		//alert(textStatus + ', ' + errorThrown);
  		},
		success: function(data){

			if (data.success === 1) {

				// store encryption key
				storeEncryptionKey(passwordValue);

				if (data.message.payment_required === 1) {
				window.location.href = '/checkout/'+data.message.invoice_id;
				} else {

					// redirect to ssl order wizard
					if (domainToSecure) {
					window.location.href = '/certificate/new/' + domainToSecure;
					return false;
					}

				window.location.href = '/dashboard/start';
				}

				return false;

		} else {

				button.removeClass('loading');

				generalInfo('show', 'error', translateError(data.message));
				return false;

			}

		}

	});

});



/* CTA FOOTER SUBMISSION */
$('body').on('click', '[data-action="submit_footer_cta"]', function(event) {

	event.preventDefault();

	var email = $('body').find('[name="cta_email"]').val();

	if (!isValidEmailAddress(email)) {
	email = '';
	}

	// redirect to signup
	window.location.href = 'https://app.zerossl.com/signup/email/' + email;

});
