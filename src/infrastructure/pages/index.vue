<template>
  <NuxtLayout name="admin">
    <Login @login="login" />
  </NuxtLayout>
</template>

<script setup>
import Login from '~~/src/infrastructure/components/login.vue'

function login () {
  console.log('deu certo')
}
</script>
