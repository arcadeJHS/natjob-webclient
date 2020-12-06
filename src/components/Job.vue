<template>
  <li class="py-2">
    <article class="flex">
      <div class="min-w-0 relative flex-auto">
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
          <div class="flex-none w-full mt-0.5 relative">
            <dt class="inline mr-1 font-normal">Dove:</dt>
            <dd class="inline">{{ job.location }}</dd>
            <button 
              class="absolute right-0 bottom-1 text-blue-500 py-1 px-2 border border-blue-500 rounded"
              @click="toggleDetails">
              dettagli {{detailsVisible ? '-' : '+'}}
            </button>
          </div>
          
          <div v-if="detailsVisible" class="flex-none w-full mt-1 p-2 bg-gray-100 border border-blue-500 rounded whitespace-pre-line">
            {{ job.description.replaceAll('&nbsp;', ' ').replace(/[\r\n]{2,}/g, "\n") }}
          </div>
        </dl>
      </div>
    </article>
  </li>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'Job',
  props: [
    'job'
  ],
  setup() {
    const toggleDetails = () => state.detailsVisible = !state.detailsVisible;

    let state = reactive({
      detailsVisible: false,
      toggleDetails
    });

    return toRefs(state);
  }
}
</script>
