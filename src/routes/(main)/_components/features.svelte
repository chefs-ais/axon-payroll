<script>
	import { Rotate3D, Shield, WalletCards } from 'lucide-svelte';

	const features = [
		{
			icon: Rotate3D,
			title: 'Free transfers',
			description:
				'Create financial transactions and automatically process required payments by scheduling future payments'
		},
		{
			icon: WalletCards,
			title: 'Multiple account',
			description:
				'Manage multiple accounts and generate platform linked directly to your business operations'
		},
		{
			icon: Shield,
			title: 'Unmatched security',
			description: 'Secure transactions with bank-grade security and continuous monitoring'
		}
	];
</script>

<section class="mx-auto max-w-screen-xl px-4 pt-24 sm:px-6 lg:px-8">
    <h2 class="heading text-xl font-bold tracking-tight text-primary-700 lg:text-3xl">
        All your payment and cash flow needs, handled effortlessly.
    </h2>
    <p class="mt-2 text-neutral-500 lg:text-lg">
        Take the stress out of managing payments and cash flow with an all-in-one solution designed to
        keep your finances organized and under control. From seamless payment processing to real-time
        cash flow tracking, we handle the details so you can focus on what you do best— running and
        growing your business with confidence.
    </p>
    <br />

	<div class="grid gap-5 md:grid-cols-3">
		{#each features as feature}
			<div class="rounded-lg px-5 py-10 bg-[#fdfdfd] border">
				<svelte:component this={feature.icon} class="mb-8 size-8 stroke-primary-700 bg-white border p-1 rounded-lg"/>
				<h3 class="mb-3 text-xl font-semibold text-primary-700">{feature.title}</h3>
				<p class="text-gray-600">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>
