<template>
  <section>
    <h2 class="text-lg font-semibold bg-blue-600 text-white p-4 relative mb-0.5">
      <a class="hover:underline" :href="source.url" target="_BLANK">
        {{ source.name }}
        ({{ source.results.length }})
        <open-link-icon />
      </a>
      <div class="mt-2 flex items-center sm:mt-0 sm:absolute sm:right-0 sm:inset-y-2 sm:mr-4">
        <button 
          class="hover:bg-blue-500 text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex-grow bg-green-500"
          @click="toggleJobsVisibility">
          {{jobsVisible ? 'nascondi' : 'mostra'}} risultati
        </button>
      </div>
    </h2>

    <ul v-if="jobsVisible" class="divide-y divide-gray-200 px-4">
      <job v-for="job in source.results" :key="job.url" :job="job" />
    </ul>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Job from '@/components/Job.vue';
import OpenLinkIcon from '@/components/OpenLinkIcon.vue';

export default {
  name: 'JobsSource',
  components: {
    Job,
    OpenLinkIcon
  },
  props: [
    'source'
  ],
  setup() {
    const toggleJobsVisibility = () => state.jobsVisible = !state.jobsVisible;

    let state = reactive({
      jobsVisible: false,
      toggleJobsVisibility
    });

    return toRefs(state);
  }
}
</script>
