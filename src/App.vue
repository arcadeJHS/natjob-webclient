<template>
  <div class="bg-white text-pink-500 border-b mb-0.5 border-pink-500 py-2 px-4 flex flex-col relative">
    <router-link to="/" class="flex items-center max-w-max">
      <span class="text-3xl mr-3">&#128040;</span>
      NAT Job App
    </router-link>

    <button 
      v-if="showBack" 
      class="absolute right-4 inset-y-3.5" 
      title="nuova ricerca"
      @click="newSearch">
      <back-icon />
    </button>
  </div>

  <router-view @fetchingdata="isFetchingData" />

</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BackIcon from '@/components/BackIcon.vue';

export default {
  name: 'Home',
  components: {
    BackIcon
  },
  setup () {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const showBack = computed(() => {
      return route.name != 'Home' && !state.fetchingData;
    });

    const newSearch = () => {
      store.dispatch('setJobKeyword', null);
      router.push({ path: '/' });
    }

    const isFetchingData = (status) => state.fetchingData = status;

    let state = reactive({
      showBack,
      newSearch,
      isFetchingData,
      fetchingData: false
    });

    return toRefs(state);
  }
};
</script>
