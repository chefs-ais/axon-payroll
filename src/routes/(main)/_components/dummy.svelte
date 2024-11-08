<script>
	import Hero from '$lib/images/hero.png';
	import { Button } from 'flowbite-svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="mx-auto h-full max-w-screen-xl px-5 py-24">
	<h1
		class="heading text-3xl font-extrabold tracking-tighter text-black md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]"
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
		<Button size="sm">
			Get Started
			<ArrowRight class="ms-2 size-4" />
		</Button>
		<Button size="sm" color="light">Learn More</Button>
	</div>
	<img src={Hero} alt="hero" class="rounded-xl border-2 bg-[#fefefe] p-0.5" />
</div>
