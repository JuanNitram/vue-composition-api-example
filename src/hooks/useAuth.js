import { ref, computed } from '@vue/composition-api';
import { state, setLoading, setUser } from '@/store/index';
import ApiClient from '@/api/ApiClient';

const useAuth = () => {
    let email = ref('');
    let password = ref('');

    const login = () => {
        setLoading(true);

        new ApiClient().post('http://laravel-api-boilerplate.test/api/login', {
            email: email.value,
            password: password.value
        }).then(({ data }) => {
            if (data.success === true) {
                setUser(data.data.user);
            }
        }).finally(() => {
            setLoading(false)
        });
    }

    const logout = () => {

    }

    return {
        login,
        logout,
        loading: computed(() => state.value.loading),
        user: computed(() => state.value.user),
        email,
        password
    }
}

export default useAuth;