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

<div class="col-span-1 mt-12 rounded-sm p-8 text-black shadow-gray-500">
	<div class="flex h-full w-full flex-col items-center gap-5">
		<h1 class="text-4xl font-bold">{CardData.packageName}</h1>
		<h2 class="pt-4 text-xl font-bold">{CardData.price}</h2>
		<h3>{CardData.description}</h3>

		<h2 class="font-bold">What's included</h2>

		<div class="">
			{#each CardData.features as feature}
				<div class="flex items-center gap-2">
					<ArrowDownRight class="h-4 w-4" />
					<p>{feature}</p>
				</div>
			{/each}
		</div>
		<Button color={CardData.isFeaturedPrice ? 'primary' : 'light'}>
			{CardData.button}
		</Button>
	</div>
</div>
