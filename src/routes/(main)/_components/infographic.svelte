<script>
    const stats = [
      { number: "99%", description: "Accuracy Rate" },
      { number: "50%", description: "Time Saved" },
      { number: "1000+", description: "Happy Clients" },
      { number: "24/7", description: "Support Available" }
    ];
  </script>
  
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 dark:text-gray-400">
        {#each stats as stat}
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              {stat.number}
            </dt>
            <dd class="text-xl font-normal text-gray-500 dark:text-gray-400">
              {stat.description}
            </dd>
          </div>
        {/each}
      </div>
    </div>
  </section>