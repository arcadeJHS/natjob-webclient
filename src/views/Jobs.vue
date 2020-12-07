<template>
  <Suspense>

    <template #default>
      <jobs-sources />
    </template>

    <template #fallback>
      <div class="p-4 pt-8 text-indigo-600">
        <div class="flex flex-col items-center">
          <p>Ciao Nat, sono il tuo Koala-bot!</p>
          <div class="animate-pulse my-10">
            <p class="animate-spin text-5xl">&#128040;</p>
          </div>
          <p>Sto cercando, abbi pazienza!</p>
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
