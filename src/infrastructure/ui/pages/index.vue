<template>
  <NuxtLayout name="auth">
    <LoginForm @login="login" />
  </NuxtLayout>
</template>

<script setup>
import LoginForm from '~~/src/infrastructure/ui/components/form/login.vue'
import { FetchHttpClient } from '~~/src/infrastructure/http'
import { Login } from '~~/src/domain/usecases'

const http = new FetchHttpClient()
const service = new Login(http)

async function login () {
  try {
    const response = await service.perform()
    console.log('try', response)
  } catch (error) {
    console.log(error)
  }
}
</script>
