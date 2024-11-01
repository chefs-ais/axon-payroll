<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import '../app.css';
	import 'lenis/dist/lenis.css';
	import Footer from '$lib/components/navigation/footer.svelte';
	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<Navbar />
{@render children()}
<Footer/>
