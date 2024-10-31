<script>
	import { ArrowRight } from 'lucide-svelte';
	import Hero from '$lib/images/hero.png';
	import LogoCloud from '$lib/components/main/logo-cloud.svelte';
</script>

<div class="mx-auto lg:min-h-screen max-w-screen-xl px-5 py-24">
	<h1
		class="text-3xl font-extrabold tracking-tight text-black md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]"
	>
		Empowering businesses
		<br />
		with <span class="text-primary-600">seamless payroll solutions</span>
	</h1>
	<div class="my-4 max-w-lg space-y-6 text-lg leading-[1.4] text-black md:max-w-xl lg:text-xl">
		<p>
			Automate payroll processes, ensure compliance, and simplify payments with a secure, all-in-one
			platform designed to save time and reduce errors.
		</p>
	</div>
	<div class="mb-4 flex items-center gap-3">
		<button
			type="button"
			class="ease inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white duration-200 focus-within:outline-none focus-within:ring-4 focus-within:ring-primary-800 hover:bg-primary-800 hover:text-white"
		>
			Get Started
			<ArrowRight class="ms-2 size-4" />
		</button>
		<button
			type="button"
			class="ease inline-flex items-center justify-center rounded-lg border border-primary-700 px-4 py-2 text-center text-sm font-medium text-primary-700 duration-200 focus-within:outline-none focus-within:ring-4 focus-within:ring-primary-300 hover:border-primary-300 hover:bg-primary-300 hover:text-white"
			>Learn More</button
		>
	</div>
	<img src={Hero} alt="hero" />
</div>
