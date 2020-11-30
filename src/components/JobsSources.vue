<template>

  <jobs-source v-for="source in sources" :key="source.url" :source="source"></jobs-source>

</template>

<script>
import { reactive, toRefs } from 'vue';
import JobsSource from '@/components/JobsSource.vue';

export default {
  name: 'JobsSources',
  components: {
    JobsSource
  },
  async setup () {
    const url = `${process.env.VUE_APP_API_BASE}/jobs`;

    let state = reactive({
      sources: []
    });
    
    const getSources = async () => {
      return await fetch(url, {method: 'GET'}).then(response => response.json());
    }

    state.sources = await getSources();

    return toRefs(state);
  }
};
</script>
