<template>
  <div class="flex flex-col items-center px-4 py-8">
    <div class="flex flex-col items-stretch w-full md:flex-row md:w-auto">
      <input 
        class="border border-gray-200 rounded p-2 mr-0 mb-2 md:mr-2 md:mb-0 md:w-60"
        type="text" 
        v-model="keyword" 
        placeholder="parola chiave" />
      <button 
        class="hover:bg-blue-500 text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded bg-green-500"
        @click="search">
        Cerca
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup () {
    const store = useStore();
    const router = useRouter();

    const search = () => {
      store.dispatch('setJobKeyword', state.keyword);
      router.push({ path: '/jobs' });
    }

    let state = reactive({
      keyword: null,
      search
    });

    return toRefs(state);
  }
};
</script>
