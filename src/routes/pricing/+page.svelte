<script>
	import PricingCard from '$lib/components/shared/pricingCard.svelte';

	const pricing = [
		{
			packageName: 'Admin Package',
			price: 'GHC 0 /month',
			description: 'Package for system only',
			features: ['All features included', 'Community suport channel', 'Multi-level permissions'],
			button: 'SUBSCRIBE',
			isFeaturedPrice: false
		},
		{
			packageName: 'Paystack Pack One',
			price: 'GHC 20 /month',
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
		// {
		// 	packageName: ' Enterprise',
		// 	price: 'Custom',
		// 	description: ' Minimum $18,000 annually',
		// 	features: [
		// 		'All features included',
		// 		'Community suport channel',
		// 		'Multi-level permissions',
		// 		'Limited to one instance',
		// 		'SDD'
		// 	],
		// 	button: "Let's Talk",
		// 	isFeaturedPrice: false
		// }
	];
</script>

<div class="py-16">
	<div class="mx-auto flex max-w-screen-xl justify-center  p-5 text-6xl font-bold ">
		All-in-one platform
	</div>
	<div class="mx-auto flex max-w-screen-xl justify-center  p-2 text-lg ">
		You take care of your companies and we take care of the organization and collaboration and everything else
	</div>

<div class="mx-auto grid max-w-screen-xl lg:grid-cols-2 md:grid-cols-1 md:divide-x-0	lg:divide-x divide-gray-400 p-5 place-items-center">
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
