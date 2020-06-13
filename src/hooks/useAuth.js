import { ref } from '@vue/composition-api';

const useAuth = () => {
    let user = ref(null);
    let loading = ref(false);
    let error = ref(null);
    let email = ref('');
    let password = ref('');

    const login = () => {
        loading = true;
        setTimeout(() => {
            loading = false;
        }, 3000);
    }

    const logout = () => {
        
    }

    return {
        email,
        password,
        loading,
        login,
        logout
    }
}

export default useAuth;