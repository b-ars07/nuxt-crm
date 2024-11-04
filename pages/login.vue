<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "~/stores/authStore";

const username = ref('')
const password = ref('')
const authStore = useAuthStore()

function handleLogin() {
  authStore.login(username.value, password.value)
}
</script>

<template>
  <div class="login">
    <h1>Login to CRM</h1>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>
