<script>
	import PricingCard from '$lib/components/shared/pricingCard.svelte';

	const pricing = [
		{
			packageName: ' Free',
			price: '$0',
			description: ' Up to 15 years',
			features: ['All features included', 'Community suport channel', 'Multi-level permissions'],
			button: 'Get Started',
			isFeaturedPrice: false
		},
		{
			packageName: ' Pro',
			price: '$30 per month/dev',
			description: ' Minimum $18,000 annually',
			features: [
				'All features included',
				'Community suport channel',
				'Multi-level permissions',
				'Limited to one instance',
				'SDD'
			],
			button: 'Buy Now',
			isFeaturedPrice: true
		},
		{
			packageName: ' Enterprise',
			price: 'Custom',
			description: ' Minimum $18,000 annually',
			features: [
				'All features included',
				'Community suport channel',
				'Multi-level permissions',
				'Limited to one instance',
				'SDD'
			],
			button: "Let's Talk",
			isFeaturedPrice: false
		}
	];
</script>

<div class="py-16">
	<div class="mx-auto flex max-w-screen-xl justify-center p-5 text-6xl font-bold">
		Pricing Plans
	</div>
	<div class="mx-auto flex max-w-screen-xl justify-center p-2 text-lg">
		Choose the Plan That Fits Your Needs
	</div>

	<div class="mx-auto grid max-w-screen-xl grid-cols-3 divide-x divide-gray-400 p-5">
		{#each pricing as price_item}
			<PricingCard
				CardData={{
					packageName: price_item.packageName,
					price: price_item.price,
					description: price_item.description,
					features: price_item.features,
					button: price_item.button,
					isFeaturedPrice: price_item.isFeaturedPrice
				}}
			/>
		{/each}
	</div>
</div>
