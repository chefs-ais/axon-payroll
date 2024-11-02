<script>
	import Logo from '$lib/images/ap-logo.png';
	import { ArrowRight, Menu } from 'lucide-svelte';
</script>

<nav class="sticky top-0 h-full w-full bg-white">
	<div class="mx-auto h-full max-w-screen-xl p-5">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div>
				<a href="/"> <img src={Logo} alt="axon-payroll-logo" class="w-[100px] lg:w-[120px]" /></a>
			</div>
			<!-- Navigation Links: Web -->
			<div class="flex items-center gap-5 text-white">
				<!-- Todo: use #each -->
				<a
					href="https://www.axoninfosystems.com"
					class="hover:text-ap-gold-base hidden text-sm font-semibold text-primary-700 hover:underline lg:block"
					target="_blank">Features</a
				>
				<a
					href="https://www.axoninfosystems.com"
					class="hover:text-ap-gold-base hidden text-sm font-semibold text-primary-700 hover:underline lg:block"
					target="_blank">Products</a
				>
				<a
					href="https://www.axoninfosystems.com"
					class="hover:text-ap-gold-base hidden text-sm font-semibold text-primary-700 hover:underline lg:block"
					target="_blank">Company</a
				>
				<a
					href="/pricing"
					class="hover:text-ap-gold-base hidden text-sm font-semibold text-primary-700 hover:underline lg:block"
					target="_blank">Pricing</a
				>
				<div class="hidden h-4 border-[0.5px] border-neutral-200 lg:block"></div>
				<a
					href="http://84.247.134.126:97/auth/login/"
					class="hover:text-ap-gold-base text-sm font-semibold text-primary-700 hover:underline"
					target="_blank">Login</a
				>
				<a href="http://84.247.134.126:97/subscribe/" target="_blank">
					<button
						type="button"
						class="ease inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white duration-200 focus-within:outline-none focus-within:ring-4 focus-within:ring-primary-800 hover:bg-primary-800 hover:text-white"
					>
						Get Started
						<ArrowRight class="ms-2 hidden size-4 lg:block" />
					</button>
				</a>
				<button class="lg:hidden">
					<Menu class="size-8 stroke-primary-700" />
				</button>
			</div>
		</div>
	</div>
</nav>
