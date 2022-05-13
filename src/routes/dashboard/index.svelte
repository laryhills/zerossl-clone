<main>
	<div class="right">
		<div class="content">
			<section class="title_section">
				<h2>Dashboard</h2>

				<div class="options">
					<div class="action" />
				</div>
			</section>

			<aside class="alerts ignore" />

			<section class="welcome_container">
				<div class="head">
					<h3>Welcome to your dashboard</h3>

					<p>
						Thank you for your trust in ZeroSSL. Below you will find usage statistics, a short
						account summary as well as other resources to help you manage your SSL certificates.
					</p>
				</div>

				<ul class="get_started_content">
					<li class="cert_status">
						<ul class="statuses">
							<li class="expiring">
								<span class="heading">Expiring Soon</span>
								<a
									title="View Certificates Expiring Soon"
									href="/certificates/expiring_soon"
									data-ajax="true"
									data-ajax-get-file="certificates"
									data-ajax-get-page="certificates"
									data-ajax-get-type=""
									data-ajax-get-parameters="&amp;status=expiring_soon">View All</a
								>
							</li>

							<li class="draft">
								<span class="heading">Draft</span>
								<a
									title="View Draft Certificates"
									href="/certificates/draft"
									data-ajax="true"
									data-ajax-get-file="certificates"
									data-ajax-get-page="certificates"
									data-ajax-get-type=""
									data-ajax-get-parameters="&amp;status=draft">View All</a
								>
							</li>

							<li class="valid">
								<span class="heading">Issued</span>
								<a
									title="View Valid Certificates"
									href="/certificates/issued"
									data-ajax="true"
									data-ajax-get-file="certificates"
									data-ajax-get-page="certificates"
									data-ajax-get-type=""
									data-ajax-get-parameters="&amp;status=issued">View All</a
								>
							</li>

							<li class="pending_validation">
								<span class="heading">Pending Validation</span>
								<a
									title="View Certificates Pending Validation"
									href="/certificates/pending_validation"
									data-ajax="true"
									data-ajax-get-file="certificates"
									data-ajax-get-page="certificates"
									data-ajax-get-type=""
									data-ajax-get-parameters="&amp;status=pending_validation">View All</a
								>
							</li>

							<li class="expired">
								<span class="heading">Expired</span>
								<a
									title="View Expired Certificates"
									href="/certificates/expired"
									data-ajax="true"
									data-ajax-get-file="certificates"
									data-ajax-get-page="certificates"
									data-ajax-get-type=""
									data-ajax-get-parameters="&amp;status=expired">View All</a
								>
							</li>
						</ul>
					</li>

					<li class="credits">
						<div class="left_section">
							<span class="heading">Your Subscription</span>
							<p>
								You can find your credits & usage on the right. For unlimited certificates and
								access to advanced SSL management tools, <a
									href="/subscription"
									class="upgrade"
									data-ajax="true"
									data-ajax-get-file="subscription"
									data-ajax-get-page="subscription">please upgrade your account</a
								>
							</p>
						</div>

						<div class="right_section ">
							<div class="credits 90d">
								<span><strong>0 / 3</strong> <span>90-Day Certificates</span></span>
							</div>

							<div class="credits 1y">
								<span><strong>0 / 0</strong> <span>1-Year Certificates</span></span>
							</div>
						</div>
					</li>

					<li class="new_cert">
						<div class="left_section">
							<span class="heading">Create SSL Certificate</span>
							<p>
								ZeroSSL lets you create SSL certificates within just a few minutes, supporting both
								90-day and 1-year certificates. To create a certificate, click on the right.
							</p>
						</div>

						<div class="right_section">
							<a
								href="/certificate/new"
								data-ajax="true"
								data-ajax-get-file="order"
								data-ajax-get-page="order"
								class="button">New Certificate</a
							>
						</div>
					</li>

					<li class="developer">
						<div class="left_section">
							<span class="heading">Developer</span>
							<p>
								You have unlimited access to our REST API, which lets you integrate ZeroSSL into
								your application and automate SSL certificate management.
							</p>
						</div>

						<div class="right_section">
							<a
								href="/developer"
								class="dev"
								data-ajax="true"
								data-ajax-get-file="developer"
								data-ajax-get-page="developer">Developer Section</a
							>
							<a target="_blank" href="https://zerossl.com/documentation/api" class="docs"
								>API Documentation</a
							>
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</main>
