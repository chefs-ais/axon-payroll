<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowDownRight } from 'lucide-svelte';
	type CardDataProps = {
		packageName: string;
		price: string;
		description: string;
		features: string[];
		button: string;
		isFeaturedPrice: Boolean;
	};
	export let CardData: CardDataProps;
</script>

<!-- <div class="col-span-1 mt-12 rounded-sm p-8 text-black flex items-center justify-center shadow-gray-500">
	
</div> -->
<div class="flex h-full flex-col gap-5 border border-gray-300 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
	<div class="p-5">
		<h1 class="text-xl font-bold">{CardData.packageName}</h1>
		<div class="flex gap-3 items-center mb-3 mt-5">
			<h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{CardData.price}</h2>
		<div>per month</div>
		</div>
		<h3>{CardData.description}</h3>
		<br>
		<Button color={CardData.isFeaturedPrice ? 'primary' : 'light'} class="w-full">
			{CardData.button}
		</Button>
		
	</div>

	<hr class="w-full">

	<div class="p-5">


		<h2 class="pb-8 font-bold">What's included</h2>
		<div class="">
			{#each CardData.features as feature}
				<div class="flex items-center gap-2 pb-3">
					<ArrowDownRight class="h-4 w-4" />
					<p>{feature}</p>
				</div>
			{/each}
		</div>
	</div>
</div>