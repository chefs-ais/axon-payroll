<script lang="ts">

    import {ArrowDownRight} from "lucide-svelte"
    type CardDataProps = {
        packageName : string,
        price: string,
        description: string,
        features: string[],
        button: string,
        isFeaturedPrice: Boolean
    }
    export let CardData: CardDataProps 
</script>

<div class="text-black rounded-sm  shadow-gray-500 mt-12 col-span-1 p-8 ">
    <h1 class="font-bold text-4xl">{CardData.packageName}</h1>
    <h2 class="font-bold text-xl pt-4">{CardData.price}</h2>
    <h3>{CardData.description}</h3>
   
    <h2 class="font-bold pt-12 ">What's included</h2>
    
    <div class="pt-2">
        {#each CardData.features as feature}
        <div class="flex items-center gap-2">
           <ArrowDownRight class="w-4 h-4"/> <p>{feature}</p>

        </div>
        {/each}
    </div>
    <button class={CardData.isFeaturedPrice ? "bg-primary-600 rounded-full mt-6 p-2 text-white w-full hover:bg-primary-500  ": "border border-primary-700 rounded-full mt-6 p-2 w-full  hover:bg-primary-50/50"}>
        {CardData.button}
    </button>
</div>