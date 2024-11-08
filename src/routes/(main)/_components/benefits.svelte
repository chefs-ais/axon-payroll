<script>
  import { Clock, CheckCircle, DollarSign } from 'lucide-svelte';

  const benefits = [
    {
      id: 1,
      title: "Save Time",
      description: "Reduce payroll processing time by up to 80%",
      icon: Clock
    },
    {
      id: 2,
      title: "Reduce Errors",
      description: "Eliminate manual calculation mistakes",
      icon: CheckCircle
    },
    {
      id: 3,
      title: "Cost Effective",
      description: "Lower operational costs with automated processing",
      icon: DollarSign
    }
  ];
</script>

<section class="bg-gray-50 dark:bg-gray-800">
  <div class="py-12 px-6 mx-auto max-w-screen-xl sm:py-20 lg:px-8">
    <div class="mb-12 lg:mb-20 text-center">
      <h2 class="mb-6 text-3xl tracking-tight font-extrabold text-primary-700">
        Why Choose Our Payroll Solution
      </h2>
    </div>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit}
        <div class="text-center p-6 bg-white rounded-lg border dark:bg-gray-700">
          <div class="flex justify-center items-center mx-auto mb-6 w-14 h-14 rounded-full lg:h-16 lg:w-16 bg-primary-700">
            <svelte:component this={benefit.icon} class="w-8 h-8 stroke-white" />
          </div>
          <h3 class="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
          <p class="text-gray-600 dark:text-gray-300">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>