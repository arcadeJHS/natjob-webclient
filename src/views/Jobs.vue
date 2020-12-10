<template>
  <Suspense>

    <template #default>
      <jobs-sources @fetchingdata="$emit('fetchingdata', $event)" />
    </template>

    <template #fallback>
      <div class="p-4 text-gray-600">
        <div class="flex flex-col items-center">
          <p>Nat, il tuo personal koala-bot sta cercando!</p>
          <div class="animate-pulse my-10">
            <p class="animate-spin text-5xl">&#128040;</p>
          </div>
          <p>Abbi pazienza!</p>
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
  },
  emits: [
    'fetchingdata'
  ]
};
</script>
