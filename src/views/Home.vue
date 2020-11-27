<template>
  <div>

    <div v-if="loading" class="p-4">
      <svg class="animate-spin h-5 w-5 text-indigo-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="pl-2 text-indigo-600">Loading...</span>
    </div>

    <section v-for="source in sources" :key="source.url">
      <h2 class="text-lg font-semibold bg-indigo-800 text-white p-4">
        <a class="hover:underline" :href="source.url" target="_BLANK">
          {{ source.name }}
          ({{source.results.length}} annunci)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 inline">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </h2>
      <ul class="divide-y divide-gray-100 pl-4">
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

  </div>
</template>

<script>
/**
 * Filtri da implementare:
 * - visualizza ultimi n giorni
 * - mansione
 * - località
 */
export default {
  name: 'Home',
  data () {
    return {
      sources: null,
      loading: false
    };
  },
  mounted () {
    const url = `${process.env.VUE_APP_API_BASE}/jobs`;
    
    this.loading = true;

    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        this.loading = false;
        this.sources = data;
      });
  }
}
</script>
