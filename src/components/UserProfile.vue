<template>
    <div id="user-profile">
        <h2 class="text-center">Welcome!</h2>
        <p class="text-center">
            Name: {{ user.name }}
        </p>
        <p class="text-center">
            Email: {{ user.email }}
        </p>
    </div>
</template>

<script>
    import { computed } from '@vue/composition-api';
    import useAuth from '@/hooks/useAuth';

    export default {
        setup() {
            const { user } = useAuth();

            return {
                user: computed(() => user.value)
            }
        }
    }
</script>

<style>
    #user-profile {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

    .text-center {
        text-align: center;
    }
</style>