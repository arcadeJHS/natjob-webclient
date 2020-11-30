<template>

  <jobs-source v-for="source in sources" :key="source.url" :source="source"></jobs-source>

</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import JobsSource from '@/components/JobsSource.vue';

const setQueryString = (params = {}) => {
  if (!Object.keys(params).length) {
    return '';
  }
  const query = Object.keys(params).reduce((parts, k) => {
    if (params[k]) {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`);
    }
    return parts;
  }, []);
  return `?${query.join('&')}`;  
};

export default defineComponent({
  name: 'JobsSources',
  components: {
    JobsSource
  },
  async setup () {
    const params = {
      location: 'Bellinzona',
      maxDistance: 50,
      jobKeyword: null
    };
    const queryString = setQueryString(params);
    
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
