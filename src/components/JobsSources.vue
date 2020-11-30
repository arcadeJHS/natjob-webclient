<template>

  <jobs-source v-for="source in sources" :key="source.url" :source="source"></jobs-source>

</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import JobsSource from '@/components/JobsSource.vue';
import { setQueryString } from '@/utils/setQueryString.js';

export default defineComponent({
  name: 'JobsSources',
  components: {
    JobsSource
  },
  async setup () {
    const queryString = setQueryString({ 
      location: 'Bellinzona', 
      maxDistance: 50, 
      jobKeyword: null 
    });
    const url = `${process.env.VUE_APP_API_BASE}/jobs${queryString}`;

    let state = reactive({
      sources: []
    });
    
    const getSources = async () => {
      return await fetch(url, {method: 'GET'}).then(response => response.json());
    }

    state.sources = await getSources();

    return toRefs(state);
  }
});
</script>
