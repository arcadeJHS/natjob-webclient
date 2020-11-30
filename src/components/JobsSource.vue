<template>
  <section>
    <h2 class="text-lg font-semibold bg-blue-600 text-white p-4 relative">
      <div class="md:absolute right-0 inset-y-0 mr-4 flex items-center">
        <button 
          class="hover:bg-blue-500 text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          @click="toggleJobsVisibility">
          {{jobsVisible ? 'nascondi' : 'mostra'}} risultati
        </button>
      </div>
      <a class="hover:underline" :href="source.url" target="_BLANK">
        {{ source.name }}
        ({{source.results.length}} annunci)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 inline">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    </h2>
    <ul v-if="jobsVisible" class="divide-y divide-gray-100 pl-4">
      <li class="py-2" v-for="job in source.results" :key="job.url">
        <article class="flex">
          <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <a class="hover:underline" :href="job.url" target="_BLANK">
              <h2 class="text-indigo-800 mb-0.5 inline">
                <span class="font-semibold">{{ job.title }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 inline">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </h2>
            </a>
            <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
              <div class="flex-none w-full mt-0.5">
                <dt class="inline mr-1 font-normal">Fonte originale:</dt>
                <dd class="inline">
                  <a class="text-indigo-600 hover:underline" :href="job.originalSourceJobs" target="_BLANK">
                    {{ job.originalSource }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 inline">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  </dd>
              </div>
              <div class="flex-none w-full mt-0.5">
                <dt class="inline mr-1 font-normal">Pubblicato il:</dt>
                <dd class="inline">{{ new Date(job.publicationDate).toLocaleDateString('it-IT') }}</dd>
              </div>
              <div class="flex-none w-full mt-0.5">
                <dt class="inline mr-1 font-normal">Dove:</dt>
                <dd class="inline">{{ job.location }}</dd>
              </div>
              <!--
              <div class="flex-none w-full mt-0.5">
                <dt class="inline mr-1 font-normal">Dettagli:</dt>
                <dd class="inline">{{ job.description }}</dd>
              </div>
              -->
            </dl>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'JobsSource',
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
