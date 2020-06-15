import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { ref } from '@vue/composition-api';

Vue.use(VueCompositionApi);

const state =  ref({
    loading: false,
    user: null
});

const setLoading = (loading) => { state.value.loading = loading };

const setUser = (user) => {console.log(state); state.value.user = user };

export {
    setLoading,
    setUser,
    state
}