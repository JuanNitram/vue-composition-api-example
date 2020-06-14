import { ref, computed } from '@vue/composition-api';
import { state, setLoading } from '@/store/index';

const useAuth = () => {
    let email = ref('');
    let password = ref('');

    const login = () => {
        console.log(`Login ${email.value} ${password.value}`);

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    const logout = () => {

    }

    return {
        login,
        logout,
        loading: computed(() => state.value.loading),
        email,
        password
    }
}

export default useAuth;