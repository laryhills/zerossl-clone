<script>
	import { pageMenus, togglePageMenu, isMobileMenuOpen, isProfileMenuOpen } from '$lib/stores/ui';
	import { USER_DETAILS } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	export let user = null;
	export let activePage;

	let links = [
		{
			name: 'help',
			title: 'Partner Program',
			url: 'https://zerossl.com/partners'
		}
	];
	if (user) {
		links = [
			{
				name: 'help_center',
				title: 'Help Center',
				url: 'https://help.zerossl.com/'
			},
			...links
		];
	} else {
		links = [
			{
				name: 'features',
				title: 'Features',
				sublinks: [
					{
						name: 'ssl',
						url: 'https://zerossl.com/features/certificates',
						title: 'SSL Certificates'
					},

					{
						name: 'validation',
						title: 'SSL Certificate Validation',
						url: 'https://zerossl.com/features/validation'
					},
					{
						name: 'installation',
						title: 'SSL Certificate Installation',
						url: 'https://zerossl.com/features/installation'
					},
					{
						name: 'console',
						title: 'SSL Management Console',
						url: 'https://zerossl.com/features/console'
					},
					{
						name: 'monitoring',
						title: 'SSL Monitoring',
						url: 'https//zerossl.com/features/monitoring'
					},
					{
						name: 'acme',
						title: 'ZeroSSL ACME Automation',
						url: 'https://zerossl.com/features/acme'
					}
				]
			},
			{
				name: 'developer',
				title: 'Developer',
				sublinks: [
					{ name: 'api', title: 'REST API', url: 'https://zerossl.com/developer' },
					{
						name: 'documentation',
						title: 'API Documentation',
						url: 'https://zerossl.com/documentation/api'
					},
					{
						name: 'documentation',
						title: 'ACME Documentation',
						url: 'https://zerossl.com/documentation/acme'
					},
					{ name: 'certbot', title: 'ZeroSSL Certbot', url: 'https://github.com/zerossl' }
				]
			},
			{
				name: 'pricing',
				title: 'Pricing',
				url: 'https://zerossl.com/pricing'
			},
			...links,
			{
				name: 'action login',
				title: 'Log in',
				url: '/login'
			},
			{
				name: 'action cta',
				title: 'Get Free SSL',
				url: '/login'
			}
		];
	}

	const profileLinks = [
		{ url: 'account', name: 'Account', content: 'e71e' },
		{ url: 'subscription', name: 'Subscription', content: 'e74d' },
		{ url: 'billing', name: 'Billing', content: 'e68d' },
		{ url: 'logout', name: 'Logout' }
	];

	const toggleMobileMenu = () => {
		isMobileMenuOpen.update((v) => !v);
		window.document.getElementById('body').classList.toggle('overflow_hidden');
	};

	const toggleProfileMenu = () => {
		isProfileMenuOpen.update((v) => !v);
	};

	const logout = () => {
		USER_DETAILS.set(null);
		goto('/login');
	};
</script>

<nav class="header">
	<div class="container">
		<div class="logo">
			<a title="ZeroSSL Home" href="/dashboard">
				<img draggable="false" alt="ZeroSSL Logo" src="/images/zerossl_logo.svg" />
			</a>
		</div>
		<span data-header-toggle="true" class="mobile_menu_icon" on:click={() => toggleMobileMenu()} />
		<ul class:displayBlock={$isMobileMenuOpen} class:mobile_dropdown_open={$isMobileMenuOpen}>
			{#each links as link}
				{#if !link.sublinks}
					<!-- show these links in all pages but in mobile and non-login pages -->
					<li class={link.name} class:hidden={activePage !== 'login' && $isMobileMenuOpen}>
						<a title={link.title} href={link.url}>{link.title}</a>
					</li>
				{:else}
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li class={`${link.name} dropdown`}>
						<a
							on:click={(e) => {
								e.preventDefault();
								togglePageMenu(link.name);
							}}
							href="#"
						>
							{link.title}
						</a>
						{#if $pageMenus[link.name]}
							<ul data-dropdown="menu" class="dropdown_menu" style="display: block;">
								{#each link.sublinks as sublink}
									<li class={sublink.name}>
										<a title={sublink.title} href={sublink.url}>{sublink.title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/if}
			{/each}
			{#if user && user.email}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<li class="account dropdown">
					<a
						data-dropdown="toggle"
						title="Account"
						href="#"
						data-initials={user.email.substring(0, 2)}
						class:dropdown_open={$isProfileMenuOpen}
						on:click={(e) => {
							e.preventDefault();
							toggleProfileMenu();
						}}
					>
						{user.email}
					</a>

					<ul data-dropdown="menu" class="dropdown_menu" class:displayBlock={$isProfileMenuOpen}>
						{#each profileLinks as link}
							{#if link.url === 'logout'}
								<li class="logout">
									<a
										data-action="logout"
										href="#logout"
										on:click={(e) => {
											e.preventDefault();
											logout();
										}}
									>
										{link.name}
									</a>
								</li>
							{:else}
								<li class={link.url}>
									<a
										href={`/${link.url}`}
										data-ajax="true"
										data-ajax-get-file={link.url}
										data-ajax-get-page={link.url}
									>
										{link.name}
									</a>
								</li>
							{/if}
						{/each}
					</ul>
				</li>
				<li class="mobile_only">
					<a
						href="/dashboard"
						data-ajax="true"
						data-ajax-get-file="dashboard"
						data-ajax-get-page="dashboard">Dashboard</a
					>
				</li>
				<li class="mobile_only">
					<a
						href="/certificates"
						data-ajax="true"
						data-ajax-get-file="certificates"
						data-ajax-get-page="certificates"
						data-ajax-get-parameters="&amp;status=issued">Certificates</a
					>
				</li>
				<li class="mobile_only">
					<a
						href="/developer"
						data-ajax="true"
						data-ajax-get-file="developer"
						data-ajax-get-page="developer">Developer</a
					>
				</li>
			{/if}
		</ul>
	</div>
</nav>

<style>
	.displayBlock {
		display: block !important;
	}

	/* body.app .header ul>li.dropdown.account > a:after {
	left: 45px;
	display: none;
}
body.app .header ul>li.dropdown>a+ul.dropdown_menu li.account a:before {
    content: "\e71e";
}
body.app .header ul>li.dropdown>a+ul.dropdown_menu li.billing a:before {
    content: "\e74d";
}
body.app .header ul>li.dropdown>a+ul.dropdown_menu li.subscription a:before {
    content: "\e68d";
}
body.app .header ul>li.dropdown>a+ul.dropdown_menu li a:hover {
}
 */
	li.logout a {
		margin-top: 6px;
		padding-left: 15px;
		padding-bottom: 5px;
		background: #566182;
		color: #ffffff;
	}
	li.logout a:hover {
		opacity: 0.9;
	}
	li.logout a:before {
		display: none;
	}
	li.logout a:hover:after {
		font-family: Linearicons;
		display: inline-block;
		speak: none;
		font-size: 16px;
		margin-top: 0;
		content: '\E8FA';
		position: absolute;
		right: 15px;
		top: 4px;
		font-weight: 700;
	}
</style>
