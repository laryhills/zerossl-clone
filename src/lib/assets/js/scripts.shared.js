/* product identification */
var isProduct = 'zerossl';

if ($('body').attr('data-sslforfree') === 'true') {
isProduct = 'sslforfree';
}

/* dropdown */
$('body').on('click', '[data-dropdown="toggle"]', function() {

	$('body').find('[data-dropdown="menu"]').not($(this).next('[data-dropdown="menu"]')).hide(0);

	if ($(this).next('[data-dropdown="menu"]').is(':visible')) {
	$(this).removeClass('dropdown_open');
	$(this).next('[data-dropdown="menu"]').fadeOut(50);
	} else {
	$(this).addClass('dropdown_open');
	$(this).next('[data-dropdown="menu"]').fadeIn(50);
	}

});

$('body').on('click', function(event) {

	if ($(event.target).attr('data-dropdown') !== 'toggle') {
	$('body').find('[data-dropdown="toggle"]').removeClass('dropdown_open');
	$('body').find('[data-dropdown="menu"]').fadeOut(50);
	}

});

function closeAllDropdownMenus() {
	$('body').find('[data-dropdown="toggle"]').removeClass('dropdown_open');
	$('body').find('[data-dropdown="menu"]').fadeOut(50);
}

/* validate url */
function is_valid_url(url) {
	return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/.test(url);
}

function scrollToTop(speed) {

	if (!speed) {
	speed = 0;
	}

	$("html, body").animate({
	   scrollTop: 0
	}, speed);

}

/* validate email */
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
}

/* GENERAL ERROR INFO SUCCESS MESSAGE */
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

}


/* RECAPTCHA INIT */
function generateRecaptchaToken() {

	grecaptcha.ready(function () {

		var recaptchaSitekey = $('body').find('[name="recaptcha_v3_sitekey"]').val();

		grecaptcha.execute(recaptchaSitekey, {action: 'zerossl_signup'}).then(function (token) {

			$('body').find('[name="recaptcha_token"]').val(token);

		});

    });

	// We generate a new recaptcha token every minute to bypass the timeout of tokens.
    window.setTimeout(generateRecaptchaToken, 60000);

}


/* TRANSLATE API ERROR MESSAGES */
function translateError(errorMessage) {
	'use strict';

	var translatedErrorMessage;

	switch (errorMessage) {

		case 'Unknown Error while switching subscription plan.':

			if (currentPage === 'checkout') {
			translatedErrorMessage = 'An error occurred. Please try again or contact support.';
			} else {
			translatedErrorMessage = 'Error: Subscription plan could not be changed. Please try again or contact support.';
			}

		break;

		case 'Your new passwords do not match.':
		translatedErrorMessage = 'Error: Your new passwords do not match. Please try again.';
		break;

		case 'Current Password does not match':
		translatedErrorMessage = 'Error: Your current password was entered wrong. Please try again.';
		break;

		case 'duplicate_certificates_found':
		translatedErrorMessage = 'One of your certificate domains is no longer eligible on the Free Plan. To continue, please choose the Basic Plan.';
		break;

        case 'certificate_cannot_be_revoked':
            translatedErrorMessage = 'We are unable to revoke this certificate. If this is a certificate issued via ACME please ' +
                '<a href="https://help.zerossl.com/hc/en-us/articles/900005244486-Revoking-Certificates-Issued-via-ACME" target="_blank">refer to this article</a> ' +
                'on how to revoke ACME certificates';
        break;

		default:
		errorMessage = errorMessage
			.replace(/_/g, ' ')
			/*.replace(/\b\w/g, String.call.bind(errorMessage.toUpperCase))*/;
		translatedErrorMessage = 'An error occurred. Please try again, check for maintenance downtimes in <a href="https://status.zerossl.com" target="_blank">https://status.zerossl.com</a> or contact our support team in case you have troubles (Error Reference: "' + errorMessage + '").';
		break;

	}

	return translatedErrorMessage;

}

function isBlockedDomain(value) {
    const blockedTlds = ['.af', '.by', '.cu', '.er', '.gn', '.ir', '.kp', '.lr', '.ru', '.ss', '.sy', '.zw'];
    value = value.trimRight().toLowerCase();
    return !!blockedTlds.find(tld => value.endsWith(tld));
}

/* VALIDATE DOMAIN */
function isValidDomain(value) {

	//var domainPattern = /^([*]{1}[.][^-][\w-]+[.][\w.]+|[^\W_][a-zA-Z\d\-.]*[^\W][.][\w]{2,}|[a-zA-Z\d]{1}[.][\w]{2,})$/i;
	//var domainPattern = /^([*]{1}[.][^-][\w-]+[.](?:[\w.]|xn--[\w]{2,})+|[^\W_][a-zA-Z\d\-.]*[^\W][.](?:[\w]|xn--[\w]){2,}|[a-zA-Z\d]{1,}[.](?:[\w]|xn--[\w]){2,})$/i;
    const domainPattern = /^(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z]$/i;

	return value.match(domainPattern) || ipAddress(value);
}

function ipAddress(value) {
    const ipv4Pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Pattern = /^\b(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}\b$/i;
    return value.match(ipv4Pattern) || value.match(ipv6Pattern);
}

/* CHECK IF SUBDOMAIN AND/OR RETURN SUBDOMAIN */
function subDomain(url) {

	if (url.indexOf('*.') >= 0) {
	return false;
	}

	// IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
	url = url.replace(new RegExp(/^\s+/),""); // START
	url = url.replace(new RegExp(/\s+$/),""); // END

	// IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
	url = url.replace(new RegExp(/\\/g),"/");

	// IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
	url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");

	// IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
	url = url.replace(new RegExp(/^www\./i),"");

	// REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
	url = url.replace(new RegExp(/\/(.*)/),"");

	// REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
	if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
		  url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");

	// REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
	// changed this to allow up to 25 chars in tld section
	} else if (url.match(new RegExp(/\.[a-z]{2,25}$/i))) {
		  url = url.replace(new RegExp(/\.[a-z]{2,25}$/i),"");
	}

	// CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
	return !!(url.match(new RegExp(/\./g)));
}


/* INFO TOOLTIPS */
$('body').on('mouseover', '[data-tooltip]', function() {

	var thisInfoText = $(this).attr('data-tooltip');

	if ($(this).hasClass('tooltip_open')) {
	return false;
	}

	$('body').find('.tooltip_open').removeClass('tooltip_open');
	$(this).addClass('tooltip_open');

});

$('body').on('mouseout', '[data-tooltip]', function() {

	$('body').find('.tooltip_open').removeClass('tooltip_open');

});

$('body').on('click', function(event) {

	$('body').find('.tooltip_open').removeClass('tooltip_open');

});


/* UCWORDS / UCFIRST */
function ucwords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}


/* PASSWORD STRENGTH CHECK */
function passwordStrength(password) {

	/*
	rules:
	- more than 8 characters
	- at least one lowercase character
	- at least one number character
	- at least one uppercase character

	sslforfree:
	- more than 6 characters
	*/

	var arr = [/.{8,}/, /[a-z]+/, /[0-9]+/, /[A-Z]+/];
	var strength = 0;

	$.map(arr, function(regexp) {

	  if (password.match(regexp)) {
		 strength++;
	  }

	});

	// if all rules match, strength = 4
	if (strength === 4) {
	return true;
	}

	// sslforfree
	if (isProduct === 'sslforfree' && password.match(/.{6,}/)) {
	return true;
	}

	return false;

}

/* SIGNUP - REAL-TIME PASSWORD STRENGTH METER */
$('body').on('keyup', '[name="signup[password]"]', function() {


	/*length 8 characters or more*/
	if (this.value.match(/.{8,}/)) {
	$('body').find('[data-meter="count"]').addClass('true');
	} else {
	$('body').find('[data-meter="count"]').removeClass('true');
	}

	/*contains lowercase characters*/
	if (this.value.match(/[a-z]+/)) {
	$('body').find('[data-meter="lowercase"]').addClass('true');
	} else {
	$('body').find('[data-meter="lowercase"]').removeClass('true');
	}

	/*contains digits*/
	if (this.value.match(/[0-9]+/)) {
	$('body').find('[data-meter="number"]').addClass('true');
	} else {
	$('body').find('[data-meter="number"]').removeClass('true');
	}

	/*contains uppercase characters*/
	if (this.value.match(/[A-Z]+/)) {
	$('body').find('[data-meter="uppercase"]').addClass('true');
	} else {
	$('body').find('[data-meter="uppercase"]').removeClass('true');
	}

});

$('body').on('focus', '[name="signup[password]"]', function() {
	$('body').find('.password_strength_meter').slideDown(100);
});


/* FORGE CRYPTO LIBRARY */
function initForge() {

	// run this *after* including the forge script
	forge.options.usePureJavaScript = true;

}


/* FORGE - GENERATE SHA256 */
function generateSHA256(content) {

	if (!content) {
	return false;
	}

	var md = forge.md.sha256.create();
	md.update(content);

	return md.digest().toHex();

}


/* FORGE - STORE/UPDATE ENCRYPTION KEY */
function storeEncryptionKey(value) {

	var encryptionKey = generateSHA256(value + value);

	// add encryption key to local storage
	localStorage.setItem('encryption_key', encryptionKey);

}


/* FORGE - GET ENCRYPTION KEY */
function getEncryptionKey() {

	// add encryption key to local storage
	return localStorage.getItem('encryption_key');

}


/* MOBILE HEADER TOGGLE */
$('body').on('click', '[data-header-toggle="true"]', function() {

	$('.header [data-header-toggle="true"]+ul').slideToggle(100).toggleClass('mobile_dropdown_open');
	$('body').toggleClass('overflow_hidden');

});




