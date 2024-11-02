<script>
	import PricingCard from "$lib/components/shared/pricingCard.svelte";
    
</script>
<div class="py-16">
	
<div class="max-w-screen-xl mx-auto p-5 text-6xl font-bold flex justify-center ">
	Pricing Plans
</div>
<div class="max-w-screen-xl mx-auto p-2 text-lg flex justify-center">
	Choose the Plan That Fits Your Needs
</div>

<div class="max-w-screen-xl mx-auto p-5 grid grid-cols-3 divide-x divide-gray-400">
	<PricingCard CardData = {
		{
			packageName: " Free",
			price: "$0",
			description: " Up to 15 years",
			features: ["All features included" , "Community suport channel", "Multi-level permissions"],
			button: "Get Started",
			isFeaturedPrice: false
	
		}
	}/>
	<PricingCard CardData = {
		{
			packageName: " Pro",
			price: "$30 per month/dev",
			description: " Minimum $18,000 annually",
			features: ["All features included" , "Community suport channel", "Multi-level permissions", "Limited to one instance", "SDD"],
			button: "Buy Now",
			isFeaturedPrice: true

	
		}
	}/>
	<PricingCard CardData = {
		{
			packageName: " Enterprise",
			price: "Custom",
			description: " Minimum $18,000 annually",
			features: ["All features included" , "Community suport channel", "Multi-level permissions", "Limited to one instance", "SDD"],
			button: "Let's Talk",
			isFeaturedPrice: false
	
		}
	}/>
</div>
</div>


