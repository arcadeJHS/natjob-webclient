<template>

  <jobs-source v-for="source in sources" :key="source.url" :source="source"></jobs-source>

</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import JobsSource from '@/components/JobsSource.vue';
import { setQueryString } from '@/utils/setQueryString.js';

export default defineComponent({
  name: 'JobsSources',
  components: {
    JobsSource
  },
  emits: [
    // so far, better to define custom events all lowercase, no hyphens
    // https://stackoverflow.com/questions/64220737/vue-3-emit-warning-extraneous-non-emits-event-listeners
    'fetchingdata'
  ],
  async setup (props, context) {
    const store = useStore();
    
    const queryString = setQueryString({ 
      location: 'Bellinzona', 
      maxDistance: 50, 
      jobKeyword: store.state.jobKeyword
    });

    const url = `${process.env.VUE_APP_API_BASE}/jobs${queryString}`;

    let state = reactive({
      sources: [],
      keyword: store.state.jobKeyword
    });
    
    const getSources = async () => {
      context.emit('fetchingdata', true);
      const data = await fetch(url, {method: 'GET'}).then(response => response.json());
      context.emit('fetchingdata', false);
      return data;
    }

    state.sources = await getSources();

    return toRefs(state);
  }
});
</script>
