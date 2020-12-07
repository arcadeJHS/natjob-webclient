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
        <loading-icon />
      </div>
    </template>

  </Suspense>
</template>

<script>
import JobsSources from '@/components/JobsSources.vue';
import LoadingIcon from '@/components/LoadingIcon.vue';

export default {
  name: 'Jobs',
  components: {
    JobsSources,
    LoadingIcon
  }
};
</script>
