<script>
	import Logo from '$lib/images/ap-logo.png';
	export let navigation = {
		connect: [
			{ name: 'Book Meeting', href: '' },
			{ name: 'Twitter', href: 'https://twitter.com/justansub' },
			{ name: 'Github', href: 'https://www.youtube.com/@SpeedyBrand-SEO' },
			{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/speedy-brand-inc/' }
		],
		company: [
			{ name: 'Blogs', href: '/' },
			{ name: 'Pricing', href: '/' },
			{ name: 'Affiliate Partner', href: '/' },
			{ name: 'AI For Enterprise', href: '/' }
		]
	};
</script>

<section class="h-full w-full bg-primary-700 py-32">
	<footer aria-labelledby="footer-heading" class="mx-auto w-full max-w-7xl">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-2">
			<div class="flex flex-col justify-between lg:flex-row">
				<div class="space-y-8">
					<img src={Logo} alt="logo" class="h-12 w-auto" width="100" height="40" />
				</div>

				<!-- Navigations -->
				<div class="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
					<div class="md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Connect</h3>
						<div class="mt-6 space-y-4">
							{#each navigation.connect as item (item.name)}
								<div>
									<a
										href={item.href}
										target="_blank"
										rel="noreferrer"
										class="text-sm leading-6 text-white hover:underline"
									>
										{item.name}
									</a>
								</div>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
						<div class="mt-6 space-y-4">
							{#each navigation.company as item (item.name)}
								<div>
									<a href={item.href} class="text-sm leading-6 text-white hover:underline">
										{item.name}
									</a>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 border-t border-gray-200 pt-8">
				<p class="text-xs text-white">
					© {new Date().getFullYear()} Axon Information Systems. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</section>
