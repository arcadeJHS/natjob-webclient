<template>
  <section>
    <h2 class="border-b border-pink-500 bg-white text-pink-500 p-4 relative">
      <a class="hover:underline" :href="source.url" target="_BLANK">
        {{ source.name }}
        ({{ source.results.length }})
        <open-link-icon />
      </a>
      <div class="mt-2 flex items-center sm:mt-0 sm:absolute sm:right-0 sm:inset-y-2 sm:mr-4">
        <span v-if="source.error" class="text-red-500">Error: {{ source.error }}</span>
        <button 
          v-if="!source.error && source.results.length"
          class="bg-pink-500 text-white border border-transparent hover:bg-white hover:text-pink-500  hover:border-pink-500 px-4 py-2 rounded flex-grow"
          :class="{ 'bg-green-500': !jobsVisible, 'bg-red-500': jobsVisible }"
          @click="toggleJobsVisibility">
          {{jobsVisible ? 'nascondi' : 'mostra'}} risultati
        </button>
      </div>
    </h2>

    <ul v-if="jobsVisible" class="divide-y divide-gray-300 px-4">
      <job v-for="(job, index) in source.results" :key="job.url" :job="job" :index="Number(index+1)" />
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
