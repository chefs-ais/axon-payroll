<script>
	import PaygradeView from '$lib/images/paygrade-macbook.png';
	import PayRollRun from '$lib/images/payroll-run.png';
	import Calculator from '$lib/images/calculator.png';
</script>

<section class="mx-auto max-w-screen-xl px-5 py-24">
	<div class="flex flex-col items-center gap-5 lg:flex-row">
		<div class="w-full lg:w-1/2">
			<h2 class="text-xl font-semibold lg:text-3xl">
				All your payment and cash flow needs, handled effortlessly.
			</h2>
			<p class="mt-2 text-neutral-500 lg:text-lg">
				Take the stress out of managing payments and cash flow with an all-in-one solution designed
				to keep your finances organized and under control. From seamless payment processing to
				real-time cash flow tracking, we handle the details so you can focus on what you do
				best—running and growing your business with confidence.
			</p>
		</div>
		<div class="w-full lg:w-1/2">
			<img
				src={PaygradeView}
				alt="pay with a click"
				class="mx-auto max-h-[550px] rounded-xl object-cover"
			/>
		</div>
	</div>
	<div class="mt-12">
		<h2 class="text-xl font-semibold lg:text-3xl">Your all-in-one Global Payroll Platform.</h2>
		<br />
		<div class="grid grid-cols-5 gap-8">
			<div
				class="col-span-5 max-h-[500px] rounded-md bg-[#f9f9f9] px-5 pt-12 text-primary-700 lg:col-span-3"
			>
				<div class="mb-8">
					<h2 class="text-md font-semibold lg:text-lg">Pay anyone, anywhere in minutes</h2>
					<p class="text-black">
						Automated global payroll that keeps your team paid on time, every time. Compliant,
						secure, and hassle-free.
					</p>
				</div>
				<img src={PayRollRun} alt="" />
			</div>
			<div
				class="col-span-5 max-h-[500px] rounded-md bg-[#f9f9f9] px-5 text-primary-700 lg:col-span-2"
			>
				<img src={Calculator} alt="" />
				<div class="mt-8">
					<h2 class="text-md font-semibold lg:text-lg">Pay anyone, anywhere in minutes</h2>
					<p class="text-black">
						Automated global payroll that keeps your team paid on time, every time. Compliant,
						secure, and hassle-free.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
