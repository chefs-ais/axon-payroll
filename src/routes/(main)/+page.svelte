<script>
	import LogoCloud from '$lib/components/main/logo-cloud.svelte';
	import About from './_components/about.svelte';
	import Benefits from './_components/benefits.svelte';
	import Cta from './_components/cta.svelte';
	import Features from './_components/features.svelte';
	import Hero from './_components/hero.svelte';
	import Infographic from './_components/infographic.svelte';
	// import Reviews from './_components/reviews.svelte';
</script>

<svelte:head>
	<title>Axon Payroll | Enterprise Payroll Software for Companies</title>
</svelte:head>

<section>
	<Hero />
	<LogoCloud />
	<Features/>
	<About />
	<Benefits />
	<Infographic />
	<!-- <Reviews /> -->
	<Cta />
</section>
