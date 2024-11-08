<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-screen-xl px-6 py-8">
	<div class="rounded-xl bg-primary-700 px-5 py-16">
		<div class="flex flex-col lg:flex-row items-center gap-3">
			<div class="w-full lg:w-3/4">
				<p class="mb-2 text-sm uppercase tracking-wide text-primary-300">Try It Now</p>
				<h2
					class="heading text-xl font-semibold tracking-tight text-white lg:max-w-[60%] lg:text-3xl"
				>
					Simplify Your Payroll Today
				</h2>
				<p class="text-neutral-200 lg:max-w-[60%] lg:text-lg mt-2">
					Experience stress-free payroll processing. Start with a free trial and see the difference.
				</p>
			</div>
			<div class="w-full lg:w-1/4">
				<Button color="light" href="http://84.247.134.126:97/subscribe/" target="_blank" size="sm">
					Try It for Free
					<ArrowRight class="ms-2 hidden size-4 lg:block" />
				</Button>
			</div>
		</div>
	</div>
</div>
