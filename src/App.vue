<template>
  <div class="bg-white text-pink-500 border-b mb-0.5 border-pink-500 py-2 px-4 flex flex-col relative">
    <div class="flex flex-row items-center">
      <span class="text-3xl mr-3">&#128040;</span>
      NAT Job App
    </div>
    <button 
      v-if="showBack" 
      class="absolute right-4 inset-y-3.5" 
      title="nuova ricerca"
      @click="newSearch">
      <back-icon />
    </button>
  </div>

  <router-view />
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
      return route.name != 'Home';
    });

    const newSearch = () => {
      store.dispatch('setJobKeyword', null);
      router.push({ path: '/' });
    }

    let state = reactive({
      showBack,
      newSearch
    });

    return toRefs(state);
  }
};
</script>
