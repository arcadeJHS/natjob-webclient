<template>
  <Suspense>

    <template #fallback>
      <jobs-sources />
    </template>

    <template #default>
     
      <div class="p-4 text-indigo-600">
        <div class="flex flex-col items-center">
          <p>Ciao Nat, sono il tuo Koala-bot!</p>
          <p>Sto cercando, abbi pazienza!</p>
          <div class="animate-pulse mt-10">
            <p class="animate-spin text-5xl">&#128040;</p>
          </div>
        </div>
        
        
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
