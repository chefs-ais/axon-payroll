<script>
	import Feature1Img from '$lib/images/features-1.jpg';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-screen-xl px-6 py-16">
	<div class="relative col-span-3 rounded-xl lg:col-span-2">
		<div
			class="ease absolute inset-0 top-0 flex cursor-pointer items-end rounded-xl bg-black/60 p-5 text-white"
		>
			<div class="pb-5">
				<h2 class="text-xl font-semibold lg:text-3xl">Simplify Your Payroll Today</h2>
				<p class="mt-2 text-neutral-200 lg:text-lg">
					Experience stress-free payroll processing. Start with a free trial and see the difference.
				</p>
				<br />
				<a href="http://84.247.134.126:97/subscribe/" target="_blank">
					<button
						type="button"
						class="ease inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-primary-700 duration-200 focus-within:outline-none focus-within:ring-4 focus-within:ring-[#f5f5f5] hover:bg-[#f5f5f5]"
					>
						Try It for Free
						<ArrowRight class="ms-2 hidden size-4 lg:block" />
					</button>
				</a>
			</div>
		</div>
		<img
			src={Feature1Img}
			alt="pay with a click"
			class="max-h-[550px] w-full rounded-xl object-cover"
		/>
	</div>
</div>
