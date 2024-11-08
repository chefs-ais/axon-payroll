<script>
	import PaygradeView from '$lib/images/paygrade-macbook.png';
	import PayRollRun from '$lib/images/payroll-run.png';
	import Calculator from '$lib/images/calculator.png';
</script>

<section class="mx-auto max-w-screen-xl px-5 py-24">
	<div>
		<h1 class="text-2xl font-extrabold tracking-tight text-primary-700 lg:text-3xl mb-3">
			Your all-in-one Global Payroll Platform
		</h1>
		<div class="grid grid-cols-5 gap-8 lg:gap-5">
			<div
				class="col-span-5 max-h-[550px] rounded-lg bg-[#edfafa] px-5 pt-12 text-primary-700 lg:col-span-3"
			>
				<div class="mb-8">
					<h2 class="text-md font-bold lg:text-xl">
						Global Payroll, Simplified
					</h2>
					<p class="text-black">
						Seamlessly manage payroll for teams across borders, with full compliance and secure
						transactions—all from one platform.
					</p>
				</div>
				<img src={PayRollRun} alt="create payroll" />
			</div>
			<div
				class="col-span-5 max-h-[550px] rounded-lg bg-[#edf2fa] px-5 text-primary-700 lg:col-span-2"
			>
				<img src={Calculator} alt="calculate PAYE and SSNIT" />
				<div class="my-8">
					<h2 class="text-md font-bold lg:text-lg">
						Automate Payroll for Your Global Workforce
					</h2>
					<p class="text-black">
						Automated global payroll that keeps your team paid on time, every time. Compliant,
						secure, and hassle-free.
					</p>
				</div>
			</div>
			<div
				class="col-span-5 max-h-[550px] rounded-lg bg-[#ecf8ef] px-5 text-primary-700 lg:col-span-2"
			>
				<img src={Calculator} alt="calculate PAYE and SSNIT" />
				<div class="my-8">
					<h2 class="text-md font-bold lg:text-lg">
						Stay Compliant Anywhere, Anytime
					</h2>
					<p class="text-black">
						Our platform keeps you compliant with local regulations, tax requirements, and labor
						laws, giving you peace of mind and saving valuable time.
					</p>
				</div>
			</div>
			<div
				class="col-span-5 max-h-[550px] rounded-lg bg-[#fff4ea] px-5 pt-12 text-primary-700 lg:col-span-3"
			>
				<div class="mb-8">
					<h2 class="text-md font-bold lg:text-lg">
						Insight-Driven Payroll for Smarter Decisions
					</h2>
					<p class="text-black">
						Gain full visibility with real-time analytics and reports that help you make informed
						decisions and optimize payroll for maximum efficiency.
					</p>
				</div>
				<img src={PayRollRun} alt="create payroll" />
			</div>
		</div>
	</div>
</section>
