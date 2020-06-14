<template>
  <div id="app">
    <template v-if="loading === true">
      <span>Loading...</span>
    </template>

    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import { state } from '@/store/index';

  export default {
    setup() {
      return {
        loading: computed(() => state.value.loading)
      }
    }
  }
</script>
