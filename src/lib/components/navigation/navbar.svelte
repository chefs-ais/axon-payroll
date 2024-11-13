<script>
	import Logo from '$lib/images/ap-logo.png';
	import { ArrowRight, Menu } from 'lucide-svelte';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<header class="sticky top-0 w-full bg-white z-50">
	<Navbar class="max-w-screen-xl mx-auto">
		<NavBrand href="/">
			<img src={Logo} class="w-[100px] lg:w-[120px]" alt="Axon Payroll Logo" />
		</NavBrand>
		<div class="flex md:order-2">
			<Button size="sm" href="http://84.247.134.126:97/subscribe/"
				>Get started <ArrowRight class="hidden size-4 lg:block" /></Button
			>
			<NavHamburger />
		</div>
		<NavUl>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="http://84.247.134.126:97/auth/login/">Login</NavLi>
		</NavUl>
	</Navbar>
</header>
