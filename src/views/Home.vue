<template>
  <div id="home">
      <template v-if="user">
        <user-profile />
      </template>
      <template v-else>
        <login-form />
      </template>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm';
  import UserProfile from '@/components/UserProfile';
  import useAuth from '@/hooks/useAuth';

  export default {
    components: {
      LoginForm,
      UserProfile
    },

    setup() {
      const { user } = useAuth();

      return {
        user
      }
    }
  }
</script>
