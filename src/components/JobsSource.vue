<template>
  <section>
    <h2 class="text-lg font-semibold border-b border-green-500 text-indigo-800 p-4 relative">
      <a class="hover:underline" :href="source.url" target="_BLANK">
        {{ source.name }}
        ({{ source.results.length }})
        <open-link-icon />
      </a>
      <div class="mt-2 flex items-center sm:mt-0 sm:absolute sm:right-0 sm:inset-y-2 sm:mr-4">
        <span v-if="source.error" class="text-red-500">Error: {{ source.error }}</span>
        <button 
          v-if="!source.error && source.results.length"
          class="hover:bg-blue-500 text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded flex-grow"
          :class="{ 'bg-green-500': !jobsVisible, 'bg-red-500': jobsVisible }"
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
