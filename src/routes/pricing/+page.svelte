<script>
	import PricingCard from '$lib/components/shared/pricing-card.svelte';

	const pricing = [
		{
			packageName: 'Admin Package',
			price: '₵0',
			description: 'Package for system only',
			features: ['All features included', 'Community suport channel', 'Multi-level permissions'],
			button: 'SUBSCRIBE',
			isFeaturedPrice: false
		},
		{
			packageName: 'Paystack Pack One',
			price: '₵20',
			description: 'testing',
			features: [
				'All features included',
				'Community suport channel',
				'Multi-level permissions',
				'Limited to one instance',
				'SDD'
			],
			button: 'SUBSCRIBE',
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
	<div class="mx-auto max-w-screen-xl p-5">
		<div class="text-center">
			<div class=" justify-center text-6xl font-bold tracking-tight  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">All-in-one platform</div>
			<div class=" justify-center text-lg mt-2">
				You take care of your companies and we take care of the organization and collaboration and
				everything else
			</div>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto mt-12"
		>
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
</div>
