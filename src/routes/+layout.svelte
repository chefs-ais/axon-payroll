<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
import '../app.css';
	let { children } = $props();
</script>

<Navbar/>
{@render children()}
