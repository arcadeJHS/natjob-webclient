<template>
  <Suspense>

    <template #default>
      <jobs-sources />
    </template>

    <template #fallback>
     
      <div class="p-4 text-indigo-600">
        <div class="flex">
          <div class="flex-none w-10 relative pt-3">
            <div class="animate-pulse"><p class="animate-spin text-3xl absolute">&#128040;</p></div>
          </div>
          <div class="flex-auto my-2">
            <p> 
              Ciao Nat, sono il tuo Koala-bot!
            </p>
            <p> 
              Sto cercando, abbi pazienza!
            </p>
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
