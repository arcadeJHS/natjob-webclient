<template>
  <div class="container p-4">

    <section v-for="source in sources" :key="source.url">
      <h2 class="text-lg font-semibold text-indigo-500 mb-0.5">
        <a class="underline text-indigo-500" :href="source.url" target="_BLANK">{{ source.name }}</a>
        ({{source.results.length}} annunci)
      </h2>
      <ul class="divide-y divide-gray-100">
        <li class="pt-4" v-for="job in source.results" :key="job.url">
          <article class="flex">
            <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
              <a class="underline" :href="job.url" target="_BLANK">
                <h2 class="text-lg font-semibold text-indigo-500 mb-0.5">
                  {{ job.title }}
                  <svg class="h-6 w-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </h2>
              </a>
              <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
                <div class="flex-none w-full mt-0.5">
                  <dt class="inline mr-1 font-normal">Fonte originale:</dt>
                  <dd class="inline">
                    <a class="underline text-indigo-500" :href="job.originalSourceJobs" target="_BLANK">{{ job.originalSource }}</a>
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
      sources: null
    };
  },
  mounted () {
    // test fetch
    const url = `${process.env.VUE_APP_API_BASE}/jobs`;
    
    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.sources = data);
  }
}
</script>
