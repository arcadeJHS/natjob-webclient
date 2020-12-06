<template>
  <Suspense>

    <template #default>
      <jobs-sources />
    </template>

    <template #fallback>
      <div class="p-4 text-indigo-600">
        <p class="my-2">
          <span class="text-3xl relative top-1 mr-2">&#128040;</span> Ciao Nat, sono il tuo Koala-bot!
        </p>
        <span>Sto cercando, abbi pazienza!</span>
        <svg class="animate-spin h-5 w-8 text-indigo-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        
      </div>
    </template>

  </Suspense>
</template>

<script>
import JobsSources from '@/components/JobsSources.vue';

export default {
  name: 'Jobs',
  components: {
    JobsSources
  }
};
</script>
