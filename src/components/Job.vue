<template>
  <li class="py-2">
    <article class="flex">
      <div class="min-w-0 relative flex-auto">
        <a class="hover:underline" :href="job.url" target="_BLANK">
          <h2 class="text-indigo-800 mb-0.5 inline">
            <span class="font-semibold">{{ index }} - {{ job.title }}</span>
            <open-link-icon />
          </h2>
        </a>
        <dl class="flex flex-wrap text-sm font-medium whitespace-pre text-gray-600">
          <div class="flex-none w-full mt-0.5">
            <dt class="inline mr-1 font-normal">Fonte originale:</dt>
            <dd class="inline">
              <a v-if="job.originalSourceJobsUrl && job.originalSource" class="text-indigo-800 hover:underline" :href="job.originalSourceJobsUrl" target="_BLANK">
                {{ job.originalSource }}
                <open-link-icon />
              </a>
              <span v-if="!job.originalSourceJobsUrl && job.originalSource">{{ job.originalSource }}</span>
              <span v-else>n/a</span>
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
              v-if="job.description"
              class="absolute right-0 bottom-1 text-gray-400 py-1 px-2 border border-gray-300 rounded hover:text-pink-500 hover:border-pink-500"
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
import OpenLinkIcon from '@/components/OpenLinkIcon.vue';

export default {
  name: 'Job',
  components: {
    OpenLinkIcon
  },
  props: [
    'job',
    'index'
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
