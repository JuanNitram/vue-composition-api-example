<template>
    <div class="form-wrapper">
        <form id="login-form" @submit.prevent="login">
            <label for="email">Email</label>
            <input v-model="email" name="email" type="email" required/>

            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" required/>

            <button id="submit-form" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import useAuth from '@/hooks/useAuth';

    export default {
        setup() {
            const { login, email, password } = useAuth();

            return {
                login,
                email,
                password,
            };
        }
    }
</script>

<style>
    #login-form {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

    #login-form input {
        display: block;
        width: auto;
        margin-bottom: 1rem;
    }

    .form-wrapper {
        display: flex;
        justify-content: center;
    }

    #submit-form {
        width: 100%;
    }
</style>