<template>
  <div class="flex flex-col items-center p-4">
    <form class="flex flex-col items-stretch w-full md:flex-row md:w-auto">
      <input 
        class="border border-gray-200 rounded p-2 mr-0 mb-2 md:mr-2 md:mb-0 md:w-60"
        type="text" 
        v-model="keyword" 
        placeholder="parola chiave" />
      <button
        type="submit" 
        class="bg-pink-500 text-white border border-transparent hover:bg-white hover:text-pink-500  hover:border-pink-500 px-4 py-2 rounded"
        @click="search">
        Cerca
      </button>
    </form>
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
