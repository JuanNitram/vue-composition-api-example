import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { ref } from '@vue/composition-api';

Vue.use(VueCompositionApi);

const state =  ref({
    loading: false
});

const setLoading = (loading) => { state.value.loading = loading }

export { setLoading, state }